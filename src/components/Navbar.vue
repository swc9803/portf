<template>
  <nav ref="navbar">
    <div class="menu">
      <p class="title" @click="moveToTop">SUNGWOO</p>
      <div class="items" ref="items">
        <p @click="moveToAboutme" class="About me">About me</p>
        <p @click="moveToSkills" class="Skills">Skills</p>
        <p @click="moveToMyworks" class="My works">My works</p>
        <p @click="moveToContact" class="Contact">Contact</p>
      </div>
    </div>
      <svg class="toggle" @click="toggle(), toggledata = !toggledata"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
        <path class="toggle1" fill="#746a55" d="M0 22.8h30V30H0z"/>
        <path class="toggle2" fill="#746a55" d="M0 11.4h30v7.2H0z"/>
        <path class="toggle3" fill="#746a55" d="M0 0h30v7.2H0z"/>
      </svg>
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

    const toggledata = ref(false)
    const items = ref()
    const toggle = () => {
      if (toggledata.value === false) {
        gsap.to('.toggle1', {
          yPercent: -158,
          ease: 'none',
          duration: 0.1
        })
        gsap.to('.toggle3', {
          yPercent: 158,
          ease: 'none',
          duration: 0.1
        }, '<')
        gsap.to('.toggle2', {
          opacity: 0,
          ease: 'none',
          duration: 0.1
        }, '<')
        gsap.to('.toggle3', {
          rotate: -45,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 0.1
        }, '>')
        gsap.to('.toggle1', {
          rotate: 45,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 0.1
        }, '<')
        items.value.style.opacity = '1'
        items.value.style.pointerEvents = 'auto'
      } else if (toggledata.value === true) {
        gsap.to('.toggle1, .toggle3', {
          rotate: 0,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 0.1
        })
        gsap.to('.toggle2', {
          opacity: 1,
          ease: 'none',
          duration: 0.1
        }, '>')
        gsap.to('.toggle3, .toggle1', {
          yPercent: 0,
          ease: 'none',
          duration: 0.1
        }, '<')
        items.value.style.opacity = '0'
        items.value.style.pointerEvents = 'none'
      }
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
      // 내리면 navBar 색이 변하는 애니메이션
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
      const toggleColor = gsap.to('.toggle1, .toggle2, .toggle3', {
        fill: '#ffffff',
        duration: 0.1,
        ease: 'none'
      }).progress(1)
      toggleColor.pause()
      ScrollTrigger.create({
        start: '10%',
        end: 'bottom',
        onUpdate: (self) => {
          self.direction === -1 ? navBarColor.play() : navBarColor.reverse()
          self.direction === -1 ? menuColor.play() : menuColor.reverse()
          self.direction === -1 ? toggleColor.play() : toggleColor.reverse()
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
      toggle,
      toggledata,
      items,
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
    .items {
      pointer-events: auto;
      opacity: 1;
      display: flex;
      transition: 0.3s;
      p {
        margin-left: 24px;
        transition: 0.4s;
      }
    }
  }
  .toggle {
    display: none;
    cursor: pointer;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 4%;
  }
  .progress {
    position: absolute;
    top: 100px;
    width: 0%;
    height: 5px;
    mix-blend-mode: difference;
    will-change: transform;
    background: rgb(0, 0, 0);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.9) inset;
  }
}
@media screen and (min-width: 800px) {
 .items {
    p {
      &::before {
        position: absolute;
        content: attr(class);
        background: rgb(100, 100, 100);
        clip-path: inset(0 100% 0 0);
        height: 3px;
        top: 67px;
        z-index: -1;
        opacity: 1;
        transition: 0.4s;
      }
      &:hover::before {
        clip-path: inset(0 0 0 0);
      }
    }
  }
}
@media screen and (max-width: 800px) {
  nav {
    height: 70px;
    line-height: 70px;
    color: rgb(116, 106, 85);
    .menu {
      width: 100%;
      .title {
        position: relative;
        height: 70px;
        transform: translate(-50%);
        left: 50%;
        font-size: 1.6em;
      }
      .items {
        position: absolute;
        transform: translate(-50%);
        width: 90%;
        height: 600px;
        left: 50%;
        display: block;
        clip-path: circle(50% at 50% 0);
        pointer-events: none;
        opacity: 0;
        background: white;
        margin: 70px 0 0 0;
        p {
          color: rgb(116, 106, 85) !important;
          line-height: 30px;
          padding: 15px;
          margin: 0;
        }
      }
    }
    .toggle {
      margin-top: 8px;
      display: block;
    }
  }
  .progress {
    top: 70px !important;
  }
}
@media screen and (max-width: 480px) {
  .items {
    width: 70% !important;
    padding: 5px;
  }
}
</style>
