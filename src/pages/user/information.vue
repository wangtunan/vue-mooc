<template>
  <div class="user-information">
    <dl>
      <dt class="info-title">
        个人信息
      </dt>
      <dd v-for="(item,index) in information" :key="index" class="info-item">
        <div class="info-type">
          {{ item.type }}
        </div>
        <div class="info-content">
          {{ item.value?item.value:'未设置' }}
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    userinfo: {
      type: Object
    }
  },
  data () {
    return {
      information: []
    }
  },
  created () {
    this.information = [
      { id: 1, type: '昵称', value: this.userinfo.name },
      { id: 2, type: '职位', value: this.userinfo.job },
      { id: 3, type: '城市', value: this.userinfo.city },
      { id: 4, type: '性别', value: this.userinfo.sex },
      { id: 5, type: '个性签名', value: this.userinfo.signature }
    ]
  }
}
</script>
<style lang="stylus" scoped>
  .user-information
    .info-title
      margin-bottom: 24px;
      height: 48px;
      border-bottom: 1px solid #d0d6d9;
      line-height: 48px;
      font-size: 16px;
      font-weight: 700;
      color: #333;
    .info-item
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .info-type
        flex: 0 0 120px;
        width: 120px;
        padding: 20px 0;
        margin-right: 20px;
        font-size: 14px;
        color: #07111b;
        font-weight: 700;
        background-color: #f3f5f7;
        text-align: center;
      .info-content
        flex: 1;
        padding: 20px 0;
        border-bottom: 1px solid #d9dde1;
        font-size: 14px;
</style>
