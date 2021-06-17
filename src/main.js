import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  //路由发生改变时,触发
  window.document.title = to.meta.title === undefined ? '基于VUE的课程管理系统' : '基于VUE的课程管理系统' + ' - ' + to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
