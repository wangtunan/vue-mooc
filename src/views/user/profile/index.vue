<template>
  <div class="profile">
    <dl>
      <dt class="profile-title">个人信息</dt>
      <dd class="profile-item">
        <div class="profile-item-title">昵称</div>
        <div class="profile-item-value">{{userInfo.nickname || '未设置'}}</div>
      </dd>
      <dd class="profile-item">
        <div class="profile-item-title">职位</div>
        <div class="profile-item-value">{{userInfo.job || '未设置'}}</div>
      </dd>
      <dd class="profile-item">
        <div class="profile-item-title">城市</div>
        <div class="profile-item-value">{{userInfo.city || '未设置'}}</div>
      </dd>
      <dd class="profile-item">
        <div class="profile-item-title">性别</div>
        <div class="profile-item-value">{{userInfo.sex || '未设置'}}</div>
      </dd>
      <dd class="profile-item">
        <div class="profile-item-title">签名</div>
        <div class="profile-item-value">{{userInfo.signature || '未设置'}}</div>
      </dd>
    </dl>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { UserInfo } from '@/types'
export default defineComponent({
  name: 'UserProfile',
  setup () {
    const store = useStore()
    const userInfo = computed(() => {
      return store.getters.userInfo as UserInfo
    })
    return { userInfo }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .profile {
    &-title {
      margin-bottom: 20px;
      padding-bottom: 10px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid $placeholder-text;
      font-size: $font-medium;
      font-weight: bold;
    }
    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      padding: 0 24px;
      font-size: $font-normal;
      color: $primary-text;
      &-title {
        flex: 0 0 120px;
        width: 120px;
        height: 60px;
        line-height: 60px;
        background-color: rgba($secondary-text, 0.15);
        text-align: center;
        font-weight: bold;
      }
      &-value {
        flex: 1;
        margin-left: 15px;
        padding-left: 20px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid $placeholder-text;
      }
    }
  }
</style>
