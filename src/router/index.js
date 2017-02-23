import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component (resolve) {
        require.ensure(['../views/sku/sku-home-page.vue'], () => {
          resolve(require('../views/sku/sku-home-page.vue'))
        })
      }
    },
    {
      path: '/sku-home-page',
      name: 'sku-home-page',
      component (resolve) {
        require.ensure(['../views/sku/sku-home-page.vue'], () => {
          resolve(require('../views/sku/sku-home-page.vue'))
        })
      }
    },
    {
      path: '/sku-home-page/hello',
      name: 'hello',
      component (resolve) {
        require.ensure(['../views/sku/hello.vue'], () => {
          resolve(require('../views/sku/hello.vue'))
        })
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('从' + from.name + '进入' + to.name)
  next()
})
export default router
