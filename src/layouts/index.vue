<template>
  <div class="layout">
    <LayoutHeader
      v-show="!hideHeader"
      class="layout-header"
    >
      <MoocHeader />
    </LayoutHeader>
    <LayoutMain class="layout-main" :style="{'margin-top': hideHeader ? 0 : '72px'}" />
    <LayoutFooter v-show="!hideFooter" class="layout-footer">
      <MoocFooter />
    </LayoutFooter>
    <MoocSidebar v-show="!hideSidebar" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './header/index.vue'
import LayoutMain from './main/index.vue'
import LayoutFooter from './footer/index.vue'
import MoocHeader from '@/components/header/index.vue'
import MoocFooter from '@/components/footer/index.vue'
import MoocSidebar from '@/components/sidebar/index.vue'
import { useRouteMeta } from '@/hooks/core/useRouteMeta'
export default defineComponent({
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
    MoocHeader,
    MoocFooter,
    MoocSidebar
  },
  setup () {
    const { hideHeader, hideFooter, hideSidebar } = useRouteMeta()
    return { hideHeader, hideFooter, hideSidebar }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  $header-height: 72px;
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &-header {
      z-index: 100;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      height: $header-height;
      background-color: #fff;
      box-shadow: $box-shadow-normal;
    }
    &-main {
      flex: auto;
      height: 2000px;
    }
    &-footer {
      height: 130px;
      background-color:$theme-dark;
      overflow: hidden;
    }
  }
</style>
