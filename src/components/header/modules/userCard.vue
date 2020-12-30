<template>
  <div class="card">
    <p class="card-exit" @click="handleLogoutClick">安全退出</p>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'UserCard',
  setup () {
    const store = useStore()
    const handleLogoutClick = () => store.dispatch('user/logout')
    return { handleLogoutClick }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .card {
    display: none;
    z-index: 120;
    position: absolute;
    right: 0;
    top: 100%;
    width: 306px;
    min-height: 300px;
    padding: 24px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,0.1);
    border-bottom-left-radius: $border-radius-normal;
    border-bottom-right-radius: $border-radius-normal;
    &-exit {
      margin-top: 8px;
      font-size: 12px;
      line-height: 18px;
      text-align: left;
      color: $secondary-text;
      &:hover {
        color: $primary-text
      }
    }
  }
</style>
