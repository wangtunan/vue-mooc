<template>
  <div class="lesson">
    <!-- 搜索 -->
    <lesson-search :hot="hotList" />

    <!-- 导航 -->
    <lesson-nav v-if="navList.length" :nav="navList" :params.sync="params" />

    <!-- 列表 -->
    <lesson-list :list="lessonList" :sort.sync="sort" @change="getLessonListData" />
    
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
      sort: '',
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
        } else {
          this.navList = []
          this.$message.error('获取课程类型数据失败')
        }
      }).catch(() => {
        this.navList = []
        this.$message.error('接口异常')
      })
    },
    // 获取课程列表数据
    getLessonListData () {
      const params = {
        page: this.page,
        size: this.size,
        type: 1,
        category: this.params.category,
        label: this.params.label,
        sort: this.sort
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
  watch: {
    params () {
      this.page = 1
      this.getLessonListData()
    },
    sort () {
      this.getLessonListData()
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

 