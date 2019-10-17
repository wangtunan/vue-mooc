<template>
  <div class="test">
    <el-carousel height="316px" :interval="interval">
      <el-carousel-item>
        <img src="https://img.mukewang.com/5d1e0a1800013ca916000540.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img.mukewang.com/5d1c5aec00011c1016000540.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img.mukewang.com/5cb833cf0001efb716000540.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img.mukewang.com/5d1e0a1800013ca916000540.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img.mukewang.com/5d1c5aec00011c1016000540.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img.mukewang.com/5cb833cf0001efb716000540.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
    <mooc-carousel :height="316" :interval="interval">
      <mooc-carousel-item>
        <img src="https://img.mukewang.com/5d1e0a1800013ca916000540.jpg" alt="">
      </mooc-carousel-item>
      <mooc-carousel-item>
        <img src="https://img.mukewang.com/5d1c5aec00011c1016000540.jpg" alt="">
      </mooc-carousel-item>
      <mooc-carousel-item>
        <img src="https://img.mukewang.com/5cb833cf0001efb716000540.jpg" alt="">
      </mooc-carousel-item>
      <mooc-carousel-item>
        <img src="https://img.mukewang.com/5d1e0a1800013ca916000540.jpg" alt="">
      </mooc-carousel-item>
      <mooc-carousel-item>
        <img src="https://img.mukewang.com/5d1c5aec00011c1016000540.jpg" alt="">
      </mooc-carousel-item>
      <mooc-carousel-item>
        <img src="https://img.mukewang.com/5cb833cf0001efb716000540.jpg" alt="">
      </mooc-carousel-item>
    </mooc-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      interval: 3000
    }
  },
  methods: {
    
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 1000px;
    & > div
      margin-bottom: 30px;
    img
      display: inline-block;
      width: 100%;
      height: 316px;
</style>