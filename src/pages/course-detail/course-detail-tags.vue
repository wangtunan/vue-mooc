<template>
  <div class="course-detail-tags">
    <h3 class="title">
      热门专题标签
    </h3>
    <ul>
      <li
        v-for="(tag, index) in list" :key="index"
        class="tags-item"
        :style="{
          'background-color': getBackgroundColor(index)
        }"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    colors: {
      type: Array,
      default () {
        return ['rgba(255,102,0,0.5)', 'rgba(255,153,0,0.5)', 'rgba(255,51,0,0.5)']
      }
    }
  },
  methods: {
    // 获取随机背景色
    getBackgroundColor (index) {
      let len = this.colors.length
      return this.colors[index % len]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .course-detail-tags
    .title
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
    .tags-item
      display: inline-block;
      vertical-align: middle;
      margin-bottom: 8px;
      margin-right: 8px;
      padding: 6px 12px;
      border-radius: 24px;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      &:last-child
        margin-bottom: 0;
</style>