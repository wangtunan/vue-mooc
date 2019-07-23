<template>
  <div class="course-search mx-center">
    <div class="search-tag">
      <img src="https://www.imooc.com/static/img/course/logo-course2.png" width="96" height="60" alt="">
      <img src="https://www.imooc.com/static/img/course/course-top.png" width="96" height="60" alt="">
    </div>
    <div class="search-wrapper">
      <input type="text" placeholder="搜索感兴趣的内容">
      <i class="iconfont">&#xe63c;</i>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .course-search
    overflow: hidden;
    border-bottom: 1px solid rgba(28,31,33,.2);
    .search-tag
      float: left;
      img
        &:nth-child(2) {
          margin-left: 16px;
        }
    .search-wrapper
      position: relative;
      float: right;
      margin-top: 12px;
      padding-bottom: 12px;
      width: 466px;
      height: 60px;
      line-height: 60px;
      .iconfont
        position: absolute;
        right: 5px;
        top: 30px;
        font-size: 24px;
        color: #9199a1;
        cursor: pointer;
        line-height: 1;
      input
        padding: 0 16px;
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        line-height: 36px;
        border-radius: 5px;
        outline: none;
        background: #f3f5f6;
        font-size: 14px;
        color: #1c1f21;
</style>
