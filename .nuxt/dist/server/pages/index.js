exports.ids = [58,0,7,27,30,37,40,41,42,43];
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3816dc61", content, true, context)
};

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_05ff4728_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_05ff4728_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_05ff4728_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_05ff4728_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_id_05ff4728_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:\"\";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=05ff4728&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "mobile-navigation"
  }, [_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">", "</nav>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Beranda")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("Tentang")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/unit"
    }
  }, [_vm._v("Unit")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/news"
    }
  }, [_vm._v("Berita")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/ppdb"
    }
  }, [_vm._v("PPDB")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/career"
    }
  }, [_vm._v("Karir")])], 1)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=05ff4728&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  name: "MobileNavMenu",

  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle("active");
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
      offcanvasMobileMenu === null || offcanvasMobileMenu === void 0 ? void 0 : offcanvasMobileMenu.classList.remove("active");
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "78aec17f"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=86d14f90&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "popup-mobile-menu popup-mobile-visiable",
    attrs: {
      "id": "offcanvas-menu"
    }
  }, [_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "), _vm._ssrNode("<div class=\"inner custom-scrollbar\">", "</div>", [_vm._ssrNode("<div class=\"mobile-header\">", "</div>", [_vm._ssrNode("<div class=\"logo\">", "</div>", [_c('n-link', {
    staticStyle: {
      "color": "white"
    },
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "dark-logo",
    attrs: {
      "src": "/images/logo/yoga-logo.png",
      "alt": "site logo"
    }
  })])], 1), _vm._ssrNode(" <button class=\"mobile-close-btn\"></button>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"menu-content\">", "</div>", [_c('MobileNavigation')], 1)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=86d14f90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 115))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bc1b78e2"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(115).default})


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=template&id=915617ac&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-title text-center",
    class: _vm.addClassName,
    attrs: {
      "data-aos": "fade-up"
    }
  }, [_vm._ssrNode("<h2 class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h2> <p class=\"sub-title\">" + _vm._ssrEscape(_vm._s(_vm.subTitle)) + "</p>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=template&id=915617ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({
  name: 'SectionTitle',
  props: ["title", "subTitle", "addClassName"]
});
// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7146819c"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=template&id=7f6f402e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "static-testimonial mb-30"
  }, [_vm._ssrNode("<div class=\"thumb\"><div class=\"testimonial-image\"><img" + _vm._ssrAttr("src", _vm.testimonial.imgSrc) + _vm._ssrAttr("alt", _vm.testimonial.name) + "> <div class=\"overlay\"></div></div></div> <div class=\"author-info\"><div class=\"cite\"><h6 class=\"name\">" + _vm._ssrEscape(_vm._s(_vm.testimonial.name)) + "</h6> <span class=\"position\">" + _vm._ssrEscape(_vm._s(_vm.testimonial.position)) + "</span> <span class=\"text\">" + _vm._ssrEscape(_vm._s(_vm.testimonial.text)) + "</span></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=template&id=7f6f402e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=script&lang=js&
/* harmony default export */ var TestimonialItemvue_type_script_lang_js_ = ({
  props: ["testimonial"]
});
// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialItemvue_type_script_lang_js_ = (TestimonialItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bb564b8e"
  
)

/* harmony default export */ var TestimonialItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialSectionOne.vue?vue&type=template&id=3c8ac11c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "testimonial-section section-padding-t90 section-padding-bottom",
    style: {
      backgroundImage: `url(${'/images/bg/bg-testi.png'})`
    }
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\" style=\"color:white\">Testimoni Yohannes Gabriel</h2> <p class=\"sub-title\" style=\"color:white\">Alumni, Siswa, dan Orangtua</p></div> "), _vm._ssrNode("<div data-aos=\"fade-up\" class=\"testimonial-slider\">", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.testimonialData, function (testimonial, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('TestimonialItem', {
      attrs: {
        "testimonial": testimonial
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination text-center\"></div>")], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue?vue&type=template&id=3c8ac11c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialSectionOne.vue?vue&type=script&lang=js&
/* harmony default export */ var TestimonialSectionOnevue_type_script_lang_js_ = ({
  components: {
    TestimonialItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 129))
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
          el: '.swiper-pagination',
          type: 'bullets',
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
      testimonialData: [{
        id: 1,
        text: "Anak-anak belajar ilmu secara umum dan pendalaman iman Katolik setiap hari. Anak dilatih mandiri dan tidak bosan karena guru yang interaktif dan kreatif dalam pembelajaran",
        imgSrc: "/images/testimonial/testi-1.png",
        name: "Ima",
        position: "Orangtua Keneth & Celine"
      }, {
        id: 2,
        text: "Hal konkrit dan buah kasih dari bersekolah di Karitas adalah yang mendorongku untuk berbelas kasih hingga mempersembahkan diriku sebagai seorang imam Keuskupan Surabaya",
        imgSrc: "/images/testimonial/testi-2.png",
        name: "RD. Yuventius Devi Ghawa",
        position: "Alumni TKK Karitas V & SMPK-SMAK Karitas III"
      }, {
        id: 3,
        text: "Anak-anak diajarkan iman Katolik yang menjadi penguat karakter. Dengan pengajar yang berpotensi, anak-anak kami diajarkan untuk disiplin dan juga mandiri.",
        imgSrc: "/images/testimonial/testi-3.png",
        name: "Ninik Luesiana",
        position: "Orangtua Cedric, Bellycia, Averycia"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialSectionOnevue_type_script_lang_js_ = (TestimonialSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b433232"
  
)

/* harmony default export */ var TestimonialSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TestimonialItem: __webpack_require__(129).default})


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


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4f2dda69&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"intro-slider\">", "</div>", [_c('swiper', {
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
      staticClass: "intro-content m-auto text-center"
    }, [_c('h2', {
      staticClass: "title"
    }, [_vm._v(_vm._s(banner.heading))]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('p', [_vm._v(_vm._s(banner.text))])])])])])])])]);
  }), 1), _vm._ssrNode(" <div class=\"home-slider-prev swiper-button-prev main-slider-nav\"><i class=\"fal fa-angle-left\"></i></div> <div class=\"home-slider-next swiper-button-next main-slider-nav\"><i class=\"fal fa-angle-right\"></i></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding-t90 section-padding-bottom-200\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title\">Tentang Kami</h2></div> "), _vm._ssrNode("<div class=\"row mt-4\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-6 col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/home/about.png\" alt=\"images\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "1",
      "imgSrc": "/images/shape-animation/about-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"about-content-area about-one\">", "</div>", [_vm._ssrNode("<div class=\"section-title-two\"><h3 class=\"title\">\n                Selamat bergabung di website resmi kami, Yayasan Yohannes\n                Gabriel Perwakilan 1\n              </h3></div> <p>\n              Yayasan Yohannes Gabriel Perwakilan 1 Surabaya adalah yayasan\n              pendidikan yang mengelola sekolah-sekolah Katolik di Keuskupan\n              Surabaya. Kami terus mengembangkan diri sesuai dengan gerak\n              jaman agar dapat mendidik generasi penerus dan masa depan gereja\n              dan masyarakat. Melalui media website berserta seluruh jejaring\n              sosial yayasan, kami juga berharap agar sekolah-sekolah kami\n              makin dikenal sebagai sekolah Katolik milik Keuskupan Surabaya\n              yang dapat diandalkan.\n            </p> "), _c('n-link', {
    staticClass: "btn btn-primary btn-hover-secondary mt-4",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("Tentang Kami")])], 2)])], 2)], 2)]), _vm._ssrNode(" <div class=\"section-padding-t90 section-padding-bottom\"" + _vm._ssrStyle(null, {
    backgroundColor: '#1c62b1'
  }, null) + "><div class=\"container\"><div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title-light fz-32\">Mengapa Yohannes Gabriel?</h2></div> <div class=\"row\"><div class=\"col-lg-12 mx-auto\"><div class=\"row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\"><div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">96</span>+</div> <h6 class=\"text\">Tahun Pengalaman</h6></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">26</span></div> <h6 class=\"text\">Sekolah</h6></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">500</span>+</div> <h6 class=\"text\">Tenaga Pendidik Berpengalaman</h6></div></div> <div data-aos=\"fade-up\" class=\"col mt-40\"><div class=\"funfact\"><div class=\"icon\"><span class=\"fas fa-award\" style=\"font-size: 58px; color: white\"></span></div> <h6 class=\"text\" style=\"margin-top: 15px\">Terakreditasi</h6></div></div></div></div></div></div></div> "), _c('TeamOne'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${'/images/bg/bg-events.png'})`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    staticStyle: {
      "font-family": "'Font Awesome 5 Brands'",
      "font-size": "3rem"
    },
    attrs: {
      "title": "Kegiatan Yayasan Yohannes Gabriel"
    }
  }), _vm._ssrNode(" <div class=\"skill-with-video-content\"><ul class=\"agency-list\"><li class=\"item\"><div class=\"icon\"><i class=\"fas fa-calendar\"></i></div> <div class=\"text\">Januari 2022 : Pembelajaran Tatap Muka</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-calendar\"></i></div> <div class=\"text\">Januari 2022 : Pembelajaran Tatap Muka</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-calendar\"></i></div> <div class=\"text\">Januari 2022 : Pembelajaran Tatap Muka</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-calendar\"></i></div> <div class=\"text\">Januari 2022 : Pembelajaran Tatap Muka</div></li></ul></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding-t90-b100\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "title": "Berita",
      "sub-title": "Berita Terkini Seputar Yayasan Yohannes Gabriel"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60\">", "</div>", _vm._l(_vm.newsData.slice(0, 3), function (news, index) {
    return _vm._ssrNode("<div class=\"col mt-30\">", "</div>", [_c('BlogGridItem', {
      attrs: {
        "news": news
      }
    })], 1);
  }), 0)], 2)]), _vm._ssrNode(" "), _c('TestimonialSectionOne'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"offset-xl-1 col-xl-6 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"video-popup-area\">", "</div>", [_vm._ssrNode("<div class=\"skill-video\">", "</div>", [_c('client-only', [_c('img', {
    staticClass: "image",
    attrs: {
      "src": "/images/home/karir.png",
      "alt": "image"
    }
  })])], 1), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"skill-with-video-content\">", "</div>", [_vm._ssrNode("<div class=\"section-title-two\"><h3 class=\"title\">Berkarir Bersama Yayasan Yohannes Gabriel</h3> <p>\n                Bersama kita mewujudkan pribadi yang berintegritas dan\n                berkarakter bagi gereja, bangsa, dan dunia.\n              </p></div> "), _c('n-link', {
    staticClass: "btn btn-primary btn-hover-secondary",
    attrs: {
      "to": "/career"
    }
  }, [_vm._v("\n              DAFTAR DISINI\n            ")])], 2)])], 2)])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4f2dda69&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      videos: [{
        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
      }],
      newsData: [{
        title: "SDK St. Yusup Tropodo Sambut Bersama Masa Pertobatan Melalui Ibadat Prapaskah",
        date: "4 Maret 2022",
        author: "Admin",
        imgSrc: "/images/home/news-1.png"
      }, {
        title: "Retreat Grade 6 SDK St. Mary Undang RD. Alphonsus Boedi Prasetijo",
        date: "23 Februari 2022",
        author: "Admin",
        imgSrc: "/images/home/news-2.png"
      }, {
        title: "Pembelajaran Tatap Muka Sekolah Yohannes Gabriel Perwakilan I Surabaya, Perketat Prokes",
        date: "25 Januari 2022",
        author: "Admin",
        imgSrc: "/images/home/news-3.png"
      }],
      sliderData: [{
        id: 1,
        heading: "Pendidikan Katolik ",
        text: "Mendidik Generasi Penerus dan Masa Depan Gereja dan Masyarakat",
        bgImgSrc: "/images/home/home-1.png"
      }, {
        id: 2,
        heading: "Pendidikan Katolik",
        text: "Nilai-nilai Katolik Sebagai Pedoman Pembinaan Para Siswa",
        bgImgSrc: "/images/home/home-2.png"
      }]
    };
  },

  components: {
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    BlogGridItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 125)),
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111)),
    TestimonialSectionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 135)),
    TeamOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 143))
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f306a86"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OffCanvasMobileMenu: __webpack_require__(116).default,ShapeWithAnimation: __webpack_require__(111).default,TeamOne: __webpack_require__(143).default,SectionTitle: __webpack_require__(118).default,BlogGridItem: __webpack_require__(125).default,TestimonialSectionOne: __webpack_require__(135).default})


/***/ })

};;
//# sourceMappingURL=index.js.map