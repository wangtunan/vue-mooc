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
          @click="currentIndex = index"
        >
          {{ type }}
        </dd>
      </dl>
    </div>

    <!-- 列表 -->
    <div class="read-list">
      <ul>
        <li
          v-for="(item, index) in filterReadList"
          :key="index"
          class="read-item"
          @click="handleReadClick"
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
              <span class="number">共{{ item.number }}人购买</span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 分页 -->
    <pagination :total.sync="total" />
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import { getReadList } from 'api/read.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      readList: [],
      currentIndex: 0,
      total: 50
    }
  },
  mounted () {
    this.getReadListData()
  },
  methods: {
    handleReadClick () {
      let random = new Date().getTime()
      this.$router.push(`/read/${random}`)
    },
    getReadListData () {
      getReadList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.readList = data
        }
      })
    }
  },
  computed: {
    typeList () {
      let result = []
      let navSet = new Set(['全部'])
      this.readList.forEach(item => {
        navSet.add(item.type)
      })
      result = Array.from(navSet)
      return result
    },
    filterReadList () {
      let list = this.readList.slice()
      let currType = this.typeList[this.currentIndex]
      if (this.currentIndex !== 0) {
        list = list.filter(item => item.type === currType)
      }
      return list
    }
  },
  components: {
    Pagination
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
        position: relative;
        padding: 16px 0px 10px 52px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        font-size: 14px;
        dt
          position: absolute;
          left: 0;
          top: 23px;
          font-weight: 700;
        dd
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          margin-bottom: 10px;
          padding: 0 10px;
          line-height: 30px;
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