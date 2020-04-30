<template>
  <div class="notice m-center">
    <!-- nav -->
    <ul class="notice-nav">
      <li
        v-for="(nav,index) in navList"
        :key="nav.code"
        class="nav-item"
        :class="{active: currentNavIndex == index}"
        @click="handleNavClick(nav, index)"
      >
        {{ nav.title }}
      </li>
    </ul>

    <!-- list -->
    <div class="notice-list">
      <div class="list-setting">
        <span class="tips">消息中心只展示最近三个月的消息</span>
        <span class="setting-box">
          <span v-if="noticeList.length > 0" class="read-all" @click="handleAllReadClick">全部标记为已读</span>
          <span class="read-setting" @click="handleSettingClick">通知设置</span>
        </span>
      </div>
      <ul v-if="noticeList.length">
        <li
          v-for="(item,index) in noticeList"
          :key="index"
          ref="NoticeList"
          class="list-item"
          :class="{ready: item.isRead}"
        >
          <div class="item-icon">
            {{ item.code == 1 ? '实战' : '系统' }}
          </div>
          <div class="item-content">
            <p class="title" @click="handleNoticeClick(item)">
              {{ item.title }}
            </p>
            <p class="time">
              {{ item.time }}
            </p>
            <span class="iconfont delete" @click.stop="handleDeleteClick(item)">&#xe622;</span>
          </div>
        </li>
      </ul>
      <empty v-else message="暂无相关消息数据"></empty>
    </div>

    <!-- pagination -->
    <pagination v-if="noticeList.length" :total="total" :page.sync="page" @change="handlePaginationChange" />

    <!-- dialog -->
    <notice-setting :list="settingList" :visible.sync="dialogVisible"></notice-setting>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import Empty from 'components/empty/empty.vue'
import { ERR_OK } from 'api/config.js'
import { getNoticeList, getNoticeSetting, noticeReadOne, noticeReadAll, noticeNoticeDelete } from 'api/notice.js'
export default {
  data () {
    return {
      total: 0,             // 总数
      page: 1,              // 当前页
      dialogVisible: false, // 是否显示消息中心弹窗
      settingList: [],      // 设置数据
      noticeList: [],       // 消息中心列表 
      currentNavIndex: 0,   // 当前导航的索引
      navList: []           // 导航数据
    }
  },
  created () {
    this.navList = [
      { title: '全部', code: 0 },
      { title: '实战', code: 1 },
      { title: '系统', code: 2 }
    ]
  },
  mounted () {
    this.getNoticeListData()
  },
  methods: {
    // 选项卡切换
    handleNavClick (nav, index) {
      this.page = 1
      this.currentNavIndex = index
      this.getNoticeListData()
    },
    // 单个通知删除
    handleDeleteClick (item) {
      const data = {
        id: item.id
      }
      noticeNoticeDelete(data).then(res => {
        const { code, msg } = res
        if (code !== ERR_OK) {
          this.$message.error(msg)
          return false
        }
        this.$message.success('删除成功')
        this.getNoticeListData()
      }).catch(() => {
        this.$message.error('删除失败')
      })
    },
    // 单个通知已读
    handleNoticeClick (item) {
      const data = {
        id: item.id
      }
      noticeReadOne(data).then(res => {
        const { code, msg } = res
        if (code !== ERR_OK) {
          this.$message.error(msg)
          return false
        }
        this.$message.success('消息已读成功')
        this.getNoticeListData()
      }).catch(() => {
        this.$message.error('消息已读失败')
      })
    },
    // 全部标记已读
    handleAllReadClick () {
      const postIds = this.noticeList.filter(notice => !notice.isRead).map(notice => notice.id)
      const data = {
        ids: postIds
      }
      noticeReadAll(data).then(res => {
        const { code, msg } = res
        if (code !== ERR_OK) {
          this.$message.error(msg)
          return false
        }
        this.$message.success('全部标记成功')
        this.getNoticeListData()
      }).catch(() => {
        this.$message.error('全部标记失败')
      })
    },
    // 通知设置点击
    handleSettingClick () {
      this.dialogVisible = true
      this.getNoticeSettingData()
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getNoticeListData()
    },
    // 获取通知列表数据
    getNoticeListData () {
      const params = {
        page: this.page,
        code: this.currentCode
      }
      getNoticeList(params).then(res => {
        this.noticeList = []
        this.total = 0
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.noticeList = data.list
          this.total = data.total
        } else {
          this.$message.error(msg)
          this.noticeList = []
          this.total = 0
        }
      }).catch(() => {
        this.noticeList = []
        this.total = 0
      })
    },
    // 获取通知设置数据
    getNoticeSettingData () {
      getNoticeSetting().then(res => {
        this.settingList = []
        let { code, data } = res
        if (code === ERR_OK) {
          this.settingList = data
        }
      }).catch(() => {
        this.settingList = []
      })
    }
  },
  computed: {
    currentCode () {
      return this.navList[this.currentNavIndex].code || ''
    }
  },
  components: {
    Pagination,
    Empty,
    NoticeSetting: () => import('./notice-setting.vue')
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .notice
    margin-top: 30px;
    .notice-nav
      padding-left: 32px;
      .nav-item
        display: inline-block;
        margin-right: 58px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        &.active
          color: $theme-red-color;
          border-bottom: 2px solid $theme-red-color;
    .notice-list
      .list-setting
        padding-left: 28px;
        padding-right: 20px;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid $border-first-color;
        background-color: #f3f5f7;
        color: $font-four-color;
        font-size: 14px;
        .setting-box
          float: right;
          & > span
            margin-left: 20px;
            color: $font-second-color;
            cursor: pointer;
            &:hover
              color: $font-first-color;
      .list-item
        padding: 20px 10px;
        display: flex;
        align-items: flex-start;
        height: 90px;
        border-bottom: 1px solid $border-second-color;
        box-sizing: border-box;
        transition: all 0.3s linear;
        opacity: 1;
        &.ready
          .item-icon
            border: 1px solid $border-second-color;
            background-color: #fff;
            color: $font-four-color;
          .item-content
            .title
              color: $font-four-color;
        .item-icon
          margin-right: 20px;
          padding: 10px;
          border: 1px solid $theme-red-color;
          background-color: #fde7e5;
          color: $theme-red-color;
          font-size: 14px;
        .item-content
          flex: 1;
          position: relative;
          &:hover
            .delete
              display: block;
          & > p
            line-height: 24px;
            &.title
              font-size: 16px;
              font-weight: 700;
              color: $font-second-color;
              cursor: pointer;
              ellipsis();
            &.time
              font-size: 14px;
              color: $font-four-color;
          .delete
            display: none;
            position: absolute;
            top: 0px;
            right: 20px;
            color: $font-four-color;
            cursor: pointer;
</style>