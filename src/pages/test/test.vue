<template>
  <div class="test">
    <mooc-switch
      v-model="value"
      active-color="#f60"
      active-text="按月付"
      inactive-color="#666"
      inactive-text="按年付"
    ></mooc-switch>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 1000px;
</style>