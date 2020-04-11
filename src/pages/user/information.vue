<template>
  <div class="user-information">
    <dl>
      <dt class="info-title">
        个人信息
        <mooc-button size="mini" round @click="handleEditClick">
          <i class="iconfont">&#xe600;</i>
          编辑
        </mooc-button>
      </dt>
      <dd v-for="(item,index) in information" :key="index" class="info-item">
        <div class="info-type">
          {{ item.type }}
        </div>
        <div class="info-content">
          <template v-if="item.type == '性别'">
            {{ item.value == 'male' ? '男' : '女' }}
          </template>
          <template v-else>
            {{ item.value?item.value:'未设置' }}
          </template>
        </div>
      </dd>
    </dl>

    <!-- 编辑个人信息弹窗 -->
    <mooc-dialog title="编辑个人信息" :visible.sync="dialogVisible" width="600px">
      <el-form ref="editForm" :model="editForm" label-width="80px" label-position="rigth">
        <el-form-item label="昵称">
          <el-input v-model="editForm.nickname" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="editForm.job" placeholder="请输入职业"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="editForm.city" placeholder="请输入城市"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="editForm.signature" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入个性签名"></el-input>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <mooc-button size="small" @click="dialogVisible=false">关闭</mooc-button>
        <mooc-button size="small" type="primary" :disabled="isLoading" @click="handleSaveClick">保存</mooc-button>
      </template>
    </mooc-dialog>
  </div>
</template>
<script>
import { updateUserInfo } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
export default {
  props: {
    userinfo: {
      type: Object
    }
  },
  data () {
    return {
      isLoading: false,
      dialogVisible: false,
      information: [],
      editForm: {
        nickname: '',
        job: '',
        city: '',
        sex: '',
        signature: ''
      }
    }
  },
  created () {
    this.information = [
      { id: 1, type: '昵称', value: this.userinfo.nickname },
      { id: 2, type: '职位', value: this.userinfo.job },
      { id: 3, type: '城市', value: this.userinfo.city },
      { id: 4, type: '性别', value: this.userinfo.sex },
      { id: 5, type: '个性签名', value: this.userinfo.signature }
    ]
  },
  methods: {
    // 编辑个人信息
    handleEditClick () {
      this.dialogVisible = true
      this.editForm = {
        nickname: this.userinfo.nickname,
        job: this.userinfo.job,
        city: this.userinfo.city,
        sex: this.userinfo.sex,
        signature: this.userinfo.signature
      }
      this.$nextTick(() => {
        this.$refs.editForm.resetFields()
      })
    },
    // 保存个人信息
    handleSaveClick () {
      this.isLoading = true
      updateUserInfo(this.editForm).then(res => {
        this.isLoading = false
        const { code, msg } = res
        if (code === ERR_OK) {
          this.dialogVisible = false
          this.$message.success(msg)
          this.$emit('componentClick', 'userinfo')
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.isLoading = false
        this.$message.error('接口异常')
      })
    }
  },
  watch: {
    userinfo: {
      handler () {
        this.information = [
          { id: 1, type: '昵称', value: this.userinfo.nickname },
          { id: 2, type: '职位', value: this.userinfo.job },
          { id: 3, type: '城市', value: this.userinfo.city },
          { id: 4, type: '性别', value: this.userinfo.sex },
          { id: 5, type: '个性签名', value: this.userinfo.signature }
        ]
      },
      deep: true
    }
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
      .mooc-button
        float: right;
        margin-top: 5px;
        border: none;
        font-size: 15px;
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
    >>> .mooc-dialog
      .mooc-dialog-body
        padding: 30px 30px 30px 20px;
</style>
