import Vue from 'vue'
import Router from 'vue-router'
import loginPanel from './components/LoginPanel.vue'
import mainPanel from './components/mainPanel.vue'

Vue.use(Router)

export default new Router({

  routes: [
      {path:'/', component: loginPanel},
      {path:'/app', component: mainPanel},

  ]
})
