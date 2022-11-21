exports.ids = [10];
exports.modules = {

/***/ 138:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"logo\":\"/images/brand/client-logo-01.png\",\"alt\":\"brand logo\"},{\"id\":2,\"logo\":\"/images/brand/client-logo-02.png\",\"alt\":\"brand logo\"},{\"id\":3,\"logo\":\"/images/brand/client-logo-03.png\",\"alt\":\"brand logo\"},{\"id\":4,\"logo\":\"/images/brand/client-logo-04.png\",\"alt\":\"brand logo\"},{\"id\":5,\"logo\":\"/images/brand/client-logo-05.png\",\"alt\":\"brand logo\"},{\"id\":6,\"logo\":\"/images/brand/client-logo-06.png\",\"alt\":\"brand logo\"}]");

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=template&id=3280834b&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "brand-section section-padding"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"brand-wrapper\">", "</div>", [_vm._ssrNode("<div class=\"brand-list\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.brandData, function (brand, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide brand"
    }, [_c('n-link', {
      attrs: {
        "to": "/"
      }
    }, [_c('img', {
      attrs: {
        "src": brand.logo,
        "alt": "brand.alt"
      }
    })])], 1);
  }), 0)], 1)])])])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=template&id=3280834b&

// EXTERNAL MODULE: ./data/brand-logo.json
var brand_logo = __webpack_require__(138);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=script&lang=js&

/* harmony default export */ var BrandLogoCarouselvue_type_script_lang_js_ = ({
  data() {
    return {
      brandData: brand_logo,
      swiperOption: {
        speed: 1000,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 6,
        autoplay: true,
        breakpoints: {
          1200: {
            slidesPerView: 6
          },
          992: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 4
          },
          576: {
            slidesPerView: 3
          },
          320: {
            slidesPerView: 2
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoCarouselvue_type_script_lang_js_ = (BrandLogoCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e2fd90e"
  
)

/* harmony default export */ var BrandLogoCarousel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=brand-logo-carousel.js.map