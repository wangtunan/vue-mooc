<template>
  <div class="test">
    <badge value="99" :max="88" type="success">
      <el-button type="primary">消息</el-button>
    </badge>
    <br/>
    <el-badge :value="99" :max="88" type="success">
      <el-button type="primary">消息</el-button>
    </el-badge>
  </div>
</template>
<script>
import Badge from 'base/badge/badge.vue'
export default {
  data () {
    return {
      starValue: 4
    }
  },
  components: {
    Badge
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin-left: 50px;
    margin-top: 50px;
    min-height: 800px;
    & > div
      margin: 20px 0;
</style>