<template>
  <div class="user-article">
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
        <dd v-for="(item,index) in filterList" :key="index" class="article-item">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <div class="content-container">
            <div v-if="item.img" class="img-box">
              <img :src="item.img" alt="">
            </div>
            <div class="course-content">
              <p class="desc">
                {{ item.desc }}
              </p>
            </div>
          </div>
          <div class="other">
            <span>{{ item.author }}</span>
            <p class="fr">
              <span>{{ item.view }}浏览</span>
              <span>{{ item.like }}推荐</span>
              <span>{{ item.comment }}评论</span>
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
      { title: '我的文章', type: 0 },
      { title: '我的收藏', type: 1 },
      { title: '我的推荐', type: 2 },
      { title: '我的评论', type: 3 }
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
  .user-article
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
    .article-item
      padding: 30px 0;
      border-bottom: 1px solid #eff1f0;
      &:last-child
        border-bottom: none;
      .title
        padding-bottom: 20px;
        font-size: 20px;
        line-height: 32px;
        font-weight: 700;
      .content-container
        display: flex;
        align-items: flex-start;
        .img-box
          flex: 0 0 210px;
          width: 210px;
          height: 130px;
          margin-right: 30px;
          & > img
            display: block;
            width: 100%;
            height: 100%;
        .course-content
          flex: 1;
          .desc
            font-size: 14px;
            line-height: 28px;
            color: #4d555d;
            word-break: break-all;
      .other
        margin-top: 20px;
        span
          display: inline-block;
          vertical-align: middle;
          margin-right: 20px;
          font-size: 14px;
          color: #93999f;
          &:last-child
            margin-right: 0;
        .fr
          float: right;
</style>