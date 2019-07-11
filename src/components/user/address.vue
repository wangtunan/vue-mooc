<template>
  <div class="address-container">
    <h2 class="address-title">收货地址</h2>
    <dl class="address-list">
      <dd class="address-item">
        <div class="add-address">
          <i class="iconfont">&#xeaf3;</i>
          <p class="add-text">添加新地址</p>
        </div>
      </dd>
      <dd class="address-item" v-for="(item,index) in addressList" :key="index">
        <p class="name">{{item.name}}</p>
        <p>电话：{{item.phhone}}</p>
        <p>地区：{{item.area}}</p>
        <p>地址：{{item.address}}</p>
        <p>邮编：{{item.postcode}}</p>
        <div class="address-btn">
          <span class="default" v-if="!item.isDefault">设为默认地址</span>
          <span>修改</span>
          <span>删除</span>
        </div>
        <div class="default-icon" v-if="item.isDefault">默认</div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      addressList: []
    }
  },
  created () {
    this.addressList = [
      { id: 1, name: '王天风', phone: '18277776666', area: '广东省广州市', address: '天河区天河客运站十三巷一号街110号', postcode: '000000', isDefault: true },
      { id: 2, name: '汪图南', phone: '18277776666', area: '广东省广州市', address: '天河区天河客运站十三巷一号街110号', postcode: '000000', isDefault: false },
      { id: 3, name: '王培峰', phone: '18277776666', area: '广东省广州市', address: '天河区天河客运站十三巷一号街110号', postcode: '000000', isDefault: false },
      { id: 4, name: '叶凡', phone: '18277776666', area: '广东省广州市', address: '天河区天河客运站十三巷一号街110号', postcode: '000000', isDefault: false }
    ]
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  
  .address-container
    .address-title
      margin-bottom: 24px;
      padding: 20px 0;
      border-bottom: 1px solid #d0d6d9;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    .address-list
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .address-item
        position: relative;
        margin: 0 10px 20px;
        padding: 24px;
        width: 275px;
        height: 229px;
        box-sizing: border-box;
        border: 1px solid #d0d6d9;
        overflow: hidden;
        &:hover
          .address-btn
            display: block;
        .add-address
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          .iconfont
            display: inline-block;
            width: 50px;
            height:50px;
            border-radius: 50%;
            background-color: #d9dde1;
            color: #fff;
            line-height: 50px;
            font-size: 35px;
            cursor: pointer;
          .add-text
            margin-top: 18px;
            font-size: 14px;
            color: #4d555d;
        & > p
          font-size: 14px;
          color: #4d555d;
          line-height: 24px;
          multline-ellipsis(2);
          &.name
            margin-bottom: 24px;
            font-size: 16px;
            color: #333;
            font-weight: 700;
        .address-btn
          display: none;
          position: absolute;
          bottom: 10px;
          right: 10px;
          & > span
            display: inline-block;
            margin: 0 10px;
            color: #f01414;
            font-size: 12px;
            cursor: pointer;
            line-height: 24px;
            &.default
              margin-right: 60px;
        .default-icon
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 40px;
          height: 30px;
          line-height: 44px;
          background-color: #00b43c;
          transform: rotate(45deg) translate(27px, -32px);
          transform-origin:center;
          color: #fff;
          text-align:center;
          font-size: 12px;
</style>
