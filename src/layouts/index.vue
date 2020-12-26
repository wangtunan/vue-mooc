<template>
  <div class="layout">
    <LayoutHeader
      v-show="!meta.hideHeader"
      class="layout-header"
    >
      <MoocHeader />
    </LayoutHeader>
    <LayoutMain class="layout-main" :style="{'margin-top': meta.hideHeader ? 0 : '72px'}" />
    <LayoutFooter v-show="!meta.hideFooter" class="layout-footer">
      <MoocFooter />
    </LayoutFooter>
    <MoocSidebar v-show="!meta.hideSidebar" />
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import LayoutHeader from './header/index.vue'
import LayoutMain from './main/index.vue'
import LayoutFooter from './footer/index.vue'
import MoocHeader from '@/components/header/index.vue'
import MoocFooter from '@/components/footer/index.vue'
import MoocSidebar from '@/components/sidebar/index.vue'
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
    const { meta } = toRefs(useRoute())
    return { meta }
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
    }
    &-footer {
      height: 130px;
      background-color:$theme-dark;
      overflow: hidden;
    }
  }
</style>
