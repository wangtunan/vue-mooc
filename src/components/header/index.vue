<template>
  <div class="header">
    <!-- brand -->
    <router-link
      to="/"
      tag="div"
      class="header-brand"
    >
      <img src="@/assets/images/common/brand.png" width="136" height="72" alt="慕课网" title="慕课网">
    </router-link>

    <!-- navigation -->
    <HeaderNavigation />

    <!-- search -->
    <HeaderSearch />

    <!-- login area -->
    <HeaderLoginArea />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderNavigation from './modules/navigation.vue'
import HeaderSearch from './modules/search.vue'
import HeaderLoginArea from './modules/loginArea.vue'
export default defineComponent({
  name: 'Header',
  components: {
    HeaderNavigation,
    HeaderSearch,
    HeaderLoginArea
  }
})
</script>
<style lang="scss" scoped>
  .header {
    &-brand {
      float: left;
      margin: 0 20px;
    }
  }
</style>
