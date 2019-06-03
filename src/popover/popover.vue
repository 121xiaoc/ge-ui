<template>
    <span>
        <transition 
            name='fade-in-linear'
            @after-enter="handleAfterEnter"
            @after-leave="handleAfterLeave">
            <div class="g-popover" 
                v-show="showPopover">
                popover
            </div>
        </transition>
        <slot name="reference"></slot>
    </span>
</template>

<script>
export default {
    name: 'g-popover',
    data () {
        return {
            showPopover: false, // 是否显示 popover 
        }
    },
    props: {
        value: Boolean,

    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                console.log('一开始运行')
                console.log(val)
                this.showPopover = val
            }
        }
    },
    methods: {
        clickSlot () {
        },
        handleAfterEnter() {
            console.log('组件进入了')
        },
        handleAfterLeave () {
            console.log('组件消失了')
        }
    },
    mounted() {
        this.referenceElm = this.$slots.reference
    },
}
</script>

<style lang="scss">
@import '../common/css/transitions';
$color-background-popover: #ffffff;
$color-border-popover: #ebeef5;
.g-popover {
    position: absolute;
    width: 200px;
    box-shadow: $box-shadow;
    padding: 10px 14px;
    border: 1px solid $color-border-popover;
    border-radius: 4px;
}


</style>