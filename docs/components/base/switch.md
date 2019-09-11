# Switch(开关)

## 用法

### 基础用法
<mooc-switch :value="true"></mooc-switch>

### 不同的宽度
<mooc-switch :value="true"></mooc-switch>
<mooc-switch :value="true" width="60"></mooc-switch>
<mooc-switch :value="true" width="80"></mooc-switch>

### 禁用
<mooc-switch :value="true"></mooc-switch>
<mooc-switch :value="true" :disabled="true"></mooc-switch>

### 不同的颜色
<mooc-switch :value="true" :active="active" :in-active="inActive"></mooc-switch>
<mooc-switch :value="false" :active="active" :in-active="inActive"></mooc-switch>

### 辅助文字
<mooc-switch :value="true" :active="active" :in-active="inActive"></mooc-switch>
<mooc-switch :value="false" :active="active" :in-active="inActive"></mooc-switch>

## 属性

## 事件

<script>
 export default {
   data () {
     return {
       active: {
         value: true,
         color: '#f60',
         text: '按年付'
       },
       inActive: {
         value: false,
         color: '#58a',
         text: '按月付'
       }
     }
   }
 }
</script>