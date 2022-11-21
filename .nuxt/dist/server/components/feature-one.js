exports.ids = [21,0];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=template&id=915617ac&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-title text-center",
    class: _vm.addClassName,
    attrs: {
      "data-aos": "fade-up"
    }
  }, [_vm._ssrNode("<h2 class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h2> <p class=\"sub-title\">" + _vm._ssrEscape(_vm._s(_vm.subTitle)) + "</p>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=template&id=915617ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({
  name: 'SectionTitle',
  props: ["title", "subTitle", "addClassName"]
});
// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7146819c"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 127:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Branding\",\"slug\":\"branding\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-target.svg\",\"imgSrc\":\"/images/project/work-details-1.jpg\"},{\"id\":2,\"title\":\"UX Design\",\"slug\":\"ux-design\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture-multiple.svg\",\"imgSrc\":\"/images/project/work-details-2.jpg\"},{\"id\":3,\"title\":\"Strategy\",\"slug\":\"strategy\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture.svg\",\"imgSrc\":\"/images/project/work-details-3.jpg\"},{\"id\":4,\"title\":\"E-commerce\",\"slug\":\"e-commerce\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-ecommerce-cart-plus.svg\",\"imgSrc\":\"/images/project/work-details-4.jpg\"},{\"id\":5,\"title\":\"Marketing\",\"slug\":\"marketing\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-display.svg\",\"imgSrc\":\"/images/project/work-details-1.jpg\"},{\"id\":6,\"title\":\"Development\",\"slug\":\"development\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-gear.svg\",\"imgSrc\":\"/images/project/work-details-2.jpg\"}]");

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=template&id=a52c4d90&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90-b100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "title": "We create a unique action plan for brands",
      "sub-title": "Get your company heading in the right direction with our digital marketing strategist",
      "add-class-name": "mb-60"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\">", "</div>", _vm._l(_vm.serviceData.slice(0, 3), function (feature, index) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("icon-box text-center", _vm.addClassName) + ">", "</div>", [_vm._ssrNode("<div class=\"icon\"><img" + _vm._ssrAttr("src", feature.iconSrc) + _vm._ssrAttr("alt", feature.title) + "></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">" + _vm._ssrEscape(_vm._s(feature.title)) + "</h3> <div class=\"desc\"><p>" + _vm._ssrEscape(_vm._s(feature.text)) + "</p></div> "), _c('n-link', {
      staticClass: "link",
      attrs: {
        "to": `/service/${feature.slug}`
      }
    }, [_vm._v("View Details")])], 2)], 2)]);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=template&id=a52c4d90&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=script&lang=js&

/* harmony default export */ var FeatureOnevue_type_script_lang_js_ = ({
  props: ["addClassName"],
  components: {
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118))
  },

  data() {
    return {
      serviceData: service
    };
  }

});
// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureOnevue_type_script_lang_js_ = (FeatureOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeatureOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ae71079"
  
)

/* harmony default export */ var FeatureOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(118).default})


/***/ })

};;
//# sourceMappingURL=feature-one.js.map