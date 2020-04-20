<template>
  <div class="lesson">
    <!-- 搜索 -->
    <lesson-search :hot="hotList" />

    <!-- 导航 -->
    <lesson-nav v-if="navList.length" :nav="navList" @change="handleNavChange" />

    <!-- 列表 -->
    <lesson-list :list="lessonList" />
    
    <!-- 分页 -->
    <pagination :total="total" :page.sync="page" :size="size" @change="handlePaginationChange" />
  </div>
</template>
<script>
import LessonSearch from './search.vue'
import LessonNav from './nav.vue'
import LessonList from './list.vue'
import Pagination from 'components/pagination/pagination.vue'
import { getHot } from 'api/common.js'
import { getLessonNav, getLessonList } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      params: {},
      page: 1,
      size: 15,
      total: 0,
      lessonList: [],
      navList: [],
      hotList: []
    }
  },
  mounted () {
    this.getHotData()
    this.getLessonNavData()
    this.getLessonListData()
  },
  methods: {
    // 导航值更新事件
    handleNavChange (category) {
      this.params.category = category
      this.getLessonListData()
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getLessonListData()
    },
    // 获取热搜词数据
    getHotData () {
      getHot().then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.hotList = data
        } else {
          this.hotList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.hotList = []
        this.$message.error('接口异常')
      })
    },
    // 获取导航数据
    getLessonNavData () {
      getLessonNav().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.navList = data
        }
      })
    },
    // 获取课程列表数据
    getLessonListData () {
      const params = {
        page: this.page,
        size: this.size,
        type: 1
      }
      getLessonList(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.lessonList = data.list
          this.total = data.total
        } else {
          this.lessonList = []
          this.total = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.lessonList = []
        this.total = 0
        this.$message.error('接口异常')
      })
    }
  },
  components: {
    LessonSearch,
    LessonNav,
    LessonList,
    Pagination
  }
}
</script>

 