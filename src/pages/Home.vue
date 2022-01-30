<template>
  <div class="background" />
  <div class="container first">
    <SpaceBackground class="space" />
    <div class="wrapper">
      <!-- 최성우 누르면 소개페이지로 -->
      <p ref="mainText">끝없이 배움을 추구하는 웹퍼블리셔
        <span v-for="star in stars" :key="star.id" class="twinkle" :ref="twinkle">★</span>
        <b @click="goToSecond"> 최성우 </b>입니다
      </p>
    </div>
  </div>
  <div class="container second" ref="second">
    <Snow class="snow" />
    <div class="wrapper">
      <!-- aboutme 글자 흰, 노랑 반짝 색 뭐로 할지 고민-->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 23">
        <g>
          <g fill="#fff">
            <path d="M9.8 2.9 3.2 21 .5 22 7.8 1.2a1 1 0 0 1 1-.7h1V3ZM15.3 21 8.7 2.9V.6h1c.5 0 .9.2 1 .6L18 22l-2.7-1Zm-.3-7.4v2.2H3.8v-2.2H15ZM20.3 1c0-.6.4-1 1-1h.5c.6 0 1 .4 1 1v17.1l-.2 2.9h-2.3V1Zm12.5 12.5v.3c0 1-.1 2-.4 3-.2.9-.6 1.7-1 2.3-.6.7-1.2 1.2-1.9 1.6-.7.4-1.5.6-2.4.6a6 6 0 0 1-2.5-.5c-.7-.3-1.3-.8-1.8-1.4-.5-.6-.9-1.4-1.2-2.2a14 14 0 0 1-.5-3V13c0-1.1.3-2 .5-3 .3-.8.7-1.6 1.2-2.2.5-.6 1-1 1.8-1.4.7-.3 1.5-.5 2.4-.5 1 0 1.8.2 2.5.6.7.3 1.3.8 1.8 1.5s.9 1.5 1.1 2.4c.3 1 .4 2 .4 3Zm-2.5.3v-.3l-.2-2.1-.7-1.7a3.3 3.3 0 0 0-3-1.6 3.6 3.6 0 0 0-2.9 1.2l-.8 1.2-.4 1.5v3.3c.1.6.4 1.2.7 1.8.3.6.8 1 1.3 1.5.6.3 1.3.5 2.1.5.7 0 1.3-.1 1.8-.4.5-.3.9-.7 1.2-1.1l.7-1.8.2-2ZM35.3 13.8v-.3c0-1.1.2-2.1.5-3A7 7 0 0 1 37.1 8a6 6 0 0 1 2.2-1.6C40 6.1 41 6 42 6c1 0 2 .2 2.8.6a6 6 0 0 1 2 1.6 7 7 0 0 1 1.4 2.4c.4.9.5 1.9.5 3v.3c0 1-.1 2-.5 3-.3.8-.7 1.6-1.3 2.3a6.2 6.2 0 0 1-5 2.2 6.3 6.3 0 0 1-6.3-4.5c-.2-1-.4-2-.4-3Zm2.6-.3v.3c0 .7 0 1.4.2 2 .2.7.5 1.3.8 1.8.4.5.8.9 1.3 1.2.6.3 1.2.4 1.9.4s1.3-.1 1.8-.4c.5-.3 1-.7 1.3-1.2.4-.5.6-1 .8-1.7l.3-2.1v-.3c0-.8-.1-1.5-.3-2.1-.2-.7-.4-1.2-.8-1.7-.3-.6-.8-1-1.3-1.3-.5-.2-1.1-.4-1.8-.4s-1.3.2-1.9.4A4 4 0 0 0 39 9.7c-.3.5-.6 1-.8 1.7a8 8 0 0 0-.2 2ZM61 17.6V7.2c0-.5.5-1 1-1h.6c.5 0 1 .5 1 1V21h-2.4l-.2-3.4Zm.5-3.1h1c0 1 0 1.8-.3 2.7-.2.8-.5 1.5-1 2.1-.4.6-1 1.1-1.7 1.5-.8.3-1.7.5-2.7.5a6 6 0 0 1-2-.3 4 4 0 0 1-2.5-2.7c-.3-.7-.4-1.6-.4-2.6V7.3c0-.5.5-1 1-1h.6c.5 0 1 .5 1 1v8.6c0 .6 0 1.2.2 1.6.1.5.3.8.6 1 .3.3.5.5.9.6l1 .1c1 0 2-.2 2.5-.6.7-.4 1.1-1 1.4-1.7.3-.7.4-1.5.4-2.3ZM72.6 6.2c.6 0 1 .5 1 1v1h-8v-1c0-.5.5-1 1-1h6Zm-4.3-2.6c0-.5.5-1 1-1h.6c.5 0 1 .5 1 1v13.7c0 .5 0 1 .2 1.2l.6.5.8.1h.6c.3-.1.6.1.6.4V21a6 6 0 0 1-2 .3 4 4 0 0 1-1.7-.4c-.5-.2-.9-.7-1.2-1.2-.3-.6-.5-1.4-.5-2.4V3.6ZM85.2 1h1.4c.4 0 .8.3 1 .7l6.2 15.6 6.3-15.6a1 1 0 0 1 1-.6h1.8L95 21h-2L85.1 1ZM84 2c0-.5.4-1 1-1h1.3l.2 12.2V21H84V2Zm17.5-1h1.2c.6 0 1 .5 1 1v19h-2.6v-7.8l.4-12.1ZM114.1 21.3c-1 0-2-.2-2.8-.5a6.4 6.4 0 0 1-3.5-3.8c-.3-.9-.5-1.8-.5-2.9v-.6a9 9 0 0 1 .6-3.2c.3-1 .8-1.7 1.4-2.4a6.2 6.2 0 0 1 7.2-1.4 5 5 0 0 1 2 1.5c.4.7.8 1.4 1 2.3.3.9.4 1.8.4 2.9v1.1h-11v-2h8.4V12c0-.7-.1-1.3-.4-2-.2-.6-.6-1-1-1.5-.6-.4-1.2-.6-2.1-.6a3.4 3.4 0 0 0-2.8 1.4c-.4.5-.7 1.1-.8 1.8-.2.7-.3 1.5-.3 2.3v.6c0 .7 0 1.4.3 2 .2.6.4 1.2.8 1.6.4.5.9.8 1.4 1.1.5.3 1.2.4 1.9.4.9 0 1.6 0 2.2-.4 1-.5 1.2-1 2-.2l1 .9c-.3.5-.5-.1-1 .3s-1.1.8-1.8 1a7 7 0 0 1-2.6.5Z"/>
          </g>
          <g fill="#E4FCA1">
            <path d="M9.8 3.9 3.2 22H.5L8 2h1.7V4ZM15.3 22 8.7 3.9V2h1.7L18 22h-2.7Zm-.3-7.4v2.2H3.8v-2.2H15ZM20.3 1h2.5v18.1l-.2 2.9h-2.3V1Zm12.5 13.5v.3c0 1-.1 2-.4 3-.2.9-.6 1.7-1 2.3-.6.7-1.2 1.2-1.9 1.6-.7.4-1.5.6-2.4.6a6 6 0 0 1-2.5-.5c-.7-.3-1.3-.8-1.8-1.4-.5-.6-.9-1.4-1.2-2.2a14 14 0 0 1-.5-3V14c0-1.1.3-2 .5-3 .3-.8.7-1.6 1.2-2.2.5-.6 1-1 1.8-1.4.7-.3 1.5-.5 2.4-.5 1 0 1.8.2 2.5.6.7.3 1.3.8 1.8 1.5s.9 1.5 1.1 2.4c.3 1 .4 2 .4 3Zm-2.5.3v-.3l-.2-2.1-.7-1.7a3.3 3.3 0 0 0-3-1.6 3.6 3.6 0 0 0-2.9 1.2l-.8 1.2-.4 1.5v3.3c.1.6.4 1.2.7 1.8.3.6.8 1 1.3 1.5.6.3 1.3.5 2.1.5.7 0 1.3-.1 1.8-.4.5-.3.9-.7 1.2-1.1l.7-1.8.2-2ZM35.3 14.8v-.3c0-1.1.2-2.1.5-3A7 7 0 0 1 37.1 9a6 6 0 0 1 2.2-1.6C40 7.1 41 7 42 7c1 0 2 .2 2.8.6a6 6 0 0 1 2 1.6 7 7 0 0 1 1.4 2.4c.4.9.5 1.9.5 3v.3c0 1-.1 2-.5 3-.3.8-.7 1.6-1.3 2.3a6.2 6.2 0 0 1-5 2.2 6.3 6.3 0 0 1-6.3-4.5c-.2-1-.4-2-.4-3Zm2.6-.3v.3c0 .7 0 1.4.2 2 .2.7.5 1.3.8 1.8.4.5.8.9 1.3 1.2.6.3 1.2.4 1.9.4s1.3-.1 1.8-.4c.5-.3 1-.7 1.3-1.2.4-.5.6-1 .8-1.7l.3-2.1v-.3c0-.8-.1-1.5-.3-2.1-.2-.7-.4-1.2-.8-1.7-.3-.6-.8-1-1.3-1.3-.5-.2-1.1-.4-1.8-.4s-1.3.2-1.9.4a4 4 0 0 0-1.3 1.3c-.3.5-.6 1-.8 1.7a8 8 0 0 0-.2 2ZM61 18.6V7.2h2.6V22h-2.4l-.2-3.4Zm.5-3.1h1c0 1 0 1.8-.3 2.7-.2.8-.5 1.5-1 2.1-.4.6-1 1.1-1.7 1.5-.8.3-1.7.5-2.7.5a6 6 0 0 1-2-.3 4 4 0 0 1-2.5-2.7c-.3-.7-.4-1.6-.4-2.6V7.3h2.6v9.6c0 .6 0 1.2.2 1.6.1.5.3.8.6 1 .3.3.5.5.9.6l1 .1c1 0 2-.2 2.5-.6.7-.4 1.1-1 1.4-1.7.3-.7.4-1.5.4-2.3ZM73.6 7.2v2h-8v-2h8Zm-5.3-3.6H71v14.7c0 .5 0 1 .2 1.2l.6.5.8.1a4.2 4.2 0 0 0 1.2-.2V22a6 6 0 0 1-2 .3 4 4 0 0 1-1.7-.4c-.5-.2-.9-.7-1.2-1.2-.3-.6-.5-1.4-.5-2.4V3.6ZM84.8 2h2.5l6.5 16.3 6.5-16.2h2.6L95 22h-2L84.7 2ZM84 2h3v20h-3V2Zm17 0h2.7v20H101V2ZM114.1 22.3c-1 0-2-.2-2.8-.5a6.4 6.4 0 0 1-3.5-3.8c-.3-.9-.5-1.8-.5-2.9v-.6a9 9 0 0 1 .6-3.2c.3-1 .8-1.7 1.4-2.4a6.2 6.2 0 0 1 7.2-1.4 5 5 0 0 1 2 1.5c.4.7.8 1.4 1 2.3.3.9.4 1.8.4 2.9v1.1h-11v-2h8.4V13c0-.7-.1-1.3-.4-2-.2-.6-.6-1-1-1.5-.6-.4-1.2-.6-2.1-.6a3.4 3.4 0 0 0-2.8 1.4c-.4.5-.7 1.1-.8 1.8-.2.7-.3 1.5-.3 2.3v.6c0 .7 0 1.4.3 2 .2.6.4 1.2.8 1.6.4.5.9.8 1.4 1.1.5.3 1.2.4 1.9.4.9 0 1.6-.2 2.2-.5.6-.4 1.2-.9 1.7-1.5l1.5 1.2a7 7 0 0 1-1.2 1.4 7 7 0 0 1-4.3 1.5Z"/>
          </g>
        </g>
      </svg>
      <!-- 글자 div 눈 쌓이고, hover시 perspective 옆으로, 눈 쌓인거 없애기 -->
      <div class="flex">
        <div class="picture">
          내 사진
        </div>
        <div class="introduce">
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

    const goToSecond = () => {
      const secondLocation = document.querySelector('.second').offsetTop
      scrollTo({ top: secondLocation, behavior: 'smooth' })
    }

    onMounted(() => {
      gsap.from(mainText.value, {
        opacity: 0, yPercent: -100, pointerEvents: 'none', duration: 1, ease: 'ease-out', delay: 1
      })
      for (var i = 0; i < 4; i++) {
        gsap.set(array.value[i], {
          xPercent: gsap.utils.random(0, 900),
          yPercent: gsap.utils.random(0, 300)
        })
        gsap.to(array.value[i], {
          // xPercent: gsap.utils.random(0, 900),
          // yPercent: gsap.utils.random(0, 300),
          opacity: 0,
          scale: 2,
          duration: 0.3,
          yoyo: true,
          onComplete () {
            gsap.delayedCall(gsap.utils.random(2, 5, 0.1), () => this.restart())
          }
        })
      }
      // gsap.utils.toArray(array.value).forEach(function (star) {
      //   gsap.to(star, {
      //     opacity: 0,
      //     scale: 2,
      //     duration: 0.5,
      //     repeat: -1,
      //     repeatDelay: gsap.utils.random(1.5, 2, 0.1),
      //     repeatRefresh: true
      //   })
      // })
    })
    return {
      goToSecond, mainText, twinkle, star, stars, array
    }
  },
  components: {
    SpaceBackground, Snow
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/Mainstyle';

@font-face {
  font-family: 'KOTRALEAP';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRALEAP.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

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
      font-size: 1.8em;
      font-weight: 400;
      color: white;
      word-break: keep-all;
      b {
        color: rgb(255, 255, 175);
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
    svg {
      position: relative;
      margin: 0;
      width: 10em;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 50px 20% 0 20%;
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 0 10px rgb(0, 0, 0);
    }
    .flex {
      display: flex;
      flex-wrap: wrap;
      .picture,
      .introduce {
        width: 40%;
        height: 500px;
        margin: 6% 5% 0 5%;
        background: rgba(255, 255, 255, 0.7);
        transition: 1s;
      }
        .picture:hover {
         transform: perspective(350px) rotateY(10deg);
        }
        .introduce:hover {
         transform: perspective(350px) rotateY(-10deg);
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
