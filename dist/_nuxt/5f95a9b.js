(window.webpackJsonp=window.webpackJsonp||[]).push([[54,1,9,13,16,29,30,32,36,39,46,47],{366:function(t,e,n){"use strict";n.r(e);n(1),n(3);var o=n(375),l=n.n(o),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new l.a(t)}))}},c=n(54),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shape scene",class:t.addClassName},[e("span",{attrs:{"data-depth":t.dataDepth}},[e("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("3816dc61",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(367)},369:function(t,e,n){var o=n(56)(!1);o.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=o},370:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){v()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},l=(n(368),n(54)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("Tentang")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/unit"}},[t._v("Unit")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/news"}},[t._v("Berita")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/ppdb"}},[t._v("PPDB")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/career"}},[t._v("Karir")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,370))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{staticStyle:{color:"white"},attrs:{to:"/"}},[e("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/yoga-logo.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(370).default})},372:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:t.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);var o={name:"SectionTitle",props:["title","subTitle","addClassName"]},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title text-center",class:t.addClassName,attrs:{"data-aos":"fade-up"}},[e("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var o=n(54),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"site-main-menu"},[e("ul",[e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home One")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/home-two"}},[t._v("Home Two")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/home-three"}},[t._v("Home Three")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/service"}},[t._v("Service")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/service/branding"}},[t._v("Service Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog Grid")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-classic"}},[t._v("Blog Classic")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,376))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"header-inner"},[e("div",{staticClass:"container position-relative"},[e("div",{staticClass:"row justify-content-between align-items-center"},[e("div",{staticClass:"col-xl-2 col-auto order-0"},[e("div",{staticClass:"header-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}}),t._v(" "),e("img",{staticClass:"light-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[e("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[e("Navigation")],1),t._v(" "),e("div",{staticClass:"header-search-area"},[e("div",{staticClass:"header-search"},[e("button",{staticClass:"header-search-toggle",on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[e("i",{staticClass:"fas fa-search"})])])]),t._v(" "),e("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[e("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("i",{staticClass:"icon-top"}),t._v(" "),e("i",{staticClass:"icon-middle"}),t._v(" "),e("i",{staticClass:"icon-bottom"})])])]),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"},[t("a",{staticClass:"btn btn-light btn-hover-primary",attrs:{href:"https://1.envato.market/VLbOj",target:"_blank"}},[this._v("Buy Now")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(376).default})},378:function(t,e,n){"use strict";n.r(e);var o={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[e("div",{staticClass:"sidebar-search-icon"},[e("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[e("i",{staticClass:"fas fa-times"})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-search-input"},[e("form",[e("div",{staticClass:"form-search"},[e("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),t._v(" "),e("button",[e("i",{staticClass:"fas fa-search"})])])]),t._v(" "),e("p",{staticClass:"form-description"},[t._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);var footer=n(157),o={data:function(){return{footerData:footer}}},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row section-padding pt-0 mtn-30"},[e("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[e("div",{staticClass:"footer-widget"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:t.footerData.footerAboutWidget.logoSrc,alt:"Logo"}})])],1),t._v(" "),e("div",{staticClass:"footer-widget-content"},[e("div",{staticClass:"content"},[e("a",{attrs:{href:"tel:(+1)212-946-2701"}},[t._v(t._s(t.footerData.footerAboutWidget.telephone))]),t._v(" "),e("a",{attrs:{href:"mailto:hello@hasagency.com"}},[t._v(t._s(t.footerData.footerAboutWidget.email))])]),t._v(" "),e("div",{staticClass:"footer-social-inline"},[e("a",{attrs:{href:t.footerData.footerAboutWidget.twitterUrl,target:"_blank"}},[e("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),e("a",{attrs:{href:t.footerData.footerAboutWidget.fbUrl,target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),e("a",{attrs:{href:t.footerData.footerAboutWidget.instagramUrl,target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),e("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[e("div",{staticClass:"footer-widget"},[e("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleOne))]),t._v(" "),e("div",{staticClass:"footer-widget-content"},[e("ul",t._l(t.footerData.navListOne,(function(nav,n){return e("li",{key:n},[e("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[e("div",{staticClass:"footer-widget"},[e("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleTwo))]),t._v(" "),e("div",{staticClass:"footer-widget-content"},[e("ul",t._l(t.footerData.navListTwo,(function(nav,n){return e("li",{key:n},[e("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[e("div",{staticClass:"footer-widget"},[e("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleThree))]),t._v(" "),e("div",{staticClass:"footer-widget-content"},[e("ul",t._l(t.footerData.navListThree,(function(nav,n){return e("li",{key:n},[e("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),e("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[e("div",{staticClass:"footer-widget"},[e("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleFour))]),t._v(" "),e("div",{staticClass:"footer-widget-content"},[e("ul",t._l(t.footerData.navListFour,(function(nav,n){return e("li",{key:n},[e("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"copyright"},[t._v("© 2022 Exomac. Made with "),e("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),e("a",{attrs:{href:"https://themeforest.net/user/codecarnival/portfolio",target:"_blank"}},[t._v("Codecarnival")])])])])}],!1,null,null,null);e.default=component.exports},380:function(t){t.exports=JSON.parse('[{"id":1,"title":"How your sales can work together in account-based marketing","slug":"how-your-sales-can-work-together-in-account-based-marketing","date":"Apr 06, 2021","view":70,"imgSrc":"/images/blog/370/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":8,"categories":["marketing","business","branding"],"tags":["marketing","business"]},{"id":2,"title":"The six things marketers need to understand about DTC marketing","slug":"the-six-things-marketers-need-to-understand-about-dtc-marketing","date":"Jun 26, 2021","view":92,"imgSrc":"/images/blog/370/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":9,"categories":["agency","digital"],"tags":["agency","digital"]},{"id":3,"title":"Eleven top tips for developing agile marketing","slug":"eleven-top-tips-for-developing-agile-marketing","date":"May 16, 2021","view":55,"imgSrc":"/images/blog/370/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":15,"categories":["branding","business"],"tags":["branding","business"]},{"id":4,"title":"A guide to latest trends product for this summer","slug":"a-guide-to-latest-trends-product-for-this-summer","date":"Feb 14, 2021","view":36,"imgSrc":"/images/blog/370/blog-4.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":40,"categories":["marketing","business"],"tags":["marketing","business"]},{"id":5,"title":"New winter collection with discount for this summer","slug":"new-winter-collection-with-discount-for-this-summer","date":"Aug 26, 2021","view":46,"imgSrc":"/images/blog/370/blog-5.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":32,"categories":["agency","digital"],"tags":["agency","digital"]},{"id":6,"title":"Make your store stand out from the others by business","slug":"make-your-store-stand-out-from-the-others-by-business","date":"Jun 22, 2021","view":34,"imgSrc":"/images/blog/370/blog-6.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":64,"categories":["branding","business"],"tags":["branding","business"]}]')},381:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55);var o={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,373))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,366))}}},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:{backgroundImage:"url('/images/bg/newsletter.jpg')"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"cta-content text-center"},[e("SectionTitle",{attrs:{title:"Let’s find out how to work together","sub-title":"Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.","add-class-name":"color-light"}}),t._v(" "),e("n-link",{staticClass:"btn btn-primary btn-hover-secondary mt-6",attrs:{to:"/contact-us"}},[t._v("Get Started")])],1)])])]),t._v(" "),e("ShapeWithAnimation",{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(373).default,ShapeWithAnimation:n(366).default})},382:function(t,e,n){"use strict";n.r(e);var o={props:["news"]},l=n(54),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog"},[e("div",{staticClass:"thumbnail"},[e("n-link",{staticClass:"image",attrs:{to:"/news/news-details"}},[e("img",{attrs:{src:t.news.imgSrc,alt:t.news.title}})])],1),t._v(" "),e("div",{staticClass:"info"},[e("ul",{staticClass:"meta"},[e("li",[e("i",{staticClass:"far fa-user"}),t._v(t._s(t.news.author))]),t._v(" "),e("li",[e("i",{staticClass:"far fa-calendar"}),t._v(t._s(t.news.date))])]),t._v(" "),e("h3",{staticClass:"title"},[e("n-link",{attrs:{to:"/news/news-details"}},[t._v(t._s(t.news.title))])],1),t._v(" "),e("n-link",{staticClass:"link",attrs:{to:"/news/news-details"}},[e("mark",[t._v("Selengkapnya")])])],1)])}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){"use strict";n.r(e);n(1),n(47),n(55);var o=n(380),l={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,377))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,371))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,378))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,372))},BlogGridItem:function(){return Promise.resolve().then(n.bind(null,382))},CallToActionTwo:function(){return Promise.resolve().then(n.bind(null,381))},TheFooter:function(){return Promise.resolve().then(n.bind(null,379))}},data:function(){return{blogData:o,items:[{text:"Home",to:"/"},{text:"Blog Grid",active:!0}]}},head:function(){return{title:"Blog Grid"}}},r=n(54),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("TheHeader"),t._v(" "),e("OffCanvasMobileMenu"),t._v(" "),e("SearchPopup"),t._v(" "),e("BreadcrumbOne",{attrs:{items:t.items,title:"Find all our latest news, insights, and events",backgroundUrl:"/images/bg/breadcrumb-bg-four.jpg"}}),t._v(" "),e("div",{staticClass:"section-padding fix"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},t._l(t.blogData,(function(t,n){return e("div",{key:n,staticClass:"col mt-30"},[e("BlogGridItem",{attrs:{blog:t}})],1)})),0),t._v(" "),e("div",{staticClass:"row mt-50"},[e("div",{staticClass:"col"},[e("paginate",{attrs:{"page-count":4,"page-range":3,"margin-pages":2,"prev-text":"Prev","next-text":"Next","container-class":"pagination center","page-class":"page-item"}})],1)])])]),t._v(" "),e("CallToActionTwo"),t._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(377).default,OffCanvasMobileMenu:n(371).default,SearchPopup:n(378).default,BreadcrumbOne:n(372).default,BlogGridItem:n(382).default,CallToActionTwo:n(381).default,TheFooter:n(379).default})}}]);