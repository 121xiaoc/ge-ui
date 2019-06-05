<template>
    <span class="g-popover-box">
        <transition 
            name='fade-in-linear'>
            <div class="g-popover" 
                v-show="showPopover"
                ref="popover">
                popover
            </div>
        </transition>
        <slot name="reference"></slot>
    </span>
</template>

<script>
import { addClass, on } from '../utils/dom.js'
export default {
    name: 'g-popover',
    data () {
        return {
            showPopover: false, // 是否显示 popover 
        }
    },
    props: {
        trigger: {
            type: String,
            default: 'click',
            validator: value => ['click', 'hover'].includes(value)
        }
    },
    watch: {
    },
    methods: {
        /**
         * reference click事件处理方法 
         */
        onClickToggle () {
            this.showPopover = !this.showPopover
        },
        /**
         * reference mouseover 处理事件
         */
        onMouseenter () {
            this.showPopover = true
        },
        /**
         * reference mouseout 处理事件
         */
        onMouseleave () {
            this.showPopover = false
        }
    },
    mounted() {
        let reference = null
        if (this.$slots.reference && this.$slots.reference[0]) {
            reference = this.referenceElm = this.$slots.reference[0].elm
        }
        let popover = this.$refs.popover
        // console.log(reference)
        if (reference) { // 判断 reference 插槽是否有值插入
            // console.log(hasClass(reference, 'g-button-success'))
            addClass(reference, 'list')
            if (this.trigger === 'click') {
                on(reference, 'click', this.onClickToggle)
            }
            if (this.trigger === 'hover') {
                on(reference, 'mouseenter', this.onMouseenter)
                on(reference, 'mouseleave', this.onMouseleave)
                on(popover, 'mouseenter', this.onMouseenter)
                on(popover, 'mouseleave', this.onMouseleave)
            }
        }
    },
}
</script>

<style lang="scss">
@import '../common/css/transitions';
$color-background-popover: #ffffff;
$color-border-popover: #ebeef5;
.g-popover-box {
    position: relative;
    display: inline-block;
}

.g-popover {
    position: absolute;
    bottom: 120%;
    width: 200px;
    box-shadow: $box-shadow;
    padding: 10px 14px;
    border: 1px solid $color-border-popover;
    border-radius: 4px;
    background: $color-background-popover;
}


</style>