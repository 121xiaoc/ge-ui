<template>
    <footer class="g-footer">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'g-footer',
    componentName: 'g-footer'
}
</script>

<style lang="scss">
$footer-background-color: #b3c0d1;
.g-footer {
    background: $footer-background-color;
}  

.g-footer {
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 60px;
}
</style>