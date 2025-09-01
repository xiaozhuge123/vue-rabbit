<script setup></script>

<template>
<!-- 路由渲染 -->
  <RouterView/>
<!--  <el-button type="primary">Primary</el-button>-->
  <div class="test">
    test var scss
  </div>
</template>

<style scoped lang="scss">
  .test{
    color: $priceColor;
  }
</style>
