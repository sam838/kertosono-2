(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{374:function(t,e,n){var r=n(22);t.exports=function(t){return r(Set.prototype.values,t)}},380:function(t){t.exports=JSON.parse('[{"id":1,"title":"How your sales can work together in account-based marketing","slug":"how-your-sales-can-work-together-in-account-based-marketing","date":"Apr 06, 2021","view":70,"imgSrc":"/images/blog/370/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":8,"categories":["marketing","business","branding"],"tags":["marketing","business"]},{"id":2,"title":"The six things marketers need to understand about DTC marketing","slug":"the-six-things-marketers-need-to-understand-about-dtc-marketing","date":"Jun 26, 2021","view":92,"imgSrc":"/images/blog/370/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":9,"categories":["agency","digital"],"tags":["agency","digital"]},{"id":3,"title":"Eleven top tips for developing agile marketing","slug":"eleven-top-tips-for-developing-agile-marketing","date":"May 16, 2021","view":55,"imgSrc":"/images/blog/370/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":15,"categories":["branding","business"],"tags":["branding","business"]},{"id":4,"title":"A guide to latest trends product for this summer","slug":"a-guide-to-latest-trends-product-for-this-summer","date":"Feb 14, 2021","view":36,"imgSrc":"/images/blog/370/blog-4.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":40,"categories":["marketing","business"],"tags":["marketing","business"]},{"id":5,"title":"New winter collection with discount for this summer","slug":"new-winter-collection-with-discount-for-this-summer","date":"Aug 26, 2021","view":46,"imgSrc":"/images/blog/370/blog-5.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":32,"categories":["agency","digital"],"tags":["agency","digital"]},{"id":6,"title":"Make your store stand out from the others by business","slug":"make-your-store-stand-out-from-the-others-by-business","date":"Jun 22, 2021","view":34,"imgSrc":"/images/blog/370/blog-6.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":64,"categories":["branding","business"],"tags":["branding","business"]}]')},391:function(t,e,n){n(392)},392:function(t,e,n){"use strict";n(393)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(394))},393:function(t,e,n){"use strict";var r=n(10),o=n(16),c=n(13),d=n(104),l=n(36),f=n(229),v=n(156),h=n(158),m=n(19),w=n(29),y=n(12),S=n(159),k=n(81),_=n(163);t.exports=function(t,e,n){var T=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),R=T?"set":"add",C=o[t],E=C&&C.prototype,I=C,A={},N=function(t){var e=c(E[t]);l(E,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!w(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return x&&!w(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!w(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(d(t,!m(C)||!(x||E.forEach&&!y((function(){(new C).entries().next()})))))I=n.getConstructor(e,t,T,R),f.enable();else if(d(t,!0)){var O=new I,j=O[R](x?{}:-0,1)!=O,D=y((function(){O.has(1)})),z=S((function(t){new C(t)})),P=!x&&y((function(){for(var t=new C,e=5;e--;)t[R](e,e);return!t.has(-0)}));z||((I=e((function(t,e){h(t,E);var n=_(new C,t,I);return null!=e&&v(e,n[R],{that:n,AS_ENTRIES:T}),n}))).prototype=E,E.constructor=I),(D||P)&&(N("delete"),N("has"),T&&N("get")),(P||j)&&N(R),x&&E.clear&&delete E.clear}return A[t]=I,r({global:!0,constructor:!0,forced:I!=C},A),k(I,t),x||n.setStrong(I,t,T),I}},394:function(t,e,n){"use strict";var r=n(35).f,o=n(62),c=n(230),d=n(65),l=n(158),f=n(156),v=n(160),h=n(161),m=n(25),w=n(229).fastKey,y=n(58),S=y.set,k=y.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){l(t,y),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=r&&f(r,t[v],{that:t,AS_ENTRIES:n})})),y=h.prototype,_=k(e),T=function(t,e,n){var r,o,c=_(t),d=x(t,e);return d?d.value=n:(c.last=d={index:o=w(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=d),r&&(r.next=d),m?c.size++:t.size++,"F"!==o&&(c.index[o]=d)),t},x=function(t,e){var n,r=_(t),o=w(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y,{clear:function(){for(var t=_(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,n=_(e),r=x(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),m?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=_(this),r=d(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!x(this,t)}}),c(y,n?{get:function(t){var e=x(this,t);return e&&e.value},set:function(t,e){return T(this,0===t?0:t,e)}}:{add:function(t){return T(this,t=0===t?0:t,t)}}),m&&r(y,"size",{get:function(){return _(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=k(e),c=k(r);v(t,e,(function(t,e){S(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},395:function(t,e,n){"use strict";n(10)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:n(396)})},396:function(t,e,n){"use strict";var r=n(22),o=n(48),c=n(23);t.exports=function(){for(var t=c(this),e=o(t.add),n=0,d=arguments.length;n<d;n++)r(e,t,arguments[n]);return t}},397:function(t,e,n){"use strict";n(10)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:n(398)})},398:function(t,e,n){"use strict";var r=n(22),o=n(48),c=n(23);t.exports=function(){for(var t,e=c(this),n=o(e.delete),d=!0,l=0,f=arguments.length;l<f;l++)t=r(n,e,arguments[l]),d=d&&t;return!!d}},399:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),d=n(48),l=n(23),f=n(124),v=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=l(this),n=new(f(e,o("Set")))(e),r=d(n.delete);return v(t,(function(t){c(r,n,t)})),n}})},400:function(t,e,n){"use strict";var r=n(10),o=n(23),c=n(65),d=n(374),l=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),n=d(e),r=c(t,arguments.length>1?arguments[1]:void 0);return!l(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},401:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),d=n(48),l=n(23),f=n(65),v=n(124),h=n(374),m=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=l(this),n=h(e),r=f(t,arguments.length>1?arguments[1]:void 0),w=new(v(e,o("Set"))),y=d(w.add);return m(n,(function(t){r(t,t,e)&&c(y,w,t)}),{IS_ITERATOR:!0}),w}})},402:function(t,e,n){"use strict";var r=n(10),o=n(23),c=n(65),d=n(374),l=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),n=d(e),r=c(t,arguments.length>1?arguments[1]:void 0);return l(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},403:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),d=n(48),l=n(23),f=n(124),v=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=l(this),n=new(f(e,o("Set"))),r=d(e.has),h=d(n.add);return v(t,(function(t){c(r,e,t)&&c(h,n,t)})),n}})},404:function(t,e,n){"use strict";var r=n(10),o=n(22),c=n(48),d=n(23),l=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=d(this),n=c(e.has);return!l(t,(function(t,r){if(!0===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},405:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),d=n(48),l=n(19),f=n(23),v=n(125),h=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=v(this),n=f(t),r=n.has;return l(r)||(n=new(o("Set"))(t),r=d(n.has)),!h(e,(function(t,e){if(!1===c(r,n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},406:function(t,e,n){"use strict";var r=n(10),o=n(22),c=n(48),d=n(23),l=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=d(this),n=c(e.has);return!l(t,(function(t,r){if(!1===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},407:function(t,e,n){"use strict";var r=n(10),o=n(13),c=n(23),d=n(30),l=n(374),f=n(156),v=o([].join),h=[].push;r({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),n=l(e),r=void 0===t?",":d(t),o=[];return f(n,h,{that:o,IS_ITERATOR:!0}),v(o,r)}})},408:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(65),d=n(22),l=n(48),f=n(23),v=n(124),h=n(374),m=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=f(this),n=h(e),r=c(t,arguments.length>1?arguments[1]:void 0),w=new(v(e,o("Set"))),y=l(w.add);return m(n,(function(t){d(y,w,r(t,t,e))}),{IS_ITERATOR:!0}),w}})},409:function(t,e,n){"use strict";var r=n(10),o=n(48),c=n(23),d=n(374),l=n(156),f=TypeError;r({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),n=d(e),r=arguments.length<2,v=r?void 0:arguments[1];if(o(t),l(n,(function(n){r?(r=!1,v=n):v=t(v,n,n,e)}),{IS_ITERATOR:!0}),r)throw f("Reduce of empty set with no initial value");return v}})},410:function(t,e,n){"use strict";var r=n(10),o=n(23),c=n(65),d=n(374),l=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),n=d(e),r=c(t,arguments.length>1?arguments[1]:void 0);return l(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},411:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(22),d=n(48),l=n(23),f=n(124),v=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=l(this),n=new(f(e,o("Set")))(e),r=d(n.delete),h=d(n.add);return v(t,(function(t){c(r,n,t)||c(h,n,t)})),n}})},412:function(t,e,n){"use strict";var r=n(10),o=n(41),c=n(48),d=n(23),l=n(124),f=n(156);r({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=d(this),n=new(l(e,o("Set")))(e);return f(t,c(n.add),{that:n}),n}})},413:function(t,e,n){"use strict";var r=n(10),o=n(414),c=n(38),d=n(46),l=n(61),f=n(126);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=d(e),r=f(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:l(t)),r}})},414:function(t,e,n){"use strict";var r=n(105),o=n(46),c=n(162),d=n(65),l=function(t,e,source,n,f,v,h,m){for(var element,w,y=f,S=0,k=!!h&&d(h,m);S<n;)S in source&&(element=k?k(source[S],S,e):source[S],v>0&&r(element)?(w=o(element),y=l(t,e,element,w,y,v-1)-1):(c(y+1),t[y]=element),y++),S++;return y};t.exports=l},415:function(t,e,n){n(82)("flat")},419:function(t,e,n){"use strict";n.r(e);n(18);var r=n(32),o=(n(1),n(391),n(47),n(395),n(397),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(55),n(413),n(415),n(15),n(380)),c={data:function(){return{blogData:o}},computed:{allCategories:function(){return Object(r.a)(new Set(this.blogData.map((function(t){return t.categories})).flat()))},allTags:function(){return Object(r.a)(new Set(this.blogData.map((function(t){return t.tags})).flat()))}}},d=n(54),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-widget-wrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("h3",{staticClass:"sidebar-widget-title mb-2"},[t._v("Categories")]),t._v(" "),e("div",{staticClass:"sidebar-widget-content"},[e("ul",{staticClass:"sidebar-widget-cate-list"},t._l(t.allCategories,(function(n,i){return e("li",{key:i},[e("n-link",{attrs:{to:"/blog/categories/".concat(n)}},[e("span",{staticClass:"text"},[t._v(t._s(n))]),t._v(" "),e("span",{staticClass:"count"},[t._v(t._s(n.length))])])],1)})),0)])]),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("h3",{staticClass:"sidebar-widget-title mb-2"},[t._v("Popular Posts")]),t._v(" "),e("div",{staticClass:"sidebar-widget-content"},[e("ul",{staticClass:"sidebar-widget-list-post"},t._l(t.blogData,(function(n,i){return e("li",{key:i},[e("span",{staticClass:"cate"},t._l(n.categories.slice(0,1),(function(n,i){return e("n-link",{key:i,attrs:{to:"/blog/categories/".concat(n)}},[t._v("\n                            "+t._s(n)+"\n                        ")])})),1),t._v(" "),e("n-link",{attrs:{to:"/blog/".concat(n.slug)}},[t._v(" \n                        "+t._s(n.title)+"\n                    ")])],1)})),0)])]),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("div",{staticClass:"sidebar-widget-content"},[e("div",{staticClass:"sidebar-widget-banner bg-cover",style:{backgroundImage:"url('/images/bg/breadcrumb-bg.jpg')"},attrs:{"data-overlay":"0.7"}},[e("h3",{staticClass:"title"},[t._v("Subscribe to our newsletter")]),t._v(" "),e("p",[t._v("All the latest marketing news, including updates on brand campaigns, and the most interesting insights")]),t._v(" "),e("n-link",{attrs:{to:""}},[t._v("Subscribe Now")])],1)])]),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("h3",{staticClass:"sidebar-widget-title"},[t._v("Popular tags")]),t._v(" "),e("div",{staticClass:"sidebar-widget-content"},[e("div",{staticClass:"tagcloud"},t._l(t.allTags,(function(n,i){return e("n-link",{key:i,attrs:{to:"/blog/tags/".concat(n)}},[t._v("\n                    "+t._s(n)+"\n                ")])})),1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"sidebar-widget"},[t("div",{staticClass:"sidebar-widget-content"},[t("div",{staticClass:"sidebar-widget-search"},[t("form",[t("input",{attrs:{type:"text",placeholder:"Search..."}}),this._v(" "),t("button",[t("i",{staticClass:"fas fa-search"})])])])])])}],!1,null,null,null);e.default=component.exports}}]);