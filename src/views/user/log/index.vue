<template>
  <div class="log">
    <!-- 标题 -->
    <p class="log-title">
      操作记录
      <span>通过查看登录时间、登录地点和设备可以判断账号是否正常</span>
    </p>

    <!-- 表格 -->
    <el-table :data="logsList" border>
      <el-table-column label="登录时间" prop="time" width="250" align="center"></el-table-column>
      <el-table-column label="城市" prop="city" width="250" align="center"></el-table-column>
      <el-table-column label="IP" prop="ip" align="center"></el-table-column>
      <el-table-column label="登录设备" prop="device" align="center"></el-table-column>
      <el-table-column label="操作系统" prop="system" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { LogConfig } from '@/types'
import { getUserLogs } from '@/api/user'
import { ERR_OK } from '@/api/config'
export default defineComponent({
  name: 'UserLog',
  setup () {
    const logsList = ref<LogConfig[]>([])
    onBeforeMount(async () => {
      const { code, data } = await getUserLogs<LogConfig>()
      if (code === ERR_OK) {
        logsList.value = data.list
      }
    })
    return { logsList }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .log {
    &-title {
      margin-bottom: 24px;
      padding-bottom: 10px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid $placeholder-text;
      font-size: $font-medium;
      color: $primary-text;
      font-weight: bold;
      span {
        margin-left: 10px;
        font-size: $font-small;
        color: $secondary-text;
        font-weight: normal;
      }
    }
    :deep(.el-table) {
      th.is-leaf {
        background-color: #f3f5f7;
      }
    }
  }
</style>
