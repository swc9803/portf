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
    <div v-show="html" class="html">
      html
    </div>
    <div v-show="js" class="js">
      js
    </div>
    <div v-show="vue" class="vue">
      vue
    </div>
    <div v-show="scss" class="scss">
      scss
    </div>
    <div v-show="gsapp" class="gsap">
      gsap
    </div>
    <div v-show="figma" class="figma">
      <img class="desIcon" src="@/assets/logos/figmaLogo.png">
      <section>
        <div>
          <p>Figma 툴을 사용해 간단한 일러스트를 제작할 수 있으며 웹 개발을 하기 전 제작에 도움을 줄 수 있는 견본을 만들 수 있습니다.</p>
          <p>figma에 대해 기본 지식이 있어 디자이너와의 협업이 효율적으로 가능합니다.</p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/figmaEx.png" @click="focusFigma" alt="figmaEx">
          이미지를 클릭하시면 확대됩니다.
        </div>
      </section>
    </div>
    <div v-show="firebase" class="firebase">
      <img class="desIcon" src="@/assets/logos/firebaseLogo.png">
      <section>
        <div>
          <p>구글의 NOSQL Firebase를 사용해 클라우드 데이터베이스와 유저를 관리할 수 있습니다.</p>
          <p>Firebase 또는 Firestore, storage를 사용해 글, 이미지 저장 등의 간단한 백엔드를 다룰 수 있습니다.</p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/firebaseEx.png" @click="focusFirebase" alt="firebaseEx">
          <span>이미지를 클릭하시면 확대됩니다.</span>
        </div>
      </section>
    </div>
  </div>
  <!-- 트렌지션 -->
  <div class="focus" v-show="figmaEx" @click="blur">
    <img src="@/assets/examples/figmaEx.png" alt="figmaEx">
  </div>
  <div class="focus" v-show="firebaseEx" @click="blur">
    <img src="@/assets/examples/firebaseEx.png" alt="firebaseEx">
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
    const onHtml = () => {
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

    const figmaEx = ref(false); const firebaseEx = ref(false)
    const focusFigma = () => {
      // 트렌지션 0.5초 주고 오류나면 if 설정
      figmaEx.value = true
    }
    const focusFirebase = () => {
      firebaseEx.value = true
    }
    const blur = () => {
      firebaseEx.value = false
      figmaEx.value = false
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
      onFirebase,
      figmaEx,
      focusFigma,
      firebaseEx,
      focusFirebase,
      blur
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
  .html { background: #ffaeae; }
  .js { background: #efffad; }
  .vue { background: #b7ffbb; }
  .scss { background: #ffcef8; }
  .gsap { background: #dcffcf; }
  .figma { background: #dfdfdf; }
  .firebase { background: #d5f4ff; }
  .desIcon {
    position: absolute;
    top: 6px;
    left: 20%;
    width: 120px;
  }
  section {
    margin: 0 10px 0 10px;
    display: flex;
    div {
      flex: 1 1 45%;
      margin: 120px 0 0 10px;
      word-break: keep-all;
      p:nth-child(1) {
        font-size: 1.3em;
        font-weight: 600;
      }
      p:nth-child(2) {
        margin-top: 70px;
        font-size: 1.2em;
      }
    }
    .frame {
      flex: 1 1 50%;
      margin: 10px 0 5px 0;
      text-align: center;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}
.focus {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: calc(100% + 1px);
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  overflow: hidden;
  cursor: pointer;
  img {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 80%;
  }
}
@media screen and (max-width: 1500px) {
  .logos {
    img {
      width: 15%;
    }
  }
  .des {
    .desIcon {
      width: 100px;
    }
    section {
      div {
        p:nth-child(1) {
          font-size: 1.1em;
        }
        p:nth-child(2) {
          margin-top: 40px;
          font-size: 1em;
        }
      }
    }
  }
  .focus {
    img {
      width: 90%;
    }
  }
}
@media screen and (max-width: 1200px) {
  .des {
    section {
      div {
        margin-top: 100px;
        p:nth-child(2) {
          margin-top: 20px;
        }
      }
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
    .desIcon {
      display: none;
    }
    section {
      display: block;
      div {
        p {
          padding-top: 20px;
        }
      }
      .frame {
        span {
          display: none;
        }
      }
    }
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
