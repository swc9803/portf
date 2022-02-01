<template>
  <nav>
    <div class="menu">
      <p class="title">SUNGWOO</p>
      <!-- 호버시 위로 넘어가는 flip? 이벤트 -->
      <p>About me</p>
      <p>Skills</p>
      <p>My works</p>
      <p>Contact</p>
    </div>
    <div class="progress" ref="progressbar" />
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const progressbar = ref()
    const changeProgress = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      addEventListener('scroll', () => {
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
    width: 80%;
    text-align: center;
    letter-spacing: 4px;
    p {
      cursor: pointer;
      margin: 0;
      &:first-child {
        font-size: 1.6em;
        float: left;
      }
      &:not(.title) {
        float: right;
        margin-left: 24px;
        // color: rgb(116, 106, 85);
        &:not(.title):hover {
          color: $titleColor;
        }
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
    .menu {
      p {
        &:first-child {
          float: none;
          font-size: 1.6em;
          text-align: center;
        }
        &:not(.title) {
          visibility: hidden;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {

}
</style>
