<template>
    <!-- 定义文档中的节 -->
    <section class="g-container" 
        :class="[{
            'is-horizontal': !vertical 
        }]">
        <slot></slot>
    </section>
</template>

<script>
export default {
   name: 'g-container',
   computed: {
       vertical () {
            // 默认为垂直 出现aside 为 水平
            return this.$slots && this.$slots.default ? 
                this.$slots.default.every(vnode => { // 没有出现aside组件 就是column排列
                    return vnode.componentOptions.tag !== 'g-aside'
                }) 
                : true
        }
    },
    mounted() {
    }, 
}
// 布局组件主要是用了flex 布局
</script>

<style lang="scss">
.g-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex: 1;
    &.is-horizontal {
        flex-direction: row;
    }
}
</style>