exports.ids = [54,11,27,30,37];
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/career/index.vue?vue&type=template&id=70a12d22&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('BreadcrumbOne', {
    attrs: {
      "items": _vm.items,
      "title": "DAFTAR KARIR YAYASAN YOHANNES GABRIEL",
      "backgroundUrl": "/images/bg/karir-bg.png"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-padding fix\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"mtn-50\">", "</div>", [_vm._ssrNode("<div class=\"order-lg-1 mt-50\">", "</div>", [_vm._ssrNode("<div class=\"row row-cols-1 no-gutters\">", "</div>", [_vm._ssrNode("<div class=\"section-padding-t90 section-padding-bottom-200\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row mt-4\">", "</div>", [_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-6 col-lg-6\">", "</div>", [_vm._ssrNode("<div class=\"about-image-area\">", "</div>", [_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/bg/karir-1.png\" alt=\"images\"></div> "), _c('ShapeWithAnimation', {
    attrs: {
      "addClassName": "shape-1",
      "dataDepth": "1",
      "imgSrc": "/images/shape-animation/about-shape-1.png"
    }
  })], 2)]), _vm._ssrNode(" <div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6\"><div class=\"about-content-area about-one\"><div class=\"section-title-two\" style=\"margin-top: 50px\"><h3 class=\"title\">Persyaratan</h3></div> <div class=\"details-list\"><li>Lulusan S1 Pendidikan</li> <li>IPK Min 3.00</li> <li>Disiplin, Tegas dan Berintegritas</li> <li>Agama Katolik / Kristen</li> <li>\n                          Memiliki kemampuan berbahas Inggris Menjadi Nilai\n                          Tambah\n                        </li></div> <div class=\"section-title-two\" style=\"margin-top: 100px\"><h3 class=\"title\">Berkas Lamaran Pekerjaan</h3></div> <div class=\"details-list\"><li>Surat Lamaran Pekerjaan</li> <li>Curriculum Vitae (CV)</li> <li>Scan Ijazah Terakhir dan Transkrip Nilai</li> <li>Pas Foto Terbaru (4 x 6)</li> <li>Scan Foto KTP</li> <li>Scan Foto KK</li> <li>\n                          Piagam-Piagam Penghargaan yang Mendukung (Jika ada)P\n                        </li></div></div></div>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"comment-form-wrap\">", "</div>", [_vm._ssrNode("<div class=\"comment-respond\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Formulir Pendaftaran</h3> "), _vm._ssrNode("<form action=\"#\" method=\"post\">", "</form>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 col-12 mb-3\"><input type=\"text\" placeholder=\"Nama Lengkap *\" name=\"name\"></div> <div class=\"col-md-6 col-12 mb-3\"></div> "), _vm._ssrNode("<div class=\"col-md-6 col-12 mb-3 mt-1\">", "</div>", [_c('b-form-select', {
    staticClass: "mb-3",
    staticStyle: {
      "font-size": "1rem"
    },
    attrs: {
      "size": "lg"
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c('b-form-select-option', {
          attrs: {
            "value": null,
            "disabled": ""
          }
        }, [_vm._v("-- Silahkan Pilih Jenis Kelamin\n                            --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.selected,
      callback: function ($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "perempuan"
    }
  }, [_vm._v("Perempuan")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "pria"
    }
  }, [_vm._v("Laki-laki")])], 1)], 1), _vm._ssrNode(" <div class=\"col-md-6 col-12 mb-3\"><input type=\"jurusan\" placeholder=\"Pendidikan Terakhir - Jurusan *\" name=\"jurusan\"></div> <div class=\"col-md-6 col-12 mb-3\"><input type=\"univ\" placeholder=\"Universitas/Institut/Sekolah Tinggi *\" name=\"univ\"></div> "), _vm._ssrNode("<div class=\"col-md-6 col-12 mb-3 mt-1\">", "</div>", [_c('b-form-select', {
    staticClass: "mb-3",
    staticStyle: {
      "font-size": "1rem"
    },
    attrs: {
      "size": "lg"
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c('b-form-select-option', {
          attrs: {
            "value": null,
            "disabled": ""
          }
        }, [_vm._v("-- Silahkan Pilih Agama --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.selected,
      callback: function ($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "katolik"
    }
  }, [_vm._v("Katolik")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "kristen"
    }
  }, [_vm._v("Kristen")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "hindu"
    }
  }, [_vm._v("Hindu")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "islam"
    }
  }, [_vm._v("Islam")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "buddha"
    }
  }, [_vm._v("Buddha")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "konghucu"
    }
  }, [_vm._v("Konghucu")])], 1)], 1), _vm._ssrNode(" <div class=\"col-12 mb-3\"><textarea name=\"message\" placeholder=\"Alamat\"></textarea></div> <div class=\"col-md-6 col-12 mb-3\"><input type=\"email\" placeholder=\"Email *\" name=\"email\"></div> <div class=\"col-md-6 col-12 mb-3\"><input type=\"phone\" placeholder=\"No. Handphone *\" name=\"phone\"></div> <div class=\"col-md-6 col-12 mb-3\"><input type=\"phone\" placeholder=\"No. Handphone *\" name=\"phone\"></div> "), _vm._ssrNode("<div class=\"col-md-6 col-12 mb-3 mt-1\">", "</div>", [_c('b-form-select', {
    staticClass: "mb-3",
    staticStyle: {
      "font-size": "1rem"
    },
    attrs: {
      "size": "lg"
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function () {
        return [_c('b-form-select-option', {
          attrs: {
            "value": null,
            "disabled": ""
          }
        }, [_vm._v("-- Silahkan Pilih Posisi Dilamar\n                            --")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.selected,
      callback: function ($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-tk"
    }
  }, [_vm._v("Guru TK")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-sd"
    }
  }, [_vm._v("Guru SD")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-tik"
    }
  }, [_vm._v("Guru TIK")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-pjok"
    }
  }, [_vm._v("Guru PJOK")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-tari"
    }
  }, [_vm._v("Guru Tari")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-agama"
    }
  }, [_vm._v("Guru Agama Katolik")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-mtk"
    }
  }, [_vm._v("Guru Matematika")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-ips"
    }
  }, [_vm._v("Guru IPS")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-kimia"
    }
  }, [_vm._v("Guru Kimia")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-eko"
    }
  }, [_vm._v("Guru Ekonomi")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-indo"
    }
  }, [_vm._v("Guru Bahasa Indonesia")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-inggris"
    }
  }, [_vm._v("Guru Bahasa Inggris")]), _vm._v(" "), _c('b-form-select-option', {
    attrs: {
      "value": "gr-jawa"
    }
  }, [_vm._v("Guru Bahasa Jawa")])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-6 col-12 mb-3 mt-2\">", "</div>", [_c('b-form-file', {
    attrs: {
      "state": Boolean(_vm.file1),
      "placeholder": "Silahkan Upload File CV Di sini...",
      "drop-placeholder": "Drop file here..."
    },
    model: {
      value: _vm.file1,
      callback: function ($$v) {
        _vm.file1 = $$v;
      },
      expression: "file1"
    }
  }), _vm._ssrNode(" <div class=\"mt-3\">" + _vm._ssrEscape("\n                        File Dipilih: " + _vm._s(_vm.file1 ? _vm.file1.name : "") + "\n                      ") + "</div>")], 2), _vm._ssrNode(" <div class=\"col-12 text-left\"><button class=\"btn btn-primary btn-hover-secondary\">\n                        Kirim\n                      </button></div>")], 2)])], 2)])], 2)])])])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/career/index.vue?vue&type=template&id=70a12d22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/career/index.vue?vue&type=script&lang=js&
/* harmony default export */ var careervue_type_script_lang_js_ = ({
  components: {
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117))
  },

  data() {
    return {
      selected: null,
      file1: null,
      file2: null,
      items: [{
        text: "Beranda",
        to: "/"
      }, {
        text: "Guru",
        active: true
      }]
    };
  },

  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted; // The following will be an empty string until a valid date is entered

      this.selected = ctx.selectedYMD;
    }

  },

  head() {
    return {
      title: "Form Pendaftaran"
    };
  }

});
// CONCATENATED MODULE: ./pages/career/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_careervue_type_script_lang_js_ = (careervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/career/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_careervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30baefd9"
  
)

/* harmony default export */ var career = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OffCanvasMobileMenu: __webpack_require__(116).default,BreadcrumbOne: __webpack_require__(117).default,ShapeWithAnimation: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=index.js.map