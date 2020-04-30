<template>
  <div class="integral-container m-center">
    <!-- 导航部分 -->
    <div class="integral-header">
      <h3>
        积分商场
        <span class="integral-number">当前可用积分：{{ integral }}</span>
      </h3>
      <dl class="integral-nav">
        <dt>商品分类：</dt>
        <dd
          v-for="(item, index) in navList"
          :key="index"
          :class="{'active': index === currentNavIndex}"
          @click="handleNavClick(item, index)"
        >
          {{ item.text }}
        </dd>
        <dt>
          <mooc-switch
            v-model="isFilter"
            active-color="#13ce66"
            inactive-color="#9199a1"
            @change="handleSwitchChange"
          />显示我能兑换的
        </dt>
      </dl>
    </div>

    <!-- 列表部分 -->
    <div class="integral-list">
      <ul v-if="integralList.length">
        <li
          v-for="(item, index) in integralList"
          :key="index"
          class="integral-item"
        >
          <img :src="item.img" alt="">
          <p class="integral-item-title">{{ item.title }}</p>
          <p class="integral-item-number">{{ item.integral }}积分</p>
        </li>
      </ul>
      <empty v-else message="暂无相关积分商品数据"></empty>
    </div>


    <!-- 分页部分 -->
    <pagination
      v-if="integralList.length"
      :total="total"
      :size="size"
      :page.sync="page"
      @change="handlePaginationChange"
    ></pagination>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import Empty from 'components/empty/empty.vue'
import { getIntegralTypes, getIntegralList } from 'api/integral.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      integral: 165,
      isFilter: false,
      size: 12,
      total: 0,
      page: 1,
      currentNavIndex: 0,
      navList: [],
      integralList: []
    }
  },
  mounted () {
    this.getIntegralTypesData()
    this.getIntegralListData()
  },
  methods: {
    // 类别点击事件
    handleNavClick (item, index) {
      this.page = 1
      this.currentNavIndex = index
      this.getIntegralListData()
    },
    // 过滤开关值更新
    handleSwitchChange () {
      this.getIntegralListData()
    },
    // 分页值更新事件
    handlePaginationChange (page) {
      this.page = page
      this.getIntegralListData()
    },
    // 获取积分商品分类数据
    getIntegralTypesData () {
      getIntegralTypes().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          data.unshift({
            code: '',
            text: '全部'
          })
          this.navList = data
        } else {
          this.navList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 获取积分列表数据
    getIntegralListData () {
      const params = {
        size: this.size,
        page: this.page,
        type: this.currentType
      }
      if (this.isFilter) {
        params.integral = this.integral
      }
      getIntegralList(params).then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.total = data.total
          this.integralList = data.list
        } else {
          this.$message.error(msg)
          this.total = 0
          this.integralList = []
        }
      }).catch(() => {
        this.total = 0
        this.integralList = []
      })
    }
  },
  computed: {
    currentType () {
      if (this.navList.length === 0) {
        return ''
      } else {
        return this.navList[this.currentNavIndex].code
      }
    }
  },
  components: {
    Pagination,
    Empty
  }
}
</script>
<style lang="stylus" scoped>
  .integral-container
    margin-top: 36px;
    margin-bottom: 18px;
    .integral-header
      h3
        padding-bottom: 18px;
        border-bottom: 1px solid #d9dde1;
        color: #07111b;
        font-size: 16px;
        line-height: 24px;
      .integral-number
        float: right;
        font-size: 14px;
        color: #f01400;
        font-weight: bold;
    .integral-nav
      padding: 18px 0;
      border-bottom: 1px solid #d9dde1;
      font-size: 14px;
      color: #07111b;
      dt, dd
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      dt:not(:first-child)
        display: block;
        float: right;
        margin-top: 5px;
        .mooc-switch
          margin-right: 8px;
      dd
        margin-right: 20px;
        padding: 9px 12px;
        cursor: pointer;
        &:hover
          color: #f01400;
        &.active
          background-color: #f01400;
          border-radius: 2px;
          color: #fff;
    .integral-list
      margin-top: 18px;
      .integral-item
        display: inline-block;
        width: 23.5%;
        margin-bottom: 30px;
        margin-right: 2%;
        padding-bottom: 40px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
        border-radius: 4px;
        text-align: center;
        transition: box-shadow 0.3s;
        &:nth-child(4n)
          margin-right: 0;
        &:hover
          box-shadow: 0 8px 12px rgba(0,0,0,.2);
        img
          display: block;
          margin: 24px auto;
        .integral-item-title
          line-height: 30px;
        .integral-item-number
          color: #f01400;
          font-size: 12px;
</style>