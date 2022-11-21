exports.ids = [56,0,4,6,7,8,10,12,14,20,21,22,26,27,28,30,32,34,37,40,41,42,43,44,45];
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

/***/ 127:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Branding\",\"slug\":\"branding\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-target.svg\",\"imgSrc\":\"/images/project/work-details-1.jpg\"},{\"id\":2,\"title\":\"UX Design\",\"slug\":\"ux-design\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture-multiple.svg\",\"imgSrc\":\"/images/project/work-details-2.jpg\"},{\"id\":3,\"title\":\"Strategy\",\"slug\":\"strategy\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-picture.svg\",\"imgSrc\":\"/images/project/work-details-3.jpg\"},{\"id\":4,\"title\":\"E-commerce\",\"slug\":\"e-commerce\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-ecommerce-cart-plus.svg\",\"imgSrc\":\"/images/project/work-details-4.jpg\"},{\"id\":5,\"title\":\"Marketing\",\"slug\":\"marketing\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-display.svg\",\"imgSrc\":\"/images/project/work-details-1.jpg\"},{\"id\":6,\"title\":\"Development\",\"slug\":\"development\",\"text\":\"First impressions count! Make sure your brand works for you. We offer digital marketing.\",\"iconSrc\":\"/images/svg/linea/linea-basic-gear.svg\",\"imgSrc\":\"/images/project/work-details-2.jpg\"}]");

/***/ }),

/***/ 128:
/***/ (function(module) {

module.exports = JSON.parse("[{\"count\":650,\"text\":\"Happy Clients\"},{\"count\":780,\"text\":\"finished projects\"},{\"count\":245,\"text\":\"skilled experts\"},{\"count\":980,\"text\":\"media posts\"}]");

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

/***/ 132:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"id\":1,\"imgSrc\":\"/images/portfolio/portfolio-1.jpg\",\"title\":\"Digital marketing\",\"category\":\"development\"},{\"id\":2,\"imgSrc\":\"/images/portfolio/portfolio-2.jpg\",\"title\":\"App Development\",\"category\":\"app design\"},{\"id\":3,\"imgSrc\":\"/images/portfolio/portfolio-3.jpg\",\"title\":\"Graphics Design\",\"category\":\"marketing\"},{\"id\":4,\"imgSrc\":\"/images/portfolio/portfolio-4.jpg\",\"title\":\"Web Development\",\"category\":\"software\"},{\"id\":5,\"imgSrc\":\"/images/portfolio/portfolio-5.jpg\",\"title\":\"Construction Project\",\"category\":\"design\"},{\"id\":6,\"imgSrc\":\"/images/portfolio/portfolio-6.jpg\",\"title\":\"Illustration Design\",\"category\":\"app\"}]}");

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

/***/ 138:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"logo\":\"/images/brand/client-logo-01.png\",\"alt\":\"brand logo\"},{\"id\":2,\"logo\":\"/images/brand/client-logo-02.png\",\"alt\":\"brand logo\"},{\"id\":3,\"logo\":\"/images/brand/client-logo-03.png\",\"alt\":\"brand logo\"},{\"id\":4,\"logo\":\"/images/brand/client-logo-04.png\",\"alt\":\"brand logo\"},{\"id\":5,\"logo\":\"/images/brand/client-logo-05.png\",\"alt\":\"brand logo\"},{\"id\":6,\"logo\":\"/images/brand/client-logo-06.png\",\"alt\":\"brand logo\"}]");

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFcat.vue?vue&type=template&id=3c60cc80&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 mx-auto\">", "</div>", [_c('div', {
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
  }), 0)])])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunFcat.vue?vue&type=template&id=3c60cc80&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(93);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/funfacts.json
var funfacts = __webpack_require__(128);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFcat.vue?vue&type=script&lang=js&


/* harmony default export */ var FunFcatvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/FunFcat.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunFcatvue_type_script_lang_js_ = (FunFcatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFcat.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFcatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7916ee36"
  
)

/* harmony default export */ var FunFcat = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=template&id=a52c4d90&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90-b100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "title": "We create a unique action plan for brands",
      "sub-title": "Get your company heading in the right direction with our digital marketing strategist",
      "add-class-name": "mb-60"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\">", "</div>", _vm._l(_vm.serviceData.slice(0, 3), function (feature, index) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("icon-box text-center", _vm.addClassName) + ">", "</div>", [_vm._ssrNode("<div class=\"icon\"><img" + _vm._ssrAttr("src", feature.iconSrc) + _vm._ssrAttr("alt", feature.title) + "></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">" + _vm._ssrEscape(_vm._s(feature.title)) + "</h3> <div class=\"desc\"><p>" + _vm._ssrEscape(_vm._s(feature.text)) + "</p></div> "), _c('n-link', {
      staticClass: "link",
      attrs: {
        "to": `/service/${feature.slug}`
      }
    }, [_vm._v("View Details")])], 2)], 2)]);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=template&id=a52c4d90&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=script&lang=js&

/* harmony default export */ var FeatureOnevue_type_script_lang_js_ = ({
  props: ["addClassName"],
  components: {
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118))
  },

  data() {
    return {
      serviceData: service
    };
  }

});
// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureOnevue_type_script_lang_js_ = (FeatureOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeatureOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ae71079"
  
)

/* harmony default export */ var FeatureOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(118).default})


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


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioGalleryTwo.vue?vue&type=template&id=6a4d0529&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding"
  }, [_vm._ssrNode("<div class=\"container-fluid px-0\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title\">Great even greater creative works</h2> <p class=\"sub-title\">Get your company heading in the right direction with our digital marketing strategist</p></div> <div class=\"messonry-button text-center mb-60\"><button data-filter=\"all\"><span class=\"filter-text\">All</span></button> <button data-filter=\".app\"><span class=\"filter-text\">App</span></button> <button data-filter=\".development\"><span class=\"filter-text\">Development</span></button> <button data-filter=\".marketing\"><span class=\"filter-text\">Marketing</span></button> <button data-filter=\".software\"><span class=\"filter-text\">Software</span></button> <button data-filter=\".design\"><span class=\"filter-text\">Design</span></button></div> "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box\">", "</div>", _vm._l(_vm.portfolioData.portfolios, function (portfolio, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col mix", portfolio.category) + ">", "</div>", [_vm._ssrNode("<div class=\"single-portfolio\">", "</div>", [_vm._ssrNode("<div class=\"thumbnail\"><img" + _vm._ssrAttr("src", portfolio.imgSrc) + _vm._ssrAttr("alt", portfolio.title) + " class=\"img-fluid\"></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"title\">", "</h5>", [_c('n-link', {
      attrs: {
        "to": "/project/project-details"
      }
    }, [_vm._v(_vm._s(portfolio.title))])], 1)])], 2)]);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PortfolioGalleryTwo.vue?vue&type=template&id=6a4d0529&

// EXTERNAL MODULE: ./data/portfolios.json
var portfolios = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioGalleryTwo.vue?vue&type=script&lang=js&

/* harmony default export */ var PortfolioGalleryTwovue_type_script_lang_js_ = ({
  data() {
    return {
      portfolioData: portfolios,
      mixer: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/PortfolioGalleryTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioGalleryTwovue_type_script_lang_js_ = (PortfolioGalleryTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioGalleryTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioGalleryTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ee9912e"
  
)

/* harmony default export */ var PortfolioGalleryTwo = __webpack_exports__["default"] = (component.exports);

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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSectionOne.vue?vue&type=template&id=152a592a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90-b100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('SectionTitle', {
    attrs: {
      "title": "We are a full-service creative agency",
      "sub-title": "Our team of designers, developers and creatives are perfectionists who love what they do and love"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60\">", "</div>", _vm._l(_vm.blogData.slice(0, 3), function (blog, index) {
    return _vm._ssrNode("<div class=\"col mt-30\">", "</div>", [_c('BlogGridItem', {
      attrs: {
        "blog": blog
      }
    })], 1);
  }), 0)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogSectionOne.vue?vue&type=template&id=152a592a&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSectionOne.vue?vue&type=script&lang=js&

/* harmony default export */ var BlogSectionOnevue_type_script_lang_js_ = ({
  data() {
    return {
      blogData: blog
    };
  },

  components: {
    BlogGridItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 125)),
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 118))
  }
});
// CONCATENATED MODULE: ./components/BlogSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSectionOnevue_type_script_lang_js_ = (BlogSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "88380d28"
  
)

/* harmony default export */ var BlogSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(118).default,BlogGridItem: __webpack_require__(125).default})


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

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSliderTwo.vue?vue&type=template&id=14336725&
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
      staticClass: "intro-content m-auto text-center"
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

// CONCATENATED MODULE: ./components/HeroSliderTwo.vue?vue&type=template&id=14336725&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSliderTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroSliderTwovue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        autoplay: false,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      sliderData: [{
        id: 1,
        heading: "Designing awesome brands & experiences",
        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
        bgImgSrc: "/images/hero-image/hero-3.jpg"
      }, {
        id: 2,
        heading: "Designing awesome brands & experiences",
        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
        bgImgSrc: "/images/hero-image/hero-4.jpg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/HeroSliderTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroSliderTwovue_type_script_lang_js_ = (HeroSliderTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroSliderTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSliderTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27673e10"
  
)

/* harmony default export */ var HeroSliderTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutThree.vue?vue&type=template&id=77ab334f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-t90-b100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 m-auto\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"about-content-full text-center mb-50\">", "</div>", [_vm._ssrNode("<h2 class=\"title\">Creative agency focused on vision, product and people</h2> <p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences.</p> "), _c('n-link', {
    staticClass: "link",
    attrs: {
      "to": "/about"
    }
  }, [_c('mark', [_vm._v("Read More")])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"video-popup-area video-three\">", "</div>", [_vm._ssrNode("<div class=\"skill-video\">", "</div>", [_c('client-only', [_c('silent-box', {
    attrs: {
      "image": _vm.videos[0]
    },
    scopedSlots: _vm._u([{
      key: "silentbox-item",
      fn: function () {
        return [_c('img', {
          staticClass: "image",
          attrs: {
            "src": "/images/video/about-video.jpg",
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

// CONCATENATED MODULE: ./components/AboutThree.vue?vue&type=template&id=77ab334f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutThree.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutThreevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/AboutThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutThreevue_type_script_lang_js_ = (AboutThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56185a7a"
  
)

/* harmony default export */ var AboutThree = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(111).default})


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-three.vue?vue&type=template&id=42ffca36&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('TheHeader'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('SearchPopup'), _vm._ssrNode(" "), _c('HeroSliderTwo'), _vm._ssrNode(" "), _c('AboutThree'), _vm._ssrNode(" "), _c('FunFcat', {
    style: {
      backgroundColor: '#f8faff'
    }
  }), _vm._ssrNode(" "), _c('FeatureOne', {
    attrs: {
      "addClassName": "box-border"
    }
  }), _vm._ssrNode(" "), _c('FaqOne'), _vm._ssrNode(" "), _c('PortfolioGalleryTwo'), _vm._ssrNode(" "), _c('TeamOne', {
    style: {
      backgroundColor: '#f8faff'
    }
  }), _vm._ssrNode(" "), _c('TestimonialSectionOne'), _vm._ssrNode(" "), _c('CallToActionTwo'), _vm._ssrNode(" "), _c('BlogSectionOne'), _vm._ssrNode(" "), _c('CallToActionOne', {
    style: {
      backgroundColor: '#f8faff'
    }
  }), _vm._ssrNode(" "), _c('BrandLogoCarousel'), _vm._ssrNode(" "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home-three.vue?vue&type=template&id=42ffca36&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-three.vue?vue&type=script&lang=js&
/* harmony default export */ var home_threevue_type_script_lang_js_ = ({
  components: {
    TheHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 121)),
    HeroSliderTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 150)),
    AboutThree: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 151)),
    FunFcat: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 139)),
    FeatureOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 140)),
    FaqOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 141)),
    PortfolioGalleryTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 142)),
    TeamOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 143)),
    TestimonialSectionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 135)),
    CallToActionTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124)),
    BlogSectionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 144)),
    CallToActionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 133)),
    BrandLogoCarousel: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 145)),
    TheFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 122))
  },

  head() {
    return {
      title: 'Home-3'
    };
  }

});
// CONCATENATED MODULE: ./pages/home-three.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_threevue_type_script_lang_js_ = (home_threevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home-three.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_threevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "29237955"
  
)

/* harmony default export */ var home_three = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(120).default,OffCanvasMobileMenu: __webpack_require__(116).default,SearchPopup: __webpack_require__(121).default,HeroSliderTwo: __webpack_require__(150).default,AboutThree: __webpack_require__(151).default,FunFcat: __webpack_require__(139).default,FeatureOne: __webpack_require__(140).default,FaqOne: __webpack_require__(141).default,PortfolioGalleryTwo: __webpack_require__(142).default,TeamOne: __webpack_require__(143).default,TestimonialSectionOne: __webpack_require__(135).default,CallToActionTwo: __webpack_require__(124).default,BlogSectionOne: __webpack_require__(144).default,CallToActionOne: __webpack_require__(133).default,BrandLogoCarousel: __webpack_require__(145).default,TheFooter: __webpack_require__(122).default})


/***/ })

};;
//# sourceMappingURL=home-three.js.map