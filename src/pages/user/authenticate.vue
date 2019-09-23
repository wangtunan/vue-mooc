<template>
  <div class="authenticate">
    <h2 class="auth-title">
      实名认证
    </h2>
    <div class="auth-btn-box">
      <span class="auth-btn">开始认证</span>
    </div>
    <dl class="auth-message">
      <dt class="auth-message-title">
        认证须知
      </dt>
      <dd class="auth-message-item">
        1、实名认证可以提升你在慕课网的个人信息及虚拟财产的安全等级，同时也能够更好的体验慕课网的各项虚拟服务；
      </dd>
      <dd class="auth-message-item">
        2、我们将在你提交身份证信息后的5个工作日（不包含节假日）内完成审核，审核结果将会以短信和系统通知的形式发送给你；
      </dd>
      <dd class="auth-message-item">
        3、如若账号还未绑定手机，建议你提前绑定手机；
      </dd>
      <dd class="auth-message-item">
        4、实名认证审核完成后，将无法修改和删除，请谨慎填写；
      </dd>
      <dd class="auth-message-item">
        5、实名认证审核完成后，系统将自动发放10个积分作为奖励；查看积分
      </dd>
      <dd class="auth-message-item">
        6、你需要准备身份证照片（需正反两面），请确保证件照片清晰可见，严禁PS，具体可参考实名认证常见问题；
      </dd>
      <dd class="auth-message-item">
        7、我们会确保你所提供的信息均处于严格的保密状态，不会泄露；
      </dd>
      <dd class="auth-message-item bold">
        8、如存在恶意乱填写姓名，身份证号码，及上传与身份证证件无关图片者，一经发现将冻结慕课网账号。
      </dd>
    </dl>
  </div>
</template>
<style lang="stylus" scoped>
  .authenticate
    .auth-title
      padding: 20px 0;
      border-bottom: 1px solid #d0d6d9;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    .auth-btn-box
      margin: 24px 0;
      position: relative;
      height: 112px;
      box-sizing: border-box;
      background-color: #f3f5f7;
      .auth-btn
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -60px;
        margin-top: -24px;
        width: 120px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        background-color: #00b43c;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    .auth-message
      .auth-message-title
        margin-bottom: 15px;
        font-size: 16px;
        color: #4d555d;
      .auth-message-item
        font-size: 14px;
        color: #71777d;
        line-height: 24px;
        &.bold
          font-weight: 700;
</style>
