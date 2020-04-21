<template>
  <div class="course-nav">
    <dl>
      <dt>方向：</dt>
      <dd
        v-for="(item,index) in directionList"
        :key="index"
        :class="{active: index===directionIndex}"
        @click="handleNavClick('direction', index)"
      >
        {{ item.title }}
      </dd>
    </dl>

    <dl>
      <dt>分类：</dt>
      <dd
        v-for="(item,index) in currentLabels"
        :key="index"
        :class="{active: index===categoryIndex}"
        @click="handleNavClick('category', index)"
      >
        {{ item.title }}
      </dd>
    </dl>

    <dl>
      <dt>难度：</dt>
      <dd
        v-for="(diff,index) in diffList"
        :key="index"
        :class="{active: index===diffIndex}"
        @click="handleNavClick('diff', index)"
      >
        {{ diff.title }}
      </dd>
    </dl>
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
      directionIndex: 0,
      categoryIndex: 0,
      diffIndex: 0,
      diffList: [],
      currentIndex: 0
    }
  },
  created () {
    this.diffList = [
      { title: '全部', code: '' },
      { title: '入门', code: 0 },
      { title: '初级', code: 1 },
      { title: '中级', code: 2 },
      { title: '高级', code: 3 }
    ]
  },
  methods: {
    // 导航点击事件
    handleNavClick (type, index) {
      switch (type) {
        case 'direction':
          this.directionIndex = index
          this.categoryIndex = 0
          break
        case 'category':
          this.categoryIndex = index
          break
        case 'diff':
          this.diffIndex = index
          break
      }
      this.$emit('update:params', this.emitParams)
    }
  },
  computed: {
    directionList () {
      if (this.list.length === 0) {
        return []
      }
      let categoryList = []
      this.list.forEach(nav => {
        const findIndex = categoryList.findIndex(item => item.title === nav.type.text)
        if (findIndex  === -1) {
          categoryList.push({
            title: nav.type.text,
            code: nav.type.code,
            list: [nav]
          })
        } else {
          categoryList[findIndex].list.push(nav)
        }
      })
      categoryList.unshift({
        title: '全部',
        list: []
      })
      return categoryList
    },
    currentLabels () {
      const currentCategory = this.directionList[this.directionIndex]
      let ret = []
      if (!currentCategory) {
        return []
      } else if (currentCategory.title !== '全部') {
        ret = currentCategory.list.slice()
        ret.unshift({
          title: '全部'
        })
        return ret
      } else {
        ret = this.directionList.map(item => item.list).reduce((prev, curr) => {
          return prev.concat(curr)
        }, [])
        ret.unshift({
          title: '全部'
        })
        return ret
      }
    },
    emitParams () {
      const direction = this.directionList[this.directionIndex]
      const category = this.currentLabels[this.categoryIndex].title
      const diff = this.diffList[this.diffIndex]
      return {
        direction: direction.title === '全部' ? '' : direction.code,
        category: category === '全部' ? '' : category,
        diff: diff.title === '全部' ? '' : diff.code
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .course-nav
    dl
      position: relative;
      padding: 16px 0 10px 52px;
      border-bottom: 1px solid $border-three-color;
      font-size: 14px;
      dt
        position: absolute;
        left: 0;
        top: 22px;
        color: $font-first-color;
        font-weight: 700;
      dd
        display: inline-block;
        padding: 0 10px;
        margin: 0 5px 10px 0;
        height: 30px;
        line-height: 30px;
        color: $font-first-color;
        cursor: pointer;
        &.active
          background-color: rgba(242,13,13,.06);
          border-radius: 6px;
          color: $theme-red-color;
          font-weight: 700;
        &:hover
          color: $theme-red-color;
</style>