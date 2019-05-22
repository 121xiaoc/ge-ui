<template>
    <div class="g-col" 
        :class="classList"
        :style="[{
            paddingLeft: gutter / 2 + 'px', // 设置分栏间隔
            paddingRight: gutter / 2 + 'px'
        }]">
        <slot></slot>
    </div>
</template>

<script>
const validatorFunc = function (val) {
    // 1.Object.keys 返回对象自身可枚举属性形成的数组
    // 2.Array.every 检测数组所有元素是否都符合指定条件
    return Object.keys(val).every((item) => {
        return item === 'span' || item === 'offset'
    })
}
export default {
    name: 'g-col',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        xs: { validator: validatorFunc }, // 接收一个对象 ｛span: Number, offset: Number｝
        sm: { validator: validatorFunc },
        md: { validator: validatorFunc },
        lg: { validator: validatorFunc },
        xl: { validator: validatorFunc }
    },
    computed: {
        gutter() { // 分栏间隔
            let parent = this.$parent;
            while (parent && parent.$options._componentTag !== 'g-row') { // 退出循环条件 找到父节点为g-row 或者 父节点为空
                parent = parent.$parent;
            }
            return parent && parent.gutter ? parent.gutter : 0;
        },
        classList () {
            let array = [];
            ['span', 'offset'].forEach(item => { // 分栏宽度 和 分栏偏移度设置
                if (this[item]) {
                    item === 'span' ? array.push(`col-${this.span}`) : array.push(`col-offset-${this.offset}`)
                }
            });
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach((item) => {
               ['span', 'offset'].forEach(item1 => {
                   if (this[item] && this[item][item1]) {
                       // 判断 是 span 还是 offset 
                       array.push(item1 === 'span' ? `col-${item}-${this[item][item1]}` : `col-offset-${item}-${this[item][item1]}`)
                   }
               })
            })
            return array;
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
    // Extra small devices (portrait phones, less than 576px)
    // xs 用于小于 575.98px 的屏幕
    @media (max-width: 575.98px) {
        $col-xs-prefix: col-xs-;
        $offset-xs-prefix: col-offset-xs-;
        @for $i from 1 through 24 {
            .#{$col-xs-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
            .#{$offset-xs-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }
    // sm 用于大于576px 小于 767.98px的值 
    @media (min-width: 576px) and (max-width: 767.98px) {
        $col-sm-prefix: col-sm-;
        $offset-sm-prefix: col-offset-sm-;
        @for $i from 1 through 24 {
            .#{$col-sm-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
            .#{$offset-sm-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }

    // md 用于大于768px 小于 991.98px的值 
    @media (min-width: 768px) and (max-width: 991.98px) {
        $col-md-prefix: col-md-;
        $offset-md-prefix: col-offset-md-;
        @for $i from 1 through 24 {
            .#{$col-md-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
            .#{$offset-md-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }

    // lg 用于大于992px 小于 1199.98px的值 
    @media (min-width: 992px) and (max-width: 1199.98px) {
        $col-lg-prefix: col-lg-;
        $offset-lg-prefix: col-offset-lg-;
        @for $i from 1 through 24 {
            .#{$col-lg-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
            .#{$offset-lg-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }

    // xl 用于大于1200值 
    @media (min-width: 1200px) {
        $col-xl-prefix: col-xl-;
        $offset-xl-prefix: col-offset-xl-;
        @for $i from 1 through 24 {
            .#{$col-xl-prefix}#{$i} {width: 1/24*$i*100%}
        }

        @for $i from 1 through 24 {
            .#{$offset-xl-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }
    /** 
     *  1、响应式布局 
     *  利用了媒体查询 @media 
     */
</style>