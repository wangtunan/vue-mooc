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
          {{ filter.title }}
        </li>
      </ul>
    </div>

    <!-- 课程列表 -->
    <ul v-if="list.length" class="lesson-list">
      <li v-for="(item, index) in list" :key="index" class="list-item" @click="handleLessonClick(item)">
        <div class="img-box">
          <img :src="item.img" alt="">
          <span v-if="item.rate" class="rate">{{ item.rate }}%</span>
          <div class="lesson-mask">
            <div v-if="item.teacher" class="teacher-info">
              <img :src="item.teacher.avatar" alt="">
              <span class="name">{{ item.teacher.name }}</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">
            {{ item.title }}
          </h2>
          <p>
            <span>{{ item.hard.text }}</span>
            <span class="number"><i class="iconfont">&#xe607;</i>{{ item.persons || 0 }}</span>
            <span class="comment">{{ item.comments || 0 }}人评价</span>
          </p>
          <p class="desc">
            {{ item.introduction }}
          </p>
          <p class="price">
            <span v-if="item.isDiscount" class="new">¥{{ item.discountPrice }}</span>
            <span class="old" :class="{'is-discount': item.isDiscount}">¥{{ item.price }}</span>
            <span class="price-right">
              <span v-if="!item.isBuy" class="cart" @click.stop="handleAddCartClick(item)">加入购物车</span>
            </span>
          </p>
          <p v-if="item.isDiscount">
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>
    </ul>
    <empty v-else message="暂无相关课程数据"></empty>
  </div>
</template>
<script>
import Empty from 'components/empty/empty.vue'
import { addCart } from 'api/cart.js'
import { ERR_OK } from 'api/config.js'
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
      isShowLike: false,
      isHide: false,
      currentFilterIndex: 0,
      filter: []
    }
  },
  created () {
    this.filter = [
      { title: '默认排序', code: '' },
      { title: '最新', code: 'time' },
      { title: '销量', code: 'persons' }
    ]
  },
  methods: {
    // 筛选项点击事件
    handleFilterClick (filter, index) {
      this.currentFilterIndex = index
      this.$emit('update:sort', filter.code)
    },
    // 加入购物车
    handleAddCartClick (item) {
      const params = item
      addCart(params).then(res => {
        const { code, msg } = res
        if (code === ERR_OK) {
          this.$confirm('添加购物车成功', '提示', {
            confirmButtonText: '去购物车结算',
            cancelButtonText: '再逛逛',
            type: 'success'
          }).then(() => {
            this.$router.push('/cart')
          })
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 课程点击事件
    handleLessonClick (lesson) {
      if (lesson.isBuy) {
        this.$router.push(`/lesson/${lesson.id}`)
      }
    }
  },
  computed: {
    // 已收藏课程数量
    computeLikeLesson () {
      return this.list.filter(item => item.isLike).length || 0
    }
  },
  components: {
    Empty
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
                display: inline-block;
                vertical-align: text-bottom;
                margin-right: 12px;
                width: 36px;
                height: 36px;
                background-color: #eee;
                border-radius: 50%;
              .name
                display: inline-block;
                margin-top: -2px;
                font-size: 14px;
                font-weight: 700;
                color: #fff;
        .lesson-content
          padding: 0 8px;
          .title
            margin-top: 16px;
            height: 48px;
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
              height: 42px;
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
              &.is-discount
                margin-left: 8px;
                text-decoration: line-through;
            .new
              color: $font-second-color;
            .price-right
              float: right;
              .cart
                padding-left: 10px;
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
