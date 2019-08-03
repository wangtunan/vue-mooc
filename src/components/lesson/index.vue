<template>
  <div class="lesson">
    <!-- 搜索 -->
    <lesson-search :hot="hotList"></lesson-search>

    <!-- 导航 -->
    <lesson-nav :nav="navList" v-if="navList.length"></lesson-nav>

    <!-- 列表 -->
    <lesson-list></lesson-list>
    
    <!-- 分页 -->
    <pagination :total.sync="total"></pagination>
  </div>
</template>
<script>
import LessonSearch from './lesson-search.vue'
import LessonNav from './lesson-nav.vue'
import LessonList from './lesson-list.vue'
import Pagination from 'base/pagination/pagination.vue'
import { getHot } from 'api/common.js'
import { getLessonNav } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      total: 100, // 课程总页数
      navList: [], // 导航列表
      hotList: [] // 热词列表
    }
  },
  mounted () {
    this.getHotData()
    this.getLessonNavData()
  },
  methods: {
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

 