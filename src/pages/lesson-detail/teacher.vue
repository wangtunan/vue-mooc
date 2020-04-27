<template>
  <div class="lesson-detail-teacher">
    <img class="avatar" :src="teacher.avatar" alt="">
    <p class="name">
      {{ teacher.name }}
    </p>
    <p class="job">
      {{ teacher.job }}
    </p>
    <p class="introduce">
      {{ teacher.introduction }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    teacher: {
      type: Object
    }
  }
}
</script>
<style lang="stylus" scoped>
  .lesson-detail-teacher
    margin-top: 24px;
    margin-bottom: 40px;
    padding: 24px 36px 36px;
    background-color: #eff2f5;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;
    .avatar
      width: 64px;
      height: 64px;
      border-radius: 50%;
    .name
      font-size: 16px;
      color: #07111b;
      line-height: 28px;
    .job
      margin-bottom: 12px;
      font-size: 12px;
      color: #4d555d;
      line-height: 24px;
    .introduce
      font-size: 12px;
      color: #4d555d;
      line-height: 20px;
</style>