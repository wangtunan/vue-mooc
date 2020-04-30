<template>
  <div class="question">
    <!-- 头部 -->
    <div class="question-header m-center">
      <div class="question-search">
        <img src="https://www.imooc.com/static/img/wenda/wenda-logo.png" alt="">
        <div class="search-box">
          <input type="text" placeholder="请输入你的问题">
          <i class="iconfont">&#xe63c;</i>
        </div>
        <div class="search-btn">
          提问
        </div>
      </div>
      <div v-if="userInfo.id" class="question-nav">
        <dl>
          <dt>我的关注：</dt>
          <dd
            v-for="(item, index) in followList"
            :key="index"
            :class="{
              active: currentIndex == index
            }"
            @click="handleLikeClick(item, index)"
          >
            {{ item.title }}
          </dd>
          <dd @click="handleLabelManageClick">标签管理</dd>
        </dl>
      </div>
    </div>

    <!-- 列表部分 -->
    <div class="m-center">
      <div class="question-content-container">
        <div class="question-list">
          <ul v-if="questionList && questionList.length">
            <li v-for="(item, index) in questionList" :key="index" class="question-item">
              <div class="finish">
                <span v-if="item.isResolve" class="iconfont">&#xe786;</span>
                <span>{{ item.answers }}</span>
              </div>
              <div class="content-box">
                <h3 class="title">
                  {{ item.title }}
                </h3>
                <p class="tag">
                  <img :src="item.icon" alt="">
                  <span
                    v-for="(tag, index) in item.tags"
                    :key="index"
                    class="name"
                  >{{ tag }}</span>
                  <span class="view-box">
                    <i class="iconfont">&#xe681;</i>
                    <span class="view-number">{{ item.views }}</span>
                  </span>
                </p>
              </div>
            </li>
          </ul>
          <empty v-else message="暂无相关猿问数据"></empty>
        </div>
      </div>
      <pagination :size="size" :total="total" :page.sync="page" @change="handlePaginationChange" />
    </div>

    <!-- 标签管理弹出 -->
    <mooc-dialog title="选择感兴趣的标签" :visible.sync="dialogVisible" width="600px">
      <el-scrollbar>
        <div class="label-container">
          <dl
            v-for="(type, index) in labelList"
            :key="index"
            class="label-group"
          >
            <dt class="label-group-title">{{ type.title }}</dt>
            <dd
              v-for="(label, labelIndex) in type.list"
              :key="labelIndex"
              class="label-item"
              :class="{
                'is-active': label.isSelected
              }"
              @click="handleLabelClick(index, label, labelIndex)"
            >
              {{ label.title }}
            </dd>
          </dl>
        </div>
      </el-scrollbar>
      <template slot="footer">
        <mooc-button type="success" :disabled="isLoading" @click="handleFollowClick">完成</mooc-button>
      </template>
    </mooc-dialog>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import Empty from 'components/empty/empty.vue'
import { getFollowList, getQuestionList, getLabelList, followLabels } from 'api/question.js'
import { ERR_OK } from 'api/config.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      size: 20,
      isLoading: false,
      dialogVisible: false,
      currentIndex: 0,
      followList: [],
      questionList: [],
      total: 0,
      page: 1,
      labelList: [],
      selectLabelList: []
    }
  },
  mounted () {
    if (this.userInfo.id) {
      this.getFollowListData(true)
    }
    this.getQuestionListData()
  },
  methods: {
    // 关注标签点击事件
    handleLikeClick (item, index) {
      this.currentIndex = index
      this.getQuestionListData()
    },
    // 标签管理点击事件
    handleLabelManageClick () {
      this.dialogVisible = true
      this.getLabelListData()
    },
    // 标签点击事件
    handleLabelClick (index, label, labelIndex) {
      label.isSelected = !label.isSelected
      this.$set(this.labelList[index]['list'], labelIndex, label)
    },
    // 确认关联标签点击事件
    handleFollowClick () {
      const selectList = []
      this.labelList.forEach(type => {
        const list = type.list
        list.forEach(item => {
          if (item.isSelected) {
            selectList.push(item)
          }
        })
      })
      if (selectList.length === 0) {
        this.$message.warning('至少选择一个要关注的标签')
        return false
      }
      this.isLoading = true
      const params = {
        list: selectList
      }
      followLabels(params).then(res => {
        this.isLoading = false
        const { code, msg } = res
        if (code === ERR_OK) {
          this.$message.success(msg)
          this.dialogVisible = false
          this.getFollowListData()
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.isLoading = false
        this.$message.error('接口异常')
      })
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getQuestionListData()
    },
    // 获取关注标签列表
    getFollowListData (isFirst) {
      this.followList = []
      getFollowList().then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          if (data.length === 0 && isFirst) {
            this.handleLabelManageClick()
          } else {
            data.unshift({
              title: '全部'
            })
            this.followList = data
          }
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 获取猿问数据
    getQuestionListData () {
      const params = {
        page: this.page,
        size: this.size,
        label: this.currentLabel === '全部' ? '' : this.currentLabel
      }
      this.questionList = []
      getQuestionList(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.questionList = data.list
          this.total = data.total
        } else {
          this.total = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.total = 0
        this.$message.error('接口异常')
      })
    },
    // 获取标签列表
    getLabelListData () {
      this.labelList = []
      getLabelList().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.labelList = this.normalizeLabelList(data)
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 处理标签数据
    normalizeLabelList (array) {
      if (array.length === 0) {
        return []
      }
      const labelTreeObj = []
      array.forEach(item => {
        const findIndex = labelTreeObj.findIndex(filter => filter.title === item.type.text)
        // 判断当前标签是否在已关注列表中
        const selectIndex = this.followList.findIndex(filterItem => filterItem.labelid === item.id)
        if (selectIndex === -1) {
          item.isSelected = false
        } else {
          item.isSelected = true
        }
        if (findIndex === -1) {
          labelTreeObj.push({
            title: item.type.text,
            list: [item]
          })
        } else {
          labelTreeObj[findIndex].list.push(item)
        }
      })
      return labelTreeObj
    }
  },
  computed: {
    currentLabel () {
      if (this.followList.length === 0) {
        return ''
      }
      return this.followList[this.currentIndex].title
    },
    ...mapGetters(['userInfo'])
  },
  components: {
    Pagination,
    Empty
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .question
    padding: 20px 0 50px;
    .question-header
      .question-search
        position: relative;
        padding-right: 75px;
        background-color: #fff;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        & > img
          width: 300px;
          height: 60px;
        .search-box
          float: right;
          position: relative;
          margin-top: 16px;
          width: 480px;
          height: 36px;
          line-height: 36px;
          border-radius: 8px;
          background-color: $border-three-color;
          & > input
            padding: 0 60px 0 10px;
            width: 100%;
            height: 36px;
            outline: none;
            background: none;
            box-sizing: border-box;
            color: $font-four-color;
            font-size: 14px;
          .iconfont
            display: inline-block;
            position: absolute;
            top: 0;
            right: 20px;
            font-size: 20px;
            font-weight: 700;
            color: $font-four-color;
            cursor: pointer;
        .search-btn
          position: absolute;
          right: 0;
          top: 16px;
          padding: 7px 16px;
          background-color: #1fad4e;
          border-radius: 18px;
          color: #fff;
          font-size: 14px;
          line-height: 24px;
          cursor: pointer;
          &:hover
            background-color: #17823b;
      .question-nav
        position: relative;
        padding: 18px 0;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        dt, dd
          display: inline-block;
          vertical-align: middle;
          margin-right: 20px;
          font-size: 14px;
          line-height: 24px;
        dd
          cursor: pointer;
          &:last-child
            float: right;
            margin-right: 0;
          &:hover, &.active
            color: $theme-green-color;
    .question-content-container
      margin-top: 30px;
      .question-list
        padding: 28px 32px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 8px 2px rgba(7,17,27,.1)
        .question-item
          display: flex;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid rgba(7,17,27,0.1);
          &:last-child
            border-bottom: none;
          .finish
            flex: 0 0 40px;
            width: 40px;
            padding: 8px 0;
            margin-right: 15px;
            background-color: rgba(31,173,78,.1);
            color: #17823b;
            & > span
              display: block;
              text-align: center;
              line-height: 18px;
              font-size: 16px;
              font-weight: 700;
              &:last-child
                font-weight: 400;
                font-size: 14px;
          .content-box
            flex: 1;
            .title
              margin-bottom: 4px;
              font-size: 16px;
              color: $font-first-color;
              font-weight: 700;
              line-height: 24px;
              cursor: pointer;
              &:hover
                color: #1fad4e;
            .tag
              font-size: 12px;
              color: $font-four-color;
              & > img
                display: inline-block;
                vertical-align: middle;
                margin-top: -2px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
              & > span
                display: inline-block;
                vertical-align: middle;
                &.name
                  padding: 0 10px 0 5px;
                &.view-box
                  padding-left: 10px;
                  & > i, & > span
                    display: inline-block;
                    vertical-align: middle;
      .list-empty
        padding: 10px 0;
        text-align: center;
        font-size: 14px;
        color: $theme-red-color;
     .label-container
        padding-left: 20px;
       .label-group
        display: inline-block;
        vertical-align: top;
        margin-bottom: 18px;
        width: 250px;
        &:nth-child(2n + 1)
          margin-right: 20px;
        .label-group-title
          margin-bottom: 18px;
          font-size: 14px;
          color: $theme-green-color;
          font-weight: bold;
        .label-item
          display: inline-block;
          vertical-align: middle;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 8px 16px;
          border-radius: 16px;
          background-color: rgba(28,31,33,.08);
          line-height: 16px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover, &.is-active
            color: #fff;
            background-color: $theme-green-color;
    >>> .mooc-dialog
      .mooc-dialog-body
        padding-top: 20px;
      .mooc-dialog-footer
        text-align: center;
        .mooc-button
          width: 200px;
          border-radius: 24px;
      .el-scrollbar
        height: 360px;
</style>