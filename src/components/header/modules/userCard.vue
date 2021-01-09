<template>
  <div class="card">
    <!-- information -->
    <div class="card-top">
      <img :src="userInfo.avatar" alt="图像" width="72" height="72">
      <div class="card-top-info">
        <p class="card-top-info-nickname">{{userInfo.nickname}}</p>
        <p class="card-top-info-number">
          <span>经验{{userInfo.exp}}</span>
          <span>积分{{userInfo.integral}}</span>
        </p>
      </div>
    </div>

    <!-- link -->
    <ul class="card-links">
      <li
        v-for="(item, index) in linkList"
        :key="index"
        class="card-links-item">
        <router-link :to="item.url" target="_blank">
          <i :class="['iconfont', item.icon]"></i>
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>

    <!-- history -->
    <div class="card-history">
      <div class="card-history-item">
        <i class="iconfont icon-history"></i>
        <h3 class="title">{{userInfo.latest.name}}</h3>
        <p class="section">{{userInfo.latest.section}}</p>
        <span class="btn">继续</span>
      </div>
    </div>

    <!-- exit -->
    <p class="card-exit" @click="handleLogoutClick">安全退出</p>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
const linkList = [
  { icon: 'icon-lesson', title: '我的课程', url: '/lesson' },
  { icon: 'icon-order', title: '订单中心', url: '/order' },
  { icon: 'icon-integral', title: '积分商场', url: '/integral' },
  { icon: 'icon-setting', title: '个人设置', url: '/user' }
]
export default defineComponent({
  name: 'UserCard',
  setup () {
    const store = useStore()
    const userInfo = computed(() => {
      return store.getters.userInfo
    })
    const handleLogoutClick = () => store.dispatch('user/logout')
    return { userInfo, linkList, handleLogoutClick }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  .card {
    display: none;
    z-index: 120;
    position: absolute;
    right: 0;
    top: 100%;
    width: 306px;
    min-height: 300px;
    padding: 24px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,0.1);
    border-bottom-left-radius: $border-radius-normal;
    border-bottom-right-radius: $border-radius-normal;
    line-height: 1;
    text-align: left;
    cursor: default;
    &-top {
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        display: inline-block;
        margin-right: 16px;
        width: 72px;
        height: 72px;
        border-radius: 50%;
      }
      &-info {
        flex: 1;
        &-nickname {
          font-size: $font-medium;
          line-height: 28px;
          color: $primary-text;
        }
        &-number {
          margin-top: 4px;
          font-size: $font-normal;
          color: $regular-text;
          span {
            display: inline-block;
            vertical-align: middle;
            font-size: $font-small;
            & + span {
              margin-left: 10px;
            }
          }
        }
      }
    }
    &-links {
      margin: 16px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: wrap;
      &-item {
        flex-basis: 128px;
        margin-right: 2px;
        margin-bottom: 2px;
        height: 36px;
        line-height: 36px;
        background-color: rgba($placeholder-text, 0.3);
        border-radius: $border-radius-mini;
        text-align: center;
        &:hover {
          background-color: rgba($placeholder-text, 0.7);
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
        a {
          font-size: $font-normal;
          color: $primary-text;
        }
        i, span {
          display: inline-block;
          vertical-align: middle;
        }
        .iconfont {
          margin-right: 8px;
        }
      }
    }
    &-history {
      &-item {
        position: relative;
        padding-left: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba($placeholder-text, 0.5);
        color: $regular-text;
        font-size: $font-normal;
        .iconfont {
          position: absolute;
          left: 0;
          top: 2px;
          font-weight: bold;
        }
        .title {
          margin-bottom: 8px;
          color: $regular-text;
          font-size: inherit;
          line-height: 20px;
          @include ellipsis;
        }
        .section {
          padding-right: 40px;
          line-height: 20px;
          color: $secondary-text;
          @include ellipsis;
        }
        .btn {
          position: absolute;
          right: 0;
          top: 30px;
          color: $theme-green;
          font-size: $font-normal;
          cursor: pointer;
        }
      }
    }
    &-exit {
      margin-top: 8px;
      font-size: $font-small;
      line-height: 18px;
      text-align: left;
      color: $secondary-text;
      cursor: pointer;
      &:hover {
        color: $primary-text
      }
    }
  }
</style>
