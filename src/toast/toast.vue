<template>
    <div class="outer">
        <transition name="slide-up-linear"
            @afterLeave="leave">
            <div class="g-toast"
                v-if="show"
                :class="[
                    type ? 'g-toast-' + type : '',
                ]">
                {{message}}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'g-toast',
    data () {
        return {
            show: true
        }
    }, 
    props: {
        message: { // 显示的消息
            type: String,
            required: true
        },
        type: { // 显示的类型
            type: String,
            default: 'default',
            validator: (value) => ['default', 'success', 'warning', 'error'].includes(value)
        },
    },
    methods: {
        // 动画 离开的 监听
        leave () {
            this.$el.remove()
            this.$destroy()
        }
    },
    mounted() {
        setTimeout(() => {
            this.show = false
        }, 2000) // 延时二秒销毁
    },
}
</script>

<style lang="scss">
    @import '../common/css/var.scss';
    @import '../common/css/animations.scss';
    @import '../common/css/transitions.scss';
    .outer {
        position: fixed;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
    }
    .g-toast {
        min-width: 380px;
        box-sizing: $box-sizing;
        border-radius: $border-radius;
        overflow: hidden;
        padding: 15px 15px 15px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: $box-shadow;
        background: #ffffff;
        animation: slideDown .5s;
        &.g-toast-default {
            color: $color-title;
            background-color: $color-default;
        }
        &.g-toast-success {
            color: #ffffff;
            background: $success-color;
        }
        &.g-toast-warning {
            color: #ffffff;
            background: $warning-color;
        }
        &.g-toast-error {
            color: #ffffff;
            background: $danger-color;
        }

    }
</style>