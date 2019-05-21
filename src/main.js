import Vue from 'vue'
import Demo from './Demo.vue'

Vue.config.productionTip = false
const content = require.context('./', true, /^((?!demo\.vue).)+\.vue$/) // 去掉 demo.vue 
// const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/)
try {
  content.keys().forEach(key => {
    const res = content(key) // 获取每个vue文件
    Vue.component(res.default.name, res.default) // 注册
  })
} catch (e) {
  // eslint-disable-next-line
  console.log(e)
}

new Vue({
  render: h => h(Demo),
}).$mount('#app')
