<template>
    <!-- 定义文档中的节 -->
    <section class="g-container">
        <slot></slot>
    </section>
</template>

<script>
export default {
   name: 'g-container' 
}
</script>

<style lang="scss">
.g-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
</style>