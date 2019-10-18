<template>
  <div class="notice m-center">
    <!-- 消息导航 -->
    <ul class="nav-list">
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

    <!-- 消息列表 -->
    <div class="content-list">
      <div class="list-setting">
        <span class="tips">消息中心只展示最近三个月的消息</span>
        <span class="setting-box">
          <span class="read-all" @click="handleAllReadyClick">全部标记为已读</span>
          <span class="read-setting" @click="dialogVisible=true">通知设置</span>
        </span>
      </div>
      <ul>
        <li v-for="(item,index) in filterList" :key="index" class="list-item" :class="{ready: item.isReady}">
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
            <span class="iconfont delete">&#xe622;</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 分页 -->
    <pagination :total="total" :page.sync="page" />

    <!-- 消息中心设置dialog -->
    <el-dialog title="消息中心设置" :visible.sync="dialogVisible" width="45%" top="20vh">
      <dl v-for="(item,index) in settingList" :key="index" class="switch-group">
        <dt class="switch-title-box">
          <span class="switch-title">{{ item.type }}</span>
          <span class="switch-title-line" />
        </dt>
        <dd v-for="(subItem, index) in item.data" :key="index">
          <mooc-switch v-model="subItem.value" :active="{color: '#f01414'}" :in-active="{color: '#9199a1'}" />{{ subItem.label }}
        </dd>
      </dl>
      <div slot="footer" class="dialog-footer">
        <mooc-button @click="dialogVisible=false">
          关闭
        </mooc-button>
        <mooc-button type="primary" @click="dialogVisible=false">
          保存
        </mooc-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from 'base/pagination/pagination.vue'
import { ERR_OK } from 'api/config.js'
import { getNoticeList, getNoticeSetting } from 'api/notice.js'
export default {
  data () {
    return {
      total: 100,  // 总数
      page: 1, // 当前页
      dialogVisible: false, // 是否显示消息中心弹窗
      settingList: [], // 设置数据
      noticeList: [], // 消息中心列表 
      currentNavIndex: 0, // 当前导航的索引
      navList: [] // 导航数据
    }
  },
  created () {
    // 初始化导航数据
    this.navList = [
      { title: '全部', code: 0 },
      { title: '实战', code: 1 },
      { title: '系统', code: 2 }
    ]
  },
  mounted () {
    this.getNoticeListData()
    this.getNoticeSettingData()
  },
  methods: {
    // 全部标记为已读
    handleAllReadyClick () {
      let code = this.navList[this.currentNavIndex].code
      this.noticeList.forEach((item, index) => {
        if (item.code === code) {
          this.noticeList[index].isReady = true
        }
      })
    },
    // 获取消息中心列表数据
    getNoticeListData () {
      getNoticeList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.noticeList = data
        }
      })
    },
    // 获取消息中心设置数据
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
      let result = this.noticeList
      const code = this.navList[this.currentNavIndex].code
      if (this.currentNavIndex !== 0) {
        result = result.filter(item => item.code === code)
      }
      return result
    }
  },
  components: {
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  .notice
    margin-top: 30px;
    .nav-list
      padding-left: 32px;
      .nav-item
        display: inline-block;
        margin-right: 58px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        &.active
          color: #f01414;
          border-bottom: 2px solid #f01414;
    .content-list
      .list-setting
        padding-left: 28px;
        padding-right: 20px;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid #b7bbbf;
        background-color: #f3f5f7;
        color: #93999f;
        font-size: 14px;
        .setting-box
          float: right;
          & > span
            margin-left: 20px;
            color: #4d555d;
            cursor: pointer;
            &:hover
              color: #07111b;
      .list-item
        padding: 20px 10px;
        display: flex;
        align-items: flex-start;
        border-bottom: 1px solid #d9dde1;
        &.ready
          .item-icon
            border: 1px solid #d9dde1;
            background-color: #fff;
            color: #93999f;
          .item-content
            .title
              color: #93999f;
        .item-icon
          margin-right: 20px;
          padding: 10px;
          border: 1px solid #f01414;
          background-color: #fde7e5;
          color: #f01414;
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
              color: #4d555d;
              font-family: "微软雅黑";
              cursor: pointer;
            &.time
              font-size: 14px;
              color: #93999f;
          .delete
            display: none;
            position: absolute;
            top: 0px;
            right: 20px;
            color: #93999f;
            cursor: pointer;
    >>> .el-dialog
      .el-dialog__body
        padding: 15px 20px;
        .switch-group
          .switch-title-box
            position: relative;
            margin-bottom: 20px;
            .switch-title
              z-index: 1;
              position: relative;
              display: inline-block;
              padding-right: 15px;
              background-color: #fff;
              font-size: 14px;
              color: #07111b;
            .switch-title-line
              position: absolute;
              left: 0;
              top: 50%;
              width: 100%;
              height: 1px;
              background-color: #d9dde1;
          dd
            display: inline-block;
            margin-bottom: 20px;
            padding: 0 20px;
            width: 50%;
            box-sizing: border-box;
            .mooc-switch
              margin-right: 15px;
      .el-dialog__footer
        .mooc-button-primary
          background-color: #f01414;
          border-color: #f01414;
          color: #fff;
          &:hover
            background-color: #f01414;
            border-color: #f01414;
            color: #fff;
</style>