<template>
    <div class="g-input">
        <input class="g-input-inner"/>
    </div>
</template>

<script>
export default {
    name: 'g-input',
    componentName: 'g-input'
}
</script>

<style lang="scss">
    $input-background: #FFFFFF;
    $input-border-radius: 4px;
    $input-border-color: #dcdfe6;
    $input-height: 40px;
    $input-font-color: #606266;
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
        }
    }
</style>