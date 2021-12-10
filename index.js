module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6de5ab34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6de5ab34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6de5ab34_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6de5ab34&scoped=true&lang=pug&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "detachable-header", class: _vm.classes, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./index.vue?vue&type=template&id=6de5ab34&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=coffee&
/* harmony default export */ var lib_vue_loader_options_indexvue_type_script_lang_coffee_ = ({
  props: {
    // The height of the header
    height: Number,
    // The distance the header is from the true top of the page. This would be
    // non-zero when there is some UI that renders above the head, like an
    // alert banner bar.
    offset: {
      type: Number,
      default: 0
    },
    // If false, the offset is assumed to be static, like when a notification
    // bar is unffected by scrolling.  If true, the offset is removed when in
    // detached state.
    noOffsetWhenDetached: Boolean,
    // Show the background color regardless of scroll position
    forceBackground: Boolean,
    // Show the header, regardless of scroll position
    forceReveal: Boolean,
    // What type of transition is done when revealing the bar when down the page
    revealTransition: {
      type: String,
      default: 'translate',
      validator: function (val) {
        return val === 'fade' || val === 'translate';
      }
    },
    // Pass in a scroll value, like if using smooth scroller
    scroll: Number,
    // When the bar is detached and revealed, this is the distance you must
    // scroll down to hide the bar.  Larger values help prevent the user from
    // accidentally hiding the bar when interacting with subnavs.
    closeOnScrollThreshold: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      scrollingUp: false,
      windowScroll: 0,
      isDetached: false,
      disableTopTween: false,
      scrollYOnScrollDownStart: 0
    };
  },
  // Add scroll listners
  mounted: function () {
    if (this.usesWindowScroll) {
      return window.addEventListener('scroll', this.onScroll);
    }
  },
  destroyed: function () {
    if (this.usesWindowScroll) {
      return window.removeEventListener('scroll', this.onScroll);
    }
  },
  computed: {
    // Is the scroll value being passed in
    usesWindowScroll: function () {
      return this.scroll === void 0;
    },
    // Get the scrollY from the proper source
    scrollY: function () {
      if (this.usesWindowScroll) {
        return this.windowScroll;
      } else {
        return this.scroll;
      }
    },
    // When doing the initial scroll down from the top
    translateOffset: function () {
      switch (false) {
        // Scrolling up after having fully scrolled past
        case !(this.scrollingUp && this.isDetached):
          return 0;
        // When forced to reveal itself

        case !this.forceReveal:
          return 0;
        // Since we're fading to reveal, don't offset the transform

        case !(this.scrolledPast && this.revealTransition === 'fade'):
          return 0;
        // When scrolling down from top, shift off screen equally until scrolled
        // past

        case !!this.scrolledPast:
          return -1 * this.scrollY;
        // When detached and revealed, show

        case !(this.isDetached && this.revealed):
          return 0;

        default:
          // Else, hide
          return -1 * this.height;
      }
    },
    // Has the scroll moved past the header
    scrolledPast: function () {
      return this.scrollY > this.height + this.offset;
    },
    // Fade in the header when we would show it after scrolling past it's height
    revealed: function () {
      var scrollDistanceSinceReveal;

      if (this.scrollingUp) {
        // When scrolling up always show
        return true;
      } // When scrolling down and detached, wait closeOnScrollThreshold before
      // hiding


      scrollDistanceSinceReveal = Math.abs(this.scrollY - this.scrollYOnScrollDownStart);

      if (!this.scrollingUp && this.isDetached && scrollDistanceSinceReveal < this.closeOnScrollThreshold) {
        return true;
      }

      return !this.scrolledPast;
    },
    // At the top of of the page.
    atScrollTop: function () {
      if (this.noOffsetWhenDetached) {
        return this.scrollY <= this.offset;
      } else {
        return this.scrollY === 0;
      }
    },
    // Can be used to add a background color when down the page
    showBackground: function () {
      switch (false) {
        // We're forcing the background to be shown
        case !this.forceBackground:
          return true;
        // We've scroll past so add class no so it doesn't tween on the first
        // detaching moment

        case !this.scrolledPast:
          return true;
        // We're scrolling up after having scroll past the header and we're not
        // actually at the very top of the page.

        case !(this.isDetached && !this.atScrollTop):
          return true;
      }
    },
    // The top position of the bar, which is affected by the offset prop. This
    // is used to make room for notifcation bars
    topPosition: function () {
      if (!this.noOffsetWhenDetached) {
        // Even when scrolling, bar should be offset
        return this.offset;
      } // The bar starts off offset but shifts up on scroll. Thus, when in a
      // detached state, header should pin to top. Otherwise, like when at top
      // of the page, the offset pushes the header down.


      if (this.isDetached) {
        return 0;
      } else {
        return this.offset;
      }
    },
    // Build CSS
    styles: function () {
      return {
        transform: `translateY(${this.translateOffset}px)`,
        top: `${this.topPosition}px`,
        opacity: this.revealed || this.revealTransition !== 'fade' ? 1 : 0,
        height: `${this.height}px`
      };
    },
    classes: function () {
      return [`reveal-${this.revealTransition}`, {
        'tween-reveal': this.isDetached,
        'show-background': this.showBackground,
        'disable-top-tween': this.disableTopTween
      }];
    }
  },
  watch: {
    // Figure out scroll direction
    scrollY: function (now, old) {
      return this.scrollingUp = now !== 0 && now < old;
    },
    scrollingUp: function () {
      if (this.scrollingUp && this.scrolledPast) {
        // Don't allow tweening of the header until the first scroll up. This is
        // done to prevent a tween happening when the user first scrolls past the
        // header height
        this.isDetached = true;
      }

      if (this.isDetached && !this.scrollingUp) {
        // When header is detached and we start scrolling down, save scrollY value
        return this.scrollYOnScrollDownStart = this.scrollY;
      }
    },
    // Tween when forced and clear when no longer forced if already at the top
    forceReveal: function (bool) {
      if (this.forceReveal) {
        return this.isDetached = true;
      } else if (this.atScrollTop) {
        return this.isDetached = false;
      }
    },
    atScrollTop: function () {
      if (this.atScrollTop) {
        // When the user returns to the top, reset the tweening
        this.isDetached = false;
      } // Emit event so the parent can use atScrollTop for styles or logic


      return this.$emit('atScrollTop', this.atScrollTop);
    },
    // Disable the transition on top when switching between isDetached states.
    // Normally we want to allow top tweens, like if a notification bar height
    // changes.  However, in the moment when we're scrolling back to the top of
    // the page, we instantaneously reset the top but don't want to animate it.
    isDetached: function () {
      this.disableTopTween = true;
      return setTimeout(() => {
        return this.disableTopTween = false;
      }, 0);
    }
  },
  methods: {
    // Store scroll variables
    onScroll: function () {
      return this.windowScroll = window.scrollY;
    }
  }
});
// CONCATENATED MODULE: ./index.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var indexvue_type_script_lang_coffee_ = (lib_vue_loader_options_indexvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./index.vue?vue&type=style&index=0&id=6de5ab34&lang=stylus&scoped=true&
var indexvue_type_style_index_0_id_6de5ab34_lang_stylus_scoped_true_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./index.vue






/* normalize component */

var component = normalizeComponent(
  indexvue_type_script_lang_coffee_,
  render,
  staticRenderFns,
  false,
  null,
  "6de5ab34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "index.vue"
/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);