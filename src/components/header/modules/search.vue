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
  .search {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: 24px;
    padding: 16px 0;
    height: 72px;
    box-sizing: border-box;
    &-input {
      padding: 8px 4px;
      height: 40px;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: #e9e9e9;
      input {
        padding: 0 12px;
        width: 280px;
        height: 24px;
        line-height: 24px;
        border: none;
        outline: none;
        background-color: transparent;
        color :#a6a6a6;
        font-size: 14px;
        &::placeholder {
          color :#a6a6a6;
        }
      }
    }
    &-hot-tags {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      .tag-item {
        display: inline-block;
        vertical-align: middle;
        padding: 0 8px;
        font-size: 14px;
        color: #555;
        cursor: pointer;
        &:hover {
          color: #f21f1f;
        }
      }
    }
  }
</style>
