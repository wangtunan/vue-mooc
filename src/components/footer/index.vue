<template>
  <div class="footer">
    <div class="footer-center">
      <!-- 底部链接 -->
      <ul class="footer-link">
        <li
          v-for="(item, index) in linkList"
          :key="index"
          class="footer-link-item"
          :title="item.title"
        >
          <router-link :to="item.url" :target="item.target">{{item.title}}</router-link>
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
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'Footer',
  setup () {
    const linkList = reactive([
      { title: '企业服务', url: '/read', target: '_blank' },
      { title: '关于我们', url: '', target: '_blank' },
      { title: '联系我们', url: '', target: '_blank' },
      { title: '讲师招募', url: '', target: '_blank' },
      { title: '帮助中心', url: '', target: '_blank' },
      { title: '意见反馈', url: '', target: '_blank' },
      { title: '慕课大学', url: '', target: '_blank' },
      { title: '代码托管', url: '', target: '_blank' },
      { title: '友情链接', url: '', target: '_blank' }
    ])
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
