<template>
  <div class="login">
    <!-- logo -->
    <router-link to="/" custom v-slot="{navigate}">
      <div class="login-logo" @click="navigate">
        <img src="@/assets/images/login/signlogo.png" width="384" height="40" alt="">
      </div>
    </router-link>

    <!-- content -->
    <div class="login-container">
      <!-- login tabs -->
      <ul class="login-tabs">
        <li
          class="login-tabs-item"
          v-for="(tab, index) in tabList"
          :key="index"
          :class="{'is-active': activeIndex == index}"
          @click="activeIndex = index"
        >{{tab}}</li>
      </ul>

      <!-- login form -->
      <LoginForm :type="activeIndex" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import LoginForm from './modules/login.vue'
const tabList = ['登录', '注册']
export default defineComponent({
  name: 'Login',
  components: {
    LoginForm
  },
  setup () {
    const activeIndex = ref(0)
    // login or register
    const { query } = useRoute()
    activeIndex.value = query.type === '1' ? 1 : 0
    return { activeIndex, tabList }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .login {
    height: 100vh;
    overflow: hidden;
    background-color: #f8fafc;
    &-logo {
      padding-top: 80px;
      text-align: center;
      cursor: pointer;
    }
    &-container {
      margin: 40px auto 0;
      padding: 10px 32px 20px;
      width: 384px;
      background-color: #fff;
      border-radius: $border-radius-large;
      box-shadow: 0 12px 24px 0 rgba(28,31,33,.1);
      box-sizing: border-box;
    }
    &-tabs {
      margin-bottom: 35px;
      &-item {
        display: inline-block;
        vertical-align: middle;
        width: 80px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        color: $regular-text;
        font-size: $font-medium;
        font-weight: bold;
        &:after {
          content: '';
          display: none;
          margin: 0 auto;
          width: 16px;
          height: 4px;
          line-height: 4px;
          background-color: $theme-red;
          border-radius: $border-radius-mini;
        }
        &.is-active, &:hover {
          color: $theme-red;
        }
        &.is-active:after {
          display: block;
        }
      }
    }
  }
</style>
