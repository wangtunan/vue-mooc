<template>
  <div class="download">
    <h3 class="download-title">慕课网APP - 随时随地学编程</h3>
    <div class="download-container">
      <div class="download-qrcode">
        <img src="@/assets/images/common/app-download.png" width="108" height="108" alt="下载二维码">
      </div>
      <div class="download-link">
        <div class="apple">
          <i class="iconfont icon-apple"></i>
          <span class="download-text">App Store下载</span>
        </div>
        <div class="android">
          <i class="iconfont icon-android"></i>
          <span class="download-text">Android下载</span>
        </div>
        <p class="download-tips">扫描下载慕课网APP</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .download {
    display: none;
    z-index: 100;
    position: absolute;
    right: 0;
    top: 100%;
    width: 300px;
    padding: 24px 22px;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,0.2);
    box-sizing: border-box;
    border-bottom-left-radius: $border-radius-normal;
    border-bottom-right-radius: $border-radius-normal;
    &-title {
      margin-bottom: 12px;
      text-align: center;
      font-size: $font-normal;
      color: $primary-text;
      font-weight: normal;
    }
    &-container {
      & > div {
        display: inline-block;
        vertical-align: middle;
      }
    }
    &-qrcode {
      width: 108px;
      height: 108px;
      margin-right: 16px;
    }
    &-link {
      width: 132px;
      height: 108px;
      & > div {
        margin-bottom: 8px;
        height: 36px;
        line-height: 36px;
        border-radius: $border-radius-large;
        background-color: rgba($primary-text, 0.9);
        color: #fff;
        font-size: $font-small;
        cursor: pointer;
        &:hover {
          background-color: $primary-text;
        }
        & > i {
          margin-left: 12px;
          margin-right: 8px;
          font-size: $font-medium;
        }
      }
    }
    &-tips {
      margin: 0;
      margin-top: 12px;
      font-size: $font-small;
      line-height: 1;
      text-align: center;
    }
  }
</style>
