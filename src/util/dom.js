import Vue from 'vue'
const isServer = Vue.prototype.$isServer; // 判断是否是服务端渲染

// 事件绑定 为了兼容
export const on = function (ele, event, handler) {
    if (!isServer && document.addEventListener) {
        if (ele && event && handler) {
            ele.addEventListener(event, handler, false)
        }
    } else {
        if (ele && event && handler) {
            ele.attachEvent('on' + event, handler)
        }
    }
}

