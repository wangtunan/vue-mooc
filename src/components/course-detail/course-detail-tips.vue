<template>
  <div class="course-detail-tips">
    <div class="tips-btn">开始学习</div>
    <div class="tips-content">
      <dl>
        <dt>课程须知</dt>
        <dd>1、对Javascript基础知识已经掌握。</dd>
        <dd>2、对Es6和webpack有简单了解。</dd>
      </dl>
      <dl>
        <dt>老师告诉你能学到什么？</dt>
        <dd>1、使用Vue2.0版本实现响应式编程 </dd>
        <dd>2、理解Vue编程理念与直接操作Dom的差异</dd>
        <dd>3、Vue常用的基础语法 </dd>
        <dd>4、使用Vue编写TodoList功能 </dd>
        <dd>5、什么是Vue的组件和实例 </dd>
        <dd>6、Vue-cli脚手架工具的使用</dd>
        <dd>7、但文件组件，全局样式与局部样式</dd>
      </dl>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .course-detail-tips
    padding: 24px 32px 32px;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.1);
    border-radius: 12px;
    .tips-btn
      padding: 11px 32px;
      border-radius: 24px;
      background-color: #f20d0d;
      text-align: center;
      line-height: 24px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      &:hover
        background-color: #c20a0a;
    .tips-content
      dl
        margin-top: 24px;
        dt
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 700;
        dd
          color: #545c63;
          font-size: 12px;
          line-height: 24px;
</style>
