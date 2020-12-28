<template>
  <ul class="sidebar">
    <li
      v-for="(item, index) in sidebarList"
      :key="index"
      class="sidebar-item"
    >
      <i class="iconfont" :class="`icon-${item.icon}`"></i>
      <span class="title">{{item.title}}</span>
    </li>
    <li v-show="showBackBtn" class="sidebar-item" @click="handleScrollToTop">
      <i class="iconfont icon-back"></i>
      <span class="title">返回顶部</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import { useScroll } from '@/hooks/event/useScroll'
import { getSidebar } from '@/api/common'
import { ERR_OK } from '@/api/config'
import { SidebarItemConfig } from '@/types'
export default defineComponent({
  name: 'Sidebar',
  setup () {
    const showBackBtn = ref(false)
    const sidebarList = ref<SidebarItemConfig[]>([])
    const { scrollTo } = useScroll(window, (scrollTop: number) => {
      showBackBtn.value = scrollTop > 200
    })
    const handleScrollToTop = () => scrollTo()
    onBeforeMount(async () => {
      const { code, data } = await getSidebar()
      if (code === ERR_OK && data) {
        sidebarList.value = data
      }
    })
    return {
      sidebarList,
      showBackBtn,
      handleScrollToTop
    }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .sidebar {
    z-index: 50;
    position: fixed;
    top: 50%;
    right: 0;
    padding: 0 16px;
    margin-top: -112px;
    background-color: #fff;
    border-top-left-radius: $border-radius-normal;
    border-bottom-left-radius: $border-radius-normal;
    box-shadow: $box-shadow-normal;
    &-item {
      position: relative;
      width: 26px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      cursor: pointer;
      & + &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        border: 1px solid #f3f5f7;
      }
      &:hover {
        .iconfont {
          display: none;
        }
        .title {
          display: inline-block;
        }
      }
      .iconfont {
        font-size: $font-largex;
        color: $placeholder-text;
      }
      .title {
        display: none;
        padding: 14px 0;
        line-height: 14px;
        font-size: $font-small;
        color: $primary-text;
      }
    }
  }
</style>
