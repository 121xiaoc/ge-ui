<template>
    <div class="g-toast"
        :class="[
            type ? 'g-toast-' + type : '',
            {
                'is-hidden': !show
            }
        ]">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'g-toast',
    data () {
        return {
            // showToast: true

        }
    },
    watch: {
        show (value) {
            if (value) {
                setTimeout(() => {
                    this.$emit('close')
                }, 3000)
            }
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
        show: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss">
    @import '../common/css/var.scss';
    .g-toast {
        min-width: 380px;
        box-sizing: $box-sizing;
        border-radius: $border-radius;
        position: fixed;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        transition: opacity .3s,transform .4s,top .4s, bottom .4s;
        overflow: hidden;
        padding: 15px 15px 15px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: $box-shadow;
        background: #ffffff;
        &.is-hidden {
            top: -40px;
            opacity: 0;
        }
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