<template>
  <div class="user">
    <!-- 左侧导航 -->
    <div class="user-nav">
      user navigation
    </div>

    <!-- 右侧子页面 -->
    <div class="user-page">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserIndex'
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/mixin.scss';
  .user {
    display: flex;
    justify-content: top;
    align-items: center;
    padding: 30px 0;
    height: 500px;
    @include mooc-center();
    &-nav {
      flex: 0 0 216px;
      width: 216px;
      height: 100%;
      background-color: #f60;
    }
    &-page {
      flex: 1;
      margin-left: 48px;
      height: 100%;
      background-color: #58a;
    }
  }
</style>
