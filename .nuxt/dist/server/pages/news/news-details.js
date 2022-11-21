exports.ids = [60,11,27,30];
exports.modules = {

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

/***/ 123:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"How your sales can work together in account-based marketing\",\"slug\":\"how-your-sales-can-work-together-in-account-based-marketing\",\"date\":\"Apr 06, 2021\",\"view\":70,\"imgSrc\":\"/images/blog/370/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":8,\"categories\":[\"marketing\",\"business\",\"branding\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":2,\"title\":\"The six things marketers need to understand about DTC marketing\",\"slug\":\"the-six-things-marketers-need-to-understand-about-dtc-marketing\",\"date\":\"Jun 26, 2021\",\"view\":92,\"imgSrc\":\"/images/blog/370/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":9,\"categories\":[\"agency\",\"digital\"],\"tags\":[\"agency\",\"digital\"]},{\"id\":3,\"title\":\"Eleven top tips for developing agile marketing\",\"slug\":\"eleven-top-tips-for-developing-agile-marketing\",\"date\":\"May 16, 2021\",\"view\":55,\"imgSrc\":\"/images/blog/370/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":15,\"categories\":[\"branding\",\"business\"],\"tags\":[\"branding\",\"business\"]},{\"id\":4,\"title\":\"A guide to latest trends product for this summer\",\"slug\":\"a-guide-to-latest-trends-product-for-this-summer\",\"date\":\"Feb 14, 2021\",\"view\":36,\"imgSrc\":\"/images/blog/370/blog-4.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":40,\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":5,\"title\":\"New winter collection with discount for this summer\",\"slug\":\"new-winter-collection-with-discount-for-this-summer\",\"date\":\"Aug 26, 2021\",\"view\":46,\"imgSrc\":\"/images/blog/370/blog-5.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":32,\"categories\":[\"agency\",\"digital\"],\"tags\":[\"agency\",\"digital\"]},{\"id\":6,\"title\":\"Make your store stand out from the others by business\",\"slug\":\"make-your-store-stand-out-from-the-others-by-business\",\"date\":\"Jun 22, 2021\",\"view\":34,\"imgSrc\":\"/images/blog/370/blog-6.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":64,\"categories\":[\"branding\",\"business\"],\"tags\":[\"branding\",\"business\"]}]");

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/news-details.vue?vue&type=template&id=5f351405&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('OffCanvasMobileMenu'), _vm._ssrNode(" "), _c('BreadcrumbOne', {
    attrs: {
      "items": _vm.items,
      "title": "Berita",
      "backgroundUrl": "/images/bg/news-banner.png"
    }
  }), _vm._ssrNode(" <div class=\"section-padding fix\"><div class=\"container\"><div class=\"mtn-50\"><div class=\"order-lg-1 mt-50\"><div class=\"row row-cols-1 no-gutters\">" + _vm._ssrList(_vm.newsData, function (newsData, index) {
    return "<div class=\"col mt-30\"><div data-aos=\"fade-up\" class=\"blog-3 blog-details col\"><div class=\"info\"><div class=\"thumbnail\"><img alt=\"Blog Image\"" + _vm._ssrAttr("src", newsData.imgSrc) + " class=\"w-100\"></div> <ul class=\"meta mb-0 mt-4\"><li><i class=\"fal fa-pencil-alt\"></i>" + _vm._ssrEscape("Ditulis oleh " + _vm._s(newsData.author) + ", " + _vm._s(newsData.date) + "\n                  ") + "</li> <li class=\"media\"><a href=\"#\"><i class=\"fas fa-share-alt\"></i>Bagikan Berita</a> <div class=\"list\"><a href=\"#\"><i class=\"fab fa-facebook-f\" style=\"font-size:24px\"></i></a> <a href=\"#\"><i class=\"fab fa-twitter\" style=\"font-size:24px\"></i></a> <a href=\"#\"><i class=\"fab fa-whatsapp-square\" style=\"font-size:24px\"></i></a></div></li></ul></div> <div class=\"info\"><h3 class=\"title\" style=\"text-align: center\">" + _vm._ssrEscape("\n                  " + _vm._s(newsData.title) + "\n                ") + "</h3> <div class=\"desc\" style=\"text-align: justify\">" + _vm._ssrEscape("\n                 " + _vm._s(newsData.desc) + "\n                ") + "</div></div></div></div>";
  }) + "</div></div></div></div></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/news/news-details.vue?vue&type=template&id=5f351405&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/news-details.vue?vue&type=script&lang=js&

/* harmony default export */ var news_detailsvue_type_script_lang_js_ = ({
  components: {
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 116)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117))
  },

  data() {
    return {
      newsData: [{
        imgSrc: "/images/home/news-detail.png",
        title: "SDK St. Yusup Tropodo Sambut Bersama Masa Pertobatan Melalui Ibadat Prapaskah",
        author: "Admin",
        date: "4 Maret 2022",
        desc: "Memasuki Masa Prapaskah, SDK St. Yusup Tropodo menyelenggarakan ibadat untuk mengajak para siswa dalam menyambut masa pertobatan. Ibadat ini diselenggarakan secara daring pada Selasa, 1 Maret 2022 lalu. Megambil tema “Bersatu dengan Yesus dalam Ekaristi”, kegiatan Ibadat ini melibatkan seluruh siswa dari kelas 1 hingga kelas 6 . Tema “Bersatu dengan Yesus dalam Ekaristi” ini diambil selaras dengan tema Keuskupan Surabaya, dimana kita sebagai Umat Katolik perlu kembali Bersatu dengan Yesus melalui Sakramen Ekaristi dimanapun berada. Meski merayakan Ekaristis dari rumah pun, diharapkan umat tetap dapat merasakan kesatuan dengan Kristus itu sendiri. Ibadat Prapaskah SDK St. Yusup Tropodo ini diselenggarakan dari pukul 07.00 – 10.00 dengan terbagi menjadi 3 sesi. Dalam Ibadat ini, para siswa diajak untuk mendengarkan Firman Tuhan, menyanyikan lagu, memahami pertobatan, membaca dan mendapatkan tugas ayat hafalan. Cara Hidup Jemaat Pertama yang tertuang dalam Kisah Para Rasul 2 : 41 -47 menjadi bahan perunangan siswa dalam menyambut masa Pra-paskah. Peserta yang hadir mencapai kurang lebih 500 siswa ini bersama-sama menyambut masa Prapraskah dengan antusias. Antusiasme siswa terlihat dari sikap mereka terhadap materi yang disampaikan. Tidak hanya itu, para siswa juga menyanyi serta memuji Tuhan dengan meriah. Pada dasarnya tujuan utama kegiatan Ibadat ini yakni agar siswa dapat mengenali, memahami, serta memaknai makna puasa-pantang dalam masa pertobatan. Para siswa juga diajak untuk menerapkan 5B dalam masa Pra-Paskah; yakni bertobat, berdoa, baca firman, berderma, dan berpuasa atau berpantang. "
      }],
      items: [{
        text: "Beranda",
        to: "/"
      }, {
        text: "Berita",
        active: true
      }]
    };
  },

  head() {
    return {
      title: "Detail Berita"
    };
  }

});
// CONCATENATED MODULE: ./pages/news/news-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_news_detailsvue_type_script_lang_js_ = (news_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/news/news-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_news_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77ea4d9c"
  
)

/* harmony default export */ var news_details = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OffCanvasMobileMenu: __webpack_require__(116).default,BreadcrumbOne: __webpack_require__(117).default})


/***/ })

};;
//# sourceMappingURL=news-details.js.map