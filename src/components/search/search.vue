<template>
  <div class="header-search" :class="{focus: isFocus}">
    <div class="search-tags">
      <span v-for="(item,index) in tags" :key="index" class="tag-item">{{ item }}</span>
    </div>
    <div class="search-input-box">
      <input type="text" class="search-input" @focus="isFocus = !isFocus" @blur="isFocus = false">
    </div>
    <div class="search-icon">
      <i class="iconfont">&#xe63c;</i>
    </div>
    <div class="search-suggestion">
      <dl class="hot-key">
        <dt>热搜</dt>
        <dd v-for="(item,index) in hot" :key="index">
          {{ item }}
        </dd>
      </dl>
      <dl class="history">
        <dt>搜索历史</dt>
        <dd v-for="(item,index) in history" :key="index">
          {{ item }}
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import { getHot, getSearchHistory } from 'api/common.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      history: [], // 搜索历时
      hot: [], // 热搜
      isFocus: false, // 是否聚焦
      tags: ['Java入门', '前端入门'], // tags
    }
  },
  mounted () {
    this.getHotData()
    this.getSearchHistoryData()
  },
  methods: {
    // 获取热搜数据
    getHotData () {
      getHot().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.hot = data
        }
      })
    },
    // 获取搜索历时
    getSearchHistoryData () {
      getSearchHistory().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.history = data
        }
      })
    }
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
        height: 333px;
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
      position: absolute;
      left: 0;
      top: 100%;
      right: 0;
      height: 0;
      transition: height 0.2s;
      background-color: #fff;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 4px 8px rgba(7,17,27,0.1);
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
        &.history
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
 