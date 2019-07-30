<template>
  <div class="course-nav">
    <dl>
      <dt>{{type}}：</dt>
      <dd
        v-for="(nav,index) in list"
        :key="index"
        :class="{active: index===currentIndex}"
        @click="handleNavClick(nav,index)"
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
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 导航点击事件
    handleNavClick (nav,index) {
      const params = {
        index: index,
        data: nav
      }
      this.$emit('navClick', params)
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
