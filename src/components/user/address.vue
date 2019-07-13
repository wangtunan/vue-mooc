<template>
  <div class="address-container">
    <h2 class="address-title">收货地址</h2>
    <dl class="address-list">
      <dd class="address-item">
        <div class="add-address" @click="handleAddClick">
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
          <span @click="handleEditClick">修改</span>
          <span @click="handleDeleteClick">删除</span>
        </div>
        <div class="default-icon" v-if="item.isDefault">默认</div>
      </dd>
    </dl>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="500px">
      <el-form :model="editForm" label-width="80px" label-position="right">
        <el-form-item label="姓名">
          <el-input v-model="editForm.name" placeholder="请输入收件名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="editForm.phone" placeholder="请输入手机号" clearable></el-input>
        </el-form-item>
        <el-form-item label="区域">
          <el-input v-model="editForm.area" placeholder="请输入区域" clearable></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="editForm.address" placeholder="请输入详细收货地址" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="editForm.postcode" placeholder="请输入邮政编码" clearable></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button  size="small" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" size="small" @click="handleSubmitClick">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editForm: {}, // 收货地址编辑表单
      isAdd: false, // 是否为新增
      dialogVisible: false, // 编辑弹窗是否课件
      addressList: [] // 收货地址列表
    };
  },
  created() {
    this.addressList = [
      { id: 1,name: "王天风",phone: "18277776666",area: "广东省广州市",address: "天河区天河客运站十三巷一号街110号",postcode: "000000",isDefault: true },
      { id: 2,name: "汪图南",phone: "18277776666",area: "广东省广州市",address: "天河区天河客运站十三巷一号街110号",postcode: "000000",isDefault: false },
      { id: 3,name: "王培峰",phone: "18277776666",area: "广东省广州市",address: "天河区天河客运站十三巷一号街110号",postcode: "000000",isDefault: false },
      { id: 4,name: "叶凡",phone: "18277776666",area: "广东省广州市",address: "天河区天河客运站十三巷一号街110号",postcode: "000000",isDefault: false }
    ];
  },
  methods: {
    // 新增收货地址
    handleAddClick() {
      this.isAdd = true;
      this.dialogVisible = true;
    },
    // 修改收货地址
    handleEditClick () {
      this.isAdd = false
      this.dialogVisible = true
    },
    // 删除收货地址
    handleDeleteClick () {
      this.$conform('此操作将删除该收件地址，是否确定？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('删除成功')
      })
    },
    // 确认收货地址
    handleSubmitClick () {
      this.dialogVisible = fale
    }
    // 设为默认收货地址
  },
  computed: {
    title() {
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
