<template>
  <div class="footer">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutFooter'
})
</script>
