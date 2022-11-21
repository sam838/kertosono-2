exports.ids = [39,37];
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SuccessStory.vue?vue&type=template&id=7f169dfd&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-top success-section-padding-bottom-180"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area right-0 skill-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/skill/skill-1.jpg\" alt=\"image\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/skill/skill-2.jpg\" alt=\"image\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "1",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" <div data-aos=\"fade-up\" class=\"offset-lg-1 col-lg-5\"><div class=\"success-content\"><div class=\"section-title-two\"><span class=\"sub-title\">Your success is our success</span> <h3 class=\"title\">Web design, marketing &amp; SEO solutions that get results</h3></div> <div class=\"progress-bar--one\"><div class=\"progress-charts\"><h6 class=\"heading\">UX Design</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-1\" style=\"width: 81%; visibility: visible;\"><span class=\"percent-label\">81%</span></div></div></div> <div class=\"progress-charts\"><h6 class=\"heading\">Marketing</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-2\" style=\"width: 72%; visibility: visible;\"><span class=\"percent-label\">72%</span></div></div></div> <div class=\"progress-charts\"><h6 class=\"heading\">Web Design</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-3\" style=\"width: 80%; visibility: visible;\"><span class=\"percent-label\">80%</span></div></div></div> <div class=\"progress-charts\"><h6 class=\"heading\">Development</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-4\" style=\"width: 57%; visibility: visible;\"><span class=\"percent-label\">57%</span></div></div></div></div></div></div>")], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SuccessStory.vue?vue&type=template&id=7f169dfd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SuccessStory.vue?vue&type=script&lang=js&
/* harmony default export */ var SuccessStoryvue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/SuccessStory.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SuccessStoryvue_type_script_lang_js_ = (SuccessStoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SuccessStory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SuccessStoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17c5625b"
  
)

/* harmony default export */ var SuccessStory = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=success-story.js.map