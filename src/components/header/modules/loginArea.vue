<template>
  <div class="login-area">
    <ul>
      <li class="login-area-item app" title="下载APP">
        <span>下载APP</span>
        <AppDownload class="app-download" />
      </li>
      <li class="login-area-item cart" title="购物车">
        <span>
          <i class="iconfont icon-cart"></i>购物车
        </span>
      </li>
      <template v-if="userInfo.uid">
        <li class="login-area-item bell">
          <el-badge
            type="danger"
            :value="userInfo.notice"
            is-dot
          >
            <router-link to="/notice" target="_blank">
              <span class="iconfont icon-notice"></span>
            </router-link>
          </el-badge>
        </li>
        <li class="login-area-item lesson">
          <span>我的课程</span>
        </li>
        <li class="login-area-item user">
          <img :src="userInfo.avatar" width="32" height="32" alt="头像">
          <UserCard class="user-card" />
        </li>
      </template>
      <li v-else class="login-area-item login">
        <span title="登陆" @click="handleLoginClick(0)">登陆</span> /
        <span title="注册" @click="handleLoginClick(1)">注册</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { UserInfo } from '@/types'
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const AppDownload = defineAsyncComponent(() => import('./appDownload.vue'))
const UserCard = defineAsyncComponent(() => import('./userCard.vue'))
export default defineComponent({
  name: 'HeaderLoginArea',
  components: {
    AppDownload,
    UserCard
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const isBellHovering = ref(false)
    const userInfo = computed<UserInfo>(() => store.getters.userInfo)
    const handleLoginClick = (type: number) => {
      router.push({ path: '/login', query: { type } })
    }
    return { isBellHovering, userInfo, handleLoginClick }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  $header-height: 72px;
  $half-height: calc(#{$header-height} / 2);
  .login-area {
    float: right;
    margin-right: 10px;
    &-item {
      position: relative;
      display: inline-block;
      vertical-align: top;
      line-height: $header-height;
      font-size: $font-normal;
      color: $regular-text;
      & > span {
        cursor: pointer;
      }
      &:not(.login):hover {
        & > span {
          color: $theme-red;
        }
      }
      &.app {
        padding: 0 15px;
        &:hover {
          .app-download {
            display: block;
          }
        }
      }
      &.cart {
        margin: 18px 0;
        height: $half-height;
        line-height: calc(#{$header-height} / 2 - 2px);
        border: 1px solid $placeholder-text;
        border-radius: $border-radius-large;
        box-sizing: border-box;
        &:hover {
          border-color: $theme-red;
        }
        span {
          padding: 0 18px;
        }
        .iconfont {
          margin-right: 8px;
        }
      }
      &.bell, &.lesson, &.user {
        width: 60px;
        text-align: center;
        cursor: pointer;
      }
      &.bell {
        &:hover {
          .iconfont {
            color: $theme-red;
          }
        }
        :deep(.el-badge) {
          line-height: 1.4;
        }
      }
      &.user {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 72px;
        &:hover {
          img {
            border-color: $theme-red;
          }
          .user-card {
            display: block;
          }
        }
        img {
          display: inline-block;
          border-radius: 50%;
          border: 2px solid transparent;
        }
      }
      &.login {
        margin-left: 10px;
        color: $placeholder-text;
        span {
          display: inline-block;
          padding: 0 15px;
          line-height: $header-height;
          color: $regular-text;
          &:hover {
            color: $theme-red;
          }
        }
      }
    }
  }
</style>
