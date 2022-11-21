exports.ids = [33];
exports.modules = {

/***/ 148:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"imgSrc\":\"/images/project/project-1.jpg\",\"title\":\"HasThemes Development: An outstanding payment app\",\"desc\":\"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.\"},{\"id\":2,\"imgSrc\":\"/images/project/project-2.jpg\",\"title\":\"Dashboards UI Kit open-source set of ready-to-use templates\",\"desc\":\"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.\"},{\"id\":3,\"imgSrc\":\"/images/project/project-3.jpg\",\"title\":\"Project You X Ventures Studio. Toronto, Canada\",\"desc\":\"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.\"},{\"id\":4,\"imgSrc\":\"/images/project/project-4.jpg\",\"title\":\"Launching a new campaign this month, Nike by you\",\"desc\":\"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.\"},{\"id\":5,\"imgSrc\":\"/images/project/project-5.jpg\",\"title\":\"Branding and photography. Mother Nature: Summer\",\"desc\":\"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.\"},{\"id\":6,\"imgSrc\":\"/images/project/project-6.jpg\",\"title\":\"Modern and unique design for a furniture application\",\"desc\":\"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.\"}]");

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectWrapper.vue?vue&type=template&id=7394a60a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90-b100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">Crafting effective digital marketing, web development,<br>video content and communication design</h2></div> "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-1 mtn-30\">", "</div>", _vm._l(_vm.projectData, function (project, index) {
    return _vm._ssrNode("<div class=\"col mt-30\">", "</div>", [_vm._ssrNode("<div class=\"work\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\">", "</div>", [_c('n-link', {
      staticClass: "image",
      attrs: {
        "to": "/project/project-details"
      }
    }, [_c('img', {
      attrs: {
        "src": project.imgSrc,
        "alt": project.title
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">", "</h3>", [_c('n-link', {
      attrs: {
        "to": "/project/project-details"
      }
    }, [_vm._v(_vm._s(project.title))])], 1), _vm._ssrNode(" <p class=\"desc\">" + _vm._ssrEscape(_vm._s(project.desc)) + "</p> "), _c('n-link', {
      attrs: {
        "to": "/project/project-details"
      }
    }, [_vm._v("View Project")])], 2)], 2)]);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProjectWrapper.vue?vue&type=template&id=7394a60a&

// EXTERNAL MODULE: ./data/project.json
var project = __webpack_require__(148);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectWrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var ProjectWrappervue_type_script_lang_js_ = ({
  data() {
    return {
      projectData: project
    };
  }

});
// CONCATENATED MODULE: ./components/ProjectWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectWrappervue_type_script_lang_js_ = (ProjectWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24841ea3"
  
)

/* harmony default export */ var ProjectWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-wrapper.js.map