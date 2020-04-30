<template>
  <div class="course-question">
    <dl>
      <dt>
        <span
          v-for="(tab,index) in tabList"
          :key="index"
          :class="{active: currentTabIndex==index}"
          @click="handleTabClick(tab,index)"
        >{{ tab.title }}</span>
      </dt>
      <template v-if="filterList.length">
        <dd v-for="(item,index) in filterList" :key="index" class="course-item">
          <div class="img-box">
            <img src="https://img3.mukewang.com/5ab477e700015ea202400240.jpg" alt="">
          </div>
          <div class="course-content">
            <p class="from">
              来自 {{ item.from }}
            </p>
            <p class="title">
              {{ item.title }}
            </p>
            <p v-if="item.isAnswer" class="answer-box">
              <span class="title">我的回答</span>
              <span class="answer">{{ item.answer }}</span>
            </p>
            <p class="other">
              <span>{{ item.time }}</span>
              <span v-if="item.isAnswer">{{ item.reply }}个回复</span>
              <span v-else>{{ item.answer }}个回答</span>
            </p>
          </div>
        </dd>
      </template>
      <empty v-else></empty>
    </dl>
  </div>
</template>
<script>
import Empty from 'components/empty/empty.vue'
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
      currentTabIndex: 0,
      tabList: []
    }
  },
  created () {
    // 初始化选项卡数据
    this.tabList = [
      { title: '我的提问', type: 0 },
      { title: '我的回答', type: 1 },
      { title: '我的关注', type: 2 }
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
  },
  components: {
    Empty
  }
}
</script>
<style lang="stylus" scoped>
  .course-question
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
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        & > img
          display: block;
          width: 100%;
          height: 100%;
      .course-content
        flex: 1;
        margin-left: 20px;
        .from
          font-size: 12px;
          color: #787d82;
          line-height: 20px;
        .title
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
        .answer-box
          margin-top: 10px;
          .title
            display: block;
            font-size: 14px;
            line-height: 24px;
          .answer
            line-height: 24px;
            font-size: 14px;
        .other
          margin-top: 10px;
          & > span
            margin-right: 20px;
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #b5b9bc;
</style>