<template>
  <div class="article m-center">
    <!-- 头部 -->
    <div class="article-header">
      <img class="article-icon" src="https://www.imooc.com/static/img/article/article-logo.png" alt="">
      <div class="search-container">
        <div class="search-box">
          <input type="text" placeholder="搜索感兴趣的知识和文章">
          <i class="iconfont">&#xe63c;</i>
        </div>
        <span class="write-btn">写文章</span>
      </div>
    </div>

    <!-- 内容部分 -->
    <div class="article-content">
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in navList"
            :key="index"
            class="nav-item"
            :class="{active: currentNavIndex==index}"
            @click="handleNavClick(item, index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      
      <div class="list">
        <template v-if="articleList && articleList.length">
          <article-list :list="articleList" />
          <pagination :total="total" :page.sync="page" @change="handlePaginationChange" />
        </template>
        <empty v-else message="暂无相关手记数据"></empty>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import ArticleList from './list.vue'
import Empty from 'components/empty/empty.vue'
import { getArticleNavList, getArticleList } from 'api/article.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      page: 1,
      total: 0,
      currentNavIndex: 0,
      articleList: {},
      navList: []
    }
  },
  mounted () {
    this.getArticleNavListData()
  },
  methods: {
    // 导航点击
    handleNavClick (item, index) {
      this.currentNavIndex = index
      this.page = 1
      this.getArticleListData()
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getArticleListData()
    },
    // 获取手记导航数据
    getArticleNavListData () {
      getArticleNavList().then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.navList = data
          this.getArticleListData()
        } else {
          this.navList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.navList = []
        this.$message.error('接口异常')
      })
    },
    // 获取猿问列表数据
    getArticleListData () {
      const params = {
        page: this.page,
        code: this.currentCode
      }
      getArticleList(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.articleList = data.list
          this.total = data.total
        } else {
          this.articleList = []
          this.total = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.articleList = []
        this.total = 0
        this.$message.error('接口异常')
      })
    }
  },
  computed: {
    currentCode () {
      if (this.navList.length === 0) {
        return 0
      }
      return this.navList[this.currentNavIndex].code
    }
  },
  components: {
    ArticleList,
    Pagination,
    Empty
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  $blue = #37f;
  .article
    .article-header
      margin-top: 10px;
      height: 60px;
      .article-icon
        display: inline-block;
        vertical-align: middle;
        height: 100%;
      .search-container
        float: right;
        padding: 12px 0;
        height: 60px;
        box-sizing: border-box;
        .search-box
          display: inline-block;
          position: relative;
          width: 480px;
          height: 36px;
          line-height: 36px;
          border-radius: 8px;
          background-color: $border-three-color;
          input
            padding: 0 60px 0 20px;
            width: 100%;
            height: 36px;
            box-sizing: border-box;
            line-height: 36px;
            outline: none;
            background: none;
            line-height: 0;
            font-size: 14px;
            color: $font-four-color;
          .iconfont
            position: absolute;
            top: 0;
            right: 20px;
            font-size: 20px;
            font-weight: 700;
            color: $font-four-color;
            cursor: pointer;
        .write-btn
          display: inline-block;
          margin-left: 10px;
          padding: 8px 24px;
          border-radius: 18px;
          background-color: $theme-blur-light-color;
          line-height: 18px;
          font-size: 14px;
          color: #fff;
          cursor: pointer;
    .article-content
      display: flex;
      align-items: flex-start;
      padding: 20px 0 50px;
      .nav
        flex: 0 0 104px;
        width: 104px;
        padding: 8px 0;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);
        .nav-item
          margin: 0 auto;
          margin-bottom: 8px;
          padding: 8px 0;
          width: 85px;
          line-height: 20px;
          text-align: center;
          font-size: 14px;
          word-break: break-all;
          cursor: pointer;
          &:hover
            color: $theme-blur-light-color;
          &.active
            background-color: rgba(51,119,255,.1);
            border-radius: 4px;
            color: $theme-blur-light-color;
            font-weight: 700;
          &:last-child
            margin-bottom: 0;
      .list
        flex: 1;
        margin: 0 20px;
      .recommend
        flex: 0 0 280px;
        width: 280px;
        & > div
          margin-bottom: 24px;
</style>