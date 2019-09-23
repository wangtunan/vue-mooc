<template>
  <div class="course-header">
    <div class="m-center">
      <div class="left">
        <div class="img-box">
          <img :src="base.avatar" alt="">
        </div>
        <div class="user-info">
          <p class="name">
            {{ base.name }}
          </p>
          <p class="other">
            <span>{{ base.sex }}</span>
            <span>{{ base.job }}</span>
          </p>
        </div>
      </div>
      <div class="right">
        <dl>
          <dd>
            <span>{{ base.duration }}h</span>
            <span>学习时长</span>
          </dd>
          <dd>
            <span>{{ base.exp }}</span>
            <span>经验</span>
          </dd>
          <dd>
            <span>{{ base.integral }}</span>
            <span>积分</span>
          </dd>
          <dd>
            <span>{{ base.like }}</span>
            <span>关注</span>
          </dd>
          <dd>
            <span>{{ base.fans }}</span>
            <span>粉丝</span>
          </dd>
          <dt @click="handleSettingClick">
            <i class="iconfont">&#xe680;</i>个人设置
          </dt>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    base: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    // 个人设置点击
    handleSettingClick () {
      this.$router.push('/user')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .course-header
    padding-top: 24px;
    width: 100%;
    height: 148px;
    background: url('./bg.png') no-repeat center top;
    background-size: cover;
    box-sizing: border-box;
    color: #fff;
    .left
      float: left;
      display: flex;
      align-items: center;
      .img-box
        margin-right: 20px;
        flex: 0 0 140px;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 4px solid #fff;
        & > img
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
      .user-info
        margin-top: -40px;
        .name
          font-size: 24px;
          line-height: 38px;
          color: #fff;
          font-weight: 600;
        .other
          margin-top: 6px;
          font-size: 14px;
          color: #fff;
          & > span
            display: inline-block;
            margin-right: 10px;
    .right
      float: right;
      margin-top: 24px;
      dl
        dt,dd
          display: inline-block;
          vertical-align: middle;
          margin-right: 24px;
          & > span
            display: block;
            font-size: 14px;
            color: rgba(255,255,255,0.8);
            text-align: center;
            line-height: 24px;
            &:first-child
              margin-bottom: 4px;
              font-size: 26px;
              font-weight: 700;
        dt
          margin-right: 24px;
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 18px;
          line-height: 20px;
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          cursor: pointer;
          &:hover
            border-color: rgba(255,255,255,1);
            color: #fff;
          .iconfont
            padding-right: 5px;
</style>