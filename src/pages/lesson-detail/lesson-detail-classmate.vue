<template>
  <div class="lesson-detail-classmate">
    <dl v-for="(value,key) in normalizeList" :key="key">
      <dt v-if="key=='exp'" class="exp">
        经验
      </dt>
      <dt v-if="key=='duration'" class="duration">
        时长
      </dt>
      <dt v-if="key=='last'" class="last">
        最近
      </dt>
      <dd v-for="(item,index) in value" :key="index">
        <div class="img-box">
          <img :src="item.avatar" alt="">
        </div>
        <div class="content-box">
          <span class="name">{{ item.name }}</span>
          <span class="value">{{ item.value }}</span> 
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    }
  },
  computed: {
    normalizeList () {
      const list = {
        exp: [],
        duration: [],
        last: []
      }
      this.list.forEach(item => {
        list[item.type].push(item)
      })
      return list
    }
  }
}
</script>
<style lang="stylus" scoped>
  .lesson-detail-classmate
    margin-top: 80px;
    display: flex;
    align-items: flex-start;
    dl
      margin-right: 60px;
      flex: 1;
      box-sizing: border-box;
      &:last-child
        margin-right: 0;
      dt
        position: relative;
        padding-left: 15px;
        padding-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        &:after
          content: '';
          position: absolute;
          left: 10px;
          top: -50px;
          width: 42px
          height: 42px;
          background: url('https://coding.imooc.com/static/module/classmate/index/img/sprite.png') no-repeat center center; 
        &.exp::after
          background-position: 0 -42px;
        &.duration::after
          background-position: -50px 0px;
        &.last::after
          background-position: 0 0;
      dd
        display: flex;
        align-items: center;
        padding: 20px 0;
        height: 60px;
        border-top: 1px solid #d9dde1;
        .img-box
          margin-right: 10px;
          flex: 0 0 60px;
          width: 60px;
          & > img
            display: block;
            width: 100%;
            height: 100%;
            background-color: #eee;
            border-radius: 50%;
        .content-box
          flex: 1;
          .name
            font-size: 16px;
            font-weight: 700;
          .value
            float: right;
            color: #93999f;
            font-size: 12px;
            font-weight: 800;
</style>