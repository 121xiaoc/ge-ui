<template>
    <span class="g-popover-box">
        <transition 
            name='fade-in-linear'>
            <div class="g-popover"
                :class="[
                    placement ? 'g-popover-' + placement: ''
                ]" 
                v-show="showPopover"
                ref="popover">
                <div class="title">{{title}}</div>
                <div class="content">{{content}}</div>
                <div class="popover-arrow"></div>
            </div>
        </transition>
        <slot name="reference"></slot>
    </span>
</template>

<script>
import { on } from '../utils/dom.js'
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
        },
        placement: {
            type: String,
            default: 'top',
            validator: value => ['top', 'bottom', 'left', 'right'].includes(value)
        },
        title: String,
        content: String
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
            // addClass(reference, 'list')
            // console.log(this.trigger)
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
$space-popover: 10px;

.g-popover-box {
    position: relative;
    display: inline-block;
}

.g-popover {
    position: absolute;
    display: inline-block;
    width: 200px;
    box-shadow: $box-shadow;
    padding: 10px 14px;
    border: 1px solid $color-border-popover;
    border-radius: 4px;
    background: $color-background-popover;
    word-break: break-all;
    &.g-popover-top {
        bottom: 100%;
        margin-bottom: $space-popover;
        .popover-arrow {
            top: 100%;
            border-top-color: #fff;
        }
    }
    &.g-popover-bottom {
        top: 100%;
        margin-top: $space-popover;
        .popover-arrow {
            bottom: 100%;
            border-bottom-color: #fff;
        }
    }
    &.g-popover-top, &.g-popover-bottom {
        left: 50%;
        transform: translateX(-50%);
        .popover-arrow {
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &.g-popover-left {
        right: 100%;
        margin-right: $space-popover;
        .popover-arrow {
            left: 100%;
            border-left-color: #fff;
        }
    }
    &.g-popover-right {
        left: 100%;
        margin-left: $space-popover;
        .popover-arrow {
            right: 100%;
            border-right-color: #fff;
        }
    }
    &.g-popover-left, &.g-popover-right {
        top: 50%;
        transform: translateY(-50%);
        .popover-arrow {
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .popover-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        filter: drop-shadow(0 3px 12px rgba(0,0,0,.1)) 
    }
    .title {
        font-size: 16px;
        color: $color-title;
    }
    .content {
        font-size: 14px;
        color: $color-content;
    }
}


</style>