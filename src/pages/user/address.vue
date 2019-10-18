<template>
  <div class="address-container">
    <h2 class="address-title">
      收货地址
    </h2>
    <dl class="address-list">
      <dd class="address-item">
        <div class="add-address" @click="handleAddClick">
          <i class="iconfont">&#xeaf3;</i>
          <p class="add-text">
            添加新地址
          </p>
        </div>
      </dd>
      <dd v-for="(item,index) in addressList" :key="index" class="address-item">
        <p class="name">
          {{ item.name }}
        </p>
        <p>电话：{{ item.phhone }}</p>
        <p>地区：{{ item.area }}</p>
        <p>地址：{{ item.address }}</p>
        <p>邮编：{{ item.postcode }}</p>
        <div class="address-btn">
          <span v-if="!item.isDefault" class="default" @click="handleSetDefault(item)">设为默认地址</span>
          <span @click="handleEditClick(item)">修改</span>
          <span @click="handleDeleteClick(index)">删除</span>
        </div>
        <div v-if="item.isDefault" class="default-icon">
          默认
        </div>
      </dd>
    </dl>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="500px">
      <el-form :model="editForm" label-width="80px" label-position="right">
        <el-form-item label="姓名">
          <el-input v-model="editForm.name" placeholder="请输入收件名称" clearable />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="editForm.phone" placeholder="请输入手机号" clearable />
        </el-form-item>
        <el-form-item label="区域">
          <el-input v-model="editForm.area" placeholder="请输入区域" clearable />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="editForm.address" placeholder="请输入详细收货地址" clearable />
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="editForm.postcode" placeholder="请输入邮政编码" clearable />
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <mooc-button size="small" @click="dialogVisible = false">
          取消
        </mooc-button>
        <mooc-button type="primary" size="small" @click="handleSubmitClick">
          确定
        </mooc-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { setUserAddress, getUserAddress } from 'utils/cache.js'
export default {
  data () {
    return {
      isAdd: false, // 是否为新增
      dialogVisible: false, // 编辑弹窗是否课件
      addressList: [], // 收货地址列表
      editForm: {
        name: '',
        phone: '',
        area: '',
        address: '',
        postcode: '',
        isDefault: false
      }
    };
  },
  created () {
    this.getAddress()
  },
  methods: {
    // 新增收货地址
    handleAddClick () {
      this.isAdd = true
      this.dialogVisible = true
      this.editForm = {
        name: '',
        phone: '',
        area: '',
        address: '',
        postcode: '',
        isDefault: false
      }
    },
    // 修改收货地址
    handleEditClick (item) {
      this.isAdd = false
      this.dialogVisible = true
      this.editForm = Object.assign({}, item)
    },
    // 删除收货地址
    handleDeleteClick (index) {
      this.$confirm('此操作将删除该收件地址，是否确定？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let address = this.addressList.slice()
        address.splice(index, 1)
        this.addressList = address
        setUserAddress(address)
      })
    },
    // 确认收货地址
    handleSubmitClick () {
      let address = this.addressList.slice()
      if (this.isAdd) {
        address.push(this.editForm)
      } else {
        address.forEach((item, index) => {
          if (item.name === this.editForm.name) {
            address[index] = this.editForm
          }
        })
      }
      // 判断是否只有一条，是的话设置为默认
      if (address.length === 1) {
        address[0].isDefault = true
      }
      this.addressList = address
      setUserAddress(address) 
      this.dialogVisible = false
      this.editForm = {
        name: '',
        phone: '',
        area: '',
        address: '',
        postcode: '',
        isDefault: false
      }
    },
    // 设为默认收货地址
    handleSetDefault (address) {
      this.addressList.forEach((item, index) => {
        this.addressList[index].isDefault = item.name === address.name
      })
      setUserAddress(this.addressList)
    },
    // 获取收货地址
    getAddress () {
      this.addressList = getUserAddress()
    }
  },
  computed: {
    title () {
      return this.isAdd ? "新增收件地址" : "编辑收件地址";
    }
  }
};
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
          height: 50px;
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
        transform-origin: center;
        color: #fff;
        text-align: center;
        font-size: 12px;
  >>> .el-dialog
    border-radius: 12px;
    .el-dialog__body
      padding: 30px;
  >>> .el-form-item__label
    font-weight: 700;
</style>
