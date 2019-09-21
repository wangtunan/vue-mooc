<template>
  <div class="cart-header">
    <div class="m-center">
      <p class="info">
        <slot />
      </p>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .cart-header
    height: 160px;
    background: url('https://order.imooc.com/static/module/pay/myorder/img/cart-header-bg.jpg') repeat-x left bottom;
    .info
      line-height: 115px;
      color: #4d555d;
      font-size: 14px;
</style>