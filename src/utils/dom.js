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


/**
 * 增加类到元素上 没有用classList 因为 classList 的兼容性不行
 * @param {*} el 元素 
 * @param {*} cls 类名
 */
export const addClass = function (el, cls) { // 函数接收两个参数 elm 和 class 名
    if (!el || !cls) return
    let surClass = el.className
    let classArray = (cls || '').split(' ')
    for (let i = 0; i < classArray.length; i++) {
        let className = classArray[i]
        surClass += ' ' + className
    }
    el.className = surClass;
}

/**
 * 判断 el 元素是否有 cls 类名，有：返回true; 无：返回false
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export const hasClass = function (el, cls) {
    if (!el || !cls) return false // 首先是先要保证 el 和 cls 都有值
    if (cls.includes(' ')) throw new Error('className should not contain space.') // 判断的类名不能带有空格
    return ` ${el.className} `.includes(` ${cls} `)
}

