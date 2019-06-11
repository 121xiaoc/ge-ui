import toast from './toast.vue'

export default {
    install (Vue) {
        Vue.prototype.$toast = function (userConfig) { // 为 vue 实例 创建 toast方法
            createToast({
                Vue,
                userConfig
            })
        }
    }
}

function createToast ({
    Vue, userConfig
}) {
    const toastConstructor = Vue.extend(toast)
    let vm = new toastConstructor({
        propsData: {
            message: '必须有一个message',
            ...userConfig
        }
    })
    vm.$mount()
    document.body.appendChild(vm.$el)
}