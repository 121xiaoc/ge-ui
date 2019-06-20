<template>
    <!-- 1、:class可以用数组 数组里面可以再包一个对象 -->
    <button class="g-button" 
        @click="handleClick"
        :disabled="disabled || loading"
        :class="[
            type ? 'g-button-' + type: '',
            size ? 'g-button-' + size : '', 
            {
                'is-disabled': disabled,
                'is-loading': loading
            }
        ]">
        <!-- loading 图标 -->
        <g-icon name="sync" v-if="loading" class="loading"></g-icon>
        <g-icon :name="icon" v-if="icon"></g-icon>
        <!-- 判断组件插槽里是否有内容 -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
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
        size: {
            type: String,
            validator: (value) => ['small'].includes(value)
        }
    },
    methods: {
        /**
         * 点击
         */
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    mounted() {
        // console.log(this.$slots.default)
    },
}
</script>

<style lang="scss">
@import '../common/css/var.scss';

$default-font-color: #606266;
$info-color: #909399;
$button-border-radius: 4px; // 
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
    border-radius: $button-border-radius;
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
    &.g-button-small {
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
}
</style>