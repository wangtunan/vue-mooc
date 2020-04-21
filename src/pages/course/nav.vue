<template>
  <div>
    <!-- 方向 -->
    <nav-item v-if="directionList.length" :list="directionList" :current-index="directionIndex" type="方向" @navClick="handleDirectionClick" />

    <!-- 分类 -->
    <nav-item v-if="computeCategoryList.length" :list="computeCategoryList" :current-index="categortIndex" type="分类" @navClick="handleCategoryClick" />

    <!-- 难度 -->
    <nav-item v-if="difficultList.length" :list="difficultList" :current-index="difficultIndex" type="难度" @navClick="handleDifficultClick" />
  </div> 
</template>
<script>
import NavItem from './nav-item.vue'
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
      directionList: [],
      categortIndex: 0,
      categortList: [],
      difficultIndex: 0,
      difficultList: [],
      params: {
        direction: '全部',
        category: '全部',
        difficult: '全部'
      },
    }
  },
  created () {
    this.normalizeList()
  },
  methods: {
    // 反向导航点击事件
    handleDirectionClick (params) {
      this.directionIndex = params.index
      this.params.direction = params.data
    },
    // 分类导航点击事件
    handleCategoryClick (params) {
      this.categortIndex = params.index
      this.params.category = params.data
    },
    // 难度导航点击事件
    handleDifficultClick (params) {
      this.difficultIndex = params.index
      this.params.difficult = params.data
    },
    // 格式化数据
    normalizeList () {
      let list = this.list.slice()
      list.forEach(item => {
        if (item.code === 'direction') {
          this.directionList = item.data
        } else if (item.code === 'category') {
          this.categortList = item.data
        } else if (item.code === 'difficult') {
          this.difficultList = item.data
        }
      })
    }
  },
  watch: {
    params: {
      handler () {
        this.$emit('change', this.params)
      },
      deep: true
    }
  },
  computed: {
    computeCategoryList () {
      let result = []
      let categortList = this.categortList.slice()
      if (this.directionIndex !== 0) {
        let direction = this.directionList[this.directionIndex]
        categortList = categortList.filter(item => item.direction === direction || item.direction === '全部')
      }
      categortList.forEach(item => {
        result = result.concat(item.data)
      })
      return result
    }
  },
  components: {
    NavItem
  }
}
</script>
