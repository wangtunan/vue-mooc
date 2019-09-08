<template>
  <div class="test">
    <mooc-switch
      :value="switch1"
      :width="60"
      :active="active"
      :in-active="inActive"
      @change="handleSwitchToggle"
    ></mooc-switch>
    <br/>
    <el-switch
      v-model="switch1"
      :width="60"
      active-color="#67C23A"
      active-text="按年付"
      inactive-text="按月付"
      inactive-color="#F56C6C"
    ></el-switch>
  </div>
</template>
<script>
import MoocSwitch from 'base/switch/switch.vue'
export default {
  data () {
    return {
      switch1: false,
      active: {
        text: '按年付'
      },
      inActive: {
        text: '按月付'
      },
      switch2: true
    }
  },
  methods: {
     handleSwitchToggle(val) {
       this.switch1 = val
     }
  },
  components: {
    MoocSwitch
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