exports.ids = [65,2,11,19,23,27,28,30,34,35,36,37,39,44,45];
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

/***/ 127:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Branding\",\"slug\":\"branding\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-target.svg\",\"imgSrc\":\"/images/project/work-details-1.jpg\"},{\"id\":2,\"title\":\"UX Design\",\"slug\":\"ux-design\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture-multiple.svg\",\"imgSrc\":\"/images/project/work-details-2.jpg\"},{\"id\":3,\"title\":\"Strategy\",\"slug\":\"strategy\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture.svg\",\"imgSrc\":\"/images/project/work-details-3.jpg\"},{\"id\":4,\"title\":\"E-commerce\",\"slug\":\"e-commerce\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-ecommerce-cart-plus.svg\",\"imgSrc\":\"/images/project/work-details-4.jpg\"},{\"id\":5,\"title\":\"Marketing\",\"slug\":\"marketing\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-display.svg\",\"imgSrc\":\"/images/project/work-details-1.jpg\"},{\"id\":6,\"title\":\"Development\",\"slug\":\"development\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-gear.svg\",\"imgSrc\":\"/images/project/work-details-2.jpg\"}]");

/***/ }),

/***/ 128:
/***/ (function(module) {

module.exports = JSON.parse("[{\"count\":650,\"text\":\"Happy Clients\"},{\"count\":780,\"text\":\"finished projects\"},{\"count\":245,\"text\":\"skilled experts\"},{\"count\":980,\"text\":\"media posts\"}]");

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutFour.vue?vue&type=template&id=c2734758&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-top section-padding-bottom-180"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-7 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/about/about-3.jpg\" alt=\"image\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/about/about-4.jpg\" alt=\"image\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/about-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"about-content-area about-four\">", "</div>", [_vm._ssrNode("<div class=\"section-title-two\"><span class=\"sub-title\">Our solutions begin with brand research</span> <h3 class=\"title\">We’ve worked alongside plenty of brands &amp; startups</h3></div> <p>Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.</p> "), _c('n-link', {
    staticClass: "btn btn-primary btn-hover-secondary mt-30",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Get Started")])], 2)])], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AboutFour.vue?vue&type=template&id=c2734758&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutFour.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutFourvue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/AboutFour.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutFourvue_type_script_lang_js_ = (AboutFourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutFour.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutFourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16d282fa"
  
)

/* harmony default export */ var AboutFour = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=template&id=9cc236de&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "icon-box text-center",
    class: _vm.addClassName
  }, [_vm._ssrNode("<div class=\"icon\"><img" + _vm._ssrAttr("src", _vm.service.iconSrc) + _vm._ssrAttr("alt", _vm.service.title) + " class=\"svgInject\"></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.service.title)) + "</h3> <div class=\"desc\"><p>" + _vm._ssrEscape(_vm._s(_vm.service.text)) + "</p></div> "), _c('n-link', {
    staticClass: "link",
    attrs: {
      "to": `/service/${_vm.service.slug}`
    }
  }, [_vm._v("View Details")])], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=template&id=9cc236de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ServiceItemvue_type_script_lang_js_ = ({
  props: ['service', 'addClassName']
});
// CONCATENATED MODULE: ./components/ServiceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemvue_type_script_lang_js_ = (ServiceItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42b4f462"
  
)

/* harmony default export */ var ServiceItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=template&id=abb2333e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90 section-padding-bottom"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">Services that create identities, build brands, and get results</h2> <p class=\"sub-title\">We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!</p></div> "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30\">", "</div>", [_vm._l(_vm.serviceData, function (service, index) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">", "</div>", [_c('ServiceItem', {
      attrs: {
        "service": service,
        "addClassName": "box-border"
      }
    })], 1);
  }), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=template&id=abb2333e&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceWrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var ServiceWrappervue_type_script_lang_js_ = ({
  components: {
    ServiceItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 147)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  },

  data() {
    return {
      serviceData: service
    };
  }

});
// CONCATENATED MODULE: ./components/ServiceWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceWrappervue_type_script_lang_js_ = (ServiceWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48a68987"
  
)

/* harmony default export */ var ServiceWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ServiceItem: __webpack_require__(147).default,ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SuccessStory.vue?vue&type=template&id=7f169dfd&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-top success-section-padding-bottom-180"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area right-0 skill-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/skill/skill-1.jpg\" alt=\"image\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/skill/skill-2.jpg\" alt=\"image\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "1",
      "imgSrc": "/images/shape-animation/video-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" <div data-aos=\"fade-up\" class=\"offset-lg-1 col-lg-5\"><div class=\"success-content\"><div class=\"section-title-two\"><span class=\"sub-title\">Your success is our success</span> <h3 class=\"title\">Web design, marketing &amp; SEO solutions that get results</h3></div> <div class=\"progress-bar--one\"><div class=\"progress-charts\"><h6 class=\"heading\">UX Design</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-1\" style=\"width: 81%; visibility: visible;\"><span class=\"percent-label\">81%</span></div></div></div> <div class=\"progress-charts\"><h6 class=\"heading\">Marketing</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-2\" style=\"width: 72%; visibility: visible;\"><span class=\"percent-label\">72%</span></div></div></div> <div class=\"progress-charts\"><h6 class=\"heading\">Web Design</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-3\" style=\"width: 80%; visibility: visible;\"><span class=\"percent-label\">80%</span></div></div></div> <div class=\"progress-charts\"><h6 class=\"heading\">Development</h6> <div class=\"progress\"><div role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar gradient-4\" style=\"width: 57%; visibility: visible;\"><span class=\"percent-label\">57%</span></div></div></div></div></div></div>")], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SuccessStory.vue?vue&type=template&id=7f169dfd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SuccessStory.vue?vue&type=script&lang=js&
/* harmony default export */ var SuccessStoryvue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/SuccessStory.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SuccessStoryvue_type_script_lang_js_ = (SuccessStoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SuccessStory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SuccessStoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "17c5625b"
  
)

/* harmony default export */ var SuccessStory = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunfactWithTitle.vue?vue&type=template&id=2c8ea4a6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90 section-padding-bottom",
    style: {
      backgroundColor: '#f8faff'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">We help our clients solve business problems, increase <br> visibility, and achieve unexpected results</h2></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 mx-auto\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }],
    staticClass: "row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30"
  }, _vm._l(_vm.funFacts, function (item, i) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">", "</div>", [_vm.isVisible ? _vm._ssrNode("<div class=\"funfact\">", "</div>", [_vm._ssrNode("<div class=\"number\">", "</div>", [_vm._ssrNode("<span class=\"counter\">", "</span>", [_c('countTo', {
      attrs: {
        "startVal": _vm.startVal,
        "endVal": item.count,
        "duration": 4000
      }
    })], 1)]), _vm._ssrNode(" <h6 class=\"text\">" + _vm._ssrEscape(_vm._s(item.text)) + "</h6>")], 2) : _vm._e()]);
  }), 0)])])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunfactWithTitle.vue?vue&type=template&id=2c8ea4a6&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(93);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/funfacts.json
var funfacts = __webpack_require__(128);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunfactWithTitle.vue?vue&type=script&lang=js&


/* harmony default export */ var FunfactWithTitlevue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      funFacts: funfacts,
      startVal: 0,
      isVisible: false
    };
  },

  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/FunfactWithTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunfactWithTitlevue_type_script_lang_js_ = (FunfactWithTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunfactWithTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunfactWithTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4323d5b0"
  
)

/* harmony default export */ var FunfactWithTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSectionTwo.vue?vue&type=template&id=610af8f3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding contact-section fix bg-cover",
    style: {
      backgroundImage: `url('/images/bg/contact-bg.jpg')`
    },
    attrs: {
      "data-overlay": "0.7"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row row-cols-lg-2 row-cols-1 align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col\"><div class=\"contact-Information mr-xl-7\"><div class=\"section-title-two color-light\"><span class=\"sub-title\">Innovative &amp; cutting-edge technology</span> <h3 class=\"title\">We use latest technologies that are proven and practical</h3></div> <div data-vivus-hover class=\"contact-info info-light\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-map-white.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\">Our Locations</h4> <span class=\"info-text\"> 110 W 34th St, NYC. / 67 Madison Avenue.</span></div></div> <div data-vivus-hover class=\"contact-info info-light\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-message-txt-white.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\">Give Us A Call</h4> <span class=\"info-text\"><a href=\"callto:0123456789\">0123456789</a></span></div></div> <div data-vivus-hover class=\"contact-info info-light\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-mail-open-text-white.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\"> Help Desk</h4> <span class=\"info-text\"><a href=\"mailto:demo@example.com\">demo@example.com</a></span></div></div></div></div> "), _vm._ssrNode("<div class=\"col\">", "</div>", [_vm._ssrNode("<div class=\"contact-form-area box-shadow\">", "</div>", [_vm._ssrNode("<div class=\"section-title text-center mb-7\"><h2 class=\"title fz-28\">Let’s talk about your project</h2> <p class=\"sub-title\">We have made it easy for clients to reach us and get their solutions weaved</p></div> <form><div class=\"row mb-n4\"><div class=\"col-md-12 col-12 mb-4\"><input type=\"text\" placeholder=\"Your Name *\" name=\"name\"></div> <div class=\"col-md-12 col-12 mb-4\"><input type=\"email\" placeholder=\"Email *\" name=\"email\"></div> <div class=\"col-12 mb-30\"><textarea name=\"message\" placeholder=\"Message\"></textarea></div> <div class=\"col-12 text-center mb-4\"><button class=\"btn btn-primary btn-hover-secondary\">Get a free consultation</button></div></div></form> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/contact-shape.png"
    }
  })], 2)])], 2)]), _vm._ssrNode(" "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "data-depth": "1",
      "imgSrc": "/images/shape-animation/newsletter-shape.png"
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactSectionTwo.vue?vue&type=template&id=610af8f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSectionTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ContactSectionTwovue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111))
  }
});
// CONCATENATED MODULE: ./components/ContactSectionTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactSectionTwovue_type_script_lang_js_ = (ContactSectionTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactSectionTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactSectionTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75d97de4"
  
)

/* harmony default export */ var ContactSectionTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/service/index.vue?vue&type=template&id=4a6909cf&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('TheHeader'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('SearchPopup'), _vm._ssrNode(" "), _c('BreadcrumbOne', {
    attrs: {
      "items": _vm.items,
      "title": "We work with bold brands that we believe in",
      "backgroundUrl": "/images/bg/breadcrumb-bg-three.jpg"
    }
  }), _vm._ssrNode(" "), _c('ServiceWrapper'), _vm._ssrNode(" "), _c('SuccessStory', {
    style: {
      backgroundColor: '#f8faff'
    }
  }), _vm._ssrNode(" "), _c('AboutFour'), _vm._ssrNode(" "), _c('FunfactWithTitle'), _vm._ssrNode(" "), _c('ContactSectionTwo'), _vm._ssrNode(" "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/service/index.vue?vue&type=template&id=4a6909cf&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/service/index.vue?vue&type=script&lang=js&
/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  components: {
    TheHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117)),
    ServiceWrapper: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 155)),
    SuccessStory: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 156)),
    AboutFour: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 146)),
    FunfactWithTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 157)),
    ContactSectionTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 158)),
    TheFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122))
  },

  data() {
    return {
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Service',
        active: true
      }]
    };
  },

  head() {
    return {
      title: 'Service'
    };
  }

});
// CONCATENATED MODULE: ./pages/service/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_servicevue_type_script_lang_js_ = (servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/service/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a4b1756"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(120).default,OffCanvasMobileMenu: __webpack_require__(116).default,SearchPopup: __webpack_require__(121).default,BreadcrumbOne: __webpack_require__(117).default,ServiceWrapper: __webpack_require__(155).default,SuccessStory: __webpack_require__(156).default,AboutFour: __webpack_require__(146).default,FunfactWithTitle: __webpack_require__(157).default,ContactSectionTwo: __webpack_require__(158).default,TheFooter: __webpack_require__(122).default})


/***/ })

};;
//# sourceMappingURL=index.js.map