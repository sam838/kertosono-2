exports.ids = [55,11,12,17,27,28,30,34,37,44,45];
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=2515f6a0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "contact-form-section section-padding-t90-b100",
    style: {
      backgroundColor: '#f8faff'
    }
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"offset-lg-2 col-lg-8\"><div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">Let’s talk about your project</h2> <p class=\"sub-title\">We have made it easy for clients to reach us and get their solutions weaved</p></div> <div class=\"contact-form\"><form><div class=\"row mtn-30\"><div class=\"col-md-6 col-12 mt-30\"><input type=\"text\" placeholder=\"Your Name *\" name=\"name\"></div> <div class=\"col-md-6 col-12 mt-30\"><input type=\"email\" placeholder=\"Email *\" name=\"email\"></div> <div class=\"col-md-12 col-12 mt-30\"><input type=\"text\" placeholder=\"Subject *\" name=\"subject\"></div> <div class=\"col-12 mt-30\"><textarea name=\"message\" placeholder=\"Message\"></textarea></div> <div class=\"col-12 text-center mt-30\"><button class=\"btn btn-primary btn-hover-secondary\">Submit</button></div></div></form></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=2515f6a0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactForm.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2912996b"
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=template&id=7c341c05&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('TheHeader'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('SearchPopup'), _vm._ssrNode(" "), _c('BreadcrumbOne', {
    attrs: {
      "items": _vm.items,
      "title": "We are an agency located in New York",
      "backgroundUrl": "/images/bg/breadcrumb-bg-five.jpg"
    }
  }), _vm._ssrNode(" "), _c('CallToActionOne'), _vm._ssrNode(" <div class=\"google-map-area section-padding-bottom\"><div class=\"container\"><div class=\"contact-map-area\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd\" allowfullscreen=\"allowfullscreen\" aria-hidden=\"false\" tabindex=\"0\" class=\"contact-map\"></iframe></div></div></div> "), _c('ContactForm'), _vm._ssrNode(" "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=template&id=7c341c05&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact-us.vue?vue&type=script&lang=js&
/* harmony default export */ var contact_usvue_type_script_lang_js_ = ({
  components: {
    TheHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117)),
    CallToActionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 133)),
    ContactForm: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 161)),
    TheFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122))
  },

  data() {
    return {
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Contact Us',
        active: true
      }]
    };
  },

  head() {
    return {
      title: 'Contact Us'
    };
  }

});
// CONCATENATED MODULE: ./pages/contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_usvue_type_script_lang_js_ = (contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "004d8fe0"
  
)

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(120).default,OffCanvasMobileMenu: __webpack_require__(116).default,SearchPopup: __webpack_require__(121).default,BreadcrumbOne: __webpack_require__(117).default,CallToActionOne: __webpack_require__(133).default,ContactForm: __webpack_require__(161).default,TheFooter: __webpack_require__(122).default})


/***/ })

};;
//# sourceMappingURL=contact-us.js.map