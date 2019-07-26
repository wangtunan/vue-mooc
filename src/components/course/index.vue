<template>
  <div class="course mx-center">
    <!-- 搜索模块 -->
    <course-search></course-search>

    <!-- 导航模块 -->
    <course-nav :list="navList"></course-nav>
    
    <!-- 课程列表 -->
    <div class="course-list-wrapper">
      <div class="course-filter">
        <span
          v-for="(item,index) in listFilter"
          :key="index"
          :class="{active: index == listFilterIndex}"
          @click="listFilterIndex=index"
        >{{item}}</span>
      </div>

      <ul class="course-list" v-if="courseList.length">
        <li class="list-item" v-for="(item,index) in courseList" :key="index">
          <div class="img-box">
            <img :src="item.img" alt="">
            <div class="tags">
              <span class="tag-item" v-for="(tag,index) in item.tags" :key="index">{{tag}}</span>
            </div>
            <div class="rate" v-if="item.rate">{{item.rate}}</div>
          </div>
          <div class="course-content">
            <h2 class="title ellipsis">{{item.title}}</h2>
            <p>
              <span class="rank">{{item.rank}}</span>
              <span class="number"><i class="iconfont">&#xe607;</i>{{item.number}}</span>
            </p>
            <p class="desc">{{item.desc}}</p>
            <p>
              <span class="price">{{item.price}}</span>
              <span class="collect" :class="{like: item.isLike}">
                <i class="iconfont">&#xe610;</i>
                {{item.isLike ? '已收藏' : '收藏'}}
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 分页 -->
    <pagination :total.sync="total"></pagination>
  </div>
</template>
<script>
import CourseSearch from './course-search.vue'
import CourseNav from './course-nav.vue'
import Pagination from 'base/pagination/pagination.vue'
import { getCourseNav, getCourseList } from 'api/course.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      listFilter: ['最新', '最热'], // 课程筛选列表
      listFilterIndex: 0, // 课程筛选索引
      navList: [], // 课程导航信息
      courseList: [], // 课程信息
      total: 100 // 课程总页数
    }
  },
  mounted () {
    this.getCourseNavList()
    this.getCourseListData()
  },
  methods: {
    // 获取课程导航信息
    getCourseNavList () {
      getCourseNav(this.params).then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.navList = data
        }
      })
    },
    // 获取课程信息接口
    getCourseListData () {
      getCourseList().then(res => {
        let { code, data } = res
        if(code === ERR_OK) {
          this.courseList = data
          console.log(this.courseList)
        }
      })
    }
  },
  components: {
    CourseSearch,
    CourseNav,
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  .course
    padding-top: 20px;
    .course-list-wrapper
      .course-filter
        padding: 26px 0 16px 0;
        & > span
          display: inline-block;
          margin-right: 12px;
          padding: 4px 12px;
          color: #1c1f21;
          font-size: 14px;
          cursor: pointer;
          &.active
            background-color: #9199a1;
            color: #fff;
            border-radius: 12px;
      .course-list
        padding: 10px 0 20px;
        .list-item
          display: inline-block;
          margin: 0 15px 25px 0;
          width: 216px;
          cursor: pointer;
          &:hover
            .course-content
              .title
                color: #f01414;
          .img-box
            position: relative;
            height: 120px;
            & > img
              display: block;
              width: 100%;
              height: 100%;
              background-color: #ccc;
              border-radius: 8px;
            .tags
              position: absolute;
              left: 8px;
              bottom: 6px;
              .tag-item
                display: inline-block;
                margin-right: 5px;
                padding: 4px 8px;
                background-color: rgba(28,31,33,.6);
                border-radius: 2px;
                font-size: 12px;
                color: #fff;
            .rate
              position: absolute;
              right: -7px;
              top: 8px;
              width: 42px;
              line-height: 20px;
              text-align: center;
              border: 2px solid #fff;
              background: linear-gradient(90deg,#65da98 0,#0cba4d 100%);
              font-size: 12px;
              color: #fff;
              border-radius: 12px;
          .course-content
            padding: 8px;
            .title
              margin-bottom: 22px;
              line-height: 24px;
              font-size: 16px;
              font-weight: 700;
              color: #07111b;
            & > p
              font-size: 12px;
              color: #9199a1;
              line-height: 24px;
              .rank
                margin-right: 10px;
              .number
                .iconfont
                  font-weight: 700;
              .price
                color: #4d555d;
                font-weight: 700;
              .collect
                float: right;
                &:hover
                  color: #4d555d;
                  font-weight: 700;
                &.like
                  color: #f01414!important;
                  font-weight: 700;
              .desc
                multline-ellipsis(2)
</style>
