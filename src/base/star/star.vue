<template>
  <div class="star">
    <span class="star-item iconfont" v-for="n in 5" :style="getStyle(n)" :key="n">&#xe610;</span>
  </div>
</template>
<script>
export default {
  props: {
    score: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      default: 12
    },
    color: {
      type: String,
      default: '#ff9900'
    }
  },
  methods: {
    getStyle (n) {
      let color = n <= this.score ? this.color : '#eee' 
      return {
        'font-size': `${this.size}px`,
        color: color
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .star
    display: inline-block;
    .star-item
      display: inline-block;
</style>
