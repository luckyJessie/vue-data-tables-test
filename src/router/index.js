import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'export_json2csv',
      component: resolve => require(['../views/export_json2csv'], resolve)
    },
    {
      path: '/exportXls',
      name: 'exportXls',
      component: resolve => require(['../views/exportXls'], resolve)
    }
  ]
})
