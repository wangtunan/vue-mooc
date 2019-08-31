<template>
  <div class="user-course">
    <!-- 头部 -->
    <course-header></course-header>

    <!-- 内容部分 -->
    <div class="m-center">
      <div class="user-course-content">
        <div class="nav-container">
          <ul>
            <li
              class="nav-item"
              v-for="(nav,index) in navList"
              :key="index"
              :class="{active: currentNavIndex == index}"
              @click="handleNavClick(nav,index)"
            >
              <i class="iconfont" v-if="nav.code == 0">&#xe981;</i>
              <i class="iconfont" v-if="nav.code == 1">&#xe668;</i>
              <i class="iconfont" v-if="nav.code == 2">&#xe685;</i>
              <i class="iconfont" v-if="nav.code == 3">&#xe602;</i>
              <i class="iconfont" v-if="nav.code == 4">&#xe635;</i>
              {{nav.title}}
            </li>
          </ul>
        </div>
        <div class="content-container">
          <component :is="componentName"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseHeader from './course-header.vue'
export default {
  data () {
    return {
      currentNavIndex: 0, // 当前课程的导航索引 
      navList: [] // 导航数据
    }
  },
  created () {
    // 初始化导航数据
    this.navList = [
      { title: '免费课程', code: 0,  componentName: 'FreeCourse', key: '' },
      { title: '实战', code: 1, componentName: 'PracticeCourse', key: '' },
      { title: '猿问', code: 2, componentName: 'FreeCourse', key: '' },
      { title: '手记', code: 3, componentName: 'FreeCourse', key: '' },
      { title: '专栏', code: 4, componentName: 'FreeCourse', key: '' }
    ]
  },
  methods: {
    // 导航点击
    handleNavClick (item,index) {
      this.currentNavIndex = index
    }
  },
  computed: {
    componentName () {
      return this.navList[this.currentNavIndex].componentName
    }
  },
  components: {
    CourseHeader,
    FreeCourse: () => import('./free-course.vue'),
    PracticeCourse: () => import('./pratice-course.vue')
  }
}
</script>
<style lang="stylus" scoped>
  .user-course
    .user-course-content
      display: flex;
      align-items: flex-start;
      margin-top: 40px;
      .nav-container
        flex: 0 0 172px;
        width: 172px;
        .nav-item
          position: relative;
          margin-bottom: 8px;
          padding-left: 30px;
          height: 48px;
          line-height: 48px;
          font-size: 16px;
          color: #787d82;
          cursor: pointer;
          &:last-child
            margin-bottom: 0;
          &.active
            background-color: rgba(240,20,20,0.8);
            border-radius: 4px;
            color: #fff;
            &::after
              display: block;
              content: '';
              position: absolute;
              right: 0;
              top: 0;
              width: 0;
              height: 0;
              border-top: 24px solid #fff;
              border-bottom: 24px solid #fff;
              border-left: 15px solid transparent;
          .iconfont
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            font-size: 25px;
      .content-container
        margin-left: 50px;
        flex: 1;
</style>