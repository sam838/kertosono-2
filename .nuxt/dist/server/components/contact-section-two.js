exports.ids = [19,37];
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSectionTwo.vue?vue&type=template&id=610af8f3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding contact-section fix bg-cover",
    style: {
      backgroundImage: `url('/images/bg/contact-bg.jpg')`
    },
    attrs: {
      "data-overlay": "0.7"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row-cols-lg-2 row-cols-1 align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col\"><div class=\"contact-Information mr-xl-7\"><div class=\"section-title-two color-light\"><span class=\"sub-title\">Innovative &amp; cutting-edge technology</span> <h3 class=\"title\">We use latest technologies that are proven and practical</h3></div> <div data-vivus-hover class=\"contact-info info-light\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-map-white.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\">Our Locations</h4> <span class=\"info-text\"> 110 W 34th St, NYC. / 67 Madison Avenue.</span></div></div> <div data-vivus-hover class=\"contact-info info-light\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-message-txt-white.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\">Give Us A Call</h4> <span class=\"info-text\"><a href=\"callto:0123456789\">0123456789</a></span></div></div> <div data-vivus-hover class=\"contact-info info-light\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-mail-open-text-white.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\"> Help Desk</h4> <span class=\"info-text\"><a href=\"mailto:demo@example.com\">demo@example.com</a></span></div></div></div></div> "), _vm._ssrNode("<div class=\"col\">", "</div>", [_vm._ssrNode("<div class=\"contact-form-area box-shadow\">", "</div>", [_vm._ssrNode("<div class=\"section-title text-center mb-7\"><h2 class=\"title fz-28\">Let’s talk about your project</h2> <p class=\"sub-title\">We have made it easy for clients to reach us and get their solutions weaved</p></div> <form><div class=\"row mb-n4\"><div class=\"col-md-12 col-12 mb-4\"><input type=\"text\" placeholder=\"Your Name *\" name=\"name\"></div> <div class=\"col-md-12 col-12 mb-4\"><input type=\"email\" placeholder=\"Email *\" name=\"email\"></div> <div class=\"col-12 mb-30\"><textarea name=\"message\" placeholder=\"Message\"></textarea></div> <div class=\"col-12 text-center mb-4\"><button class=\"btn btn-primary btn-hover-secondary\">Get a free consultation</button></div></div></form> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/contact-shape.png"
    }
  })], 2)])], 2)]), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/newsletter-shape.png"
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactSectionTwo.vue?vue&type=template&id=610af8f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSectionTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ContactSectionTwovue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/ContactSectionTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactSectionTwovue_type_script_lang_js_ = (ContactSectionTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactSectionTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactSectionTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75d97de4"
  
)

/* harmony default export */ var ContactSectionTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=contact-section-two.js.map