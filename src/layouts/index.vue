<template>
  <div class="layout">
    <LayoutHeader class="layout-header">
      <MoocHeader />
    </LayoutHeader>
    <LayoutMain class="layout-main" />
    <LayoutFooter class="layout-footer">
      <MoocFooter />
    </LayoutFooter>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './header/index.vue'
import LayoutMain from './main/index.vue'
import LayoutFooter from './footer/index.vue'
import MoocHeader from '@/components/header/index.vue'
import MoocFooter from '@/components/footer/index.vue'
export default defineComponent({
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
    MoocHeader,
    MoocFooter
  }
})
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &-header {
      height: 72px;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    }
    &-main {
      flex: 1;
    }
    &-footer {
      height: 130px;
      background-color: #1c1f21;
    }
  }
</style>
