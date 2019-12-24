<template>
  <div class="notice m-center">
    <!-- nav -->
    <ul class="notice-nav">
      <li
        v-for="(nav,index) in navList"
        :key="nav.code"
        class="nav-item"
        :class="{active: currentNavIndex == index}"
        @click="currentNavIndex = index"
      >
        {{ nav.title }}
      </li>
    </ul>

    <!-- list -->
    <div class="notice-list">
      <div class="list-setting">
        <span class="tips">消息中心只展示最近三个月的消息</span>
        <span class="setting-box">
          <span class="read-all" @click="handleAllReadyClick">全部标记为已读</span>
          <span class="read-setting" @click="handleSettingClick">通知设置</span>
        </span>
      </div>
      <ul>
        <li
          v-for="(item,index) in filterList"
          :key="index"
          ref="NoticeList"
          class="list-item"
          :class="{ready: item.isReady}"
        >
          <div class="item-icon">
            {{ item.type }}
          </div>
          <div class="item-content">
            <p class="title">
              {{ item.title }}
            </p>
            <p class="time">
              {{ item.time }}
            </p>
            <span class="iconfont delete" @click="handleDeleteClick(item, index)">&#xe622;</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- pagination -->
    <pagination :total="total" :page.sync="page" />

    <!-- dialog -->
    <notice-setting :list="settingList" :visible.sync="dialogVisible"></notice-setting>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import { ERR_OK } from 'api/config.js'
import { getNoticeList, getNoticeSetting } from 'api/notice.js'
export default {
  data () {
    return {
      total: 100,           // 总数
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
    handleAllReadyClick () {
      let code = this.navList[this.currentNavIndex].code
      this.noticeList.forEach((item, index) => {
        if (item.code === code || code === 0) {
          this.noticeList[index]['isReady'] = true
        }
      })
      this.$message.success('标记成功')
    },
    handleDeleteClick (item, index) {
      clearTimeout(this.timer)
      let currentDeleteItem = this.$refs.NoticeList[index]
      currentDeleteItem.style.height = 0
      currentDeleteItem.style.opacity = 0
      this.timer = setTimeout(() => {
        currentDeleteItem.style.display = 'none'
        this.noticeList.splice(index, 1)
        this.$message.success('删除成功')
      }, 300)
    },
    handleSettingClick () {
      this.dialogVisible = true
      this.getNoticeSettingData()
    },
    getNoticeListData () {
      getNoticeList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.noticeList = data
        }
      })
    },
    getNoticeSettingData () {
      getNoticeSetting().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.settingList = data
        }
      })
    }
  },
  computed: {
    filterList () {
      let result = this.noticeList.slice()
      const code = this.navList[this.currentNavIndex].code
      if (this.currentNavIndex !== 0) {
        result = result.filter(item => item.code === code)
      }
      return result
    }
  },
  components: {
    Pagination,
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