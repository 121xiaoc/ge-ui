<template>
    <div class="g-button-group">
        <div v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'g-button-group',
    mounted() {
        // 也 可以使用 $el 进行验证
        console.log(this.$slots.default)
        if (this.$slots.default) {
            for (let node of this.$slots.default) {
                if (node.elm.tagName.toLowerCase() !== 'button') {
                    console.warn('使用不规范')
                }
            }
        }
      
    }
}
</script>

