<template>
  <div id="app" :style="getOverflowStyle">
    <m-header></m-header>
    <m-sidebar></m-sidebar>
    <router-view></router-view>
    <m-footer></m-footer>

    <login v-if="showLogin" @maskClick="handleMaskClick"></login>
  </div>
</template>
<script>
import MHeader from 'components/header/header.vue'
import MFooter from 'components/footer/footer.vue'
import MSidebar from 'components/sidebar/sidebar.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'app',
  computed: {
    getOverflowStyle () {
      return {
        'overflow': this.showLogin ? 'hidden': ''
      }
    },
    // vuex
    ...mapGetters(['showLogin'])
  },
  methods: {
    // 遮罩点击事件
    handleMaskClick () {
      this.setShowLogin(!this.showLogin)
    },
    // vuex
    ...mapMutations({
      'setShowLogin': 'login/SET_SHOW_LOGIN'
    })
  },
  components: {
    MHeader,
    MFooter,
    MSidebar,
    Login: () => import('components/login/login.vue'),
    MMask: () => import('components/mask/mask.vue')
  }
}
</script>
