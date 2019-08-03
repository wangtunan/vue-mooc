<template>
  <div class="lesson-list-wrapper ml-center">
    <div class="list-filter">
      <ul>
        <li
          class="filter-item"
          v-for="(filter,index) in filter"
          :key="index"
          :class="{active: currentFilterIndex == index}"
          @click="handleFilterClick(filter,index)"
        >{{filter}}</li>
      </ul>
    </div>
    <ul class="lesson-list">
      <li class="list-item">
        <div class="img-box">
          <img src="https://img1.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="">
          <span class="type">新课</span>
          <span class="rate">50%</span>
          <div class="lesson-mask">
            <div class="teacher-info">
              <img src="https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg" alt="">
              <span class="name">DellLee</span>
            </div>
            <div class="update-info">
              <span>更新于</span>
              <span>2天前</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">前端要学的测试课 从Jest入门到 TDD/BDD双实战</h2>
          <p>
            <span>中级</span>
            <span class="number"><i class="iconfont">&#xe607;</i>1800</span>
            <span class="comment">68人评价</span>
          </p>
          <p class="desc">以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升</p>
          <p class="price">
            <span class="old">¥226.00</span>
            <span class="new">¥299.00</span>
            <span class="price-right">
              <span class="like"><i class="iconfont">&#xe610;</i>收藏</span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p>
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>

      <li class="list-item">
        <div class="img-box">
          <img src="https://img1.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="">
          <span class="type">新课</span>
          <span class="rate">50%</span>
          <div class="lesson-mask">
            <div class="teacher-info">
              <img src="https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg" alt="">
              <span class="name">DellLee</span>
            </div>
            <div class="update-info">
              <span>更新于</span>
              <span>2天前</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">前端要学的测试课 从Jest入门到 TDD/BDD双实战</h2>
          <p>
            <span>中级</span>
            <span class="number"><i class="iconfont">&#xe607;</i>1800</span>
            <span class="comment">68人评价</span>
          </p>
          <p class="desc">以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升</p>
          <p class="price">
            <span class="old">¥226.00</span>
            <span class="new">¥299.00</span>
            <span class="price-right">
              <span class="like"><i class="iconfont">&#xe610;</i>收藏</span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p>
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>

      <li class="list-item">
        <div class="img-box">
          <img src="https://img1.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="">
          <span class="type">新课</span>
          <span class="rate">50%</span>
          <div class="lesson-mask">
            <div class="teacher-info">
              <img src="https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg" alt="">
              <span class="name">DellLee</span>
            </div>
            <div class="update-info">
              <span>更新于</span>
              <span>2天前</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">前端要学的测试课 从Jest入门到 TDD/BDD双实战</h2>
          <p>
            <span>中级</span>
            <span class="number"><i class="iconfont">&#xe607;</i>1800</span>
            <span class="comment">68人评价</span>
          </p>
          <p class="desc">以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升</p>
          <p class="price">
            <span class="old">¥226.00</span>
            <span class="new">¥299.00</span>
            <span class="price-right">
              <span class="like"><i class="iconfont">&#xe610;</i>收藏</span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p>
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>

      <li class="list-item">
        <div class="img-box">
          <img src="https://img1.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="">
          <span class="type">新课</span>
          <span class="rate">50%</span>
          <div class="lesson-mask">
            <div class="teacher-info">
              <img src="https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg" alt="">
              <span class="name">DellLee</span>
            </div>
            <div class="update-info">
              <span>更新于</span>
              <span>2天前</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">前端要学的测试课 从Jest入门到 TDD/BDD双实战</h2>
          <p>
            <span>中级</span>
            <span class="number"><i class="iconfont">&#xe607;</i>1800</span>
            <span class="comment">68人评价</span>
          </p>
          <p class="desc">以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升</p>
          <p class="price">
            <span class="old">¥226.00</span>
            <span class="new">¥299.00</span>
            <span class="price-right">
              <span class="like"><i class="iconfont">&#xe610;</i>收藏</span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p>
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>

      <li class="list-item">
        <div class="img-box">
          <img src="https://img1.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="">
          <span class="type">新课</span>
          <span class="rate">50%</span>
          <div class="lesson-mask">
            <div class="teacher-info">
              <img src="https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg" alt="">
              <span class="name">DellLee</span>
            </div>
            <div class="update-info">
              <span>更新于</span>
              <span>2天前</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">前端要学的测试课 从Jest入门到 TDD/BDD双实战</h2>
          <p>
            <span>中级</span>
            <span class="number"><i class="iconfont">&#xe607;</i>1800</span>
            <span class="comment">68人评价</span>
          </p>
          <p class="desc">以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升</p>
          <p class="price">
            <span class="old">¥226.00</span>
            <span class="new">¥299.00</span>
            <span class="price-right">
              <span class="like"><i class="iconfont">&#xe610;</i>收藏</span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p>
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>

      <li class="list-item">
        <div class="img-box">
          <img src="https://img1.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="">
          <span class="type">新课</span>
          <span class="rate">50%</span>
          <div class="lesson-mask">
            <div class="teacher-info">
              <img src="https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg" alt="">
              <span class="name">DellLee</span>
            </div>
            <div class="update-info">
              <span>更新于</span>
              <span>2天前</span>
            </div>
          </div>
        </div>
        <div class="lesson-content">
          <h2 class="title">前端要学的测试课 从Jest入门到 TDD/BDD双实战</h2>
          <p>
            <span>中级</span>
            <span class="number"><i class="iconfont">&#xe607;</i>1800</span>
            <span class="comment">68人评价</span>
          </p>
          <p class="desc">以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升</p>
          <p class="price">
            <span class="old">¥226.00</span>
            <span class="new">¥299.00</span>
            <span class="price-right">
              <span class="like"><i class="iconfont">&#xe610;</i>收藏</span>
              <span class="cart">加入购物车</span>
            </span>
          </p>
          <p>
            <span class="discount">限时优惠</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentFilterIndex: 0, // 当前筛选项的索引
      filter: ['默认排序', '最新', '销量', '更新'] // 筛选项
    }
  },
  methods: {
    // 筛选项点击事件
    handleFilterClick (filter, index) {
      this.currentFilterIndex = index
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';

  .lesson-list-wrapper
    .list-filter
      padding: 20px 12px;
      border-top: 1px solid #d9dde1;
      .filter-item
        display: inline-block;
        margin-right: 12px;
        padding: 4px 12px;
        border-radius: 12px;
        line-height: 16px;
        font-size: 12px;
        color: #4d555d;
        cursor: pointer;
        &.active
          background-color: #545c63;
          color: #fff;
    .lesson-list
      .list-item
        display: inline-block;
        margin-right: 24px;
        margin-bottom: 36px;
        width: 270px;
        &:nth-child(5n) {
          margin-right: 0;
        }
        .img-box
          position: relative;
          width: 100%;
          height: 148px;
          & > img
            width: 100%;
            height: 100%;
            background-color: #ccc;
            border-radius: 16px;
          .type
            position: absolute;
            left: -8px;
            top: 8px;
            padding: 0 8px;
            border-radius: 12px;
            border: 2px solid #fff;
            line-height: 20px;
            background: linear-gradient(90deg,#fa0 17%,#f76b1c 100%);
            font-size: 12px;
            font-weight: 700;
            color: #fff;
          .rate
            position: absolute;
            right: -8px;
            top: 8px;
            padding: 0 8px;
            border-radius: 12px;
            border: 2px solid #fff;
            line-height: 20px;
            background: linear-gradient(-90deg,#65da98 0,#0cba4d 100%);
            font-size: 12px;
            font-weight: 700;
            color: #fff;
          .lesson-mask
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 74px;
            background: linear-gradient(-180deg,rgba(7,17,27,0) 0,rgba(7,17,27,.6) 97%);
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            .teacher-info
              position: absolute;
              left: 16px;
              bottom: 16px;
              & > img
                margin-right: 12px;
                width: 36px;
                height: 36px;
                background-color: #eee;
                border-radius: 50%;
              .name
                font-size: 14px;
                font-weight: 700;
                color: #fff;
            .update-info
              position: absolute;
              right: 16px;
              bottom: 14px;
              & > span
                display: block;
                line-height: 20px;
                color: #fff;
                font-size: 12px;
        .lesson-content
          padding: 0 8px;
          .title
            margin-top: 16px;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: #2b333b;
            multline-ellipsis(2);
          & > p
            line-height: 20px;
            color: #93999f;
            font-size: 12px;
            span
              line-height: 24px;
              cursor: pointer;
            &.desc
              margin-top: 4px;
              multline-ellipsis(2);
            &.price
              margin-bottom: 4px;
            .number
              margin-left: 10px;
            .comment
              float: right;
            .old
              color: #4d555d;
            .new
              margin-left: 5px;
              color: #4d555d;
              text-decoration: line-through;
            .price-right
              float: right;
              .like
                margin-right: 10px;
              .cart
                padding-left: 10px;
                border-left: 2px solid #d9dde1;
            .discount
              padding: 4px;
              border-radius: 4px;
              background-color: rgba(240,20,20,.6);
              line-height: 20px;
              color: #fff;
</style>
