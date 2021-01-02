<template>
  <div class="search">
    <!-- input -->
    <div class="search-input">
      <input
        v-model="keyword"
        type="text"
        placeholder="请输入关键词..."
        @focus="isFocus = true"
        @blur="isFocus = false"
      >
    </div>

    <!-- hot tags -->
    <ul v-show="!isFocus && !keyword" class="search-hot-tags">
      <li class="tag-item">Vue</li>
      <li class="tag-item">Java</li>
    </ul>

    <!-- icon -->
    <div class="search-icon">
      <i class="iconfont icon-search"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HeaderSearch',
  setup () {
    const keyword = ref('')
    const isFocus = ref(false)
    return { keyword, isFocus }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  @import '~@/assets/styles/responsive.scss';
  .search {
    position: relative;
    float: left;
    margin-left: 24px;
    padding: 16px 0;
    height: 72px;
    box-sizing: border-box;
    @include respond-to {
      margin-left: 14px;
    }
    &-input {
      padding: 8px 4px;
      height: 40px;
      border-radius: $border-radius-normal;
      box-sizing: border-box;
      background-color:#E9E9E9;
      input {
        padding: 0 40px 0 12px;
        width: 280px;
        height: 24px;
        line-height: 24px;
        border: none;
        outline: none;
        background-color: transparent;
        box-sizing: border-box;
        color: $regular-text;
        font-size: $font-normal;
        &::placeholder {
          color: $placeholder-text;
        }
        @include respond-to {
          width: 260px;
          padding: 0 8px;
        }
      }
    }
    &-hot-tags {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      .tag-item {
        display: inline-block;
        vertical-align: middle;
        padding: 0 8px;
        font-size: $font-normal;
        color: $regular-text;
        cursor: pointer;
        &:hover {
          color: $theme-red;
        }
      }
    }
    &-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: $font-largex;
      cursor: pointer;
      @include extend-click(-5px);
    }
  }
</style>
