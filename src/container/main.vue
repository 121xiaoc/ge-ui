<template>
    <main class="g-main">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'g-main',
    componentName: 'g-main'
}
</script>

<style lang="scss">
$main-background: #e9eef3;
.g-main {
    flex: 1;
    padding: 0 20px;
    background: $main-background;
    line-height: 160px;
    text-align: center;
}
</style>