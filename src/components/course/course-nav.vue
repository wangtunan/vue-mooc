<template>
  <div class="course-nav" v-if="list.length">
    <dl v-for="(item,index) in list" :key="index">
      <dt :key="item.code">{{item.type}}：</dt>
      <dd
        v-for="(nav,index) in item.data"
        :key="index+Math.random()"
        :class="{active: getActiveClass(item,index)}"
        @click="handleNavClick(item,index)"
      >{{nav}}</dd>
    </dl>
  </div> 
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      directionIndex: 0,
      categortIndex: 0,
      difficultIndex: 0,
      params: {}, // 选择的导航信息
    }
  },
  methods: {
    // 导航点击事件
    handleNavClick (item,index) {
      if (item.code === 'direction') {
        this.directionIndex = index
      } else if (item.code === 'category') {
        this.categortIndex = index
      } else {
        this.difficultIndex = index
      }
    },
    
    // 获取active样式
    getActiveClass (item,index) {
      let newIndex = -1
      if (item.code === 'direction') {
        newIndex = this.directionIndex
      } else if (item.code === 'category') {
        newIndex = this.categortIndex
      } else {
        newIndex = this.difficultIndex
      }
      return index === newIndex
    }
  }
}
</script>
<style lang="stylus" scoped>
  .course-nav
    dl
      position: relative;
      padding: 16px 0 10px 52px;
      border-bottom: 1px solid #edf1f2;
      font-size: 14px;
      dt
        position: absolute;
        left: 0;
        top: 22px;
        color: #07111b;
        font-weight: 700;
      dd
        display: inline-block;
        padding: 0 10px;
        margin: 0 5px 10px 0;
        height: 30px;
        line-height: 30px;
        color: #1c1f21;
        cursor: pointer;
        &.active
          background-color: rgba(242,13,13,.06);
          border-radius: 6px;
          color: #f01414;
          font-weight: 700;
        &:hover
          color: #f01414;
</style>
