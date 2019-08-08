<template>
  <div class="course-detail-header">
    <div class="header">
      <div class="header-content m-center">
        <p class="breadcrumb-box">
          <span>课程 \ 前端开发 \ Vue.js \ vue2.5入门</span>
        </p>
        <p class="share-box">
          <span class="iconfont">&#xe610;</span>
          <span class="iconfont">&#xe646;</span>
          <span class="iconfont">&#xe6a0;</span>
          <span class="iconfont">&#xe699;</span>
        </p>
        <h2 class="title">Vue2.5入门</h2>
        <div class="information">
          <div class="teacher">
            <img src="https://img1.mukewang.com/5abe468b0001664107390741-80-80.jpg" class="avatar" alt="">
            <div class="teacher-introduce">
              <p class="name">DellLee</p>
              <p class="job">Web前端工程师</p>
            </div>
            <dl>
              <dd>难度：中级</dd>
              <dd>时长：2小时23分钟</dd>
              <dd>学习人数：93246</dd>
              <dd>综合评分：96.3</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .course-detail-header
    height: 200px;
    background-image: linear-gradient(90deg, #19172D, #645DB7);
    .header
      height: 100%;
      .header-content
        position: relative;
        height: 100%;
        color: #fff;
        .breadcrumb-box
          padding: 16px 0 24px 0;
          line-height: 24px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        .share-box
          position: absolute;
          right: 0;
          top: 16px;
          font-size: 12px;
          line-height: 24px;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          & > span
            margin: 0 12px;
            &:hover
              color: #fff;
          .iconfont
            font-size: 24px;
        .title
          margin-bottom: 8px;
          font-size: 32px;
          color: #fff;
          line-height: 48px;
        .information
          .teacher
            vertical-align: middle;
            display: flex;
            align-items: center;
            .avatar
              width: 48px;
              heighth: 48px;
              border-radius: 50%;
            .teacher-introduce
              margin-left: 8px;
              .name
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
              .job
                font-size: 12px;
            dl
              flex: 1;
              margin-left: 50px;
              dd
                display: inline-block;
                vertical-align: middle;
                margin: 0 10px;
                font-size: 12px;
                font-weight: 700;
                color: rgba(255,255,255,0.8);
</style>
