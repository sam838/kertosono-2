exports.ids = [7];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogGridItem.vue?vue&type=template&id=1cb7c330&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "blog"
  }, [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
    staticClass: "image",
    attrs: {
      "to": "/news/news-details"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.news.imgSrc,
      "alt": _vm.news.title
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info\">", "</div>", [_vm._ssrNode("<ul class=\"meta\"><li><i class=\"far fa-user\"></i>" + _vm._ssrEscape(_vm._s(_vm.news.author)) + "</li> <li><i class=\"far fa-calendar\"></i>" + _vm._ssrEscape(_vm._s(_vm.news.date)) + "</li></ul> "), _vm._ssrNode("<h3 class=\"title\">", "</h3>", [_c('n-link', {
    attrs: {
      "to": "/news/news-details"
    }
  }, [_vm._v(_vm._s(_vm.news.title))])], 1), _vm._ssrNode(" "), _c('n-link', {
    staticClass: "link",
    attrs: {
      "to": "/news/news-details"
    }
  }, [_c('mark', [_vm._v("Selengkapnya")])])], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogGridItem.vue?vue&type=template&id=1cb7c330&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogGridItem.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogGridItemvue_type_script_lang_js_ = ({
  props: ['news']
});
// CONCATENATED MODULE: ./components/BlogGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogGridItemvue_type_script_lang_js_ = (BlogGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d4c84738"
  
)

/* harmony default export */ var BlogGridItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-grid-item.js.map