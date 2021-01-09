<template>
  <div class="address">
    <!-- title -->
    <p class="address-title">收件地址</p>

    <!-- list -->
    <ul class="address-list">
      <li class="address-list-item add">
        <div class="add-container">
          <div class="add-icon">
            <i class="iconfont icon-plus"></i>
          </div>
          <p class="add-title">添加新地址</p>
        </div>
      </li>
      <li class="address-list-item">
        <p class="name">汪先生</p>
        <p>电话：18277776666</p>
        <p>地址：广东广州市天河区</p>
        <p>邮编：000000</p>
        <p class="btns">
          <span class="btn-default">设为默认地址</span>
          <span>修改</span>
          <span>删除</span>
        </p>
      </li>
      <li class="address-list-item">
        <p class="name">汪先生</p>
        <p>电话：18277776666</p>
        <p>地址：广东广州市天河区</p>
        <p>邮编：000000</p>
        <p class="btns">
          <span class="btn-default">设为默认地址</span>
          <span>修改</span>
          <span>删除</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserAddress'
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .address {
    &-title {
      margin-bottom: 24px;
      padding-bottom: 10px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid $placeholder-text;
      font-size: $font-medium;
      font-weight: bold;
    }
    &-list {
      &-item {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 24px;
        width: calc((100% - 40px) / 3);
        height: 228px;
        border: 1px solid $placeholder-text;
        border-radius: $border-radius-mini;
        box-sizing: border-box;
        color: $regular-text;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &.add {
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        &:hover {
          .btns {
            display: block;
          }
        }
        & > p {
          font-size: 14px;
          line-height: 20px;
        }
        .add-icon {
          margin: 0 auto;
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          background-color: $placeholder-text;
          text-align: center;
          color: #fff;
          cursor: pointer;
          .iconfont {
            font-size: 24px;
          }
        }
        .add-title {
          margin-top: 18px;
          font-size: $font-normal;
          color: $regular-text;
        }
        .name {
          margin-bottom: 10px;
          font-size: $font-medium;
          font-weight: bold;
          line-height: 24px;
          color: $primary-text;
        }
        .btns {
          display: none;
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 20px;
          text-align: right;
          color: $theme-red;
          cursor: pointer;
          span {
            & + span {
              margin-left: 20px;
            }
            &.btn-default {
              float: left;
            }
          }
        }
      }
    }
  }
</style>
