<template>
  <div class="binding">
    <!-- 最新登陆时间 -->
    <transition name="slide-up">
      <div v-if="showLatest" class="binding-latest">
        <span>上次登录时间：2021-01-08 14:42:19</span>
        <span>地点：<router-link to="/user/log">查看最近操作记录</router-link></span>
        <i class="iconfont icon-close" @click="showLatest=false"></i>
      </div>
    </transition>

    <!-- 绑定列表 -->
    <dl class="binding-list">
      <dt class="binding-list-title">账号绑定</dt>
      <dd class="binding-list-item">
        <i class="iconfont icon-email"></i>
        <div class="binding-list-item-content">
          <p class="binding-list-item-title">邮箱 {{bindingInfo.email}} {{bindingInfo.email ? '已绑定' : '未绑定'}}</p>
          <p class="binding-list-item-desc">可用邮箱加密码登录慕课网，可用邮箱找回密码</p>
        </div>
      </dd>
      <dd class="binding-list-item">
        <i class="iconfont icon-app"></i>
        <div class="binding-list-item-content">
          <p class="binding-list-item-title">手机 {{bindingInfo.phone}} {{bindingInfo.phone ? '已绑定' : '未绑定'}}</p>
          <p class="binding-list-item-desc">可用手机号加密码登录慕课网，可通过手机号找回密码</p>
        </div>
      </dd>
      <dd class="binding-list-item">
        <i class="iconfont icon-password"></i>
        <div class="binding-list-item-content">
          <p class="binding-list-item-title">密码 {{bindingInfo.password ? '已设置' : '未设置'}}</p>
          <p class="binding-list-item-desc">用于保护账号信息和登录安全</p>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from 'vue'
import { BindingConfig } from '@/types'
import { getUserBinding } from '@/api/user'
import { ERR_OK } from '@/api/config'
export default defineComponent({
  name: 'UserBinding',
  setup () {
    const showLatest = ref(true)
    const bindingInfo = reactive<BindingConfig>({})
    onBeforeMount(async () => {
      const { code, data } = await getUserBinding()
      if (code === ERR_OK) {
        ({
          email: bindingInfo.email,
          phone: bindingInfo.phone,
          password: bindingInfo.password
        } = data)
      }
    })
    return { showLatest, bindingInfo }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  .binding {
    &-latest {
      margin-bottom: 20px;
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      background-color: rgba($theme-orange, 0.1);
      font-size: $font-small;
      color: $theme-red;
      span {
        & + span {
          margin-left: 10px;
        }
        a {
          font-style: normal;
          color: $theme-blue;
          cursor: pointer;
        }
      }
      .iconfont {
        position: relative;
        float: right;
        cursor: pointer;
        @include extend-click(-3px);
      }
    }
    &-list {
      &-title {
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
        padding: 20px 24px;
        border-bottom: 1px solid $placeholder-text;
        & > .iconfont {
          font-size: 36px;
          color: $secondary-text;
        }
        &-content {
          flex: 1;
          margin-left: 30px;
        }
        &-title {
          font-size: $font-medium;
          font-weight: bold;
          line-height: 24px;
          color: $primary-text;
        }
        &-desc {
          font-size: $font-normal;
          color: $secondary-text;
          line-height: 24px;
        }
      }
    }
  }
</style>
