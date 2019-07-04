<template>
  <div id="app">
    <m-header></m-header>
    <m-sidebar></m-sidebar>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>
<script>
import MHeader from 'base/header/header.vue'
import MFooter from 'base/footer/footer.vue'
import MSidebar from 'base/sidebar/sidebar.vue'
export default {
  name: 'app',
  components: {
    MHeader,
    MFooter,
    MSidebar
  }
}
</script>
