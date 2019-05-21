<template>
    <div class="g-col" :class="[
        span ? 'col-' + span: ''
    ]">
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
        }
    },
}
</script>

<style lang="scss">
    .g-col {
    }
    @for $i from 1 through 24 { // 遍历 24 
       $col-prefix: col-;
      .#{$col-prefix}#{$i} {width: 1/24*$i*100%} // example: .col-1 {width: 1/24 * 1 * 100%}
    }
</style>