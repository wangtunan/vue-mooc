<template>
  <div class="invoice">
    <p class="warning-info">
      <i class="iconfont">&#xe62d;</i>
      亲爱的慕课网用户，因国家对企业专用发票数量有严格控制，近期增值税专用发票申请数量增多，公司办理发票增量手续程序比较长，需要申请专用发票的用户可正常申请，因特殊原因处理周期会延长大家的等待时间。需要发票着急报销的用户请申请增值税普通发票或普通电子发票，请大家根据自己的需求申请。给大家造成不便敬请理解，谢谢！
    </p>
    <h2 class="title">
      发票管理
    </h2>
    <div class="invoice-wrapper">
      <div class="invoice-message">
        <span class="text">您目前可开发票总金额</span>
        <span class="total">¥328</span>
        <span class="invoice-btn">索取发票</span>
      </div>
      <dl>
        <dt>提示:</dt>
        <dd>1.索取发票最低金额需大于100元；</dd>
        <dd>2.发票默认支持电子发票，可通过电子邮箱收取发票信息；</dd>
        <dd>3.非电子发票发票金额＜500元时邮费到付，发票金额≥500元时由慕课网包邮；</dd>
        <dd>4.发票内容可选其一: 培训费 、培训服务费、课程费；</dd>
        <dd>5.请在购买后90天内索取发票，否则将视为自动放弃发票；</dd>
        <dd>6.所有在苹果公司iOS设备的慕课网App内购买课程不由慕课网开具发票；</dd>
        <dd>7.企业充值余额的课程消费不可开具发票；</dd>
        <dd>8.如有疑问请发邮件至客服邮箱：kf@imooc.com；</dd>
      </dl>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .invoice
    .warning-info
      margin-bottom: 10px;
      padding: 5px 12px;
      border-radius: 12px;
      background: rgba(255,153,0,.1);
      border: 1px solid rgba(255,153,0,.2);
      color: #f90;
      font-size: 12px;
      line-height: 18px;
    .title
      margin-bottom: 24px;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    .invoice-wrapper
      padding: 32px;
      background-color: #fff;
      box-shadow: 0 4px 8px 0px rgba(0,0,0,0.1);
      border-radius: 12px;
      .invoice-message
        padding: 24px 0 32px;
        text-align: center;
        background-color: #f3f5f7;
        span
          display: block;
        .text
          font-size: 14px;
          color: #333;
          line-height: 24px;
        .total
          margin: 8px 0 12px;
          font-size: 36px;
          color: #f01414;
          font-weight: 700;
          line-height: 48px;
          letter-spacing: 2px;
        .invoice-btn
          padding: 0;
          margin: 0 auto;
          width: 120px;
          height: 36px;
          line-height: 36px;
          border-radius: 18px;
          background: rgba(240,20,20,.8);
          font-size: 14px;
          color: #fff;
          cursor: pointer;
      dl
        margin-top: 20px;
        dt
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 48px;
          border-bottom: 1px solid #d9dde1;
        dd
          font-size: 12px;
          color: #93999f;
          line-height: 24px;
</style>
