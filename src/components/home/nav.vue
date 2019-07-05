<template>
  <div class="home-nav-container">
    <ul class="home-nav">
      <li class="nav-item" v-for="(item,index) in navList" :key="index">
        <span class="nav-title">{{item.title}}</span>
        <span class="arr-right"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: []
    }
  },
  created () {
    this.navList = [
      { title: '前沿 / 区块链 / 人工智能', type: 'A' },
      { title: '前端 / 小程序 / JS', type: 'B' },
      { title: '后端 / JAVA / Python', type: 'C' },
      { title: '移动 / Android / iOS', type: 'D' },
      { title: '云计算 / 大数据 / 容器', type: 'E' },
      { title: '运维 / 测试 / 数据库', type: 'F' },
      { title: 'UI设计 / 3D动画 / 游戏', type: 'G' }
    ]
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .home-nav-container
    position: relative;
    width: 216px;
    height: 444px;
    background-color:#2b333b;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 12px 24px 0 $shadow;
    overflow: hidden;
    .home-nav
      position: absolute;
      left: 0;
      right: 0;
      top: 10px;
      .nav-item
        position: relative;
        margin-left: 12px;
        padding-left: 12px;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        color: rgba(255,255,255,0.6);
        cursor: pointer;
        .arr-right
          position: absolute;
          top: 50%;
          right: 10px;
          margin-top: -4px;
          display:inline-block;
          width: 0;
          height: 0;
          border: 4px solid rgba(255, 255, 255, 0.5);
          border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
        &:hover
          background-color: #6a7075;
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
          color: #fff;
</style>
