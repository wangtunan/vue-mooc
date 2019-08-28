<template>
  <div class="test">
    <star :value="starValue" :size="40" :show-value="true" @change="handleStarChange"></star>
    <el-rate :value="4" :show-text="true" :disabled="true"></el-rate>
  </div>
</template>
<script>
import Star from 'base/star/star.vue'
export default {
  data () {
    return {
      starValue: 4
    }
  },
  methods: {
    handleStarChange (val) {
      this.starValue = val
    }
  },
  components: {
    Star
  }
}
</script>
<style lang="stylus" scoped>
  .test
    min-height: 800px;
</style>