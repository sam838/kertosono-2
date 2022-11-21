exports.ids = [2,37];
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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutFour.vue?vue&type=template&id=c2734758&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-top section-padding-bottom-180"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-7 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/about/about-3.jpg\" alt=\"image\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/about/about-4.jpg\" alt=\"image\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/about-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"about-content-area about-four\">", "</div>", [_vm._ssrNode("<div class=\"section-title-two\"><span class=\"sub-title\">Our solutions begin with brand research</span> <h3 class=\"title\">We’ve worked alongside plenty of brands &amp; startups</h3></div> <p>Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.</p> "), _c('n-link', {
    staticClass: "btn btn-primary btn-hover-secondary mt-30",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Get Started")])], 2)])], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AboutFour.vue?vue&type=template&id=c2734758&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutFour.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutFourvue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/AboutFour.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutFourvue_type_script_lang_js_ = (AboutFourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutFour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutFourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16d282fa"
  
)

/* harmony default export */ var AboutFour = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=about-four.js.map