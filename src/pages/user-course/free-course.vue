<template>
  <div class="free-course">
    <dl>
      <dt>
        <span
          v-for="(tab,index) in tabList"
          :key="index"
          :class="{active: currentTabIndex==index}"
          @click="handleTabClick(tab,index)"
        >{{ tab.title }}</span>
      </dt>
      <dd v-for="(item,index) in filterList" :key="index" class="course-item">
        <div class="img-box">
          <img :src="item.img" alt="">
        </div>
        <div class="course-content">
          <p class="title">
            {{ item.title }} <span class="status">{{ item.status }}</span>
          </p>
          <p class="learn">
            <span class="rate">已学{{ item.learn.rate }}%</span>
            <span class="duration">用时{{ item.learn.duration }}</span>
            <span class="chapter">学习至{{ item.learn.chapter }}</span>
          </p>
          <p class="other">
            <span>笔记{{ item.note }}</span>
            <span>代码{{ item.code }}</span>
            <span>问答{{ item.question }}</span>
            <span class="learn-btn">继续学习</span>
          </p>
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
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentTabIndex: 0, // 当前选项卡的索引
      tabList: [] // 选项卡数据
    }
  },
  created () {
    // 初始化选项卡数据
    this.tabList = [
      { title: '慕课小课', type: 0 },
      { title: '最近学习', type: 1 },
      { title: '我的收藏', type: 2 }
    ]
  },
  methods: {
    // 选项卡点击事件
    handleTabClick (tab, index) {
      this.currentTabIndex = index
    }
  },
  computed: {
    filterList () {
      let currTab = this.tabList[this.currentTabIndex]
      return this.list.filter(item => item.type === currTab.type)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .free-course
    dt
      border-bottom: 1px solid #d0d6d9;
      & > span
        margin-right: 48px;
        display: inline-block;
        vertical-align: middle;
        height: 48px;
        line-height: 48px;
        box-sizing: border-box;
        font-size: 14px;
        color: #787d82
        cursor: pointer;
        &:last-child
          margin-right: 0;
        &.active
          color: #f01414;
          border-bottom: 2px solid #f01414;
    .course-item
      display: flex;
      align-items: flex-start;
      padding: 30px 0;
      border-bottom: 1px solid #eff1f0;
      &:last-child
        border-bottom: none;
      .img-box
        flex: 0 0 200px;
        width: 200px;
        height: 113px;
        & > img
          display: block;
          width: 100%;
          height: 100%;
      .course-content
        flex: 1;
        margin-left: 30px;
        .title
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          .status
            float: right;
            margin-right: 25px;
            font-size: 14px;
            color: #787d82;
        .learn
          padding: 10px 0 22px;
          & > span
            display: inline-block;
            vertical-align: middle;
            margin-right: 15px;
            color: #787d82;
            line-height: 20px;
            font-size: 14px;
            &:last-child
              margin-right: 0;
            &.rate
              color: #f01414;
        .other
          & > span
            margin-right: 100px;
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #787d82;
            &.learn-btn
              float: right;
              margin-right: 0;
              width: 104px;
              height: 36px;
              background-color: #f01414;
              border-radius: 18px;
              text-align: center;
              line-height: 36px;
              color: #fff;
              cursor: pointer;
</style>