<template>
  <div class="course-detail-header">
    <div class="bg">
      <img src="https://img4.mukewang.com/5ad5cc4a0001950c06000338.jpg" alt="">
    </div>
    <div class="detail-content m-center"></div>
  </div>
</template>
<style lang="stylus" scoped>
  .course-detail-header
    .bg
      position: relative;
      width: 100%;
      height: 200px;
      text-align: center;
      overflow: hidden;
      background-image: linear-gradient(90deg, #19172D, #645DB7);
      &::after
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,0.2);
      & > img
        display: inline-block;
        height: 100%;
        filter: blur(20px);
        transform: scale(3, 2)
</style>
