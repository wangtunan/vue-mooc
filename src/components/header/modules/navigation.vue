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
import { defineComponent, ref, onBeforeMount } from 'vue'
import { getHeaderNav } from '@/api/common'
import { ERR_OK } from '@/api/config'
import { NavConfig } from '@/types'
export default defineComponent({
  name: 'HeaderNavigation',
  setup () {
    const navList = ref<NavConfig[]>([])
    onBeforeMount(async () => {
      const { code, data } = await getHeaderNav()
      if (code === ERR_OK && data) {
        navList.value = data
      }
    })
    return { navList }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/responsive.scss';
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
      @include respond-to {
        padding: 0 10px;
      }
    }
  }
</style>
