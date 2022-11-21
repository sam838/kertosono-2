exports.ids = [47,11,12,27,30,37];
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadcrumbOne.vue?vue&type=template&id=c3dc6c8e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "page-title-section section-padding-top bg-cover",
    style: {
      backgroundImage: `url(${_vm.backgroundUrl})`
    },
    attrs: {
      "data-overlay": "0.7"
    }
  }, [_vm._ssrNode("<div class=\"page-title\"><div class=\"container\"><h1 class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1></div></div> "), _vm._ssrNode("<div class=\"page-breadcrumb position-static\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('b-breadcrumb', {
    staticClass: "page-breadcrumb",
    attrs: {
      "items": _vm.items
    }
  })], 1)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BreadcrumbOne.vue?vue&type=template&id=c3dc6c8e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadcrumbOne.vue?vue&type=script&lang=js&
/* harmony default export */ var BreadcrumbOnevue_type_script_lang_js_ = ({
  props: ['items', 'title', 'backgroundUrl']
});
// CONCATENATED MODULE: ./components/BreadcrumbOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BreadcrumbOnevue_type_script_lang_js_ = (BreadcrumbOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BreadcrumbOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BreadcrumbOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b7072eec"
  
)

/* harmony default export */ var BreadcrumbOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1345c88c", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallToActionOne_vue_vue_type_style_index_0_id_d647cff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallToActionOne_vue_vue_type_style_index_0_id_d647cff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallToActionOne_vue_vue_type_style_index_0_id_d647cff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallToActionOne_vue_vue_type_style_index_0_id_d647cff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CallToActionOne_vue_vue_type_style_index_0_id_d647cff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-content[data-v-d647cff8]{height:150px;justify-content:center;display:flex;flex-wrap:wrap}.image-box[data-v-d647cff8]{width:150px;height:114px}.image-box img[data-v-d647cff8]{width:100%;height:100%;align-content:center;-o-object-fit:cover;object-fit:cover;margin:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionOne.vue?vue&type=template&id=d647cff8&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90-b100"
  }, [_vm._ssrNode("<div class=\"container shape-animate\" data-v-d647cff8>", "</div>", [_vm._ssrNode("<div add-class-name=\"mb-30\" data-aos=\"fade-up\" class=\"section-title text-center\" data-v-d647cff8><h2 class=\"title\" data-v-d647cff8>Visi dan Misi</h2> <p class=\"sub-title\" style=\"font-size: 22px;line-height: 44px;color: black; max-width: 970px; margin-top: 50px\" data-v-d647cff8>Mewujudkan Pendidikan Katolik Yang Membentuk Pribadi Berintegritas</p></div> <div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\" data-v-d647cff8><div data-aos=\"fade-up\" class=\"col mt-30\" data-v-d647cff8><div class=\"contact-info\" data-v-d647cff8><div class=\"image-content\" data-v-d647cff8><div class=\"image-box\" data-v-d647cff8><div class=\"icon\" data-v-d647cff8><img src=\"/images/icon-animation/icon_misi.png\" alt=\"Icon\" data-v-d647cff8></div></div></div> <div class=\"info\" data-v-d647cff8><span class=\"info-text\" data-v-d647cff8>\n              Menanamkan nilai-nilai Katolik untuk membentuk pribadi yang\n              memiliki hati penuh kasih</span></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-d647cff8><div class=\"contact-info\" data-v-d647cff8><div class=\"image-content\" data-v-d647cff8><div class=\"image-box\" data-v-d647cff8><div class=\"icon\" data-v-d647cff8><img src=\"/images/icon-animation/icon_misi3.png\" alt=\"Icon\" data-v-d647cff8></div></div></div> <div class=\"info\" data-v-d647cff8><span class=\"info-text\" data-v-d647cff8>\n              Melaksanakan metode pembelajaran yang menghasilkan pribadi yang\n              mampu berpikir cerdas</span></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-d647cff8><div class=\"contact-info\" data-v-d647cff8><div class=\"image-content\" data-v-d647cff8><div class=\"image-box\" data-v-d647cff8><div class=\"icon\" data-v-d647cff8><img src=\"/images/icon-animation/icon_misi2.png\" alt=\"Icon\" data-v-d647cff8></div></div></div> <div class=\"info\" data-v-d647cff8><span class=\"info-text\" data-v-d647cff8>\n              Membudayakan perilaku yang santun\n            </span></div></div></div></div> "), _c('shape-with-animation', {
    attrs: {
      "add-class-name": "shape-1",
      "data-depth": "4",
      "img-src": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CallToActionOne.vue?vue&type=template&id=d647cff8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionOne.vue?vue&type=script&lang=js&
/* harmony default export */ var CallToActionOnevue_type_script_lang_js_ = ({
  components: {
    SectionTitle: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 118)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/CallToActionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionOnevue_type_script_lang_js_ = (CallToActionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CallToActionOne.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallToActionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d647cff8",
  "0d33ba3e"
  
)

/* harmony default export */ var CallToActionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("605f44d2", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4ff7b892_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4ff7b892_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4ff7b892_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4ff7b892_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_4ff7b892_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content[data-v-4ff7b892]{height:60px;justify-content:center;display:flex;flex-wrap:wrap}.box[data-v-4ff7b892]{width:350px;height:14px}.box span[data-v-4ff7b892]{width:100%;height:100%;align-content:center;-o-object-fit:cover;object-fit:cover;margin:auto;font-weight:700}.image-content[data-v-4ff7b892]{height:150px;justify-content:center;display:flex;flex-wrap:wrap}.image-box[data-v-4ff7b892]{width:150px;height:114px}.image-box img[data-v-4ff7b892]{width:100%;height:100%;align-content:center;-o-object-fit:cover;object-fit:cover;margin:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=4ff7b892&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('BreadcrumbOne', {
    attrs: {
      "items": _vm.items,
      "title": "MEWUJUDKAN PENDIDIKAN KATOLIK\nYANG MEMBENTUK PRIBADI BERINTEGRITAS",
      "backgroundUrl": "/images/bg/about-1.png"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding-top about-section-padding-bottom-80\" data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-lg-6\" style=\"padding-bottom: 200px\" data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div class=\"about-image-area about-two about-shape-animation right-0 mr-0\" data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\" data-v-4ff7b892><img src=\"/images/about/about-2.png\" alt=\"image\" data-v-4ff7b892></div> <div class=\"about-image js-tilt\" data-v-4ff7b892><img src=\"/images/about/about-3.png\" alt=\"image\" data-v-4ff7b892></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" <div data-aos=\"fade-up\" class=\"col-lg-6\" data-v-4ff7b892><div class=\"about-content-area\" data-v-4ff7b892><div class=\"section-title-two\" data-v-4ff7b892><h4 class=\"title\" style=\"text-align: center; margin-bottom: 20px\" data-v-4ff7b892>\n                  Selamat bergabung di website resmi kami, Yayasan Yohannes\n                  Gabriel Perwakilan 1.\n                </h4> <p style=\"text-align: justify\" data-v-4ff7b892>\n                  Sejak berdiri tahun 1925, yayasan ini ada dan terus memberikan\n                  yang terbaik untuk mencerdaskan kehidupan bangsa. Kami terus\n                  mengembangkan diri sesuai dengan gerak jaman agar dapat\n                  mendidik generasi penerus dan masa depan gereja dan\n                  masyarakat. Nilai-nilai Katolik dan kebangsaan menjadi pedoman\n                  utama dalam membina para siswa di sekolah-sekolah kami ini.\n                  Melalui media website berserta seluruh jejaring sosial\n                  yayasan, kami juga berharap agar sekolah-sekolah kami makin\n                  dikenal sebagai sekolah Katolik milik Keuskupan Surabaya yang\n                  dapat diandalkan. Terlebih juga agar para wali murid makin\n                  percaya dengan sekolah-sekolah kami dalam mendidik dan membina\n                  anak-anak. Silahkan menghubungi kami untuk segala informasi\n                  yang dibutuhkan.”\n                </p></div></div></div>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"video-section section-padding\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/images/bg/tentang-vid.png')`
  }, null) + " data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div class=\"container text-center\" data-v-4ff7b892>", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title color-light text-center\" data-v-4ff7b892><h2 class=\"title\" data-v-4ff7b892>Bersama Mewujudkan Pribadi Yang Beritegritas</h2></div> "), _c('client-only', [_c('silent-box', {
    attrs: {
      "image": _vm.videos[0]
    },
    scopedSlots: _vm._u([{
      key: "silentbox-item",
      fn: function () {
        return [_c('div', {
          staticClass: "play-btn icon video-popup"
        }, [_c('i', {
          staticClass: "fas fa-play"
        })])];
      },
      proxy: true
    }])
  })], 1)], 2), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/newsletter-shape.png"
    }
  })], 2), _vm._ssrNode(" "), _c('CallToActionOne'), _vm._ssrNode(" <div class=\"line\" data-v-4ff7b892><hr data-v-4ff7b892></div> <div class=\"cta-section section-padding-250\" data-v-4ff7b892><div class=\"container text-center icon-up-down-animation\" data-v-4ff7b892><div data-aos=\"fade-up\" class=\"section-title text-center\" data-v-4ff7b892><h2 class=\"title fz-42\" data-v-4ff7b892>7 Budaya Yayasan</h2></div> <div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\" data-v-4ff7b892><div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      MERDEKA MEMILIH DAN TANGGUNG JAWAB\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Setiap manusia diciptakan Allah dengan memiliki kebebasan.\n                  Merdeka memilih mengerjakan hal - hal yang baik dan benar\n                  sebagai bagian dalam karya Tuhan.\n                </p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      KERJASAMA - KOMUNIKATIF TERBUKA\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Bekerja sama karena memiliki tujuan yang sama. Sebagai\n                  manusia, segala sesuatu bisa dibicarakan. Terbuka terhadap\n                  ide-ide yang segar dan baru ini memudahkan kita untuk bekerja\n                  dengan lebih baik.\n                </p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      PEMBELAJAR YANG TANGGUH\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Tidak mudah mengeluh jika mengalami kesulitan dalam belajar\n                  hal baru untuk mengembangkan pribadi ataupun organisasi.\n                </p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      DISIPLIN DAN JUJUR\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Disiplin berarti sikap dan perasaan taat dan patuh terhadap\n                  nilai-nilai yang dipercaya menjadi tanggung jawabnya.\n                </p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      CERMAT\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Cermat dalam bekerja dan mampu menganalisa situasi dan solusi,\n                  serta mengutamakan ketepatan dan meminimalisir kesalahan.\n                </p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      EMPATI\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Mampu berbela rasa terhadap orang lain dan situasi sekitarnya.\n                </p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892></span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892></p></div></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\" data-v-4ff7b892><div class=\"contact-info\" data-v-4ff7b892><div class=\"content\" data-v-4ff7b892><div class=\"box\" data-v-4ff7b892><div class=\"info\" data-v-4ff7b892><span class=\"info-text\" style=\"font-size: 22px; margin-bottom: 20px\" data-v-4ff7b892>\n                      BUDAYA MALU\n                    </span></div></div></div> <div class=\"info\" data-v-4ff7b892><p style=\"margin-top: 20px\" data-v-4ff7b892>\n                  Kesadaran memiliki rasa malu bila melakukan kesalahan.\n                </p></div></div></div></div></div></div> <div class=\"timeline-area responsive-content area-padding theme-bg-gray\" data-v-4ff7b892><div class=\"timeline-fluid\" data-v-4ff7b892><div class=\"container\" data-v-4ff7b892><div class=\"row\" data-v-4ff7b892><div class=\"col-md-12 primary-padding-3\" data-v-4ff7b892><div class=\"avivon-heading\" data-v-4ff7b892><h1 class=\"avivon__title mb-20\" style=\"text-align: center\" data-v-4ff7b892>\n                  Sejarah Singkat\n                </h1></div></div></div> <div class=\"row\" data-v-4ff7b892><div class=\"col-md-12\" data-v-4ff7b892><div class=\"timeline-list\" data-v-4ff7b892><div class=\"happening row\" style=\"margin-bottom: 40px\" data-v-4ff7b892><div class=\"happening__period col-md-3 col-sm-6 col-xs-15\" data-v-4ff7b892><h4 class=\"year__item-title\" style=\"text-align: center\" data-v-4ff7b892>\n                      1925-1928\n                    </h4> <div class=\"time__item-bg time__bg\" data-v-4ff7b892><div class=\"image-content\" data-v-4ff7b892><div class=\"image-box\" data-v-4ff7b892><img src=\"/images/icon-animation/awal.jpg\" alt=\"Icon\" data-v-4ff7b892></div></div></div></div> <div class=\"happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1\" data-v-4ff7b892><h3 class=\"time__item-title\" data-v-4ff7b892>Perkumpulan</h3> <p class=\"time__item-desc\" data-v-4ff7b892>\n                      21 Oktober 1925 Yayasan Yohannes Gabriel Pusat berdiri\n                      dengan nama Yayasan “Jonaes Gabrielstichting”. <br data-v-4ff7b892>\n                      1 Juli 1926 berdiri sekolah pertama Hollandsch Inlandsche\n                      School di Blitar. <br data-v-4ff7b892>\n                      Sejak tahun 1928, berdiri sekolah-sekolah Yayasan Yohannes\n                      Gabriel di berbagai daerah di Jawa Timur.\n                    </p></div></div> <div class=\"happening row\" style=\"margin-bottom: 40px\" data-v-4ff7b892><div class=\"happening__period col-md-3 col-sm-6 col-xs-15\" data-v-4ff7b892><h4 class=\"year__item-title\" style=\"text-align: center\" data-v-4ff7b892>\n                      1960\n                    </h4> <div class=\"time__item-bg time__bg-2\" data-v-4ff7b892></div> <div class=\"image-content\" data-v-4ff7b892><div class=\"image-box\" data-v-4ff7b892><img src=\"/images/icon-animation/1960.jpg\" alt=\"Icon\" data-v-4ff7b892></div></div></div> <div class=\"happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1\" data-v-4ff7b892><h3 class=\"time__item-title\" data-v-4ff7b892>\n                      Berdirinya Gedung Yayasan Pusat\n                    </h3> <p class=\"time__item-desc\" data-v-4ff7b892>\n                      Kantor Yayasan Yohannes Gabriel berpusat di Jl. Dinoyo\n                      No.42 Surabaya.\n                    </p></div></div> <div class=\"happening row\" style=\"margin-bottom: 40px\" data-v-4ff7b892><div class=\"happening__period col-md-3 col-sm-6 col-xs-15\" data-v-4ff7b892><h4 class=\"year__item-title\" style=\"text-align: center\" data-v-4ff7b892>\n                      1997\n                    </h4> <div class=\"time__item-bg time__bg-3\" data-v-4ff7b892></div> <div class=\"image-content\" data-v-4ff7b892><div class=\"image-box\" data-v-4ff7b892><img src=\"/images/icon-animation/icon_misi.png\" alt=\"Icon\" data-v-4ff7b892></div></div></div> <div class=\"happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1\" data-v-4ff7b892><h3 class=\"time__item-title\" data-v-4ff7b892>\n                      Yayasan Yohannes Gabriel Perwakilan 1\n                    </h3> <p class=\"time__item-desc\" data-v-4ff7b892>\n                      Yayasan Yohannes Gabriel Perwakilan 1 Surabaya berdiri\n                      sejak 1997 dan berada dalam naungan Keuskupan Surabaya.\n                      <br data-v-4ff7b892>\n                      Yayasan Yohannes Gabriel Perwakilan 1 berdiri dengan 3 sub\n                      bagian; sub Aloysius Gonzaga, sub Sidoarjo, sub Kantor\n                      Pusat.\n                    </p></div></div> <div class=\"happening row\" style=\"margin-bottom: 40px\" data-v-4ff7b892><div class=\"happening__period col-md-3 col-sm-6 col-xs-15\" data-v-4ff7b892><h4 class=\"year__item-title\" style=\"text-align: center\" data-v-4ff7b892>\n                      2001-Sekarang\n                    </h4> <div class=\"time__item-bg time__bg-4\" data-v-4ff7b892></div> <div class=\"image-content\" data-v-4ff7b892><div class=\"image-box\" data-v-4ff7b892><img src=\"/images/icon-animation/2013.jpg\" alt=\"Icon\" data-v-4ff7b892></div></div></div> <div class=\"happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1\" data-v-4ff7b892><h3 class=\"time__item-title\" data-v-4ff7b892>Perluasan</h3> <p class=\"time__item-desc\" data-v-4ff7b892>\n                      Tahun 2001 berdiri TKK St. Maria Wiyung dan SDK St.\n                      Mary<br data-v-4ff7b892>\n                      Tahun 2013 SDK Karitas 1 resmi bergabung dengan Yayasan\n                      Yohannes Gabriel Perwakilan 1<br data-v-4ff7b892>\n                      Sejak 2013 hingga sekarang Yayasan Yohannes Gabriel\n                      Perwakilan 1 terus berkembang hingga memiliki 26 sekolah\n                      katolik, mulai dari jenjang TK – SD – SMP – SMA.\n                    </p></div></div></div></div></div></div></div></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=4ff7b892&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  components: {
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117)),
    CallToActionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 133)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  },

  data() {
    return {
      items: [{
        text: "Beranda",
        to: "/"
      }, {
        text: "Tentang Kami",
        active: true
      }],
      videos: [{
        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
      }]
    };
  },

  head() {
    return {
      title: "Tentang Kami"
    };
  }

});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ff7b892",
  "4ea02010"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OffCanvasMobileMenu: __webpack_require__(116).default,BreadcrumbOne: __webpack_require__(117).default,ShapeWithAnimation: __webpack_require__(111).default,CallToActionOne: __webpack_require__(133).default})


/***/ })

};;
//# sourceMappingURL=about.js.map