exports.ids = [46];
exports.modules = {

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Unit.vue?vue&type=template&id=07cfc5c2&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding"
  }, [_vm._ssrNode("<div class=\"container-fluid px-0\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title\">DAFTAR UNIT</h2> <p class=\"sub-title\">YAYASAN YOHANNES GABRIEL PERWAKILAN I</p></div> <div class=\"messonry-button text-center mb-60\"><button data-filter=\".tk\"><span class=\"filter-text\">TK</span></button> <button data-filter=\".sd\"><span class=\"filter-text\">SD</span></button> <button data-filter=\".smp\"><span class=\"filter-text\">SMP</span></button> <button data-filter=\".sma\"><span class=\"filter-text\">SMA</span></button></div> "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box\">", "</div>", _vm._l(_vm.unitData, function (unitData, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col mix", unitData.category) + ">", "</div>", [_vm._ssrNode("<div class=\"single-portfolio\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\"><img" + _vm._ssrAttr("src", unitData.imgSrc) + _vm._ssrAttr("alt", unitData.title) + " class=\"img-fluid\"></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/unit/unit-details"
      }
    }, [_vm._v(_vm._s(unitData.title))])], 1)])], 2)]);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Unit.vue?vue&type=template&id=07cfc5c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Unit.vue?vue&type=script&lang=js&
// import unitData from "~/data/unit.json";
/* harmony default export */ var Unitvue_type_script_lang_js_ = ({
  data() {
    return {
      unitData: [{
        imgSrc: "/images/unit/tksda.png",
        title: "TKK ST. MARIA SIDOARJO",
        category: "tk"
      }, {
        imgSrc: "/images/unit/tkatarina.png",
        title: "TKK KATARINA",
        category: "tk"
      }, {
        imgSrc: "/images/unit/tk5.png",
        title: "TKK KARITAS V",
        category: "tk"
      }, {
        imgSrc: "/images/unit/tk-smakarpil.png",
        title: "TKK ST. YUSUP KARANGPILANG",
        category: "tk"
      }, {
        imgSrc: "/images/unit/tk-smptropodo.png",
        title: "TKK ST. YUSUP TROPODO",
        category: "tk"
      }, {
        imgSrc: "/images/unit/tk-smptropodo.png",
        title: "SDK ST. YUSUP TROPODO",
        category: "sd"
      }, {
        imgSrc: "/images/unit/tk-smakarpil.png",
        title: "SDK ST. YUSUP KARANGPILANG",
        category: "sd"
      }, {
        imgSrc: "/images/unit/tk-smptropodo.png",
        title: "SMP ST. YUSUP TROPODO",
        category: "smp"
      }, {
        imgSrc: "/images/unit/tk-smakarpil.png",
        title: "SMA ST. YUSUP KARANGPILANG",
        category: "sma"
      }],
      mixer: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector(".box");
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/Unit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Unitvue_type_script_lang_js_ = (Unitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Unit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Unitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "762a5da6"
  
)

/* harmony default export */ var Unit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=unit.js.map