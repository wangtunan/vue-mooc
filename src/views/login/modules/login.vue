<template>
  <div class="login-form">
    <el-form ref="formRef" :model="formData" :rules="rules">
      <el-form-item prop="account">
        <el-input
          v-model="formData.account"
          placeholder="请输入手机号/邮箱"
          clearable
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="请输入密码"
          clearable
          show-password
          @keypress.enter="handleSubmitClick"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-form-btn"
          :disabled="formData.isLoading"
          @click="handleSubmitClick"
        >
          {{loginBtnText}}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref, reactive, computed } from 'vue'
import { useMessage } from '@/hooks/core/useMessage'
export default defineComponent({
  name: 'LoginForm',
  props: {
    type: Number
  },
  setup (props) {
    const Message = useMessage()
    const formRef = ref<any>(null)
    const formData = reactive({
      account: '',
      password: '',
      isLoading: false,
      type: props.type
    })
    const rules = reactive({
      account: [
        { required: true, message: '手机号/邮箱不能为空', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
      ]
    })
    const loginBtnText = computed(() => {
      const { type, isLoading } = formData
      const txt = type === 0 ? '登录' : '注册'
      return isLoading ? `${txt}中...` : txt
    })

    function handleSubmitClick () {
      const form = unref(formRef)
      if (!form) {
        return
      }
      form.validate(async (valid: boolean) => {
        debugger
        if (!valid) {
          return
        }
        formData.isLoading = true
        try {
          const submitResult = await Promise.resolve(Math.random() > 0.2)
          if (submitResult) {
            Message.success('登录成功')
          } else {
            throw new Error('登录失败')
          }
        } catch (e) {
          formData.password = ''
          Message.error(e.message || '登录失败')
        } finally {
          formData.isLoading = false
        }
      })
    }
    return {
      formRef,
      formData,
      rules,
      loginBtnText,
      handleSubmitClick
    }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .login-form {
    &-btn {
      width: 100%;
    }
    ::v-deep .el-form {
      .el-form-item {
        margin-bottom: 30px;
      }
      .el-input__inner {
        height: 48px;
        line-height: 48px;
        background-color: rgba($placeholder-text, 0.2);
        border: none;
        color: $primary-text;
        &::placeholder {
          color: $placeholder-text;
        }
      }
      .el-button {
        padding: 12px 32px;
        line-height: 24px;
        font-size: 16px;
        background-color: $theme-red;
        border-radius: $border-radius-largex;
        border: none;
        transition: background-color 0.15s linear;
        color: #fff;
        &:hover {
          background-color: #c20a0a;
        }
        &.is-disabled {
          background-color: rgba($theme-red, 0.3);
        }
      }
    }
  }
</style>
