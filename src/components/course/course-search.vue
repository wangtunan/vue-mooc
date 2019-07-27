<template>
  <div class="course-search">
    <div class="search-tag">
      <img src="https://www.imooc.com/static/img/course/logo-course2.png" width="96" height="60" alt="">
      <img src="https://www.imooc.com/static/img/course/course-top.png" width="96" height="60" alt="">
    </div>
    <div class="search-wrapper">
      <input type="text" placeholder="搜索感兴趣的内容" @focus="isFocus=true" @blur="isFocus=false">
      <i class="iconfont">&#xe63c;</i>
      <ul class="search-result" v-if="isFocus">
        <li class="result-item" v-for="(item,index) in result" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getSearchHistory } from 'api/common.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      isFocus: false, // 是否聚焦
      result: [] // 搜索历史
    }
  },
  mounted () {
    this.getSearchHistoryList()
  },
  methods: {
    // 获取搜索热词
    getSearchHistoryList () {
      getSearchHistory().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.result = data
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .course-search
    padding: 12px 0;
    border-bottom: 1px solid rgba(28,31,33,.2);
    .search-tag
      display: inline-block;
      img
        &:nth-child(2) {
          margin-left: 16px;
        }
    .search-wrapper
      position: relative;
      float: right;
      width: 466px;
      height: 60px;
      line-height: 60px;
      .iconfont
        position: absolute;
        right: 15px;
        top: 20px;
        font-size: 24px;
        color: #9199a1;
        cursor: pointer;
        line-height: 1;
      input
        padding: 0 16px;
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        line-height: 36px;
        border-radius: 5px;
        outline: none;
        background: #f3f5f6;
        font-size: 14px;
        color: #1c1f21;
      .search-result
        z-index: 99;
        position: absolute;
        left: 0;
        top: 52px;
        right: 0;
        background-color: #fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        box-shadow: 0 4px 8px 0px rgba(7,17,27,0.2);
        .result-item
          padding-left: 20px;
          line-height: 50px;
          color: #1c1f21;
          cursor: pointer;
          font-size: 14px;
          &:hover
            background: #f3f5f6;
</style>
