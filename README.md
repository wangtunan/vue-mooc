# vue-mooc

[预览地址](https://wangtunan.github.io/vue-mooc/#/home) 
[文档地址](https://wangtunan.github.io/vue-mooc-site/)

## 介绍
`vue-mooc`是一个使用`Vue`相关技术栈，高仿[慕课网](https://www.imooc.com/)PC端的一个项目，项目中涉及到的技术栈如下：

**Vue生态**:
* `Vue.js`：基础框架，[Vue.js官网](https://cn.vuejs.org/)。
* `Vue-cli3.0+`：一个`Vue`官方提供的一个脚手架工具，它提供了标准的目录结构和一些必要的配置，[Vue-cli3.0官网](https://cli.vuejs.org/zh/)
* `Vuex`：数据状态管理工具，[Vuex官网](https://vuex.vuejs.org/)。
* `Vue-router`：路由管理工具，[Vue-router官网](https://router.vuejs.org/)。
* `VuePress`：撰写静态站点的工具(你所看到的本站点是采用`VuePress1.x`)，[VuePress官网](https://v1.vuepress.vuejs.org/)。

**CSS预编译器**：
* `Stylus`：一种`CSS`预编译工具，类似的还有`Sass/Less`，[Stylus官网](https://www.zhangxinxu.com/jq/stylus/)

**数据请求**：
* `axios`：一个非常出名的`HTTP`请求工具，[axios官网](http://www.axios-js.com/)

**Mock数据**：
* `json`数据：本项目接口全部采用手写`json`数据的形式来模拟请求。
* `easy-mock`：使用`easy-mock`接口服务+ `json`数据的形式来`Mock`数据。

## 背景
在目前的业务搬砖中，接触到的项目大多是中后台项目，每日搬砖无非就是拿`element-ui`轮子一把嗦，轮子仔当久了自己也安逸了，痛定思痛后决定当一会轮子的制造者。<br/>
本项目中关于基础组件的封装，全部抛弃使用`element-ui`，而采用自己封装，已达到提高自己的目的。

**基础公共组件完成情况**：<br/>
- [x] Container(布局容器) <br/>
- [x] Star(星级评分) <br/>
- [x] Badge(标记)<br/>
- [x] Switch(开关)<br/>
- [x] Timeline(时间线)<br/>
- [x] Progress(进度条)<br/>
- [x] Step(步骤条)<br/>
- [x] Breadcrumb(面包屑导航)<br/>
- [x] BackTop(返回顶部)<br/>
- [x] Button(按钮)<br/>
- [x] Carousel(轮播)<br/>
- [x] Message(消息提示)<br/>
- [x] MessageBox(消息确认)<br/>
- [x] Pagination(分页)<br/>
- [x] dialog(弹窗)<br/>
- [x] divider(分割线)<br/>

## 未来计划
- 开发`vue-mooc`后台管理系统 <br/>
- 开发`vue-mooc`Node.js后端版 <br/>
- 开发`vue-mooc`服务端渲染(SSR)版 <br/>
- 开发`vue-mooc`React版 <br/>


## 预览&源码地址

如果你想观看此项目的演示效果，请移步:point_right: [预览地址](https://wangtunan.github.io/vue-mooc/#/home) <br/>

### 首页
![首页](./docs/images/1.gif)

### 课程页面
![课程页面](./docs/images/2.gif)

### 专栏
![专栏](./docs/images/3.gif)

### 手记
![手记](./docs/images/4.gif)

### 购物车
![购物车](./docs/images/5.gif)

### 消息中心
![消息中心](./docs/images/6.gif)

### 订单中心
![订单中心](./docs/images/7.gif)


## 安装
```sh
# 安装依赖
npm install

# 本地开发
npm run serve

# 打包
npm run build
```
