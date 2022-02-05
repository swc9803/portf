<template>
  <p class="title" ref="skills">Skills</p>
  <h2>아이콘을 클릭해보세요 ▼</h2>
  <div class="logos">
    <img src="@/assets/logos/htmlLogo.png" @click="onHtml" ref="htmlIcon" alt="html">
    <img src="@/assets/logos/jsLogo.png" @click="onJs" ref="jsIcon" alt="js">
    <img src="@/assets/logos/vueLogo.png" @click="onVue" ref="vueIcon" alt="vue">
    <img src="@/assets/logos/scssLogo.png" @click="onScss" ref="scssIcon" alt="scss">
    <img src="@/assets/logos/gsapLogo.png" @click="onGsap" ref="gsapIcon" alt="gsap">
    <img src="@/assets/logos/figmaLogo.png" @click="onFigma" ref="figmaIcon" alt="figma">
    <img src="@/assets/logos/firebaseLogo.png" @click="onFirebase" ref="firebaseIcon" alt="firebase">
  </div>
  <div class="des">
    <div v-show="html">
      html
    </div>
    <div v-show="js">
      js
    </div>
    <div v-show="vue">
      vue
    </div>
    <div v-show="scss">
      scss
    </div>
    <div v-show="gsapp">
      gsap
    </div>
    <div v-show="figma">
      figma
    </div>
    <div v-show="firebase">
      firebase
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const skills = ref()
    const html = ref(false); const js = ref(false)
    const vue = ref(false); const scss = ref(false)
    const gsapp = ref(false); const figma = ref(false); const firebase = ref(false)
    const htmlIcon = ref(); const jsIcon = ref()
    const vueIcon = ref(); const scssIcon = ref()
    const gsapIcon = ref(); const figmaIcon = ref(); const firebaseIcon = ref()
    const onHtml = (e) => {
      if (html.value === false) {
        js.value = vue.value = scss.value = gsapp.value = figma.value = firebase.value = false
        jsIcon.value.classList.remove('active')
        vueIcon.value.classList.remove('active')
        scssIcon.value.classList.remove('active')
        gsapIcon.value.classList.remove('active')
        figmaIcon.value.classList.remove('active')
        firebaseIcon.value.classList.remove('active')
        htmlIcon.value.classList.toggle('active')
        html.value = true
      } else {
        htmlIcon.value.classList.toggle('active')
        html.value = false
      }
    }
    const onJs = () => {
      if (js.value === false) {
        html.value = vue.value = scss.value = gsapp.value = figma.value = firebase.value = false
        htmlIcon.value.classList.remove('active')
        vueIcon.value.classList.remove('active')
        scssIcon.value.classList.remove('active')
        gsapIcon.value.classList.remove('active')
        figmaIcon.value.classList.remove('active')
        firebaseIcon.value.classList.remove('active')
        jsIcon.value.classList.toggle('active')
        js.value = true
      } else {
        jsIcon.value.classList.toggle('active')
        js.value = false
      }
    }
    const onVue = () => {
      if (vue.value === false) {
        html.value = js.value = scss.value = gsapp.value = figma.value = firebase.value = false
        htmlIcon.value.classList.remove('active')
        jsIcon.value.classList.remove('active')
        scssIcon.value.classList.remove('active')
        gsapIcon.value.classList.remove('active')
        figmaIcon.value.classList.remove('active')
        firebaseIcon.value.classList.remove('active')
        vueIcon.value.classList.toggle('active')
        vue.value = true
      } else {
        vueIcon.value.classList.toggle('active')
        vue.value = false
      }
    }
    const onScss = () => {
      if (scss.value === false) {
        html.value = js.value = vue.value = gsapp.value = figma.value = firebase.value = false
        htmlIcon.value.classList.remove('active')
        jsIcon.value.classList.remove('active')
        vueIcon.value.classList.remove('active')
        gsapIcon.value.classList.remove('active')
        figmaIcon.value.classList.remove('active')
        firebaseIcon.value.classList.remove('active')
        scssIcon.value.classList.toggle('active')
        scss.value = true
      } else {
        scssIcon.value.classList.toggle('active')
        scss.value = false
      }
    }
    const onGsap = () => {
      if (gsapp.value === false) {
        html.value = js.value = scss.value = vue.value = figma.value = firebase.value = false
        htmlIcon.value.classList.remove('active')
        jsIcon.value.classList.remove('active')
        vueIcon.value.classList.remove('active')
        scssIcon.value.classList.remove('active')
        figmaIcon.value.classList.remove('active')
        firebaseIcon.value.classList.remove('active')
        gsapIcon.value.classList.toggle('active')
        gsapp.value = true
      } else {
        gsapIcon.value.classList.toggle('active')
        gsapp.value = false
      }
    }
    const onFigma = () => {
      if (figma.value === false) {
        html.value = js.value = scss.value = vue.value = gsapp.value = firebase.value = false
        htmlIcon.value.classList.remove('active')
        jsIcon.value.classList.remove('active')
        vueIcon.value.classList.remove('active')
        scssIcon.value.classList.remove('active')
        gsapIcon.value.classList.remove('active')
        firebaseIcon.value.classList.remove('active')
        figmaIcon.value.classList.toggle('active')
        figma.value = true
      } else {
        figmaIcon.value.classList.toggle('active')
        figma.value = false
      }
    }
    const onFirebase = () => {
      if (firebase.value === false) {
        html.value = js.value = scss.value = vue.value = gsapp.value = figma.value = false
        htmlIcon.value.classList.remove('active')
        jsIcon.value.classList.remove('active')
        vueIcon.value.classList.remove('active')
        scssIcon.value.classList.remove('active')
        gsapIcon.value.classList.remove('active')
        figmaIcon.value.classList.remove('active')
        firebaseIcon.value.classList.toggle('active')
        firebase.value = true
      } else {
        firebaseIcon.value.classList.toggle('active')
        firebase.value = false
      }
    }

    onMounted(() => {
      gsap.fromTo(skills.value,
        { color: '#ffffaf' },
        { color: '#ffffff', duration: 3, yoyo: true, repeat: -1 })

      const logoAni = gsap.timeline()
      ScrollTrigger.create({
        animation: logoAni,
        trigger: '.skills',
        start: 'top 50%'
      })
      logoAni.from('.logos > img', { opacity: 0, stagger: 0.2 })
    })
    return {
      skills,
      html,
      js,
      vue,
      scss,
      gsapp,
      figma,
      firebase,
      htmlIcon,
      jsIcon,
      vueIcon,
      scssIcon,
      gsapIcon,
      figmaIcon,
      firebaseIcon,
      onHtml,
      onJs,
      onVue,
      onScss,
      onGsap,
      onFigma,
      onFirebase
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
    &:hover,
    &.active {
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
  margin-top: 50px;
  transition: 0.3s;
  :nth-child(1) { background: #FF8888; }
  :nth-child(2) { background: #E5FF7C; }
  :nth-child(3) { background: #90FF95; }
  :nth-child(4) { background: #FFBEF5; }
  :nth-child(5) { background: #CDFFBB; }
  :nth-child(6) { background: #C4C4C4; }
  :nth-child(7) { background: #A5E9FF; }
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
  .des {
    width: 100%;
    margin-top: 20px;
  }
}
@media screen and (max-width: 480px) {
  .logos {
    img {
      width: 26%;
      margin: 10px;
    }
  }
}
</style>
