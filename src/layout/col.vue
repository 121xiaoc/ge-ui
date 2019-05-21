<template>
    <div class="g-col" 
        :class="[
            span ? 'col-' + span: '',
            offset ? 'col-offset-' + offset : ''
        ]" 
        :style="[{
            paddingLeft: gutter / 2 + 'px', // 设置分栏间隔
            paddingRight: gutter / 2 + 'px'
        }]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'g-col',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: Number
    },
    computed: {
        gutter() { // 分栏间隔
            let parent = this.$parent;
            while (parent && parent.$options._componentTag !== 'g-row') { // 退出循环条件 找到父节点为g-row 或者 父节点为空
                parent = parent.$parent;
            }
            return parent && parent.gutter ? parent.gutter : 0;
        }
    },
    mounted() {
        // console.log(this.$parent)
        // console.log(this.$parent.$options._componentTag)
    },
}
</script>

<style lang="scss">
    .g-col {
        box-sizing: border-box;
    }
    @for $i from 1 through 24 { // 遍历 24 
       $col-prefix: col-;
      .#{$col-prefix}#{$i} {width: 1/24*$i*100%} // example: .col-1 {width: 1/24 * 1 * 100%}
    }

    @for $i from 1 through 24 { // 遍历 24 
        $col-prefix: col-offset-;
        .#{$col-prefix}#{$i} {
            margin-left: 1/24*$i*100%
        }
    }
</style>