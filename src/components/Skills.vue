<template>
  <p class="title" ref="skills">Skills</p>
  <h2>아이콘을 클릭해보세요 ▼</h2>
  <div class="logos">
    <img src="@/assets/logos/htmlLogo.png" alt="html">
    <img src="@/assets/logos/cssLogo.png" alt="css">
    <img src="@/assets/logos/jsLogo.png" alt="js">
    <img src="@/assets/logos/vueLogo.png" alt="vue">
    <img src="@/assets/logos/firebaseLogo.png" alt="firebase">
    <img src="@/assets/logos/scssLogo.png" alt="scss">
    <img src="@/assets/logos/gsapLogo.png" alt="gsap">
    <img src="@/assets/logos/figmaLogo.png" alt="figma">
  </div>
  <div class="des">
    dd
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

export default {
  setup () {
    const skills = ref()
    const htmlData = ref(false); const cssData = ref(false)
    const jsData = ref(false); const vueData = ref(false)
    const firebaseData = ref(false); const scssData = ref(false)
    const gsapData = ref(false); const figmaData = ref(false)

    onMounted(() => {
      gsap.fromTo(skills.value,
        { color: '#ffffaf' },
        { color: '#ffffff', duration: 3, yoyo: true, repeat: -1 })
    })
    return {
      skills, htmlData, cssData, jsData, vueData, firebaseData, scssData, gsapData, figmaData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/Mainstyle';

h2 {
  text-align: center;
}
.logos {
  position: relative;
  text-align: center;
  overflow: hidden;
  img {
    width: 10%;
    margin: 20px;
    cursor: pointer;
    border-radius: 70%;
    transition: 0.3s;
    filter: grayscale(1);
    &:hover {
      transform: scale(1.2);
      filter: grayscale(0);
      box-shadow: 1.5px 2px 3px rgb(100, 100, 100);
    }
  }
}
.des {
  position: relative;
  transform: translate(-50%);
  left: 50%;
  width: 80%;
  height: 500px;
  text-align: center;
  margin-top: 50px;
  background: rgb(87, 87, 87);
}

@media screen and (max-width: 1500px) {
  .logos {
    img {
      width: 15%;
    }
  }
}
@media screen and (max-width: 768px) {
  .logos {
    img {
      width: 20%;
    }
  }
}
</style>
