exports.ids = [35];
exports.modules = {

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=template&id=9cc236de&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "icon-box text-center",
    class: _vm.addClassName
  }, [_vm._ssrNode("<div class=\"icon\"><img" + _vm._ssrAttr("src", _vm.service.iconSrc) + _vm._ssrAttr("alt", _vm.service.title) + " class=\"svgInject\"></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.service.title)) + "</h3> <div class=\"desc\"><p>" + _vm._ssrEscape(_vm._s(_vm.service.text)) + "</p></div> "), _c('n-link', {
    staticClass: "link",
    attrs: {
      "to": `/service/${_vm.service.slug}`
    }
  }, [_vm._v("View Details")])], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=template&id=9cc236de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ServiceItemvue_type_script_lang_js_ = ({
  props: ['service', 'addClassName']
});
// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemvue_type_script_lang_js_ = (ServiceItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42b4f462"
  
)

/* harmony default export */ var ServiceItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service-item.js.map