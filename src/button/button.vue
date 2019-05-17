<template>
    <button class="g-button" 
        @click="handleClick"
        :disabled="disabled || loading">
        你好啊
    </button>
</template>

<script>
export default {
    name: 'g-button',
    props: {
        loading: Boolean, // 加载
        disabled: Boolean, // 禁用
    },
    methods: {
        /**
         * 点击
         */
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
}
</script>

<style lang="scss">
$default-font-color: #606266;
$primary-color: #409eff; // 主要的颜色
.g-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: $default-font-color;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
        color: $primary-color;
        border-color: $primary-color;
        // background-color: $primary-color + #ff0000; 背景颜色变淡
    }
}
</style>