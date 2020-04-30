<template>
  <div class="free-course">
    <dl>
      <dt>
        <span
          v-for="(tab,index) in tabList"
          :key="index"
          :class="{active: currentTabIndex==index}"
          @click="handleTabClick(tab,index)"
        >{{ tab.title }}</span>
      </dt>
      <template v-if="lessonList.length">
        <dd v-for="(item,index) in lessonList" :key="index" class="course-item">
          <div class="img-box">
            <img :src="item.img" alt="">
          </div>
          <div class="course-content">
            <p class="title">
              {{ item.title }}
            </p>
            <p class="learn">
              <span class="rate">已学{{ item.percent }}%</span>
              <span class="duration">用时{{ item.hours }}</span>
              <span v-if="item.lastChapter" class="chapter">学习至{{ item.lastChapter }}</span>
            </p>
            <p class="other">
              <span>笔记{{ item.notes }}</span>
              <span>代码{{ item.codes }}</span>
              <span>问答{{ item.questions }}</span>
              <span class="learn-btn">继续学习</span>
            </p>
          </div>
        </dd>
      </template>
      <empty v-else message="暂无相关课程信息"></empty>
    </dl>

    <!-- 分页 -->
    <pagination
      v-if="lessonList.length"
      :page.sync="page"
      :total="total"
      @change="handlePaginationChange"
    ></pagination>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import Empty from 'components/empty/empty.vue'
import { getUserCourse } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      page: 1,
      total: 0,
      lessonList: [],
      currentTabIndex: 0,
      tabList: []
    }
  },
  created () {
    // 初始化选项卡数据
    this.tabList = [
      { title: '全部课程', type: '' },
      { title: '免费课程', type: 0 },
      { title: '实战课程', type: 1 }
    ]
  },
  mounted () {
    this.getUserCourseData()
  },
  methods: {
    // 选项卡点击事件
    handleTabClick (tab, index) {
      this.currentTabIndex = index
      this.getUserCourseData()
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getUserCourseData()
    },
    // 获取用户课程信息
    getUserCourseData () {
      const params = {
        page: 1,
        type: this.currentType
      }
      getUserCourse(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.lessonList = data.list
        } else {
          this.lessonList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.lessonList = []
        this.$message.error('接口异常')
      })
    }
  },
  computed: {
    currentType () {
      return this.tabList[this.currentTabIndex].type
    }
  },
  components: {
    Pagination,
    Empty
  }
}
</script>
<style lang="stylus" scoped>
  .free-course
    dt
      border-bottom: 1px solid #d0d6d9;
      & > span
        margin-right: 48px;
        display: inline-block;
        vertical-align: middle;
        height: 48px;
        line-height: 48px;
        box-sizing: border-box;
        font-size: 14px;
        color: #787d82
        cursor: pointer;
        &:last-child
          margin-right: 0;
        &.active
          color: #f01414;
          border-bottom: 2px solid #f01414;
    .course-item
      display: flex;
      align-items: flex-start;
      padding: 30px 0;
      border-bottom: 1px solid #eff1f0;
      &:last-child
        border-bottom: none;
      .img-box
        flex: 0 0 200px;
        width: 200px;
        height: 113px;
        & > img
          display: block;
          width: 100%;
          height: 100%;
      .course-content
        flex: 1;
        margin-left: 30px;
        .title
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          .status
            float: right;
            margin-right: 25px;
            font-size: 14px;
            color: #787d82;
        .learn
          padding: 10px 0 22px;
          & > span
            display: inline-block;
            vertical-align: middle;
            margin-right: 15px;
            color: #787d82;
            line-height: 20px;
            font-size: 14px;
            &:last-child
              margin-right: 0;
            &.rate
              color: #f01414;
        .other
          & > span
            margin-right: 100px;
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #787d82;
            &.learn-btn
              float: right;
              margin-right: 0;
              width: 104px;
              height: 36px;
              background-color: #f01414;
              border-radius: 18px;
              text-align: center;
              line-height: 36px;
              color: #fff;
              cursor: pointer;
</style>