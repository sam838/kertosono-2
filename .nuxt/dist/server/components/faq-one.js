exports.ids = [20,6,37];
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AccordionStyleOne.vue?vue&type=template&id=0437274d&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "agency-accordion"
  }, [_c('b-card', {
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "card-header",
    attrs: {
      "header-tag": "header"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-1",
      modifiers: {
        "accordion-1": true
      }
    }],
    staticClass: "acc-btn border-0 text-left",
    attrs: {
      "block": ""
    }
  }, [_vm._v("\n                What exactly is branding?\n            ")])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-1",
      "visible": "",
      "accordion": "my-accordion"
    }
  }, [_c('b-card-body', [_c('b-card-text', [_vm._v("\n                    Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.\n                ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c('b-card', {
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "card-header",
    attrs: {
      "header-tag": "header"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-2",
      modifiers: {
        "accordion-2": true
      }
    }],
    staticClass: "acc-btn border-0 text-left",
    attrs: {
      "block": ""
    }
  }, [_vm._v("\n                What’s the branding process like?\n            ")])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-2",
      "visible": "",
      "accordion": "my-accordion"
    }
  }, [_c('b-card-body', [_c('b-card-text', [_vm._v("\n                    Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.\n                ")])], 1)], 1)], 1), _vm._ssrNode(" "), _c('b-card', {
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "card-header",
    attrs: {
      "header-tag": "header"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-3",
      modifiers: {
        "accordion-3": true
      }
    }],
    staticClass: "acc-btn border-0 text-left",
    attrs: {
      "block": ""
    }
  }, [_vm._v("\n                What type of creative services do you offer?\n            ")])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-3",
      "visible": "",
      "accordion": "my-accordion"
    }
  }, [_c('b-card-body', [_c('b-card-text', [_vm._v("\n                    Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.\n                ")])], 1)], 1)], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AccordionStyleOne.vue?vue&type=template&id=0437274d&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AccordionStyleOne.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3073adf8"
  
)

/* harmony default export */ var AccordionStyleOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FaqOne.vue?vue&type=template&id=648765d7&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "faq-section section-padding-top",
    style: {
      backgroundColor: '#f8faff'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row-cols-lg-2 row-cols-1\">", "</div>", [_vm._ssrNode("<div class=\"col mb-30\">", "</div>", [_vm._ssrNode("<div class=\"faq-content\">", "</div>", [_vm._ssrNode("<div class=\"section-title-two\"><span class=\"sub-title\">Frequently asked questions</span> <h3 class=\"title\">You’ve got questions and <br> we’ve got answers</h3></div> "), _c('AccordionStyleOne')], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col pl-xl-12\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area faq-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image right-n50 js-tilt\"><img src=\"/images/faq/faq-2.jpg\" alt=\"image\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/faq/faq-1.jpg\" alt=\"image\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "4",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)])], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FaqOne.vue?vue&type=template&id=648765d7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FaqOne.vue?vue&type=script&lang=js&
/* harmony default export */ var FaqOnevue_type_script_lang_js_ = ({
  components: {
    AccordionStyleOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 137)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/FaqOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FaqOnevue_type_script_lang_js_ = (FaqOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FaqOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FaqOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "639d6cd9"
  
)

/* harmony default export */ var FaqOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AccordionStyleOne: __webpack_require__(137).default,ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=faq-one.js.map