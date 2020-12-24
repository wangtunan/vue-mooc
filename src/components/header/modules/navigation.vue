<template>
  <ul class="navigation">
    <li
      v-for="(nav, index) in navList"
      :key="index"
      class="navigation-item"
    >
      <router-link :to="nav.url">{{nav.title}}</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'HeaderNavigation',
  setup () {
    const navList = reactive([
      { title: '免费课程', url: '/course' },
      { title: '实战课程', url: '/coding' },
      { title: '金职位', url: '/job' },
      { title: '慕课教程', url: '/wiki' },
      { title: '专栏', url: '/read' },
      { title: '手记', url: '/article' }
    ])
    return { navList }
  }
})
</script>
<style lang="scss" scoped>
  .navigation {
    display: inline-block;
    vertical-align: middle;
    &-item {
      display: inline-block;
      vertical-align: middle;
      padding: 0 20px;
      height: 72px;
      line-height: 72px;
      font-size: 16px;
      color: #666;
      cursor: pointer;
      &:hover {
        color: #333;
      }
      a {
        color: inherit;
      }
    }
  }
</style>
