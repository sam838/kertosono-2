exports.ids = [40];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=template&id=32bd0df3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "team"
  }, [_vm._ssrNode("<div class=\"thumb\"><img" + _vm._ssrAttr("src", _vm.team.imgSrc) + _vm._ssrAttr("alt", _vm.team.name) + "> <div class=\"overlay\"></div> <ul class=\"social-icon text-center\">" + _vm._ssrList(_vm.team.socialList, function (social, index) {
    return "<li><a" + _vm._ssrAttr("href", social.url) + " class=\"link\"><i" + _vm._ssrClass(null, social.iconName) + "></i></a></li>";
  }) + "</ul></div> <div class=\"team-info text-center\"><div class=\"info\"><h5>" + _vm._ssrEscape(_vm._s(_vm.team.name)) + "</h5> <span>" + _vm._ssrEscape(_vm._s(_vm.team.position)) + "</span></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=template&id=32bd0df3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=script&lang=js&
/* harmony default export */ var TeamMembervue_type_script_lang_js_ = ({
  props: ['team']
});
// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMembervue_type_script_lang_js_ = (TeamMembervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMember.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMembervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2d4f44c0"
  
)

/* harmony default export */ var TeamMember = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-member.js.map