<template>
  <div class="footer">
    <div class="footer-center">
      <!-- 底部链接 -->
      <ul class="footer-link">
        <li
          v-for="(item, index) in linkList"
          :key="index"
          class="footer-link-item"
        >
          <router-link
            :to="item.url"
            :target="item.target"
            :title="item.title"
          >{{item.title}}</router-link>
        </li>
      </ul>

      <!-- 底部版权 -->
      <p class="footer-copyright">
        <span>© 2020 imooc.com  京ICP备 12003892号-11 </span>
        <span>京公网安备11010802030151号</span>
      </p>

      <!-- 底部公众号、微博 -->
      <div class="footer-sns">
        <div class="footer-sns-item">
          <span class="iconfont icon-wechat"></span>
          <p>官方微信</p>
        </div>
        <div class="footer-sns-item">
          <span class="iconfont icon-weibo"></span>
          <p>官方微博</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import { getFooterLink } from '@/api/common'
import { FooterLinkConfig } from '@/types'
import { ERR_OK } from '@/api/config'
export default defineComponent({
  name: 'Footer',
  setup () {
    const linkList = ref<FooterLinkConfig[]>([])
    onBeforeMount(async () => {
      const { code, data } = await getFooterLink()
      if (code === ERR_OK && data) {
        linkList.value = data
      }
    })
    return { linkList }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  .footer {
    &-center {
      padding: 36px 0;
      position: relative;
      @include mooc-center();
    }
    &-link {
      &-item {
        display: inline-block;
        vertical-align: middle;
        margin-right: 24px;
        font-size: $font-normal;
        line-height: 28px;
        color: rgba(#fff, 0.6);
        cursor: pointer;
        &:hover a {
          color: #fff;
        }
        a {
          color: inherit;
        }
      }
    }
    &-copyright {
      margin-top: 8px;
      font-size: $font-small;
      color: rgba(#fff, 0.4);
      line-height: 24px;
      & > span {
        margin-right: 10px;
      }
    }
    &-sns {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      &-item {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 32px;
        }
        span {
          display: inline-block;
          margin-bottom: 10px;
          font-size: $font-largex;
          color: rgba(#fff, 0.9);
        }
        p {
          font-size: $font-normal;
          color: rgba(#fff, 0.4);
        }
      }
    }
  }
</style>
