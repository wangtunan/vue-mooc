<template>
  <div id="app" :style="getStyle">
    <mooc-container>
      <mooc-header height="72px">
        <m-header />
      </mooc-header>
      <mooc-main>
        <router-view />
      </mooc-main>
      <mooc-footer height="120px">
        <m-footer />
      </mooc-footer>
    </mooc-container>

    <m-sidebar />
    
    <login v-if="showLogin" @maskClick="handleMaskClick" />
  </div>
</template>
<script>
import MHeader from 'components/header/index.vue'
import MFooter from 'components/footer/footer.vue'
import MSidebar from 'components/sidebar/sidebar.vue'
import { mapGetters, mapMutations } from 'vuex'
import { scrollMixin } from 'assets/js/mixin.js'
export default {
  name: 'App',
  mixins: [scrollMixin],
  computed: {
    getStyle () {
      return {
        'max-height': this.showLogin ? '100%' : '',
        'overflow': this.showLogin ? 'hidden' : ''
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
    Login: () => import('components/login/login.vue')
  }
}
</script>
