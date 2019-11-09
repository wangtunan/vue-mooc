<template>
  <div class="lesson-list-wrapper ml-center">
    <!-- 筛选类表 -->
    <div class="list-filter">
      <ul>
        <li
          v-for="(filter, index) in filter"
          :key="index"
          class="filter-item"
          :class="{active: currentFilterIndex == index}"
          @click="handleFilterClick(filter,index)"
        >
          {{ filter }}
        </li>
      </ul>
      <div class="hide-course-box">
        <mooc-switch
          v-model="isHide"
          active-color="#13ce66"
          inactive-color="#9199a1"
        />隐藏已参与的课程
        <span class="like-number" :class="{active: isShowLike}" @click="handleShowLikeClick">
          <i class="iconfont">&#xe716;</i>
          我的收藏{{ computeLikeLesson }}
        </span>
      </div>
    </div>

    <!-- 课程列表 -->
    <ul class="lesson-list">
      <li v-for="(item, index) in computeList" :key="index" class="list-item" @click="handleLessonClick(item)">
        <div class="img-box">
          <img :src="item.img" alt="">
          <span v-if="item.type" class="type">{{ item.type }}</span>
          <span v-if="item.rate" class="rate">{{ item.rate }}%</span>
          <div class="lesson-mask">
            <div v-if="item.teacher" class="teacher-info">
              <img :src="item.teacher.avatar" alt="">
              <span class="name">{{ item.teacher.name }}</span>
            </div>
            <div v-if="item.lastUpdate" class="update-info">
              <span>更新于</span>
              <span>{{ item.lastUpdate }}</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">
            {{ item.title }}
          </h2>
          <p>
            <span>{{ item.rank }}</span>
            <span class="number"><i class="iconfont">&#xe607;</i>{{ item.number }}</span>
            <span class="comment">{{ item.comment }}人评价</span>
          </p>
          <p class="desc">
            {{ item.desc }}
          </p>
          <p class="price">
            <span class="old">¥{{ item.oldPrice }}</span>
            <span v-if="item.newPrice" class="new">¥{{ item.newPrice }}</span>
            <span class="price-right">
              <span class="like" :class="{active: item.isLike}" @click="handleLikeClick(item,index)">
                <i class="iconfont">&#xe716;</i>
                {{ item.isLike ? '已收藏' : '收藏' }}
              </span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p v-if="item.isDiscount">
            <span class="discount">限时优惠</span>
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
      isShowLike: false, // 是否展示已收藏课程
      isHide: false, // 是否隐藏已参与的课程
      currentFilterIndex: 0, // 当前筛选项的索引
      filter: ['默认排序', '最新', '销量', '更新'] // 筛选项
    }
  },
  methods: {
    // 筛选项点击事件
    handleFilterClick (filter, index) {
      this.currentFilterIndex = index
    },
    // 收藏or取消收藏点击事件
    handleLikeClick (item, index) {
      let list = this.list.slice()
      list[index].isLike = !item.isLike
      this.$emit('update:list', list)
    },
    // 展示已收藏的课程
    handleShowLikeClick () {
      this.isShowLike = true
    },
    // 课程点击事件
    handleLessonClick () {
      let random = new Date().getTime()
      this.$router.push(`/lesson/${random}`)
    }
  },
  computed: {
    // 课程筛选列表
    computeList () {
      let list = this.list.slice()
      
      // 处理最新
      if (this.currentFilterIndex === 1) {
        list = list.filter(item => item.type === '新课')
      }

      // 处理销量
      if (this.currentFilterIndex === 2) {
        list = list.sort((a, b) => {
          return b.number - a.number
        })
      }

      // 处理更新
      if (this.currentFilterIndex === 3) {
        list = list.filter(item => item.lastUpdate)
      }

      // 处理已收藏的课程
      if (this.isShowLike) {
        list = list.filter(item => item.isLike)
      }
      return list
    },
    // 已收藏课程数量
    computeLikeLesson () {
      return this.list.filter(item => item.isLike).length || 0
    }
  },
  watch: {
    isHide () {
      this.isShowLike = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .lesson-list-wrapper
    .list-filter
      padding: 20px 12px;
      border-top: 1px solid $border-second-color;
      & > ul
        display: inline-block;
      .filter-item
        display: inline-block;
        margin-right: 12px;
        padding: 4px 12px;
        border-radius: 12px;
        line-height: 16px;
        font-size: 12px;
        color: $font-second-color;
        cursor: pointer;
        &.active
          background-color: $font-second-color;
          color: #fff;
      .hide-course-box
        float: right;
        color: $font-three-color;
        font-size: 12px;
        .mooc-switch
          margin-right: 15px;
      .like-number
        display: inline-block;
        margin-left: 25px;
        padding: 0 12px;
        line-height: 24px;
        border-radius: 12px;
        background-color: rgba(204,136,0,.1);
        color: $theme-orange-dark-color;
        font-size: 12px;
        cursor: pointer;
        &:hover, &.active
          color: #fff;
          background-color: rgba(204,136,0,1);
    .lesson-list
      .list-item
        display: inline-block;
        vertical-align: top;
        margin-right: 24px;
        margin-bottom: 36px;
        width: 270px;
        cursor: pointer;
        &:hover
          .img-box
            box-shadow: 0 8px 4px 0 rgba(7,17,27,0.1);
          .lesson-content
            .title
              color: $theme-red-color;
        &:nth-child(5n) {
          margin-right: 0;
        }
        .img-box
          position: relative;
          border-radius: 16px;
          img-box(270px, 148px);
          & > img
            border-radius: 16px;
          .type
            position: absolute;
            left: -8px;
            top: 8px;
            padding: 0 8px;
            border-radius: 12px;
            border: 2px solid #fff;
            line-height: 20px;
            background: linear-gradient(90deg,#fa0 17%,#f76b1c 100%);
            font-size: 12px;
            font-weight: 700;
            color: #fff;
          .rate
            position: absolute;
            right: -8px;
            top: 8px;
            padding: 0 8px;
            border-radius: 12px;
            border: 2px solid #fff;
            line-height: 20px;
            background: linear-gradient(-90deg,#65da98 0,#0cba4d 100%);
            font-size: 12px;
            font-weight: 700;
            color: #fff;
          .lesson-mask
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 74px;
            background: linear-gradient(-180deg,rgba(7,17,27,0) 0,rgba(7,17,27,.6) 97%);
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            .teacher-info
              position: absolute;
              left: 16px;
              bottom: 16px;
              & > img
                margin-right: 12px;
                width: 36px;
                height: 36px;
                background-color: #eee;
                border-radius: 50%;
              .name
                font-size: 14px;
                font-weight: 700;
                color: #fff;
            .update-info
              position: absolute;
              right: 16px;
              bottom: 14px;
              & > span
                display: block;
                line-height: 20px;
                color: #fff;
                font-size: 12px;
        .lesson-content
          padding: 0 8px;
          .title
            margin-top: 16px;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: $font-first-color;
            word-break: break-all;
            multline-ellipsis(2);
          & > p
            line-height: 20px;
            color: $font-four-color;
            font-size: 12px;
            span
              line-height: 24px;
              cursor: pointer;
            &.desc
              margin-top: 4px;
              multline-ellipsis(2);
              &:hover
                color: $font-second-color;
            &.price
              margin-bottom: 4px;
            .number
              margin-left: 10px;
            .comment
              float: right;
            .old
              color: $font-second-color;
            .new
              margin-left: 5px;
              color: $font-second-color;
              text-decoration: line-through;
            .price-right
              float: right;
              .like
                margin-right: 10px;
                cursor: pointer;
                &:hover
                  color: $font-second-color;
                &.active
                  color: $theme-red-color;
              .cart
                padding-left: 10px;
                border-left: 2px solid $border-second-color;
                &:hover
                  color: $font-second-color;
            .discount
              padding: 4px;
              border-radius: 4px;
              background-color: $theme-red-color;
              opacity: 0.6;
              line-height: 20px;
              color: #fff;
</style>
