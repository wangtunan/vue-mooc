<template>
  <div class="test">
    <mooc-timeline>
      <mooc-timeline-item
        v-for="(item,index) in timeline"
        :key="index"
        :timestamp="item.timestamp"
        :status="item.status">
        {{item.content}}
      </mooc-timeline-item>
    </mooc-timeline>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', status: 'primary', content: '成立' },
      { timestamp: '2016-09-01', status: 'primary', content: '高速发展' },
      { timestamp: '2018-09-01', status: 'primary', content: '上市' },
      { timestamp: '2019-09-13', status: 'primary', content: '至今' }
    ]
  },
  methods: {
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
      width: 500px;
    .content
      width: 400px;
      height: 100px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: 20px;
      box-sizing: border-box;
    .dot
      position: relative;
      left: -6px;
      width: 24px;
      height: 24px;
      background-color: #f60;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      color: #fff;
</style>