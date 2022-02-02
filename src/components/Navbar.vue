<template>
  <nav ref="navbar">
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
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup (props, { emit }) {
    const navbar = ref()
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

    onMounted(() => {
      // 내리면 navBar 글 색이 변하는 애니메이션
      const navBarColor = gsap.from(navbar.value, {
        background: '#ffffff',
        duration: 0.2,
        ease: 'none'
      }).progress(1)
      navBarColor.pause()
      const menuColor = gsap.to('p', {
        color: '#ffffff',
        duration: 0.1,
        ease: 'none'
      }).progress(1)
      menuColor.pause()
      ScrollTrigger.create({
        start: '10%',
        end: 'bottom',
        onUpdate: (self) => {
          self.direction === -1 ? navBarColor.play() : navBarColor.reverse()
          self.direction === -1 ? menuColor.play() : menuColor.reverse()
        }
      })
    })
    return {
      navbar,
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
      color: rgb(116, 106, 85);
      cursor: pointer;
      margin: 0;
    }
    .title {
      font-size: 1.6em;
    }
    div {
      display: flex;
      p {
        margin-left: 24px;
      }
    }
  }
  .progress {
    position: absolute;
    top: 100px;
    width: 0%;
    height: 5px;
    // mix-blend-mode: difference;
    // will-change: transform;
    background: rgb(255, 255, 255);
  }
}
@media screen and (max-width: 800px) {
  nav {
    height: 70px;
    line-height: 70px;
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
  .progress {
    top: 70px !important;
  }
}
@media screen and (max-width: 480px) {

}
</style>
