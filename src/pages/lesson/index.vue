<template>
  <div class="lesson">
    <!-- 搜索 -->
    <lesson-search :hot="hotList" />

    <!-- 导航 -->
    <lesson-nav v-if="navList.length" :nav="navList" @change="handleNavChange" />

    <!-- 列表 -->
    <lesson-list :list.sync="lessonList" />
    
    <!-- 分页 -->
    <pagination :total.sync="total" />
  </div>
</template>
<script>
import LessonSearch from './lesson-search.vue'
import LessonNav from './lesson-nav.vue'
import LessonList from './lesson-list.vue'
import Pagination from 'components/pagination/pagination.vue'
import { getHot } from 'api/common.js'
import { getLessonNav, getLessonList } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      params: {}, // 获取列表参数
      total: 100, // 课程总页数
      lessonList: [], // 课程列表
      navList: [], // 导航列表
      hotList: [] // 热词列表
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
    // 获取热搜词数据
    getHotData () {
      getHot().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.hotList = data
        }
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
      getLessonList(this.params).then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.lessonList = data
        }
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

 