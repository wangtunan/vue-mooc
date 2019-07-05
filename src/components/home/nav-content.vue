<template>
  <div class="nav-content">
    <div class="tags">
      <div class="tags-item" v-for="(tags,index) in content.tags" :key="index">
        <h2 class="title-box">
          <span class="title">{{tags.subtitle}}</span>
          <span class="line"></span>
        </h2>
        <ul class="list">
          <li class="tag" v-for="(tag,index) in tags.list" :key="index">{{tag}}</li>
        </ul>
      </div>
    </div>

    <div class="nav-course">
      <div class="course-item" v-for="(course,index) in content.course" :key="index">
        <div class="img-box">
          <img :src="course.img" width="64" height="42" alt="">
        </div>
        <div class="course-content">
          <h2 class="title ellipsis">{{course.title}}</h2>
          <p class="information">
            <span class="money" v-if="course.money >0">¥{{course.money}} / </span>
            <span>{{course.rank}} / </span>
            <span>{{course.number}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .nav-content
    z-index: 999;
    position: absolute;
    top: 0;
    left: 216px;
    width: 768px;
    height: 444px;
    background-color: #fff;
    .tags
      position: relative;
      padding: 36px 48px 32px;
      .tags-item
        .title-box
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          color: #F20D0D;
          font-size: 14px;
          line-height: 24px;
          font-weight: 700;
          .title
            margin-right: 20px;
          .line
            flex: 1;
            height: 1px;
            background-color: rgba(77, 85, 93, 0.08);
        .list
          .tag
            display: inline-block;
            margin-right: 16px;
            margin-bottom: 24px;
            font-size: 14px;
            color: #4D555D;
            cursor: pointer;
            &:hover
              color: #F20D0D;
    .nav-course
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 36px 0 0 48px;
      background-color: #F8FAFC;
      .course-item
        flex: 0 0 50%;
        width: 50%;
        display: flex;
        align-items: center;
        margin-bottom: 36px;
        cursor:pointer;
        .img-box
          flex: 0 0 62px;
          margin-right: 16px;
          & > img
            display: block;
            width: 64px;
            height: 42px;
            background-color: #ccc;
            border-radius: 4px;
        .course-content
          flex: 1;
          .title
            font-size: 12px;
            line-height: 24px;
            color: #07111B;
          .information
            color: #4D555D;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 1px;
            .money
              font-size: 12px;
              line-height: 20px;
              font-weight: 700;
</style>