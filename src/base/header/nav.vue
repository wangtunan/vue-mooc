<template>
  <ul class="header-nav">
    <li class="nav-item" v-for="(item,index) in navList" :key="index">
      <router-link :to="item.path" class="nav-link">
        {{item.title}}
        <i class="nav-icon" v-if="item.icon" :style="getBackgroundImage(item.icon)"></i>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      navList: []
    }
  },
  created () {
    // 初始化导航栏的数据
    this.navList = [
      { title: '课程', path: '/course' },
      { title: '实战课程', path: '/lesson' },
      { title: '专栏', icon: 'https://www.imooc.com/static/img/common/new.png', path: '/' },
      { title: '猿问', path: '/' },
      { title: '手记', path: '/' }
    ]
  },
  methods: {
    // 获取导航栏的背景图片
    getBackgroundImage (icon) {
      return {
        'background': `url(${icon}) no-repeat center center`
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';

  .header-nav
    float: left;
    overflow: hidden;
    .nav-item
      float: left;
      @media screen and (max-width: 1479px)
        .nav-link
          padding: 0 10px!important;
      .nav-link
        display: block;
        position: relative;
        padding: 0 20px;
        height: $headerHeight;
        line-height: $headerHeight
        color: #4D555D;
        .nav-icon
          position: absolute;
          top: 14px;
          right: 4px;
          width: 16px;
          height: 16px;
    
</style>
