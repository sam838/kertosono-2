(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{390:function(t){t.exports=JSON.parse('{"portfolios":[{"id":1,"imgSrc":"/images/portfolio/portfolio-1.jpg","title":"Digital marketing","category":"development"},{"id":2,"imgSrc":"/images/portfolio/portfolio-2.jpg","title":"App Development","category":"app design"},{"id":3,"imgSrc":"/images/portfolio/portfolio-3.jpg","title":"Graphics Design","category":"marketing"},{"id":4,"imgSrc":"/images/portfolio/portfolio-4.jpg","title":"Web Development","category":"software"},{"id":5,"imgSrc":"/images/portfolio/portfolio-5.jpg","title":"Construction Project","category":"design"},{"id":6,"imgSrc":"/images/portfolio/portfolio-6.jpg","title":"Illustration Design","category":"app"}]}')},476:function(t,o,e){"use strict";e.r(o);var l=e(390),r={data:function(){return{portfolioData:l,mixer:null}},mounted:function(){var t=this;this.$nextTick((function(){var o=document.querySelector(".box");t.mixer=new t.mixitup(o)}))}},n=e(54),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"section-padding",style:{backgroundColor:"#f8faff"}},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box"},t._l(t.portfolioData.portfolios,(function(e,l){return o("div",{key:l,staticClass:"col mix",class:e.category},[o("div",{staticClass:"single-portfolio"},[o("div",{staticClass:"thumbnail"},[o("img",{staticClass:"img-fluid",attrs:{src:e.imgSrc,alt:e.title}})]),t._v(" "),o("div",{staticClass:"content"},[o("h5",{staticClass:"title"},[o("n-link",{attrs:{to:"/project/project-details"}},[t._v(t._s(e.title))])],1)])])])})),0)])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"row align-items-center mb-30"},[o("div",{staticClass:"col-lg-5"},[o("div",{staticClass:"section-title-two"},[o("span",{staticClass:"sub-title"},[t._v("Portfolios")]),t._v(" "),o("h3",{staticClass:"title"},[t._v("Selected works.")])])]),t._v(" "),o("div",{staticClass:"col-lg-7"},[o("div",{staticClass:"messonry-button text-lg-right text-left"},[o("button",{attrs:{"data-filter":"all"}},[o("span",{staticClass:"filter-text"},[t._v("All")])]),t._v(" "),o("button",{attrs:{"data-filter":".app"}},[o("span",{staticClass:"filter-text"},[t._v("App")])]),t._v(" "),o("button",{attrs:{"data-filter":".development"}},[o("span",{staticClass:"filter-text"},[t._v("Development")])]),t._v(" "),o("button",{attrs:{"data-filter":".marketing"}},[o("span",{staticClass:"filter-text"},[t._v("Marketing")])]),t._v(" "),o("button",{attrs:{"data-filter":".software"}},[o("span",{staticClass:"filter-text"},[t._v("Software")])]),t._v(" "),o("button",{attrs:{"data-filter":".design"}},[o("span",{staticClass:"filter-text"},[t._v("Design")])])])])])}],!1,null,null,null);o.default=component.exports}}]);