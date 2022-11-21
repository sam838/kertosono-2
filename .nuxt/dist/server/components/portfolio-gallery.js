exports.ids = [31];
exports.modules = {

/***/ 132:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"id\":1,\"imgSrc\":\"/images/portfolio/portfolio-1.jpg\",\"title\":\"Digital marketing\",\"category\":\"development\"},{\"id\":2,\"imgSrc\":\"/images/portfolio/portfolio-2.jpg\",\"title\":\"App Development\",\"category\":\"app design\"},{\"id\":3,\"imgSrc\":\"/images/portfolio/portfolio-3.jpg\",\"title\":\"Graphics Design\",\"category\":\"marketing\"},{\"id\":4,\"imgSrc\":\"/images/portfolio/portfolio-4.jpg\",\"title\":\"Web Development\",\"category\":\"software\"},{\"id\":5,\"imgSrc\":\"/images/portfolio/portfolio-5.jpg\",\"title\":\"Construction Project\",\"category\":\"design\"},{\"id\":6,\"imgSrc\":\"/images/portfolio/portfolio-6.jpg\",\"title\":\"Illustration Design\",\"category\":\"app\"}]}");

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioGallery.vue?vue&type=template&id=79b4d34a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding",
    style: {
      backgroundColor: '#f8faff'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center mb-30\"><div class=\"col-lg-5\"><div class=\"section-title-two\"><span class=\"sub-title\">Portfolios</span> <h3 class=\"title\">Selected works.</h3></div></div> <div class=\"col-lg-7\"><div class=\"messonry-button text-lg-right text-left\"><button data-filter=\"all\"><span class=\"filter-text\">All</span></button> <button data-filter=\".app\"><span class=\"filter-text\">App</span></button> <button data-filter=\".development\"><span class=\"filter-text\">Development</span></button> <button data-filter=\".marketing\"><span class=\"filter-text\">Marketing</span></button> <button data-filter=\".software\"><span class=\"filter-text\">Software</span></button> <button data-filter=\".design\"><span class=\"filter-text\">Design</span></button></div></div></div> "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box\">", "</div>", _vm._l(_vm.portfolioData.portfolios, function (portfolio, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col mix", portfolio.category) + ">", "</div>", [_vm._ssrNode("<div class=\"single-portfolio\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\"><img" + _vm._ssrAttr("src", portfolio.imgSrc) + _vm._ssrAttr("alt", portfolio.title) + " class=\"img-fluid\"></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/project/project-details"
      }
    }, [_vm._v(_vm._s(portfolio.title))])], 1)])], 2)]);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PortfolioGallery.vue?vue&type=template&id=79b4d34a&

// EXTERNAL MODULE: ./data/portfolios.json
var portfolios = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioGallery.vue?vue&type=script&lang=js&

/* harmony default export */ var PortfolioGalleryvue_type_script_lang_js_ = ({
  data() {
    return {
      portfolioData: portfolios,
      mixer: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/PortfolioGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioGalleryvue_type_script_lang_js_ = (PortfolioGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioGallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9d6067da"
  
)

/* harmony default export */ var PortfolioGallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=portfolio-gallery.js.map