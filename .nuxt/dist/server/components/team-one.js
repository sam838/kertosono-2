exports.ids = [41,40];
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

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamOne.vue?vue&type=template&id=79755846&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding",
    attrs: {
      "data-bg-color": "#f8faff"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center mb-60\"><h2 class=\"title\">Siswa-Siswi Berprestasi</h2> <p class=\"sub-title\">\n        Raih prestasimu bersama Yayasan Yohannes Gabriel\n      </p></div> "), _vm._ssrNode("<div data-aos=\"fade-up\" class=\"testimonial-slider\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.teamData, function (team, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('TeamMember', {
      attrs: {
        "team": team
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination text-center\"></div>")], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TeamOne.vue?vue&type=template&id=79755846&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamOne.vue?vue&type=script&lang=js&
/* harmony default export */ var TeamOnevue_type_script_lang_js_ = ({
  components: {
    TeamMember: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 134))
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          1499: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      teamData: [{
        id: 1,
        imgSrc: "/images/team/team-1.png",
        name: "Hideki Hartanto",
        position: "Siswa SDK Karitas III"
      }, {
        id: 2,
        imgSrc: "/images/team/team-2.png",
        name: "Honorata De verceli Vidya Charista",
        position: "Siswi SMAK Karitas III"
      }, {
        id: 3,
        imgSrc: "/images/team/team-3.png",
        name: "Valerie Quincy V. Nathanael",
        position: "Siswi SMPK Karitas III"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/TeamOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamOnevue_type_script_lang_js_ = (TeamOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf9657a0"
  
)

/* harmony default export */ var TeamOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeamMember: __webpack_require__(134).default})


/***/ })

};;
//# sourceMappingURL=team-one.js.map