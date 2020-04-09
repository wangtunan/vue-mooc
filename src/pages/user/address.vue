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
        <p>电话：{{ item.phone }}</p>
        <p>地区：{{ item.area }}</p>
        <p>地址：{{ item.address }}</p>
        <p>邮编：{{ item.postcode }}</p>
        <div class="address-btn">
          <span v-if="!item.isDefault" class="default" @click="handleDefaultClick(item)">设为默认地址</span>
          <span @click="handleEditClick(item)">修改</span>
          <span @click="handleDeleteClick(item)">删除</span>
        </div>
        <div v-if="item.isDefault" class="default-icon">
          默认
        </div>
      </dd>
    </dl>

    <mooc-dialog :title="title" :visible.sync="dialogVisible" width="500px">
      <el-form ref="editForm" :model="editForm" :rules="rules" label-width="80px" label-position="right">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" placeholder="请输入收件人姓名" clearable />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="editForm.phone" placeholder="请输入收件人手机号" clearable />
        </el-form-item>
        <el-form-item label="区域" prop="area">
          <el-input v-model="editForm.area" placeholder="请输入区域" clearable />
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="editForm.address" placeholder="请输入详细收货地址" clearable />
        </el-form-item>
        <el-form-item label="邮政编码" prop="postcode">
          <el-input v-model="editForm.postcode" placeholder="请输入邮政编码" clearable />
        </el-form-item>
      </el-form>

      <div slot="footer">
        <mooc-button size="small" @click="dialogVisible = false">
          取消
        </mooc-button>
        <mooc-button type="primary" size="small" @click="handleValidateForm">
          确定
        </mooc-button>
      </div>
    </mooc-dialog>
  </div>
</template>
<script>
import { getUserAddresss, createUserAddress, updateUserAddress, deleteUserAddress, defaultUserAddress } from 'api/address.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    const rules = {
      name: [
        { required: true, message: '请输入收件人姓名', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: '请输入收件人手机号', trigger: 'blur' }
      ],
      area: [
        { required: true, message: '请输入区域', trigger: 'blur' }
      ],
      address: [
        { required: true, message: '请输入详细收件地址', trigger: 'blur' }
      ],
      postcode: [
        { required: true, message: '请输入邮政编码', trigger: 'blur' }
      ]
    }
    return {
      rules: rules,
      dialogVisible: false,
      addressList: [],
      editForm: {
        id: '',
        name: '',
        phone: '',
        area: '',
        address: '',
        postcode: ''
      }
    };
  },
  mounted () {
    this.getAddressData()
  },
  methods: {
    // 新增收货地址
    handleAddClick () {
      this.dialogVisible = true
      this.editForm = {
        id: '',
        name: '汪图南',
        phone: '18277776666',
        area: '广东省广州市',
        address: '天河区xxx路xxx号xxx公司',
        postcode: '000000'
      }
      this.$nextTick(() => {
        this.$refs.editForm.resetFields()
      })
    },
    // 修改收货地址
    handleEditClick (item) {
      this.dialogVisible = true
      this.editForm = Object.assign({}, item)
      this.$nextTick(() => {
        this.$refs.editForm.resetFields()
      })
    },
    // 删除收货地址
    handleDeleteClick (item) {
      this.$confirm('此操作将删除该收件地址，是否确定？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = {
          id: item.id
        }
        deleteUserAddress(params).then(res => {
          const { code, msg } = res
          if (code === ERR_OK) {
            this.$message.success(msg || '删除成功')
            this.getAddressData()
          } else {
            this.$message.error(msg)
          }
        })
      })
    },
    // 默认收获地址
    handleDefaultClick (item) {
      const params = {
        id: item.id
      }
      defaultUserAddress(params).then(res => {
        const { code, msg } = res
        if (code === ERR_OK) {
          this.$message.success(msg)
          this.getAddressData()
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 校验收获地址
    handleValidateForm () {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.handleSubmitClick()
        }
      })
    },
    // 确认收货地址
    handleSubmitClick () {
      const func = this.editForm.id ? updateUserAddress : createUserAddress
      func(this.editForm).then(res => {
        const { code, msg } = res
        if (code === ERR_OK) {
          this.$message.success(msg || '操作成功')
          this.dialogVisible = false
          this.getAddressData()
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 获取收货地址
    getAddressData () {
      getUserAddresss().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.addressList = data
        } else {
          this.addressList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.addressList = []
      })
    }
  },
  computed: {
    title () {
      return this.editForm.id ? '编辑收件地址' : '新增收件地址'
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
  >>> .mooc-dialog
    .mooc-dialog-body
      padding: 30px 30px 30px 20px;
</style>
