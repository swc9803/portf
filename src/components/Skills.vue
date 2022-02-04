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
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

export default {
  setup () {
    const skills = ref()
    onMounted(() => {
      gsap.to(skills.value, {
        color: '#ffffff', duration: 3, ease: 'ease-out', yoyo: true, repeat: -1
      })
    })
    return {
      skills
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
  text-align: center;
  overflow: hidden;
  img {
    width: 170px;
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
@media screen and (max-width: 800px) {
  .logos {
    img {
      width: 100px;
    }
  }
}
@media screen and (max-width: 480px) {
  .logos {
    img {
      width: 70px;
    }
  }
}
</style>
