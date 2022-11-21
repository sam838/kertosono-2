exports.ids = [38,37];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "shape scene",
    class: _vm.addClassName
  }, [_vm._ssrNode("<span" + _vm._ssrAttr("data-depth", _vm.dataDepth) + "><img" + _vm._ssrAttr("src", _vm.imgSrc) + " alt=\"shape image\"></span>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(92);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&

/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({
  props: ['addClassName', 'imgSrc', 'dataDepth'],

  mounted() {
    var scene = document.querySelectorAll('.scene');

    if (scene) {
      scene.forEach((el, i) => {
        new external_parallax_js_default.a(el);
      });
    }

    ;
  }

});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d2354eb4"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillWithVideo.vue?vue&type=template&id=bd321692&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"skill-with-video-content\">", "</div>", [_vm._ssrNode("<div class=\"section-title-two\"><span class=\"sub-title\">Development that converts and delivers</span> <h3 class=\"title\">\n                            We offer the tools and skills that your company deserves\n                        </h3></div> <ul class=\"agency-list\"><li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Select &amp; customize courses to your preferences</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Change the tutor and make arrangements</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Participate in events to join others</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Get the desired certificate delivered at house</div></li></ul> "), _c('n-link', {
    staticClass: "btn btn-primary btn-hover-secondary",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("\n                        Get started for free\n                    ")])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"offset-xl-1 col-xl-6 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"video-popup-area\">", "</div>", [_vm._ssrNode("<div class=\"skill-video\">", "</div>", [_c('client-only', [_c('silent-box', {
    attrs: {
      "image": _vm.videos[0]
    },
    scopedSlots: _vm._u([{
      key: "silentbox-item",
      fn: function () {
        return [_c('img', {
          staticClass: "image",
          attrs: {
            "src": "/images/video/skill-video.jpg",
            "alt": "image"
          }
        }), _vm._v(" "), _c('div', {
          staticClass: "icon video-popup"
        }, [_c('i', {
          staticClass: "fas fa-play"
        })])];
      },
      proxy: true
    }])
  })], 1)], 1), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)])], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SkillWithVideo.vue?vue&type=template&id=bd321692&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillWithVideo.vue?vue&type=script&lang=js&
/* harmony default export */ var SkillWithVideovue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  },

  data() {
    return {
      videos: [{
        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/SkillWithVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SkillWithVideovue_type_script_lang_js_ = (SkillWithVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SkillWithVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SkillWithVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17b39326"
  
)

/* harmony default export */ var SkillWithVideo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=skill-with-video.js.map