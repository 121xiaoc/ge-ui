<template>
    <div class="g-button-group">
        <div v-if="$slots.default" class="g-button-group-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'g-button-group',
    mounted() {
        // 也 可以使用 $el 进行验证
        // console.log(this.$slots.default)
        if (this.$slots.default) {
            for (let node of this.$slots.default) {
                if (node.elm.tagName.toLowerCase() !== 'button') {
                    // eslint-disable-next-line
                    console.warn('使用不规范')
                }
            }
        }
      
    }
}
</script>

<style lang="scss">
$button-border-radius: 4px;

.g-button-group-box {
    > .g-button {
        &:first-child { // 第一个子button右上角和右下角都为0
            border-top-right-radius: 0; // 设置border-radius 设置方向的话 需要设置两个位置 上下在前 左右在后
            border-bottom-right-radius: 0;
        }
        &:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        &:not(:first-child):not(:last-child) {
            border-radius: 0
        }
        &:not(:last-child) {
            margin-right: -1px;
        }
    }
}
</style>

