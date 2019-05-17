<template>
    <svg  @click="clickHandler"
        class="g-icon" aria-hidden="true" :style="{color}">
        <use :xlink:href="`#i-test`"></use>
    </svg>
</template>

<script>
import  './svg.js'
export default {
    name: 'g-icon',
    props: {
        color: String, // 字体颜色
        name: String, // 图片名称
    },
    methods: {
        clickHandler() {
            this.$emit('click')
        }
    },
}
</script>

<style lang="scss">
    .g-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>