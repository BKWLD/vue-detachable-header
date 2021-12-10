<!-- Apply fixed behavior when scrolling up -->

<template lang='pug'>

.detachable-header(:style='styles' :class='classes'): slot

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:

		# The height of the header
		height: Number

		# The distance the header is from the true top of the page. This would be
		# non-zero when there is some UI that renders above the head, like an
		# alert banner bar.
		offset:
			type: Number
			default: 0

		# If false, the offset is assumed to be static, like when a notification
		# bar is unffected by scrolling.  If true, the offset is removed when in
		# detached state.
		noOffsetWhenDetached: Boolean

		# Show the background color regardless of scroll position
		forceBackground: Boolean

		# Show the header, regardless of scroll position
		forceReveal: Boolean

		# What type of transition is done when revealing the bar when down the page
		revealTransition:
			type: String
			default: 'translate'
			validator: (val) -> val in ['fade', 'translate']

		# Pass in a scroll value, like if using smooth scroller
		scroll: Number

		# When the bar is detached and revealed, this is the distance you must
		# scroll down to hide the bar.  Larger values help prevent the user from
		# accidentally hiding the bar when interacting with subnavs.
		closeOnScrollThreshold:
			type: Number
			default: 0

	data: ->
		scrollingUp: false
		windowScroll: 0
		isDetached: false
		disableTopTween: false
		scrollYOnScrollDownStart: 0

	# Add scroll listners
	mounted: ->
		if @usesWindowScroll
		then window.addEventListener 'scroll', @onScroll
	destroyed: ->
		if @usesWindowScroll
		then window.removeEventListener 'scroll', @onScroll

	computed:

		# Is the scroll value being passed in
		usesWindowScroll: -> @scroll == undefined

		# Get the scrollY from the proper source
		scrollY: -> if @usesWindowScroll then @windowScroll else @scroll

		# When doing the initial scroll down from the top
		translateOffset: -> switch

			# Scrolling up after having fully scrolled past
			when @scrollingUp and @isDetached then 0

			# When forced to reveal itself
			when @forceReveal then 0

			# Since we're fading to reveal, don't offset the transform
			when @scrolledPast and @revealTransition == 'fade' then 0

			# When scrolling down from top, shift off screen equally until scrolled
			# past
			when not @scrolledPast then -1 * @scrollY

			# When detached and revealed, show
			when @isDetached and @revealed then 0

			# Else, hide
			else -1 * @height

		# Has the scroll moved past the header
		scrolledPast: -> @scrollY > @height + @offset

		# Fade in the header when we would show it after scrolling past it's height
		revealed: ->

			# When scrolling up always show
			return true if @scrollingUp

			# When scrolling down and detached, wait closeOnScrollThreshold before
			# hiding
			scrollDistanceSinceReveal = Math.abs @scrollY - @scrollYOnScrollDownStart
			return true if !@scrollingUp and @isDetached and
				scrollDistanceSinceReveal < @closeOnScrollThreshold

			# When at top, show.  Else hide.
			return !@scrolledPast

		# At the top of of the page.
		atScrollTop: ->
			if @noOffsetWhenDetached
			then @scrollY <= @offset
			else @scrollY == 0

		# Can be used to add a background color when down the page
		showBackground: -> switch

			# We're forcing the background to be shown
			when @forceBackground then true

			# We've scroll past so add class no so it doesn't tween on the first
			# detaching moment
			when @scrolledPast then true

			# We're scrolling up after having scroll past the header and we're not
			# actually at the very top of the page.
			when @isDetached and not @atScrollTop then true

		# The top position of the bar, which is affected by the offset prop. This
		# is used to make room for notifcation bars
		topPosition: ->

			# Even when scrolling, bar should be offset
			return @offset unless @noOffsetWhenDetached

			# The bar starts off offset but shifts up on scroll. Thus, when in a
			# detached state, header should pin to top. Otherwise, like when at top
			# of the page, the offset pushes the header down.
			if @isDetached then 0 else @offset

		# Build CSS
		styles: ->
			transform: "translateY(#{@translateOffset}px)"
			top: "#{@topPosition}px"
			opacity: if @revealed or @revealTransition != 'fade' then 1 else 0
			height: "#{@height}px"
		classes: -> [
			"reveal-#{@revealTransition}"
			'tween-reveal': @isDetached
			'show-background': @showBackground
			'disable-top-tween': @disableTopTween
		]

	watch:

		# Figure out scroll direction
		scrollY: (now, old) -> @scrollingUp = now != 0 and now < old

		scrollingUp: ->

			# Don't allow tweening of the header until the first scroll up. This is
			# done to prevent a tween happening when the user first scrolls past the
			# header height
			@isDetached = true if @scrollingUp and @scrolledPast

			# When header is detached and we start scrolling down, save scrollY value
			@scrollYOnScrollDownStart = @scrollY if @isDetached and !@scrollingUp

		# Tween when forced and clear when no longer forced if already at the top
		forceReveal: (bool) ->
			if @forceReveal then @isDetached = true
			else if @atScrollTop then @isDetached = false

		atScrollTop: ->

			# When the user returns to the top, reset the tweening
			@isDetached = false if @atScrollTop

			# Emit event so the parent can use atScrollTop for styles or logic
			@$emit 'atScrollTop', @atScrollTop

		# Disable the transition on top when switching between isDetached states.
		# Normally we want to allow top tweens, like if a notification bar height
		# changes.  However, in the moment when we're scrolling back to the top of
		# the page, we instantaneously reset the top but don't want to animate it.
		isDetached: ->
			@disableTopTween = true
			setTimeout (=> @disableTopTween = false), 0

	methods:

		# Store scroll variables
		onScroll: -> @windowScroll = window.scrollY

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// The speed of transitions, this looks best when fast
duration = 0.2s

.detachable-header

	// Overlap
	position fixed
	width 100%
	z-index 10
	top 0
	left 0

	// Base transition rules
	transition-property background, top
	transition-duration duration

	// Don't tween `top` when it changes as a result of reaching the top of the
	// page
	&.disable-top-tween
		transition-property background

// When tweening the veal, apply these rules
.tween-reveal
	&.reveal-translate
		transition-property transform, background, top
	&.reveal-fade
		transition-property opacity, background, top

</style>
