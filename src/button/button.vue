<template>
    <!-- 1、:class可以用数组 数组里面可以再包一个对象 -->
    <button class="g-button" 
        @click="handleClick"
        :disabled="disabled || loading"
        :class="[
            type ? 'g-button-' + type: '',
            {
                'is-disabled': disabled,
                'is-loading': loading
            }
        ]">
        <!-- loading 图标 -->
        <g-icon name="sync" v-if="loading" class="loading"></g-icon>
        <g-icon :name="icon" v-if="icon"></g-icon>
        <slot></slot>
    </button>
</template>

<script>
import Icon from '../icon/icon.vue'
export default {
    name: 'g-button',
    components: {
        'g-icon': Icon
    },
    props: {
        loading: Boolean, // 加载
        disabled: Boolean, // 禁用
        type: {
            type: String,
            default: 'default'
        },
        icon: String, // 图标
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
$primary-weak-color: #66b1ff; // 主要弱一点的颜色
$primary-strong-color: #3a8ee6; // 主要强一点的颜色
$success-color: #67C23A; // 成功的颜色
$success-weak-color: #85ce61;
$success-strong-color: #5daf34;
$warning-color: #E6A23C; // 警告的颜色
$warning-weak-color: #ebb563;
$warning-strong-color: #cf9236;
$danger-color: #F56C6C; // 危险的颜色
$danger-weak-color: #f78989;
$danger-strong-color: #dd6161;
$info-color: #909399;
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
    &.is-disabled, &.is-disabled:focus, &.is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    &.is-loading {
        pointer-events: none; // none 元素永远不会成为鼠标事件的target
    }
    &.g-button-primary {
        color: #fff;
        background-color: $primary-color;
        border-color: $primary-color;
        &:hover, &:focus {
            background: $primary-weak-color;
            border-color: $primary-weak-color;
        }
        // 点击 效果
        &:active {
            background: $primary-strong-color;
            border-color: $primary-strong-color;
        }
    }
    &.g-button-success {
        color: #fff;
        background: $success-color;
        border-color: $success-color;
        &:hover, &:focus {
            background: $success-weak-color;
            border-color: $success-weak-color;
        }
        &:active {
            background: $success-strong-color;
            border-color: $success-strong-color;
        }
    }
    &.g-button-warning {
        color: #fff;
        background: $warning-color;
        border-color: $warning-color;
        &:hover, &:focus {
            background: $warning-weak-color;
            border-color: $warning-weak-color;
        }
        &:active {
            background: $warning-strong-color;
            border-color: $warning-strong-color;
        }
    }
    &.g-button-danger {
        color: #fff;
        background: $danger-color;
        border-color: $danger-color;
        &:hover, &:focus {
            background: $danger-weak-color;
            border-color: $danger-weak-color;
        }
        &:active {
            background: $danger-strong-color;
            border-color: $danger-strong-color;
        }
    }
}
</style>