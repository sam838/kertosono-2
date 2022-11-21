exports.ids = [25];
exports.modules = {

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSliderOne.vue?vue&type=template&id=08f93de6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "intro-slider"
  }, [_c('swiper', {
    attrs: {
      "options": _vm.swiperOptions
    }
  }, _vm._l(_vm.sliderData, function (banner, index) {
    return _c('swiper-slide', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "intro-section overlay bg-cover",
      style: {
        backgroundImage: `url(${banner.bgImgSrc})`
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row row-cols-lg-1 row-cols-1"
    }, [_c('div', {
      staticClass: "col align-self-center"
    }, [_c('div', {
      staticClass: "intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8"
    }, [_c('h2', {
      staticClass: "title"
    }, [_vm._v(_vm._s(banner.heading))]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('p', [_vm._v(_vm._s(banner.text))])]), _vm._v(" "), _c('n-link', {
      staticClass: "btn btn-primary btn-hover-secondary",
      attrs: {
        "to": "/about"
      }
    }, [_vm._v("Get Started")]), _vm._v(" "), _c('n-link', {
      staticClass: "btn btn-outline-white btn-hover-primary",
      attrs: {
        "to": "/about"
      }
    }, [_vm._v("Learn More")])], 1)])])])])]);
  }), 1), _vm._ssrNode(" <div class=\"home-slider-prev swiper-button-prev main-slider-nav\"><i class=\"fal fa-angle-left\"></i></div> <div class=\"home-slider-next swiper-button-next main-slider-nav\"><i class=\"fal fa-angle-right\"></i></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroSliderOne.vue?vue&type=template&id=08f93de6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSliderOne.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroSliderOnevue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        autoplay: false,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.home-slider-next',
          prevEl: '.home-slider-prev'
        }
      },
      sliderData: [{
        id: 1,
        heading: "Designing awesome brands & experiences",
        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
        bgImgSrc: "/images/hero-image/hero-1.jpg"
      }, {
        id: 2,
        heading: "Designing awesome brands & experiences",
        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
        bgImgSrc: "/images/hero-image/hero-2.jpg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/HeroSliderOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroSliderOnevue_type_script_lang_js_ = (HeroSliderOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroSliderOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSliderOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58369fdc"
  
)

/* harmony default export */ var HeroSliderOne = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-slider-one.js.map