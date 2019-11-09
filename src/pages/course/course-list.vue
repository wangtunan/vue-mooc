<template>
  <div class="course-list-wrapper">
    <!-- 课程筛选 -->
    <div class="course-filter">
      <span
        v-for="(item,index) in filter"
        :key="index"
        :class="{active: index == filterIndex}"
        @click="filterIndex=index"
      >{{ item }}</span>

      <div class="hide-course-box">
        <mooc-switch
          v-model="isHide"
          active-color="#13ce66"
          inactive-color="#9199a1"
        ></mooc-switch>
        隐藏已参与的课程
      </div>
    </div>

    <!-- 课程列表 -->
    <ul v-if="computeList.length" class="course-list">
      <li v-for="(item,index) in computeList" :key="index" class="list-item" @click="handleCourseClick(item)">
        <div class="img-box">
          <img :src="item.img" alt="">
          <div class="tags">
            <span v-for="(tag, index) in item.tags" :key="index" class="tag-item">{{ tag }}</span>
          </div>
          <div v-if="item.rate" class="rate">
            {{ item.rate }}%
          </div>
        </div>
        <div class="course-content">
          <h2 class="title ellipsis">
            {{ item.title }}
          </h2>
          <p>
            <span class="rank">{{ item.rank }}</span>
            <span class="number"><i class="iconfont">&#xe607;</i>{{ item.number }}</span>
          </p>
          <p class="desc">
            {{ item.desc }}
          </p>
          <p>
            <span class="price">{{ item.price }}</span>
            <span class="collect" :class="{like: item.isLike}" @click="handleCollectClick(item,index)">
              <i class="iconfont">&#xe716;</i>
              {{ item.isLike ? '已收藏' : '收藏' }}
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isHide: false, // 是否隐藏已参与的课程
      filter: ['最新', '最热'], // 课程筛选列表
      filterIndex: 0, // 课程筛选索引
    }
  },
  methods: {
    // 收藏or取消收藏点击事件
    handleCollectClick (item, index) {
      let list = this.list.slice()
      list[index].isLike = !item.isLike
      this.$emit('update:list', list)
    },
    // 课程点击事件
    handleCourseClick () {
      let random = new Date().getTime()
      this.$router.push({ path: `/course/${random}` })
    }
  },
  computed: {
    computeList () {
      let result = this.list.slice()
      // 处理最热最新
      if (this.filterIndex === 1) {
        result = result.sort((a, b) => {
          return b.number - a.number
        })
      }
      // 处理是否隐藏已参与课程
      if (this.isHide) {
        result = result.filter(item => item.rate === 0)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .course-list-wrapper
    .course-filter
      padding: 26px 20px 16px 0;
      & > span
        display: inline-block;
        margin-right: 12px;
        padding: 4px 12px;
        color: $font-first-color;
        font-size: 14px;
        cursor: pointer;
        &.active
          background-color: $font-four-color;
          color: #fff;
          border-radius: 12px;
      .hide-course-box
        float: right;
        color: $font-three-color;
        font-size: 12px;
        .mooc-switch
          margin-right: 15px;
    .course-list
      padding: 10px 0 20px;
      .list-item
        display: inline-block;
        margin: 0 15px 25px 0;
        width: 216px;
        cursor: pointer;
        &:hover
          .course-content
            .title
              color: $red;
        .img-box
          position: relative;
          img-box(216px, 120px);
          & > img
            border-radius: 8px;
          .tags
            position: absolute;
            left: 8px;
            bottom: 6px;
            .tag-item
              display: inline-block;
              margin-right: 5px;
              padding: 4px 8px;
              background-color: rgba(28,31,33,.6);
              border-radius: 2px;
              font-size: 12px;
              color: #fff;
          .rate
            position: absolute;
            right: -7px;
            top: 8px;
            width: 42px;
            line-height: 20px;
            text-align: center;
            border: 2px solid #fff;
            background: linear-gradient(90deg,#65da98 0,#0cba4d 100%);
            font-size: 12px;
            color: #fff;
            border-radius: 12px;
        .course-content
          padding: 8px;
          .title
            margin-bottom: 22px;
            line-height: 24px;
            font-size: 16px;
            font-weight: 700;
            color: $font-first-color;
          & > p
            font-size: 12px;
            color: $font-four-color;
            line-height: 24px;
            .rank
              margin-right: 10px;
            .number
              .iconfont
                font-weight: 700;
            .price
              color: $font-second-color;
              font-weight: 700;
            .collect
              float: right;
              cursor: pointer;
              &:hover
                color: $font-second-color;
                font-weight: 700;
              &.like
                color: $red!important;
                font-weight: 700;
            .desc
              multline-ellipsis(2)
</style>
