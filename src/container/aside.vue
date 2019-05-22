<template>
    <aside class="g-aside">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'g-aside',
    componentName: 'g-aside'
}
</script>

<style lang="scss">
$aside-background: #d3dce6;
.g-aside {
    box-sizing: border-box;
    background: $aside-background;
    text-align: center;
}
</style>