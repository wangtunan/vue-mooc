<template>
  <div class="header">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutHeader'
})
</script>
