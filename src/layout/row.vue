<template>
    <div class="g-row" :style="[{
      marginLeft: gutter ? '-' + gutter / 2 + 'px': '0px', // 如果 有间隔属性 就让left和right都margin -间隔的一半
      marginRight: gutter ? '-' + gutter / 2 + 'px': '0px'  
    }]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'g-row',
  props: {
    gutter: Number, // 间隔
  }
}
</script>

<style lang="scss">
$namespace: 'g';

@mixin b($block) { // 用了混合 
  $B: $namespace+'-'+$block !global; 
  .#{$B} {
    @content; 
  }
}

@include b(row) {
    position: relative;
    box-sizing: border-box;
    display: flex;
}

</style>