<template>
  <SnowBackground class="snow" />
  <div class="wrapper">
    <p class="title" ref="about">About me</p>
    <div class="flex">
      <div class="picture" @mouseover="snowAni1">
        <svg class="piledsnow1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 636 85">
          <path fill="#fff" d="M0 32.8A29.9 29.9 0 0 1 20.9 4.3l6-1.9A50 50 0 0 1 45.5.2L221.5 13 469 19l120-2.5 24-2c10.8-2.1 21 5.8 21.6 16.9l1.4 26.8c0 .5-.2 1-.6 1.3L621 72A50 50 0 0 1 576.4 83l-38.6-9.4a50 50 0 0 0-12.8-1.4l-68 1.4-137.2-14.1a50 50 0 0 0-7.6-.2L150 67.5 4.7 59.3a5 5 0 0 1-4.7-5V32.8Z"/>
        </svg>
        내 사진
      </div>
      <div class="introduce" @mouseover="snowAni2">
        <svg class="piledsnow2" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 636 70">
          <path fill="#fff" d="M0 33.4A32.4 32.4 0 0 1 38.4 1.5L57 5l101.6 5 172.6-5 152.4 5.2 98-.2c3.4 0 6.7.3 10 1l22.8 4.6A27 27 0 0 1 636 42v13.8a10 10 0 0 1-11.1 10l-16.5-2a50 50 0 0 0-12.8.2l-37.5 5.3a50 50 0 0 1-10 .4l-251-14.3-107 7.7-123.7-7.7H9.8A9.8 9.8 0 0 1 0 45.6V33.4Z"/>
        </svg>
        학력
      </div>
    </div>
  </div>
</template>

<script>
import SnowBackground from '@/components/home/SnowBackground'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

export default {
  setup () {
    const about = ref()

    const snowAni1 = () => {
      var timer = setTimeout(function () {
        gsap.to('.piledsnow1', {
          yPercent: 200, opacity: 0
        })
      }, 1200)
      addEventListener('mouseout', () => {
        clearTimeout(timer)
      })
    }
    const snowAni2 = () => {
      var timer = setTimeout(function () {
        gsap.to('.piledsnow2', {
          yPercent: 200, opacity: 0
        })
      }, 1200)
      addEventListener('mouseout', () => {
        clearTimeout(timer)
      })
    }

    onMounted(() => {
      gsap.to(about.value, {
        color: '#ffffff', duration: 3, ease: 'ease-out', yoyo: true, repeat: -1
      })
    })
    return {
      about, snowAni1, snowAni2
    }
  },
  components: {
    SnowBackground
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/Mainstyle';
.snow {
  position: absolute;
  width: 100%;
}
.wrapper {
  position: relative;
  .flex {
    display: flex;
    flex-wrap: wrap;
    .picture,
    .introduce {
      width: 40%;
      margin: 6% 5% 0 5%;
      background: rgba(255, 255, 255, 0.7);
      transition: 1s;
      box-shadow: 4px 4px 5px rgb(88, 88, 88);
      &.picture:hover {
       transform: perspective(600px) rotateY(8deg);
      }
      &.introduce:hover {
       transform: perspective(600px) rotateY(-8deg);
      }
      svg {
        position: relative;
        top: -33%;
        width: 100%;
        pointer-events: none;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    .about {
      padding: 3% 0 3%;
    }
    .flex {
      .picture,
      .introduce {
        flex: 0 0 90%;
      }
      .introduce {
        margin-top: 20%;
      }
    }
  }
}
</style>
