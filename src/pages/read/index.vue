<template>
  <div class="read m-center">
    <!-- 头部 -->
    <div class="read-header">
      <img src="https://www.imooc.com/static/img/column/sub-logo2.png" alt="">
      <p class="total-course">
        共{{ total }}个专栏
      </p>
    </div>

    <!-- 导航 -->
    <div class="read-nav">
      <dl>
        <dt>分类：</dt>
        <dd
          v-for="(type,index) in typeList"
          :key="index"
          :class="{
            active: index == currentIndex
          }"
          @click="handleTypeClick(type, index)"
        >
          {{ type.value }}
        </dd>
      </dl>
    </div>

    <!-- 列表 -->
    <div v-if="readList.length" class="read-list">
      <ul>
        <li
          v-for="(item, index) in readList"
          :key="index"
          class="read-item"
          @click="handleReadClick(item)"
        >
          <div class="img-box">
            <img :src="item.img" alt="">
          </div>
          <div class="read-content">
            <p class="title">
              {{ item.title }}
            </p>
            <p class="read-desc">
              {{ item.desc }}
            </p>
            <p class="author">
              <img :src="item.author.avatar" class="avatar" alt="">
              <span class="name">{{ item.author.name }}</span>
              <span class="split">/</span>
              <span class="job">{{ item.author.job }}</span>
            </p>
            <dl class="try-read">
              <dd v-for="(read, index) in item.tryRead" :key="index" class="try-item">
                <span class="icon">试读</span>
                <span class="name">{{ read }}</span>
              </dd>
            </dl>
            <p class="other">
              <span class="price">¥ {{ item.price }}</span>
              <span class="trem">共{{ item.term }}小节</span>
              <span class="number">共{{ item.persons }}人购买</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <empty v-else message="暂无相关专栏数据"></empty>

    <!-- 分页 -->
    <pagination :total="total" :page.sync="page" @change="handlePaginationChange" />
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import Empty from 'components/empty/empty.vue'
import { getReadTypes, getReadList } from 'api/read.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      readList: [],
      currentIndex: 0,
      total: 0,
      page: 1,
      typeList: []
    }
  },
  mounted () {
    this.getReadTypes()
    this.getReadListData()
  },
  methods: {
    // 专栏类型点击
    handleTypeClick (type, index) {
      this.page = 1
      this.currentIndex = index
      this.getReadListData()
    },
    // 专栏点击
    handleReadClick (read) {
      this.$router.push(`/read/${read.id}`)
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getReadListData()
    },
    // 获取专栏类型数据
    getReadTypes () {
      getReadTypes().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          data.unshift({
            value: '全部'
          })
          this.typeList = data
        } else {
          this.typeList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.typeList = []
      })
    },
    // 获取专栏列表数据
    getReadListData () {
      const params = {
        page: this.page,
        type: this.currentType
      }
      getReadList(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.readList = data.list
          this.total = data.total
        } else {
          this.readList = []
          this.total = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.readList = []
        this.total = 0
      })
    }
  },
  computed: {
    currentType () {
      if (this.typeList.length === 0) {
        return ''
      }
      const type = this.typeList[this.currentIndex].value
      return type === '全部' ? '' : type
    }
  },
  components: {
    Pagination,
    Empty
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .read
    .read-header
      margin-top: 20px;
      padding-right: 296px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      img
        display: inline-block;
        height: 60px;
      .total-course
        float: right;
        line-height: 60px;
        font-size: 14px;
        color: $font-four-color;
    .read-nav
      dl
        padding-top: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        font-size: 14px;
        dt, dd
          display: inline-block;
          vertical-align: middle;
          line-height: 30px;
        dt
          margin-right: 10px;
          font-weight: 700;
        dd
          margin-right: 5px;
          padding: 0 10px;
          cursor: pointer;
          &.active
            color: $theme-red-color;
            background-color: rgba(242,13,13,0.06);
            border-radius: 6px;
            font-weight: 700;
    .read-list
      .read-item
        display: flex;
        align-items: flex-start;
        margin: 50px 0;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        cursor: pointer;
        &:last-child
          border-bottom: none;
        &:hover
          .img-box
            & > img
              transform: scale(1.2);
          .read-content
            .title
              color: #6698ff;
        .img-box
          margin-right: 30px;
          img-box(138px, 157px)
          & > img
            transform: scale(1);
            transition: transform 0.2s ease-in-out;
            background-color: transparent;
            cursor: pointer;
        .read-content
          flex: 1;
          .title
            font-size: 20px;
            font-weight: 700;
            color: $font-first-color;
            line-height: 36px;
          .read-desc
            font-size: 14px;
            color: $font-second-color;
            line-height: 24px;
            font-weight: 700;
          .author
            margin: 8px 0;
            font-size: 12px;
            img, span
              display: inline-block;
              vertical-align: middle;
            .avatar
              margin-right: 10px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
            .split
              padding: 0 10px;
          .try-read
            padding: 10px 0;
            .try-item
              display: inline-block;
              vertical-align: middle;
              margin-bottom: 12px;
              width: 33.33%;
              font-size: 12px;
              color: $font-second-color;
              line-height: 24px;
              cursor: pointer;
              &:hover
                color: $theme-blue-color; 
              .icon
                margin-right: 10px;
                padding: 4px;
                background-color: rgba(102,152,255, 0.1);
                color: $theme-blue-color;
                font-weight: 700;
          .other
            font-size: 12px;
            line-height: 24px;
            color: $font-four-color;
            & > span
              display: inline-block;
              vertical-align: middle;
              padding: 0 5px;
              &.price
                margin-right: 10px;
                font-size: 16px;
                color: $theme-blue-color;
                font-weight: 700;
</style>