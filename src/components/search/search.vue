<template>
  <div class="header-search" :class="{focus: isFocus}">
    <div class="search-tags">
      <span class="tag-item" v-for="(item,index) in tags" :key="index">{{item}}</span>
    </div>
    <div class="search-input-box">
      <input type="text" class="search-input" @focus="isFocus = !isFocus" @blur="isFocus = false">
    </div>
    <div class="search-icon">
      <i class="iconfont">&#xe63c;</i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isFocus: false, // 是否聚焦
      tags: ['Java入门', '前端入门'], // tags
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
</style>
 