<template>
  <div class="notice">
    <!-- tabs -->
    <ul class="notice-tabs">
      <li
        class="notice-tabs-item"
        v-for="(item, index) in tabList"
        :key="index"
        :class="{
          active: index === activeIndex
        }"
        @click="activeIndex = index"
      >{{item}}(1)</li>
    </ul>

    <!-- bar -->
    <div class="notice-bar">
      <span>系统自动清理三个月前的已读通知</span>
      <span class="notice-bar-btn">全部标记已读</span>
    </div>

    <!-- notice list -->
    <ul class="notice-list">
      <li class="notice-list-item">
        <div class="type">实战</div>
        <div class="content">
          <p class="title">同学你好，你的学弟王独秀，请教了你一个问题</p>
          <p class="date">2020-12-28 10:29:08</p>
        </div>
      </li>
      <li class="notice-list-item readed">
        <div class="type">实战</div>
        <div class="content">
          <p class="title">同学你好，你的学弟王独秀，请教了你一个问题</p>
          <p class="date">2020-12-28 10:29:08</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Notice',
  setup () {
    const activeIndex = ref(0)
    const tabList = ref(['实战', '系统'])
    return { activeIndex, tabList }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  .notice {
    @include mooc-center;
    padding: 50px 0;
    &-tabs {
      padding-left: 30px;
      &-item {
        display: inline-block;
        margin-right: 40px;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        font-size: $font-medium;
        color: $primary-text;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid $theme-red;
        }
      }
    }
    &-bar {
      margin-top: -1px;
      padding-left: 15px;
      padding-right: 15px;
      height: 50px;
      background-color: rgba($placeholder-text, 0.3);
      border-top: 1px solid $placeholder-text;
      box-sizing: border-box;
      line-height: 50px;
      font-size: $font-normal;
      color: $secondary-text;
      &-btn {
        float: right;
        margin-left: 30px;
        color: $regular-text;
        cursor: pointer;
        &:hover {
          color: $primary-text;
        }
      }
    }
    &-list {
      &-item {
        position: relative;
        padding: 20px 10px 20px 76px;
        border-bottom: 1px solid rgba($placeholder-text, 0.5);
        &.readed {
          .type {
            color: $regular-text;
            border-color: rgba($placeholder-text, 0.5);
            background-color: transparent;
          }
          .title {
            color: $secondary-text;
            &:hover {
              color: $primary-text;
            }
          }
        }
        .type {
          position: absolute;
          left: 10px;
          top: 20px;
          width: 46px;
          height: 30px;
          line-height: 30px;
          border: 1px solid $theme-red;
          background-color: rgba($theme-red, 0.1);
          font-size: $font-normal;
          text-align: center;
          color: $theme-red;
        }
        .title {
          font-size: $font-medium;
          color: $primary-text;
          cursor: pointer;
        }
        .date {
          font-size: $font-normal;
          line-height: 30px;
          color: $secondary-text;
        }
      }
    }
  }
</style>
