 module.exports =  {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    // 使用下面这些检验规则进行代码格式检验
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  "rules": {
    // vue组件 props必须默认值
    "vue/require-default-prop": 0,
    // vue组件中属性的定义顺序
    "vue/order-in-components": 0,
    // vue组件多个属性必须换行
    "vue/max-attributes-per-line": 0,
    // 不允许在template组件上绑定某些属性，例如key
    "vue/no-template-shadow": 0,
    // vue组件自闭和标签
    'vue/html-self-closing': 0,
    // 生产环境下不允许debugger调试
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 允许console打印
    "no-console": 0,
    // 函数后必须跟一个空格
    "space-before-function-paren": 1,
    // 分号后必须跟一个空格
    "comma-spacing": 1,
    // 箭头函数两侧必须有空格
    "arrow-spacing": 1,
    // 操作符两侧必须有空格
    "space-infix-ops": 1,
    // 始终使用严格相等，即xxx === xxx
    "eqeqeq": 1
  }
}