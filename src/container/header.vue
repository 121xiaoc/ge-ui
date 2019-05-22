<template>
    <header class="g-header" 
        :style="{
            height
        }">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'g-header',
    componentName: 'g-header',
    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
}
</script>

<style lang="scss">
$header-background-color: #b3c0d1;
.g-header {
    background: $header-background-color;
}  

.g-header {
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 60px;
}
</style>