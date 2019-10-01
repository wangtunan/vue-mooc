# Steps 步骤条

## 用法
<div class="step-container">
  <mooc-step :active="activeIndex1">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
  <button @click="handleStepClick1">下一步</button>
</div>

## MoocStep属性

## MoocStepItem属性

## MoocStepItem插槽

<style lang="stylus">
  .step-container
    margin: 30px auto 0;
    width: 800px;
</style>

<script>
  export default {
    data () {
      return {
        activeIndex1: 0
      }
    },
    methods: {
      handleStepClick1 () {
        if (this.activeIndex1++ > 2) {
          this.activeIndex1 = 0
        }
      }
    }
  }
</script>