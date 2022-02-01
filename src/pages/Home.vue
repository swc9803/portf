<template>
  <div class="background" />
  <div class="container first">
    <SpaceBackground class="space" />
    <div class="wrapper">
      <!-- 최성우 누르면 소개페이지로 -->
      <p ref="mainText">끝없이 배움을 추구하는 개발자
        <span v-for="star in stars" :key="star.id" class="twinkle" :ref="twinkle">★</span>
        <b @click="goToSecond"> 최성우 </b>입니다
      </p>
    </div>
  </div>
  <div class="container second" ref="second">
    <Snow class="snow" />
    <div class="wrapper">
      <!-- aboutme 글자 흰, 노랑 반짝 색 $titleColor -->
      <p class="about">About me</p>
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
  </div>
  <div class="container third">
    작업물
  </div>
  <div class="container fourth">
    Contact
  </div>
</template>

<script>
import SpaceBackground from '@/components/home/SpaceBackground'
import Snow from '@/components/home/SnowBackground'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const mainText = ref()
    const array = ref([])
    const twinkle = (el) => array.value.push(el)
    const star = ref()
    const stars = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])

    const setRandomPosition = () => {
      for (var i = 0; i < 4; i++) {
        gsap.set(array.value[i], {
          xPercent: gsap.utils.random(0, 850),
          yPercent: gsap.utils.random(0, 250)
        })
      }
    }

    const goToSecond = () => {
      const secondLocation = document.querySelector('.second').offsetTop
      scrollTo({ top: secondLocation, behavior: 'smooth' })
    }

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
      gsap.from(mainText.value, {
        opacity: 0, yPercent: -100, pointerEvents: 'none', duration: 1, ease: 'ease-out', delay: 1
      })
      for (var i = 0; i < 4; i++) {
        gsap.to(array.value[i], {
          opacity: 0,
          scale: 3,
          duration: 0.5,
          onComplete () {
            gsap.delayedCall(gsap.utils.random(2, 5, 0.1), () => {
              setRandomPosition()
              this.restart()
            })
          }
        })
      }
    })
    return {
      mainText, array, twinkle, star, stars, setRandomPosition, goToSecond, snowAni1, snowAni2
    }
  },
  components: {
    SpaceBackground, Snow
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/Mainstyle';

.first {
  .space {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .wrapper {
    position: relative;
    pointer-events: none;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
    font-family: 'KOTRALEAP';
    p {
      display: inline-block;
      pointer-events: auto;
      margin: 0;
      font-size: $titleFontSize;
      font-weight: 400;
      color: white;
      word-break: keep-all;
      b {
        color: $titleColor;
        transform-origin: center center;
        cursor: pointer;
        transition: .5s;
        &:hover {
          color: rgb(255, 200, 80);
        }
      }
      .twinkle {
        position: absolute;
        pointer-events: none;
        font-size: 0.3em;
      }
    }
  }
}

.second {
  .snow {
    position: absolute;
    width: 100%;
  }
  .wrapper {
    position: relative;
    .about {
      margin: 5% 0 5%;
      text-align: center;
      font-size: $titleFontSize;
      color: $titleColor;
      text-shadow: 0 0 10px rgb(0, 0, 0);
    }
    .flex {
      display: flex;
      flex-wrap: wrap;
      .picture,
      .introduce {
        width: 40%;
        // height: 500px;
        margin: 6% 5% 0 5%;
        background: rgba(255, 255, 255, 0.7);
        transition: 1s;
        box-shadow: 4px 4px 5px rgb(88, 88, 88) ;
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
}

@media screen and (max-width: 768px) {
  .first {
    .wrapper {
      p {
        font-size: 1.5em;
      }
    }
  }
  .second {
    .wrapper {
      svg {
        width: 8em;
      }
      .flex {
        .picture,
        .introduce {
          flex: 0 0 90%;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {

}
</style>
