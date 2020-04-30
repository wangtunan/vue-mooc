<template>
  <div class="header-search" :class="{focus: isFocus}">
    <div class="search-tags">
      <span v-for="(item,index) in tags" :key="index" class="tag-item">{{ item }}</span>
    </div>
    <div class="search-input-box">
      <input
        v-model="keyword"
        type="text"
        class="search-input"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      >
    </div>
    <div class="search-icon">
      <i class="iconfont">&#xe63c;</i>
    </div>
    <div class="search-suggestion">
      <template v-if="searchResult && searchResult.length > 0">
        <dl class="result">
          <dd v-for="(item,index) in searchResult" :key="index">
            {{ item.word }}
          </dd>
        </dl>
      </template>
      <template v-else>
        <dl class="hot-key">
          <dt>热搜</dt>
          <dd v-for="(item,index) in hot" :key="index">
            {{ item.value }}
          </dd>
        </dl>
        <dl class="history">
          <dt>搜索历史</dt>
          <dd v-for="(item,index) in history" :key="index">
            {{ item.value }}
          </dd>
        </dl>
      </template>
    </div>
  </div>
</template>
<script>
import { getHot, getSearchHistory, getSearch } from 'api/common.js'
import { debounce } from 'utils/utils.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      keyword: '',
      searchResult: [],
      history: [],
      hot: [],
      isFocus: false,
      tags: [],
    }
  },
  mounted () {
    this.tags = ['Java入门', '前端入门']
    this.getHotData()
  },
  methods: {
    // 实时搜索
    handleInput: debounce(function () {
      if (!this.keyword) {
        this.searchResult = []
        return false
      }
      getSearch(this.keyword).then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.searchResult = data
        } else {
          this.$message.error(msg)
          this.searchResult = []
        }
      }).catch(() => {
        this.searchResult = []
      })
    }, 100),
    // input聚焦事件
    handleFocus () {
      this.isFocus = !this.isFocus
      this.getSearchHistoryData()
    },
    // input失去焦点
    handleBlur () {
      // 搜索框弹出框点击时，input会首先失去焦点，需要延时关闭弹出，点击事件才能捕获到
      this.blurTimer = setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    // 获取热搜数据
    getHotData () {
      getHot().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.hot = data
        } else {
          this.$message.error(msg)
          this.hot = []
        }
      }).catch(() => {
        this.hot = []
      })
    },
    // 获取搜索历时
    getSearchHistoryData () {
      getSearchHistory().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.history = data
        } else {
          this.$message.error(msg)
          this.history = []
        }
      }).catch(() => {
        this.history = []
      })
    }
  },
  beforeDestroy () {
    clearTimeout(this.blurTimer)
    this.blurTimer = null
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @media screen and (max-width: 1479px)
    .header-search
      margin-left: 15px!important;
      .search-input-box
        width: 140px!important;
  .header-search
    float: left;
    position: relative;
    margin-left: 25px;
    height: 100%;
    &.focus
      .search-tags
        display: none;
        opacity: 0;
      .search-input-box
        border-color: $red;
      .search-icon
        border-radius: 12px;
        background-color: rgba(240,20,20,0.2)
        color: $red;
      .search-suggestion
        display: block;
    .search-tags
      position: absolute;
      right: 40px;
      bottom: 28px;
      transition: opacity 3s linear;
      .tag-item
        padding: 3px 8px;
        border-radius: 12px;
        background-color: #f3f5f7;
        font-size: 12px;
        color: #4D555D;
    .search-input-box
      float: right;
      margin: 12px 0;
      width: 260px;
      height: 46px;
      padding-right: 40px;
      border-bottom: 1px solid #D9DDE1;
      .search-input
        padding: 12px 0;
        width: 100%;
        height: 46px;
        box-sizing: border-box;
        background-color: transparent;
        text-indent: 10px;
        font-size: 12px;
        color: #71777d;
        outline: none;
    .search-icon
      position:absolute;
      right: 0;
      bottom: 24px;
      width: 40px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 18px;
      color: #757a7e;
      .iconfont
        font-weight: 700;
    .search-suggestion
      display: none;
      position: absolute;
      left: 0;
      top: 100%;
      right: 0;
      background-color: #fff;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 4px 14px rgba(7,17,27,0.1);
      overflow: hidden;
      dl
        font-size: 12px;
        color: #545c63;
        dt
          margin-bottom: 4px;
          color: #1c1f21;
          font-weight: 700;
          line-height: 24px;
        dd
          cursor: pointer
        &.hot-key
          padding: 8px;
          border-bottom: 1px solid rgba(7,17,27,0.1);
          dd
            display: inline-block;
            vertical-align: middle;
            margin-right: 4px;
            margin-bottom: 4px;
            padding: 4px 12px;
            border-radius: 12px;
            line-height: 16px;
            background-color: rgba(84, 92, 99, 0.1);
        &.history, &.result
          margin-top: 4px;
          dt
            padding-left: 8px;
          dd
            padding-left: 12px;
            line-height: 40px;
            &:last-child
              border-radius: 0 0 8px 8px;
            &:hover
              background-color: #edf0f2;
</style>
 