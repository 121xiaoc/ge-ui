<template>
    <svg  @click="clickHandler"
        class="g-icon" aria-hidden="true" :style="{color}">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
    <!--1、style的省略写法 style="{{color: color}}"-->
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
    .loading {
        animation: myRotate 2s linear infinite;
    }
    @keyframes myRotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>