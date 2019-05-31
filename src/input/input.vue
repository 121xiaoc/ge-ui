<template>
    <div class="g-input">
        <!-- 用$attrs 来简化placeholder的props-->
        <input class="g-input-inner"
            :class="[{
               'is-disabled': disabled,
               'have-icon': icon
            }]" 
            :disabled="disabled"
            v-bind="$attrs"
            :value="value"
            @input="handleInput"/>
        <g-icon :name="icon" v-if="icon" class="input-icon"></g-icon>
    </div>
</template>

<script>
export default {
    name: 'g-input',
    componentName: 'g-input',
    props: {
        value: String, // value
        disabled: Boolean, // 是否禁用
        icon: String
    },
    methods: {
        // 监听input变化
        handleInput (e) {
            // console.log(e.target.value)
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss">
    $input-background: #FFFFFF;
    $input-border-radius: 4px;
    $input-border-color: #dcdfe6;
    $input-hover-border-color: #c0c4cc;
    $input-focus-border-color: #409eff;
    $input-height: 40px;
    $input-font-color: #606266;
    $input-border-transition: border-color .2s cubic-bezier(.645,.045,.355,1) !default;

    $color-disabled-border-input: #e4e7ed;
    $background-color-disabled-input: #f5f7fa;
    $color-disabled-input: #c0c4cc;
    .g-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        .g-input-inner {
            display: block;
            -webkit-appearance: none; // 去掉 -webkit-默认样式
            background-color: $input-background;
            border-radius: $input-border-radius;
            box-sizing: border-box;
            width: 100%;
            border: 1px solid $input-border-color;
            padding: 0 15px;
            outline: none;
            height: $input-height;
            line-height: $input-height;
            color: $input-font-color;
            transition: $input-border-transition;
            
            &:hover {
                border-color: $input-hover-border-color;
            }
            &:focus {
                border-color: $input-focus-border-color; 
            }
            &::placeholder {
                color: #C0C4CC;
            }
            &.is-disabled {
                background-color: $background-color-disabled-input;
                color: $color-disabled-input;
                border-color: $color-disabled-border-input;
                cursor: not-allowed;
            }
            &.have-icon {
                padding-left: 30px;
            }
        }
        .input-icon {
            position: absolute;
            top: 50%;
            color: $input-hover-border-color;
            left: 10px;
            margin-top: -7px;
        }
    }
</style>