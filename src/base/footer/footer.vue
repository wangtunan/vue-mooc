<template>
  <div class="footer">
    <div class="footer-container m-center">
      <div class="footer-links">
        <ul>
          <li class="link-item" v-for="(item,index) in links" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="copyright">
        <p>© 2019 imooc.com  京ICP备 12003892号-11 北京奥鹏文化传媒有限公司</p>
      </div>
      <div class="share">
        <div class="share-item wechart">
          <span class="share-img"></span>
          <p>官方微信</p>
          <div class="wechart-code"></div>
        </div>
        <div class="share-item weibo">
          <span class="share-img"></span>
          <p>官方微博</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      links: ['企业合作','人才招聘','联系我们','讲师招募','帮助中心','意见反馈','慕课大学','代码托管', '友情链接']
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    width: 100%;
    padding: 36px 0;
    background-color: #F7F9FB;
    .footer-container
      position: relative;
      .footer-links
        .link-item
          display: inline-block;
          padding: 0 10px;
          color: #99a1a6;
          font-size: 14px;
          cursor: pointer;
          &:hover
            color: #4D555D;
      .copyright
        margin-top: 8px;
        padding-left: 10px;
        line-height: 24px;
        color: #93999F;
        font-size: 12px;
      .share
        position: absolute;
        right: 0;
        top: 0;
        .share-item
          display: inline-block;
          margin-right: 18px;
          cursor: pointer;
          .share-img
            display: block;
            margin: 0 auto;
            width: 32px;
            height:32px;
            background: url('https://www.imooc.com/static/img/idx-btm.png') no-repeat 0 0
            background-position: -52px -221px;
          & > p
            margin-top: 4px;
            font-size: 12px;
            color: #4D555D;
            line-height: 24px;
        .weibo
          .share-img
            background: url('https://www.imooc.com/static/img/idx-btm.png') no-repeat 0 0
            background-position: 0px -221px;
          &:hover
            .share-img
              background-position: 0px -262px;
        .wechart
          position: relative;
          &:hover
            .share-img
              background-position: -52px -262px;
            .wechart-code
              opacity: 1;
              transform: scale(1);
          .wechart-code
            position: absolute;
            opacity: 0;
            left: -67px;
            bottom: 65px;
            width: 172px;
            height: 212px;
            background: url('https://www.imooc.com/static/img/common/elevator.png?t=2') no-repeat;
            background-position: 0px 0px;
            transform-origin: bottom;
            transform: scale(0);
            transition: all 0.15s linear;
</style>
