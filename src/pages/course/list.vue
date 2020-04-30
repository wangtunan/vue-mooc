<template>
  <div class="course-list-wrapper">
    <!-- 课程筛选 -->
    <div class="course-filter">
      <span
        v-for="(item,index) in filterList"
        :key="index"
        :class="{active: index == filterIndex}"
        @click="handleFilterClick(item, index)"
      >{{ item.title }}</span>
    </div>

    <!-- 课程列表 -->
    <ul v-if="list.length" class="course-list">
      <li v-for="(item,index) in list" :key="index" class="list-item" @click="handleCourseClick(item)">
        <div class="img-box">
          <img :src="item.img" alt="">
          <div class="tags">
            <span v-for="(label, index) in item.labels" :key="index" class="tag-item">{{ label }}</span>
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
            <span class="rank">{{ item.hard.text }}</span>
            <span class="number"><i class="iconfont">&#xe607;</i>{{ item.persons }}</span>
          </p>
          <p class="desc">
            {{ item.introduction }}
          </p>
          <p>
            <span class="price">免费</span>
          </p>
        </div>
      </li>
    </ul>
    <empty v-else message="暂无相关课程数据"></empty>
  </div>
</template>
<script>
import Empty from 'components/empty/empty.vue'
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
      isHide: false,
      filterList: [],
      filterIndex: 0
    }
  },
  created () {
    this.filterList = [
      { title: '默认排序', code: '' },
      { title: '最新', code: 'time' },
      { title: '最热', code: 'persons' }
    ]
  },
  methods: {
    // 排序方式点击
    handleFilterClick (item, index) {
      this.filterIndex = index
      this.$emit('update:sort', item.code)
    },
    // 课程点击事件
    handleCourseClick (lesson) {
      this.$router.push({ path: `/course/${lesson.id}` })
    }
  },
  components: {
    Empty
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
    .course-list
      padding: 10px 0 20px;
      .list-item
        display: inline-block;
        margin: 0 15px 25px 0;
        vertical-align: top;
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
            &.desc
              height: 50px;
              multline-ellipsis(2)
</style>
