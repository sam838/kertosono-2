exports.ids = [52,0,7,11,14,27,28,30,34,37,44,45];
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=99ba2ddc&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('nav', {
    staticClass: "site-main-menu"
  }, [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li class=\"has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home One")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/home-two"
    }
  }, [_vm._v("Home Two")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/home-three"
    }
  }, [_vm._v("Home Three")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/service"
    }
  }, [_vm._v("Service")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/service"
    }
  }, [_vm._v("Service")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/service/branding"
    }
  }, [_vm._v("Service Details")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/project"
    }
  }, [_vm._v("Project")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/project"
    }
  }, [_vm._v("Project")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/project/project-details"
    }
  }, [_vm._v("Project Details")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"has-children\">", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog Grid")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-classic"
    }
  }, [_vm._v("Blog Classic")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/blog/blog-details"
    }
  }, [_vm._v("Blog Details")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=99ba2ddc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ebfe8fd"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=4922afb7&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "header-section header-transparent",
    class: {
      'is-sticky': _vm.isSticky
    }
  }, [_vm._ssrNode("<div class=\"header-inner\">", "</div>", [_vm._ssrNode("<div class=\"container position-relative\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-auto order-0\">", "</div>", [_vm._ssrNode("<div class=\"header-logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "dark-logo",
    attrs: {
      "src": "/images/logo/logo.png",
      "alt": "Agency Logo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "light-logo",
    attrs: {
      "src": "/images/logo/logo.png",
      "alt": "Agency Logo"
    }
  })])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1\">", "</div>", [_vm._ssrNode("<div class=\"menu-column-area d-none d-xl-block position-static\">", "</div>", [_c('Navigation')], 1), _vm._ssrNode(" <div class=\"header-search-area\"><div class=\"header-search\"><button class=\"header-search-toggle\"><i class=\"fas fa-search\"></i></button></div></div> <div class=\"header-mobile-menu-toggle d-xl-none ml-sm-2\"><button class=\"toggle\"><i class=\"icon-top\"></i> <i class=\"icon-middle\"></i> <i class=\"icon-bottom\"></i></button></div>")], 2), _vm._ssrNode(" <div class=\"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2\"><a href=\"https://1.envato.market/VLbOj\" target=\"_blank\" class=\"btn btn-light btn-hover-primary\">Buy Now</a></div>")], 2)])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=4922afb7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 119))
  },

  data() {
    return {
      isSticky: false
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobile menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    //offcanvas search 
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a692585"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(119).default})


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=template&id=3b39aa59&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-search-active",
    attrs: {
      "id": "search-popup"
    }
  }, [_vm._ssrNode("<div class=\"sidebar-search-icon\"><button class=\"search-close\"><i class=\"fas fa-times\"></i></button></div> <div class=\"sidebar-search-input\"><form><div class=\"form-search\"><input id=\"search\" value placeholder type=\"search\" class=\"input-text\"> <button><i class=\"fas fa-search\"></i></button></div></form> <p class=\"form-description\">Hit enter to search</p></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=template&id=3b39aa59&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=script&lang=js&
/* harmony default export */ var SearchPopupvue_type_script_lang_js_ = ({
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchPopupvue_type_script_lang_js_ = (SearchPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SearchPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8a260f6a"
  
)

/* harmony default export */ var SearchPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=168566d0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer-section",
    style: {
      backgroundColor: '#030e22'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row section-padding pt-0 mtn-30\">", "</div>", [_vm._ssrNode("<div class=\"col-md-4 col-sm-6 col-12 mt-30\">", "</div>", [_vm._ssrNode("<div class=\"footer-widget\">", "</div>", [_vm._ssrNode("<div class=\"footer-logo\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.footerData.footerAboutWidget.logoSrc,
      "alt": "Logo"
    }
  })])], 1), _vm._ssrNode(" <div class=\"footer-widget-content\"><div class=\"content\"><a href=\"tel:(+1)212-946-2701\">" + _vm._ssrEscape(_vm._s(_vm.footerData.footerAboutWidget.telephone)) + "</a> <a href=\"mailto:hello@hasagency.com\">" + _vm._ssrEscape(_vm._s(_vm.footerData.footerAboutWidget.email)) + "</a></div> <div class=\"footer-social-inline\"><a" + _vm._ssrAttr("href", _vm.footerData.footerAboutWidget.twitterUrl) + " target=\"_blank\"><i class=\"fab fa-twitter-square\"></i></a> <a" + _vm._ssrAttr("href", _vm.footerData.footerAboutWidget.fbUrl) + " target=\"_blank\"><i class=\"fab fa-facebook-square\"></i></a> <a" + _vm._ssrAttr("href", _vm.footerData.footerAboutWidget.instagramUrl) + " target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></div></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30\">", "</div>", [_vm._ssrNode("<div class=\"footer-widget\">", "</div>", [_vm._ssrNode("<h4 class=\"footer-widget-title\">" + _vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleOne)) + "</h4> "), _vm._ssrNode("<div class=\"footer-widget-content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.footerData.navListOne, function (nav, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": nav.navUrl
      }
    }, [_vm._v(_vm._s(nav.navTitle))])], 1);
  }), 0)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30\">", "</div>", [_vm._ssrNode("<div class=\"footer-widget\">", "</div>", [_vm._ssrNode("<h4 class=\"footer-widget-title\">" + _vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleTwo)) + "</h4> "), _vm._ssrNode("<div class=\"footer-widget-content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.footerData.navListTwo, function (nav, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": nav.navUrl
      }
    }, [_vm._v(_vm._s(nav.navTitle))])], 1);
  }), 0)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30\">", "</div>", [_vm._ssrNode("<div class=\"footer-widget\">", "</div>", [_vm._ssrNode("<h4 class=\"footer-widget-title\">" + _vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleThree)) + "</h4> "), _vm._ssrNode("<div class=\"footer-widget-content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.footerData.navListThree, function (nav, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": nav.navUrl
      }
    }, [_vm._v(_vm._s(nav.navTitle))])], 1);
  }), 0)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30\">", "</div>", [_vm._ssrNode("<div class=\"footer-widget\">", "</div>", [_vm._ssrNode("<h4 class=\"footer-widget-title\">" + _vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleFour)) + "</h4> "), _vm._ssrNode("<div class=\"footer-widget-content\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.footerData.navListFour, function (nav, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": nav.navUrl
      }
    }, [_vm._v(_vm._s(nav.navTitle))])], 1);
  }), 0)])], 2)])], 2), _vm._ssrNode(" <div class=\"row\"><div class=\"col\"><p class=\"copyright\">© 2022 Exomac. Made with <i class=\"fa fa-heart text-danger\"></i> by <a href=\"https://themeforest.net/user/codecarnival/portfolio\" target=\"_blank\">Codecarnival</a></p></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=168566d0&

// EXTERNAL MODULE: ./data/footer.json
var footer = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&

/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({
  data() {
    return {
      footerData: footer
    };
  }

});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d927cda"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 123:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"How your sales can work together in account-based marketing\",\"slug\":\"how-your-sales-can-work-together-in-account-based-marketing\",\"date\":\"Apr 06, 2021\",\"view\":70,\"imgSrc\":\"/images/blog/370/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":8,\"categories\":[\"marketing\",\"business\",\"branding\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":2,\"title\":\"The six things marketers need to understand about DTC marketing\",\"slug\":\"the-six-things-marketers-need-to-understand-about-dtc-marketing\",\"date\":\"Jun 26, 2021\",\"view\":92,\"imgSrc\":\"/images/blog/370/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":9,\"categories\":[\"agency\",\"digital\"],\"tags\":[\"agency\",\"digital\"]},{\"id\":3,\"title\":\"Eleven top tips for developing agile marketing\",\"slug\":\"eleven-top-tips-for-developing-agile-marketing\",\"date\":\"May 16, 2021\",\"view\":55,\"imgSrc\":\"/images/blog/370/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":15,\"categories\":[\"branding\",\"business\"],\"tags\":[\"branding\",\"business\"]},{\"id\":4,\"title\":\"A guide to latest trends product for this summer\",\"slug\":\"a-guide-to-latest-trends-product-for-this-summer\",\"date\":\"Feb 14, 2021\",\"view\":36,\"imgSrc\":\"/images/blog/370/blog-4.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":40,\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":5,\"title\":\"New winter collection with discount for this summer\",\"slug\":\"new-winter-collection-with-discount-for-this-summer\",\"date\":\"Aug 26, 2021\",\"view\":46,\"imgSrc\":\"/images/blog/370/blog-5.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":32,\"categories\":[\"agency\",\"digital\"],\"tags\":[\"agency\",\"digital\"]},{\"id\":6,\"title\":\"Make your store stand out from the others by business\",\"slug\":\"make-your-store-stand-out-from-the-others-by-business\",\"date\":\"Jun 22, 2021\",\"view\":34,\"imgSrc\":\"/images/blog/370/blog-6.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":64,\"categories\":[\"branding\",\"business\"],\"tags\":[\"branding\",\"business\"]}]");

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionTwo.vue?vue&type=template&id=4fbbafb0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t110-b120 newsletter-section bg-cover",
    style: {
      backgroundImage: `url('/images/bg/newsletter.jpg')`
    },
    attrs: {
      "data-overlay": "0.7"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"cta-content text-center\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "title": "Let’s find out how to work together",
      "sub-title": "Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.",
      "add-class-name": "color-light"
    }
  }), _vm._ssrNode(" "), _c('n-link', {
    staticClass: "btn btn-primary btn-hover-secondary mt-6",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Get Started")])], 2)])])]), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "add-class-name": "shape-1",
      "data-depth": "1",
      "img-src": "/images/shape-animation/newsletter-shape.png"
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CallToActionTwo.vue?vue&type=template&id=4fbbafb0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var CallToActionTwovue_type_script_lang_js_ = ({
  components: {
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/CallToActionTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionTwovue_type_script_lang_js_ = (CallToActionTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CallToActionTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallToActionTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "259b6b24"
  
)

/* harmony default export */ var CallToActionTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(118).default,ShapeWithAnimation: __webpack_require__(111).default})


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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=442b00be&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('TheHeader'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('SearchPopup'), _vm._ssrNode(" "), _c('BreadcrumbOne', {
    attrs: {
      "items": _vm.items,
      "title": "Find all our latest news, insights, and events",
      "backgroundUrl": "/images/bg/breadcrumb-bg-four.jpg"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding fix\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\">", "</div>", _vm._l(_vm.blogData, function (blog, index) {
    return _vm._ssrNode("<div class=\"col mt-30\">", "</div>", [_c('BlogGridItem', {
      attrs: {
        "blog": blog
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mt-50\">", "</div>", [_vm._ssrNode("<div class=\"col\">", "</div>", [_c('paginate', {
    attrs: {
      "page-count": 4,
      "page-range": 3,
      "margin-pages": 2,
      "prev-text": 'Prev',
      "next-text": 'Next',
      "container-class": 'pagination center',
      "page-class": 'page-item'
    }
  })], 1)])], 2)]), _vm._ssrNode(" "), _c('CallToActionTwo'), _vm._ssrNode(" "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=442b00be&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  components: {
    TheHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117)),
    BlogGridItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 125)),
    CallToActionTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124)),
    TheFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122))
  },

  data() {
    return {
      blogData: blog,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Blog Grid',
        active: true
      }]
    };
  },

  head() {
    return {
      title: 'Blog Grid'
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51daea3d"
  
)

/* harmony default export */ var pages_blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(120).default,OffCanvasMobileMenu: __webpack_require__(116).default,SearchPopup: __webpack_require__(121).default,BreadcrumbOne: __webpack_require__(117).default,BlogGridItem: __webpack_require__(125).default,CallToActionTwo: __webpack_require__(124).default,TheFooter: __webpack_require__(122).default})


/***/ })

};;
//# sourceMappingURL=index.js.map