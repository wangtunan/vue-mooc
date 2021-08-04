<template>
  <div class="user">
    <!-- 左侧导航 -->
    <div class="user-nav">
      <div class="user-info">
        <img class="user-info-avatar" :src="userInfo.avatar" alt="">
        <p class="user-info-name">{{userInfo.nickname}}</p>
        <p class="user-info-uid">ID: {{userInfo.uid}}</p>
      </div>
      <dl>
        <dt class="user-nav-title">账号管理</dt>
        <dd
          v-for="(item, index) in navList"
          :key="index"
          class="user-nav-item"
          :class="{
            active: activeIndex==index
          }"
          @click="handleNavClick(item, index)"
        >
          {{item.title}}
          <i class="iconfont icon-right"></i>
        </dd>
      </dl>
    </div>

    <!-- 右侧子页面 -->
    <div class="user-page">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { NavConfig, UserInfo } from '@/types'
import { useRoute, useRouter } from 'vue-router'
const navList = [
  { title: '账号绑定', url: '/user/binding' },
  { title: '个人信息', url: '/user/profile' },
  { title: '操作记录', url: '/user/log' },
  { title: '收件地址', url: '/user/address' }
]
export default defineComponent({
  name: 'UserIndex',
  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const activeIndex = ref(0)
    const userInfo = computed<UserInfo>(() => {
      return store.getters.userInfo
    })
    const handleNavClick = (item: NavConfig) => {
      router.push(item.url as string)
    }
    const setActiveIndex = () => {
      const findIndex = navList.findIndex(item => item.url === route.path)
      activeIndex.value = findIndex !== -1 ? findIndex : 0
    }
    setActiveIndex()
    watch(() => route.path, setActiveIndex)
    return {
      userInfo,
      navList,
      activeIndex,
      handleNavClick
    }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  .user {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0;
    @include mooc-center();
    &-nav {
      flex: 0 0 216px;
      width: 216px;
      height: 100%;
      background-color: #f8fafc;
      &-title {
        margin: 0 24px;
        padding: 12px 0;
        border-bottom: 1px solid $placeholder-text;
        font-size: $font-medium;
        color: $primary-text;
        line-height: 24px;
        font-weight: bold;
      }
      &-item {
        position: relative;
        padding-left: 54px;
        height: 48px;
        line-height: 48px;
        text-align: left;
        font-size: $font-normal;
        color: $primary-text;
        cursor: pointer;
        &:first-of-type {
          margin-top: 10px;
        }
        &:hover {
          color: $theme-red;
          background-color: #f3f5f7;
        }
        &.active {
          color: #fff;
          background-color: $theme-red;
        }
        .iconfont {
          position: absolute;
          right: 25px;
          top: 0;
          color: inherit;
        }
      }
    }
    &-page {
      flex: 1;
      margin-left: 48px;
    }
    &-info {
      padding: 32px 0 24px;
      text-align: center;
      &-avatar {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 4px solid #ddd;
        border-radius: 50%;
      }
      &-name {
        font-size: $font-medium;
        color: $primary-text;
        line-height: 24px;
      }
      &-uid {
        font-size: $font-small;
        line-height: 20px;
        color: $regular-text;
      }
    }
  }
</style>
