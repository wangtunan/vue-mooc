<template>
  <div class="lesson-nav-container">
    <div class="lesson-nav">
      <ul class="ml-center">
        <li
          v-for="(item,index) in directionList"
          :key="index"
          class="nav-item"
          :class="{active: index == currentDirectionIndex}"
          @click="handleNavClick(item,index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <dl class="category-list ml-center">
      <dd
        v-for="(category,index) in computeCategoryList"
        :key="index"
        class="category-item"
        :class="{active: index == currentCategoryIndex}"
        @click="handleCategoryClick(category,index)"
      >
        {{ category }}
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    nav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentCategoryIndex: 0, // 类型当前索引
      currentDirectionIndex: 0, // 方向当前索引
      directionList: [], // 方向数据
      categoryList: [] // 类型数据
    }
  },
  created () {
    this.nav.forEach(item => {
      if (item.code === 'direction') {
        this.directionList = item.data
      } else if (item.code === 'category') {
        this.categoryList = item.data
      }
    })
  },
  methods: {
    // 导航点击事件
    handleNavClick (item, index) {
      this.currentDirectionIndex = index
    },
    // 类型点击事件
    handleCategoryClick (category, index) {
      this.currentCategoryIndex = index
      this.$emit('change', category)
    }
  },
  computed: {
    computeCategoryList () {
      let result = []
      let categoryList = this.categoryList.slice()
      if (this.currentDirectionIndex !== 0) {
        let direction = this.directionList[this.currentDirectionIndex]
        categoryList = categoryList.filter(item => item.direction === '全部' || item.direction === direction)
      }
      categoryList.forEach(item => {
        result = result.concat(item.data)
      })
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .lesson-nav-container
    .lesson-nav
      z-index: 1;
      position: relative;
      padding: 16px 0;
      height: 72px;
      box-sizing: border-box;
      box-shadow: 0 8px 16px 0 rgba(7,17,27,0.1)
      background-color: #fff;
      .nav-item
        position: relative;
        display: inline-block;
        margin-right: 46px;
        height: 40px;
        line-height: 40px;
        color: $font-first-color;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        &:hover
          color: $theme-orange-dark-color;
        &.active
          color: $theme-orange-dark-color;
          &::after
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            margin-left: -8px;
            width: 16px;
            height: 3px;
            background-color: $theme-orange-dark-color;
            border-radius: 2px;
    .category-list
      margin-top: 24px;
      .category-item
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 12px;
        padding: 0 12px;
        line-height: 32px;
        border-radius: 6px;
        font-size: 14px;
        color: $font-second-color;
        cursor: pointer;
        &:hover
          color: $theme-orange-dark-color;
          background-color: rgba(204,136,0,.1);
        &.active
          color: $theme-orange-dark-color;
          background-color: rgba(204,136,0,.1);
</style>
