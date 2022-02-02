<template>
  <nav>
    <div class="menu">
      <p class="title" @click="moveToTop">SUNGWOO</p>
      <div>
      <!-- 호버시 위로 넘어가는 flip? 이벤트 -->
        <p @click="moveToAboutme">About me</p>
        <p @click="moveToSkills">Skills</p>
        <p @click="moveToMyworks">My works</p>
        <p @click="moveToContact">Contact</p>
      </div>
    </div>
    <div class="progress" ref="progressbar" />
  </nav>
</template>

<script>
import { ref } from 'vue'
// import gsap from 'gsap'

export default {
  setup (props, { emit }) {
    // 각각 해당하는 위치로 스크롤 이동
    const moveToTop = () => {
      scrollTo({ top: 0, behavior: 'smooth' })
    }
    const moveToAboutme = () => {
      emit('moveToAboutme')
    }
    const moveToSkills = () => {
      emit('moveToSkills')
    }
    const moveToMyworks = () => {
      emit('moveToMyworks')
    }
    const moveToContact = () => {
      emit('moveToContact')
    }

    // progressbar
    const progressbar = ref()
    const changeProgress = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        progressbar.value.style.width = `${(scrollTop / height) * 100}%`
      })
    }
    return {
      moveToTop,
      moveToAboutme,
      moveToSkills,
      moveToMyworks,
      moveToContact,
      progressbar,
      changeProgress
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/Mainstyle';

nav {
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 0.8;
  // background: white;
  color: white;
  line-height: 100px;
  .menu {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    display: flex;
    justify-content: space-between;
    width: 80%;
    text-align: center;
    letter-spacing: 4px;
    p {
      cursor: pointer;
      margin: 0;
    }
    .title {
      font-size: 1.6em;
    }
    div {
      display: flex;
      p {
        // color: rgb(116, 106, 85);
        margin-left: 24px;
      }
    }
  }
  .progress {
    position: absolute;
    top: 100px;
    width: 0%;
    height: 5px;
    mix-blend-mode: difference;
    will-change: transform;
    background: rgb(255, 255, 255);
  }
}
@media screen and (max-width: 800px) {
  nav {
    height: 70px;
    line-height: 70px;
    background: white;
    color: rgb(116, 106, 85);
    .menu {
      .title {
        position: relative;
        transform: translate(-50%);
        left: 50%;
        font-size: 1.6em;
      }
      div {
        visibility: hidden;
      }
    }
  }
}
@media screen and (max-width: 480px) {

}
</style>
