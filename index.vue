<!-- Apply fixed behavior when scrolling up -->

<template lang='pug'>

.affixing-header(:style='styles' :class='classes'): slot

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:

		# The distance the header is from the true top of the page. This would be
		# non-zero when there is some UI that renders above the head, like an
		# alert banner bar.
		offset:
			type: Number
			default: 0

		# If false, the offset is assumed to be static, like when a notification
		# bar is unffected by scrolling.  If true, the offset is affected by scroll,
		# like a notification bar that scrolls off the page.
		offsetScrolls: Boolean

		# The height of the affixing header
		height: Number

		# Show the background color regardless of scroll position
		forceBackground: Boolean

		# Show the header, regardless of scroll position
		forceReveal: Boolean

		# What type of transition is done when revealing the bar when down the page
		revealTransition:
			type: String
			default: 'translate'
			validator: (val) -> val in ['fade', 'translate']

	data: ->
		scrollingUp: false
		scrollY: 0
		tweenReveal: false
		disableTopTween: false

	# Add scroll listners
	mounted: -> window.addEventListener 'scroll', @onScroll
	destroyed: -> window.removeEventListener 'scroll', @onScroll

	computed:

		# When doing the initial scroll down from the top
		translateOffset: -> switch

			# Scrolling up after having fully scrolled past
			when @scrollingUp and @tweenReveal then 0

			# When forced to reveal itself
			when @forceReveal then 0

			# Since we're fading to reveal, don't offset the transform
			when @scrolledPast and @revealTransition == 'fade' then 0

			# When scrolling down, shift off screen equally until scrolled past
			else -1 * Math.min @height + @offset, @scrollY

		# Has the scroll moved past the header
		scrolledPast: -> @scrollY > @height + @offset

		# Fade in the header when we would show it after scrolling past it's height
		revealed: -> @scrollingUp or not @scrolledPast

		# At the top of of the page. When the offset isn't reserved (when it
		# scrolls), we treat being inside of that offset as the top.
		atScrollTop: ->
			if @offsetScrolls
			then @scrollY <= @offset
			else @scrollY == 0

		# Can be used to add a background color when down the page
		showBackground: -> switch

			# We're forcing the background to be shown
			when @forceBackground then true

			# We're scrolling up after having scroll past the header and we're not
			# actually at the very top of the page.
			when @tweenReveal and not @atScrollTop then true

		# The top position of the bar, which is affected by the offset prop. This
		# is used to make room for notifcation bars
		topPosition: ->

			# Even when scrolling, bar should be offset
			return @offset unless @offsetScrolls

			# The bar starts off offset but shifts up on scroll. Thus, when tweeing
			# reveal (aka, down the page), pin to top.  Otherwise, like when at top
			# of the page, apply the offset
			if @tweenReveal then 0 else @offset

		# Build CSS
		styles: ->
			transform: "translateY(#{@translateOffset}px)"
			top: "#{@topPosition}px"
			opacity: if @revealed or @revealTransition != 'fade' then 1 else 0
			height: "#{@height}px"
		classes: -> [
			"reveal-#{@revealTransition}"
			'tween-reveal': @tweenReveal
			'show-background': @showBackground
			'disable-top-tween': @disableTopTween
		]

	watch:

		# Don't allow tweening of the header until the first scroll up. This is
		# done to prevent a tween happening when the user first scrolls past the
		# header height
		scrollingUp: -> @tweenReveal = true if @scrollingUp and @scrolledPast

		# Tween when forced and clear when no longer forced if already at the top
		forceReveal: (bool) ->
			if @forceReveal then @tweenReveal = true
			else if @atScrollTop then @tweenReveal = false

		# When the user returns to the top, reset the tweening
		atScrollTop: -> @tweenReveal = false if @atScrollTop

		# Disable the transition on top when switching between tweenReveal states.
		# Normally we want to allow tweens on top for switching between different
		# top values, like if a notification bar height changes.  However, in the
		# moment when we're scrolling back to the top of the page, we instantiously
		# reset the top but don't want to animate it.
		tweenReveal: ->
			@disableTopTween = true
			setTimeout (=> @disableTopTween = false), 0

	methods:

		# Store scroll variables
		onScroll: ->
			now = window.scrollY
			@scrollingUp = now != 0 and now < @scrollY
			@scrollY = now

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// The speed of transitions, this looks best when fast
duration = 0.2s

.affixing-header

	// Overlap
	position fixed
	width 100%
	z-index 10
	top 0
	left 0

	// Base transition rules
	transition-property background, top
	transition-duration duration

	// If the offset scrolls, then don't transition the top since the value
	// may change as teh user scrolls
	&.disable-top-tween
		transition-property background

// When tweening the veal, apply these rules
.tween-reveal
	&.reveal-translate
		transition-property transform, background, top
	&.reveal-fade
		transition-property opacity, background, top

</style>
