<template>
  <div class="empty-container">
    <img class="empty-img" src="@/assets/images/empty.jpg" alt="">
    <p class="empty-msg">
      {{ message }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: '暂无相关数据'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .empty-container
    padding: 30px 0;
    min-height: 300px;
    text-align: center;
    .empty-msg
      line-height: 24px;
      font-size: 16px;
      color: #f01414;
</style>