<template>
  <div class="qrcode-container">
    <img class="qrcode-img" src="./qrcode.png" width="160" height="160" alt="">
    <p class="qrcode-title">
      扫描二维码登录慕课网
    </p>
    <p class="qrcode-subtitle">
      请使用新版 <span class="qrcode-app">慕课网手机APP</span> 扫码完成登录
    </p>
  </div>
</template>
<style lang="stylus" scoped>
  .qrcode-container
    padding-bottom: 25px;
    text-align: center;
    .qrcode-img
      padding: 10px 0 30px;
      width: 160px;
      height: 160px;
    .qrcode-title
      font-size: 16px;
      color: #717a84;
      font-weight: 700;
      line-height: 24px;
    .qrcode-subtitle
      font-size: 12px;
      color: #717a84;
      line-height: 18px;
      .qrcode-app
        color: #EF1300;
</style>
