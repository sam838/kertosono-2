exports.ids = [15,37];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "shape scene",
    class: _vm.addClassName
  }, [_vm._ssrNode("<span" + _vm._ssrAttr("data-depth", _vm.dataDepth) + "><img" + _vm._ssrAttr("src", _vm.imgSrc) + " alt=\"shape image\"></span>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(92);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&

/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({
  props: ['addClassName', 'imgSrc', 'dataDepth'],

  mounted() {
    var scene = document.querySelectorAll('.scene');

    if (scene) {
      scene.forEach((el, i) => {
        new external_parallax_js_default.a(el);
      });
    }

    ;
  }

});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d2354eb4"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionVideo.vue?vue&type=template&id=6191996f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "video-section section-padding",
    style: {
      backgroundImage: `url('/images/bg/video-bg.jpg')`
    }
  }, [_vm._ssrNode("<div class=\"container text-center\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title color-light text-center\"><h2 class=\"title\">A full-service creative agency since 2007</h2></div> "), _c('client-only', [_c('silent-box', {
    attrs: {
      "image": _vm.videos[0]
    },
    scopedSlots: _vm._u([{
      key: "silentbox-item",
      fn: function () {
        return [_c('div', {
          staticClass: "play-btn icon video-popup"
        }, [_c('i', {
          staticClass: "fas fa-play"
        })])];
      },
      proxy: true
    }])
  })], 1)], 2), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/newsletter-shape.png"
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CallToActionVideo.vue?vue&type=template&id=6191996f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionVideo.vue?vue&type=script&lang=js&
/* harmony default export */ var CallToActionVideovue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  },

  data() {
    return {
      videos: [{
        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/CallToActionVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionVideovue_type_script_lang_js_ = (CallToActionVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CallToActionVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallToActionVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "83ce045a"
  
)

/* harmony default export */ var CallToActionVideo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=call-to-action-video.js.map