<template>
  <div class="progress" ref="progressbar" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const progressbar = ref()
    const changeProgress = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      window.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        progressbar.value.style.width = `${(scrollTop / height) * 100}%`
      })
    }
    return {
      progressbar, changeProgress
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  position: fixed;
  width: 0%;
  height: 8px;
  top: 0;
  left: 0;
  z-index: 3;
  // mix-blend-mode: difference;
  // will-change: transform;
  background: rgb(0, 0, 0);
}
</style>
