<template>
  <div class="notice">
    <!-- tabs -->
    <ul class="notice-tabs">
      <li
        class="notice-tabs-item"
        v-for="(item, index) in tabList"
        :key="index"
        :class="{
          active: index === activeIndex
        }"
        @click="activeIndex = index"
      >{{item}}({{total[index]}})</li>
    </ul>

    <!-- bar -->
    <div class="notice-bar">
      <span>系统自动清理三个月前的已读通知</span>
      <span class="notice-bar-btn" @click="handleReadAll">全部标记已读</span>
    </div>

    <!-- notice list -->
    <ul class="notice-list">
      <li
        v-for="(item, index) in filterList"
        :key="index"
        class="notice-list-item"
        :class="{
          readed: item.isRead
        }"
      >
        <div class="type">{{item.code === 1 ? '实战' : '系统'}}</div>
        <div class="content">
          <p class="title">{{item.title}}</p>
          <p class="date">{{item.time}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount, computed } from 'vue'
import { getNoticeList } from '@/api/notice'
import { ERR_OK } from '@/api/config'
import { NoticeConfig } from '@/types'
import { useMessage } from '@/hooks/core/useMessage'
const tabList = ['实战', '系统']
export default defineComponent({
  name: 'Notice',
  setup () {
    const message = useMessage()
    const activeIndex = ref(0)
    const noticeList = ref<NoticeConfig[]>([])
    const currentCode = computed(() => {
      return activeIndex.value === 0 ? 1 : 2
    })
    const filterList = computed(() => {
      return noticeList.value.filter(item => item.code === currentCode.value)
    })
    const total = computed(() => {
      const ret = [0, 0]
      noticeList.value.forEach(item => {
        ret[item.code - 1]++
      })
      return ret
    })
    const handleReadAll = () => {
      noticeList.value = noticeList.value.map(item => {
        return {
          ...item,
          isRead: item.code === currentCode.value ? true : item.isRead
        }
      })
      message.success('标记成功')
    }
    onBeforeMount(async () => {
      const { code, data } = await getNoticeList<NoticeConfig>()
      if (code === ERR_OK) {
        noticeList.value = data.list
      }
    })
    return {
      activeIndex,
      tabList,
      filterList,
      total,
      handleReadAll
    }
  }
})
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  @import '~@/assets/styles/mixin.scss';
  .notice {
    @include mooc-center;
    padding: 50px 0;
    &-tabs {
      padding-left: 30px;
      &-item {
        display: inline-block;
        margin-right: 40px;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        font-size: $font-medium;
        color: $primary-text;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid $theme-red;
        }
      }
    }
    &-bar {
      margin-top: -1px;
      padding-left: 15px;
      padding-right: 15px;
      height: 50px;
      background-color: rgba($placeholder-text, 0.3);
      border-top: 1px solid $placeholder-text;
      box-sizing: border-box;
      line-height: 50px;
      font-size: $font-normal;
      color: $secondary-text;
      &-btn {
        float: right;
        margin-left: 30px;
        color: $regular-text;
        cursor: pointer;
        &:hover {
          color: $primary-text;
        }
      }
    }
    &-list {
      &-item {
        position: relative;
        padding: 20px 10px 20px 76px;
        border-bottom: 1px solid rgba($placeholder-text, 0.5);
        &.readed {
          .type {
            color: $regular-text;
            border-color: rgba($placeholder-text, 0.5);
            background-color: transparent;
          }
          .title {
            color: $secondary-text;
            &:hover {
              color: $primary-text;
            }
          }
        }
        .type {
          position: absolute;
          left: 10px;
          top: 20px;
          width: 46px;
          height: 30px;
          line-height: 30px;
          border: 1px solid $theme-red;
          background-color: rgba($theme-red, 0.1);
          font-size: $font-normal;
          text-align: center;
          color: $theme-red;
        }
        .title {
          font-size: $font-medium;
          color: $primary-text;
          cursor: pointer;
        }
        .date {
          font-size: $font-normal;
          line-height: 30px;
          color: $secondary-text;
        }
      }
    }
  }
</style>
