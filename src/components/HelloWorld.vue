<template>
  <div class="hello">
    Hello world555
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, getCurrentInstance } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props, ctx) {
    onMounted(() => {
      console.log(getCurrentInstance())
      console.log(ctx)
    })
  }
})
</script>
