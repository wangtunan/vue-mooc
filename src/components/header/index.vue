<template>
  <div class="header">
    <!-- brand -->
    <div class="header-brand">
      <img src="@/assets/images/common/brand.png" width="140" height="72" alt="慕课网" title="慕课网">
    </div>

    <!-- navigation -->
    <HeaderNavigation />

    <!-- search -->
    <HeaderSearch />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderNavigation from './modules/navigation.vue'
import HeaderSearch from './modules/search.vue'
export default defineComponent({
  name: 'Header',
  components: {
    HeaderNavigation,
    HeaderSearch
  }
})
</script>
<style lang="scss" scoped>
  .header {
    &-brand {
      display: inline-block;
      vertical-align: middle;
      margin: 0 20px;
    }
  }
</style>
