import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _68d15590 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _695c609a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _3e8bf797 = () => interopDefault(import('..\\pages\\career\\index.vue' /* webpackChunkName: "pages/career/index" */))
const _8da0dd10 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _3b0c5a86 = () => interopDefault(import('..\\pages\\home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _01dc9e2b = () => interopDefault(import('..\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _b613883c = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _52a17952 = () => interopDefault(import('..\\pages\\ppdb\\index.vue' /* webpackChunkName: "pages/ppdb/index" */))
const _358b6ca6 = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages/project/index" */))
const _59add78a = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _07498491 = () => interopDefault(import('..\\pages\\unit\\index.vue' /* webpackChunkName: "pages/unit/index" */))
const _0cadaf16 = () => interopDefault(import('..\\pages\\blog\\blog-classic.vue' /* webpackChunkName: "pages/blog/blog-classic" */))
const _c85dde74 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _64490930 = () => interopDefault(import('..\\pages\\news\\news-details.vue' /* webpackChunkName: "pages/news/news-details" */))
const _75c9e262 = () => interopDefault(import('..\\pages\\project\\project-details.vue' /* webpackChunkName: "pages/project/project-details" */))
const _106aa5ec = () => interopDefault(import('..\\pages\\unit\\unit-details.vue' /* webpackChunkName: "pages/unit/unit-details" */))
const _59f07dcf = () => interopDefault(import('..\\pages\\blog\\categories\\_slug.vue' /* webpackChunkName: "pages/blog/categories/_slug" */))
const _7248ab1c = () => interopDefault(import('..\\pages\\blog\\tags\\_slug.vue' /* webpackChunkName: "pages/blog/tags/_slug" */))
const _6cc9a32a = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _57f73642 = () => interopDefault(import('..\\pages\\service\\_slug.vue' /* webpackChunkName: "pages/service/_slug" */))
const _eeed9f56 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _68d15590,
    name: "about"
  }, {
    path: "/blog",
    component: _695c609a,
    name: "blog"
  }, {
    path: "/career",
    component: _3e8bf797,
    name: "career"
  }, {
    path: "/contact-us",
    component: _8da0dd10,
    name: "contact-us"
  }, {
    path: "/home-three",
    component: _3b0c5a86,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _01dc9e2b,
    name: "home-two"
  }, {
    path: "/news",
    component: _b613883c,
    name: "news"
  }, {
    path: "/ppdb",
    component: _52a17952,
    name: "ppdb"
  }, {
    path: "/project",
    component: _358b6ca6,
    name: "project"
  }, {
    path: "/service",
    component: _59add78a,
    name: "service"
  }, {
    path: "/unit",
    component: _07498491,
    name: "unit"
  }, {
    path: "/blog/blog-classic",
    component: _0cadaf16,
    name: "blog-blog-classic"
  }, {
    path: "/blog/blog-details",
    component: _c85dde74,
    name: "blog-blog-details"
  }, {
    path: "/news/news-details",
    component: _64490930,
    name: "news-news-details"
  }, {
    path: "/project/project-details",
    component: _75c9e262,
    name: "project-project-details"
  }, {
    path: "/unit/unit-details",
    component: _106aa5ec,
    name: "unit-unit-details"
  }, {
    path: "/blog/categories/:slug?",
    component: _59f07dcf,
    name: "blog-categories-slug"
  }, {
    path: "/blog/tags/:slug?",
    component: _7248ab1c,
    name: "blog-tags-slug"
  }, {
    path: "/blog/:slug",
    component: _6cc9a32a,
    name: "blog-slug"
  }, {
    path: "/service/:slug",
    component: _57f73642,
    name: "service-slug"
  }, {
    path: "/",
    component: _eeed9f56,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
