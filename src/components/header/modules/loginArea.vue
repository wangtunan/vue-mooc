<template>
  <div class="login-area">
    <ul>
      <li class="login-area-item app" title="下载APP">
        <span>下载APP</span>
        <AppDownload class="app-download" />
      </li>
      <li class="login-area-item cart" title="购物车">
        <span>
          <i class="iconfont icon-cart"></i>购物车
        </span>
      </li>
      <li class="login-area-item login">
        <span title="登陆">登陆</span> / <span title="注册">注册</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AppDownload from './appDownload.vue'
export default defineComponent({
  name: 'HeaderLoginArea',
  components: {
    AppDownload
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  $header-height: 72px;
  $half-height: calc(#{$header-height} / 2);
  .login-area {
    float: right;
    margin-right: 10px;
    &-item {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      line-height: $header-height;
      font-size: $font-normal;
      color: $regular-text;
      & > span {
        cursor: pointer;
      }
      &:not(.login):hover {
        & > span {
          color: $theme-red;
        }
      }
      &.app {
        padding: 0 15px;
        &:hover {
          .app-download {
            display: block;
          }
        }
      }
      &.cart {
        margin: 18px 0;
        height: $half-height;
        line-height: calc(#{$header-height} / 2 - 2px);
        border: 1px solid $placeholder-text;
        border-radius: $border-radius-large;
        box-sizing: border-box;
        span {
          padding: 0 18px;
        }
        .iconfont {
          margin-right: 8px;
        }
      }
      &.login {
        margin-left: 10px;
        color: $placeholder-text;
        span {
          display: inline-block;
          padding: 0 15px;
          line-height: $header-height;
          color: $regular-text;
          &:hover {
            color: $theme-red;
          }
        }
      }
    }
  }
</style>
