<template>
  <div id="app" :style="getOverflowStyle">
    <m-header></m-header>
    <m-sidebar></m-sidebar>
    <router-view></router-view>
    <m-footer></m-footer>

    <login v-if="showLogin"></login>
    <m-mask v-if="showLogin" @maskClick="handleMaskClick"></m-mask>
  </div>
</template>
<script>
import MHeader from 'base/header/header.vue'
import MFooter from 'base/footer/footer.vue'
import MSidebar from 'base/sidebar/sidebar.vue'
import Login from 'base/login/login.vue'
import MMask from 'base/mask/mask.vue'
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
    Login,
    MMask
  }
}
</script>
