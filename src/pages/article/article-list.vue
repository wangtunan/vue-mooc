<template>
  <div class="article-list">
    <!-- 筛选部分 -->
    <dl v-if="filterList" class="list-filter">
      <dd
        v-for="(filter,index) in filterList"
        :key="index"
        class="filter-item"
        :class="{active: currentIndex==index}"
        @click="currentIndex=index"
      >
        {{ filter }}
      </dd>
    </dl>

    <!-- 列表部分 -->
    <ul class="list-content">
      <li v-for="(item,index) in list" :key="index" class="list-item">
        <div class="img-box">
          <img :src="item.img" alt="">
        </div>
        <div class="content">
          <p class="title">
            {{ item.title }}
          </p>
          <p class="information">
            <span class="iconfont">&#xe681;</span>
            <span class="number">{{ item.view }}</span>
            <span class="name">{{ item.name }}</span>
            <span class="tag">{{ item.tag }}</span>
            <span class="time">{{ item.time }}</span>
          </p>
        </div>
      </li>
    </ul>

    <!-- 分页 -->
    <pagination :total.sync="total" />
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    filterList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      total: 100,
      currentIndex: 0
    }
  },
  watch: {
    filterList () {
      this.currentIndex = 0
    }
  },
  components: {
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .article-list
    .list-filter
      .filter-item
        display: inline-block;
        margin-right: 12px;
        padding: 8px;
        font-size: 14px;
        color: $font-four-color;
        line-height: 16px;
        cursor: pointer;
        &.active
          background-color: #eaf1ff;
          border-radius: 8px;
          color: $theme-blur-light-color;
          font-weight: 700;
    .list-content
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(7,17,27,0.1);
      .list-item
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;
        &:last-child
          margin-bottom: 0;
          .content
            border-bottom: none;
        .img-box
          flex: 0 0 66px;
          margin-right: 16px;
          width: 66px;
          height: 66px;
          & > img
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background-color: #eee;
      .content
        flex: 1;
        height: 66px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .title
          margin-bottom: 4px;
          line-height: 30px;
          color: $font-first-color;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          &:hover
            color: $theme-blur-light-color;
        .information
          & > span
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;
            font-size: 12px;
            color: $font-four-color;
            &.name
              margin-left: 8px;
              padding-right: 10px;
            &.time
              float: right;
</style>