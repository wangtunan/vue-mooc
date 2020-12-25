<template>
  <ul class="navigation">
    <li
      v-for="(nav, index) in navList"
      :key="index"
      class="navigation-item"
      :title="nav.title"
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
      { title: '免费课程', url: '/login' },
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
  @import '~@/assets/styles/variables.scss';
  $header-height: 72px;
  .navigation {
    float: left;
    &-item {
      display: inline-block;
      vertical-align: middle;
      padding: 0 20px;
      height: $header-height;
      line-height: $header-height;
      font-size: $font-medium;
      color: $primary-text;
      cursor: pointer;
      &:hover {
        color: $dark-text;
      }
      a {
        color: inherit;
      }
    }
  }
</style>
