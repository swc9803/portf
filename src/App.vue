<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  },
  setup () {
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
