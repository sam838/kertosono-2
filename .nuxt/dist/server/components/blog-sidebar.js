exports.ids = [9];
exports.modules = {

/***/ 123:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"How your sales can work together in account-based marketing\",\"slug\":\"how-your-sales-can-work-together-in-account-based-marketing\",\"date\":\"Apr 06, 2021\",\"view\":70,\"imgSrc\":\"/images/blog/370/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":8,\"categories\":[\"marketing\",\"business\",\"branding\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":2,\"title\":\"The six things marketers need to understand about DTC marketing\",\"slug\":\"the-six-things-marketers-need-to-understand-about-dtc-marketing\",\"date\":\"Jun 26, 2021\",\"view\":92,\"imgSrc\":\"/images/blog/370/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":9,\"categories\":[\"agency\",\"digital\"],\"tags\":[\"agency\",\"digital\"]},{\"id\":3,\"title\":\"Eleven top tips for developing agile marketing\",\"slug\":\"eleven-top-tips-for-developing-agile-marketing\",\"date\":\"May 16, 2021\",\"view\":55,\"imgSrc\":\"/images/blog/370/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":15,\"categories\":[\"branding\",\"business\"],\"tags\":[\"branding\",\"business\"]},{\"id\":4,\"title\":\"A guide to latest trends product for this summer\",\"slug\":\"a-guide-to-latest-trends-product-for-this-summer\",\"date\":\"Feb 14, 2021\",\"view\":36,\"imgSrc\":\"/images/blog/370/blog-4.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":40,\"categories\":[\"marketing\",\"business\"],\"tags\":[\"marketing\",\"business\"]},{\"id\":5,\"title\":\"New winter collection with discount for this summer\",\"slug\":\"new-winter-collection-with-discount-for-this-summer\",\"date\":\"Aug 26, 2021\",\"view\":46,\"imgSrc\":\"/images/blog/370/blog-5.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":32,\"categories\":[\"agency\",\"digital\"],\"tags\":[\"agency\",\"digital\"]},{\"id\":6,\"title\":\"Make your store stand out from the others by business\",\"slug\":\"make-your-store-stand-out-from-the-others-by-business\",\"date\":\"Jun 22, 2021\",\"view\":34,\"imgSrc\":\"/images/blog/370/blog-6.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":64,\"categories\":[\"branding\",\"business\"],\"tags\":[\"branding\",\"business\"]}]");

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=template&id=5e02534e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "sidebar-widget-wrapper"
  }, [_vm._ssrNode("<div class=\"sidebar-widget\"><div class=\"sidebar-widget-content\"><div class=\"sidebar-widget-search\"><form><input type=\"text\" placeholder=\"Search...\"> <button><i class=\"fas fa-search\"></i></button></form></div></div></div> "), _vm._ssrNode("<div class=\"sidebar-widget\">", "</div>", [_vm._ssrNode("<h3 class=\"sidebar-widget-title mb-2\">Categories</h3> "), _vm._ssrNode("<div class=\"sidebar-widget-content\">", "</div>", [_vm._ssrNode("<ul class=\"sidebar-widget-cate-list\">", "</ul>", _vm._l(_vm.allCategories, function (category, i) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      attrs: {
        "to": `/blog/categories/${category}`
      }
    }, [_c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(category))]), _vm._v(" "), _c('span', {
      staticClass: "count"
    }, [_vm._v(_vm._s(category.length))])])], 1);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sidebar-widget\">", "</div>", [_vm._ssrNode("<h3 class=\"sidebar-widget-title mb-2\">Popular Posts</h3> "), _vm._ssrNode("<div class=\"sidebar-widget-content\">", "</div>", [_vm._ssrNode("<ul class=\"sidebar-widget-list-post\">", "</ul>", _vm._l(_vm.blogData, function (blog, i) {
    return _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<span class=\"cate\">", "</span>", _vm._l(blog.categories.slice(0, 1), function (cat, i) {
      return _c('n-link', {
        key: i,
        attrs: {
          "to": `/blog/categories/${cat}`
        }
      }, [_vm._v("\n                            " + _vm._s(cat) + "\n                        ")]);
    }), 1), _vm._ssrNode(" "), _c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_vm._v(" \n                        " + _vm._s(blog.title) + "\n                    ")])], 2);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sidebar-widget\">", "</div>", [_vm._ssrNode("<div class=\"sidebar-widget-content\">", "</div>", [_vm._ssrNode("<div data-overlay=\"0.7\" class=\"sidebar-widget-banner bg-cover\"" + _vm._ssrStyle(null, {
    backgroundImage: `url('/images/bg/breadcrumb-bg.jpg')`
  }, null) + ">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Subscribe to our newsletter</h3> <p>All the latest marketing news, including updates on brand campaigns, and the most interesting insights</p> "), _c('n-link', {
    attrs: {
      "to": ""
    }
  }, [_vm._v("Subscribe Now")])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sidebar-widget\">", "</div>", [_vm._ssrNode("<h3 class=\"sidebar-widget-title\">Popular tags</h3> "), _vm._ssrNode("<div class=\"sidebar-widget-content\">", "</div>", [_vm._ssrNode("<div class=\"tagcloud\">", "</div>", _vm._l(_vm.allTags, function (tag, i) {
    return _c('n-link', {
      key: i,
      attrs: {
        "to": `/blog/tags/${tag}`
      }
    }, [_vm._v("\n                    " + _vm._s(tag) + "\n                ")]);
  }), 1)])], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=template&id=5e02534e&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(107);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(108);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(109);

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=script&lang=js&

















/* harmony default export */ var BlogSidebarvue_type_script_lang_js_ = ({
  data() {
    return {
      blogData: blog
    };
  },

  computed: {
    allCategories() {
      return [...new Set(this.blogData.map(item => item.categories).flat())];
    },

    allTags() {
      return [...new Set(this.blogData.map(item => item.tags).flat())];
    }

  }
});
// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSidebarvue_type_script_lang_js_ = (BlogSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "663a3a7e"
  
)

/* harmony default export */ var BlogSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-sidebar.js.map