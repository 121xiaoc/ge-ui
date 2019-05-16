import Vue from 'vue'
import Demo from './Demo.vue'

Vue.config.productionTip = false
const content = require.context('./', true, /^((?!demo\.vue).)+\.vue$/) // 去掉 demo.vue 
// const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/)
console.log(content)
try {
  content.keys().forEach(item => {
    console.log(item)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  render: h => h(Demo),
}).$mount('#app')
