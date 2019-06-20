import Alert from './alert.vue'

export default {
    install (Vue) {
        Vue.prototype.$alert = function (userConfig) {
            createAlert({Vue, userConfig})
        }
    }   
}

function createAlert ({Vue, userConfig}) {
    const alertConstructor = Vue.extend(Alert)
    let vm = new alertConstructor({
        data: {
            title: '这是一个标题',
            content: '这是内容',
            ...userConfig,
            show: true
        }
    })
    vm.$mount();
    vm.$on('callback', (msg) => {
        userConfig.callback && userConfig.callback(msg)
    })
    document.body.appendChild(vm.$el)
}