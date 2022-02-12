<template>
  <p class="title" ref="skills">Skills</p>
  <h2>아이콘을 클릭해보세요 ▼</h2>
  <div class="logos">
    <img src="@/assets/logos/vueLogo.png" @click="onVue" ref="vueIcon" alt="vue">
    <img src="@/assets/logos/jsLogo.png" @click="onJs" ref="jsIcon" alt="js">
    <img src="@/assets/logos/scssLogo.png" @click="onScss" ref="scssIcon" alt="scss">
    <img src="@/assets/logos/gsapLogo.png" @click="onGsap" ref="gsapIcon" alt="gsap">
    <img src="@/assets/logos/figmaLogo.png" @click="onFigma" ref="figmaIcon" alt="figma">
    <img src="@/assets/logos/firebaseLogo.png" @click="onFirebase" ref="firebaseIcon" alt="firebase">
  </div>
  <div class="des">
    <div v-show="vue" class="vue">
      <img class="desIcon" src="@/assets/logos/vueLogo.png">
      <section>
        <div>
          <p>Vue를 사용해 컴포넌트화와 라우팅, 전역 상태 관리 등을 할 수 있으며, vuex, router 등의 라이브러리를 사용할 수 있습니다.</p>
          <p>가상 돔을 사용하는 Vue에 다중 루트 노드와 컴포지션 api가 추가된 vue3를 사용함으로써 보다 효율적인 개발을 할 수 있습니다.</p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/vueEx1.png" @click="focusVue" alt="vueEx">
          <p>이미지를 클릭하시면 확대됩니다.</p>
        </div>
      </section>
    </div>
    <div v-show="js" class="js">
      <img class="desIcon" src="@/assets/logos/jsLogo.png">
      <section>
        <div>
          <p>Vanilla javascript와 firebase와 같은 백엔드를 다룰 수 있습니다.</p>
          <p>돔을 직접 조작하는 Jquery를 사용하지 않아 브라우저 성능을 높이는 것이 가능합니다.</p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/jsEx.png" @click="focusJs" alt="jsEx">
          <p>이미지를 클릭하시면 확대됩니다.</p>
        </div>
      </section>
    </div>
    <div v-show="scss" class="scss">
      <img class="desIcon" src="@/assets/logos/scssLogo.png">
      <section>
        <div>
          <p>CSS3와 scss로 반응형 웹을 만들 수 있습니다.</p>
          <p>Scss를 사용해 mixin, 변수를 만들어 유지 보수 관리를 수월하게 합니다. </p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/scssEx.png" @click="focusScss" alt="scssEx">
          <p>이미지를 클릭하시면 확대됩니다.</p>
        </div>
      </section>
    </div>
    <div v-show="gsapp" class="gsap">
      <img class="desIcon" src="@/assets/logos/gsapLogo.png">
      <section>
        <div>
          <p>Gsap 라이브러리와 ScrollTrigger를 능숙하게 다룹니다.</p>
          <p>Gsap를 사용해 Keyframe 보다 더 정교하고 섬세한 애니메이션을 만들 수 있습니다.</p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/gsapEx.png" @click="focusGsap" alt="gsapEx">
          <p>이미지를 클릭하시면 확대됩니다.</p>
        </div>
      </section>
    </div>
    <div v-show="figma" class="figma">
      <img class="desIcon" src="@/assets/logos/figmaLogo.png">
      <section>
        <div>
          <p>Figma 툴을 사용해 간단한 일러스트를 제작할 수 있으며 웹 개발을 하기 전 제작에 도움을 줄 수 있는 견본을 만들 수 있습니다.</p>
          <p>figma에 대해 기본 지식이 있어 디자이너와의 효율적으로 협업이 가능합니다.</p>
        </div>
        <div class="frame">
          <img src="@/assets/examples/figmaEx1.png" @click="focusFigma" alt="figmaEx">
          <p>이미지를 클릭하시면 확대됩니다.</p>
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
          <img src="@/assets/examples/firebaseEx1.png" @click="focusFirebase" alt="firebaseEx">
          <p>이미지를 클릭하시면 확대됩니다.</p>
        </div>
      </section>
    </div>
  </div>
  <transition name="imgFade">
    <div class="focus" v-show="vueEx" @click="blur">
      <img src="@/assets/examples/vueEx1.png" class="img2" alt="vueEx">
      <img src="@/assets/examples/vueEx2.png" class="img2" alt="vueEx">
    </div>
  </transition>
  <transition name="imgFade">
    <div class="focus" v-show="jsEx" @click="blur">
      <img src="@/assets/examples/jsEx.png" class="img1" alt="jsEx">
    </div>
  </transition>
  <transition name="imgFade">
    <div class="focus" v-show="scssEx" @click="blur">
      <img src="@/assets/examples/scssEx.png" class="img1" alt="scssEx">
    </div>
  </transition>
  <transition name="imgFade">
    <div class="focus" v-show="gsapEx" @click="blur">
      <img src="@/assets/examples/gsapEx.png" class="img1" alt="gsapEx">
    </div>
  </transition>
  <transition name="imgFade">
    <div class="focus" v-show="figmaEx" @click="blur">
      <img src="@/assets/examples/figmaEx1.png" class="img2" alt="figmaEx1">
      <img src="@/assets/examples/figmaEx2.png" class="img2" alt="figmaEx2">
    </div>
  </transition>
  <transition name="imgFade">
    <div class="focus" v-show="firebaseEx" @click="blur">
      <img src="@/assets/examples/firebaseEx1.png" class="img2" alt="firebaseEx1">
      <img src="@/assets/examples/firebaseEx2.png" class="img2" alt="firebaseEx2">
    </div>
  </transition>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const skills = ref()
    const vue = ref(false); const js = ref(false)
    const scss = ref(false); const gsapp = ref(false)
    const figma = ref(false); const firebase = ref(false)
    const vueIcon = ref(); const jsIcon = ref()
    const scssIcon = ref(); const gsapIcon = ref()
    const figmaIcon = ref(); const firebaseIcon = ref()
    const onVue = () => {
      if (vue.value === false) {
        js.value = scss.value = gsapp.value = figma.value = firebase.value = false
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
    const onJs = () => {
      if (js.value === false) {
        vue.value = scss.value = gsapp.value = figma.value = firebase.value = false
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
    const onScss = () => {
      if (scss.value === false) {
        js.value = vue.value = gsapp.value = figma.value = firebase.value = false
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
        js.value = scss.value = vue.value = figma.value = firebase.value = false
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
        js.value = scss.value = vue.value = gsapp.value = firebase.value = false
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
        js.value = scss.value = vue.value = gsapp.value = figma.value = false
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

    const vueEx = ref(false); const jsEx = ref(false)
    const scssEx = ref(false); const gsapEx = ref(false)
    const figmaEx = ref(false); const firebaseEx = ref(false)
    const focusVue = () => {
      vueEx.value = true
    }
    const focusJs = () => {
      jsEx.value = true
    }
    const focusScss = () => {
      scssEx.value = true
    }
    const focusGsap = () => {
      gsapEx.value = true
    }
    const focusFigma = () => {
      figmaEx.value = true
    }
    const focusFirebase = () => {
      firebaseEx.value = true
    }
    const blur = () => {
      vueEx.value = false
      jsEx.value = false
      scssEx.value = false
      gsapEx.value = false
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
      vue,
      js,
      scss,
      gsapp,
      figma,
      firebase,
      vueIcon,
      jsIcon,
      scssIcon,
      gsapIcon,
      figmaIcon,
      firebaseIcon,
      onVue,
      onJs,
      onScss,
      onGsap,
      onFigma,
      onFirebase,
      vueEx,
      focusVue,
      jsEx,
      focusJs,
      scssEx,
      focusScss,
      gsapEx,
      focusGsap,
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
  color: #ffffff;
  .vue {
    background: #0a8810;
    box-shadow: 0 0 0 5px rgb(255, 255, 255) inset;
  }
  .js {
    background: #7e9c06;
    box-shadow: 0 0 0 5px rgb(255, 255, 255) inset;
  }
  .scss {
    background: #881777;
    box-shadow: 0 0 0 5px rgb(255, 255, 255) inset;
  }
  .gsap {
    background: #3faf12;
    box-shadow: 0 0 0 5px rgb(255, 255, 255) inset;
  }
  .figma {
    background: #757575;
    box-shadow: 0 0 0 5px rgb(255, 255, 255) inset;
  }
  .firebase {
    background: #0d7297;
    box-shadow: 0 0 0 5px rgb(255, 255, 255) inset;
  }
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
      margin: 160px 0 0 10px;
      word-break: keep-all;
      p:nth-child(1) {
        font-size: 1.3em;
        font-weight: 600;
      }
      p:nth-child(2) {
        margin-top: 70px;
        font-size: 1.2em;
      }
      p:nth-child(3) {
        display: inline-block;
        padding: 5px;
        border: 1px solid blue;
        cursor: pointer;
        color: rgb(37, 37, 255);
      }
    }
    .frame {
      flex: 1 1 50%;
      margin: 10px 0 5px 0;
      text-align: center;
      overflow: hidden;
      img {
        cursor: pointer;
        border-radius: 2%;
        width: 100%;
      }
      p {
        margin: 5px 0 10px 0 !important
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
  text-align: center;
  @mixin img-style {
    position: relative;
    transform: translate(0, -50%);
    top: 50%;
  }
  .img1 {
    @include img-style;
    width: 85%;
  }
  .img2 {
    @include img-style;
    width: 49%;
    &:nth-child(1) {
      margin-right: 10px;
    }
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
        margin-top: 0;
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
  .focus {
    display: flex;
    flex-direction: column;
    .img1 {
      width: 95%;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    .img2 {
      width: 90%;
      transform: translate(-50%, -50%);
      top: 30%;
      left: 50%;
      &:nth-child(1) {
        margin-right: 0;
        margin-bottom: 20px;
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
