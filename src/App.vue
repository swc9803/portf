<template>
  <Progress ref="progress" />
  <router-view />
  <Footer />
</template>

<script>
import Progress from '@/components/Progress'
import Footer from '@/components/Footer'
import { onMounted, ref } from 'vue'

export default {
  components: {
    Progress,
    Footer
  },
  setup () {
    const progressbar = ref()
    const scrollEvent = () => {
      this.$refs.progress.changeProgress()
    }
    onMounted(() => {
      document.addEventListener('scroll', scrollEvent)
    })
    return {
      progressbar, scrollEvent
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
