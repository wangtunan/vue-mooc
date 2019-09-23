<template>
  <div class="certificate">
    <h2 class="certificate-title">
      学籍认证
    </h2>
    <div class="certificate-wrapper">
      <div class="status">
        <i class="iconfont">&#xe819;</i>
        <p class="status-text">
          学籍认证成功
        </p>
        <p class="cert-time">
          学籍时间({{ userinfo.certificate.stime }}-{{ userinfo.certificate.etime }})
        </p>
        <dl class="cert-list">
          <dd class="cert-item">
            <span class="item-title">姓名：</span>
            <span>{{ userinfo.certificate.name }}</span>
          </dd>
          <dd class="cert-item">
            <span class="item-title">院校名称：</span>
            <span>{{ userinfo.certificate.school }}</span>
          </dd>
          <dd class="cert-item">
            <span class="item-title">入学时间：</span>
            <span>{{ userinfo.certificate.stime }}</span>
          </dd>
          <dd class="cert-item">
            <span class="item-title">学历层次：</span>
            <span>{{ userinfo.certificate.grade }}</span>
          </dd>
        </dl>
      </div>
      <div class="message">
        <dl>
          <dt>认证须知</dt>
          <dd>1、你提交学籍证明后的5个工作日（不包含节假日）内完成审核，审核结果将会以系统通知的形式发送给你；</dd>
          <dd>2、学籍证明中的身份证号码必须与实名认证中身份证信息保持一致。如有误，将无法通过审核。</dd>
          <dd>3、学籍认证审核完成后，将无法修改和删除，请谨慎填写。同时系统将自动发放10个积分作为奖励；查看积分；</dd>
          <dd>4、上传学籍证明文件格式为PDF或JPG格式。请确保学籍文件清晰可见，具体可参考实名认证 常见问题；</dd>
          <dd>5、如存在恶意乱填写姓名，上传假信息，改动学籍证明内容或上传无关图片者，一经发现将冻结慕课网账号。</dd>
          <dd>6、我们会确保你所提供的信息均处于严格的保密状态，不会泄露；</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userinfo: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
  .certificate
    .certificate-title
      margin-bottom: 24px;
      padding: 20px 0;
      border-bottom: 1px solid #d0d6d9;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    .certificate-wrapper
      padding: 48px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .status
        flex: 0 0 344px;
        width: 344px;
        .iconfont
          margin: 0 auto;
          display: block;
          width: 72px;
          height: 72px;
          font-size: 72px;
          color: #00b43c;
        .status-text
          margin: 8px 0;
          font-size: 24px;
          line-height: 24px;
          color: #07111b;
          text-align: center;
        .cert-time
          font-size: 12px;
          color: #93999f;
          text-align: center;
        .cert-list
          margin-top: 30px;
          padding: 12px 36px;
          background-color: #f3f5f7;
          .cert-item
            font-size: 14px;
            line-height: 36px;
            border-bottom: 1px solid #d9dde1;
            color: #4d555d;
            &:last-child
              border-bottom: none;
            .item-title
              display: inline-block;
              width:80px;
              font-weight: 700;
      .message
        flex: 0 0 328px;
        width: 328px;
        dt
          margin-bottom: 15px;
          font-size: 16px;
          color: #4d555d;
        dd
          font-size: 12px;
          color: #45555d;
          line-height: 24px;
</style>
