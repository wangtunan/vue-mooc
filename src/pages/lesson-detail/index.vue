<template>
  <div class="lesson-detail">
    <!-- 头部 -->
    <lesson-detail-header :base="detail.base" v-if="detail.base"></lesson-detail-header>

    <!-- 内容部分 -->
    <lesson-detail-content :data="detail" v-if="Object.keys(detail).length"></lesson-detail-content>
  </div>
</template>
<script>
import LessonDetailHeader from './lesson-detail-header.vue'
import LessonDetailContent from './lesson-detail-content.vue'
import { getLessonDetail } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      detail: {}, // 课程详情数据
    }
  },
  mounted () {
    this.getLessonDetailData()
  },
  methods: {
    // 获取课程详情
    getLessonDetailData () {
      getLessonDetail(this.$route.query.id).then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.detail = data
        }
      })
    }
  },
  components: {
    LessonDetailHeader,
    LessonDetailContent
  }
}
</script>