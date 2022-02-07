<template>
  <p class="title">My Works</p>
  <div class="projectInfo">
    <p class="projectTitle">계란 판매 사이트</p>
    <div class="sliderWrap">
      <swiper class="slider"
        :slidesPerView="1"
        :spaceBetween="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="modules"
      >
        <swiper-slide class="dd blue">Slide 1</swiper-slide>
        <swiper-slide class="dd red">Slide 2</swiper-slide>
        <swiper-slide class="dd yellow">Slide 3</swiper-slide>
        <swiper-slide class="dd green">Slide 4</swiper-slide>
      </swiper>
      <div class="projectDes">
        <div>가장 최근에 제작한 사이트입니다. 여러 사이트를 제작해보며 반응형 웹과 애니메이션이 부족하다고 느껴 본 사이트는 반응형 레이아웃과 애니메이션에 집중을 하며 제작을 하였습니다.</div>
        <div>hi</div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToEggSite">
          <img src="@/assets/githubIcon.png" @click="goToEggGit">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { onMounted } from '@vue/runtime-core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const goToEggSite = () => {
      open('https://segg-1.firebaseapp.com/')
    }
    const goToEggGit = () => {
      open('https://github.com/swc9803/eggtest')
    }
    onMounted(() => {

    })
    return {
      goToEggSite,
      goToEggGit,
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/Mainstyle';

.projectInfo {
  position: relative;
  transform: translate(-50%);
  left: 50%;
  width: 70%;
  box-shadow: 0 0 0 2px rgb(206, 192, 68) inset;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  .projectTitle {
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .sliderWrap {
    display: flex;
    flex-flow: row;
    .slider {
      flex: 1 1 45%;
      margin: 20px;
      height: 50vh;
      overflow: hidden;
      cursor: pointer;
    }
    .projectDes {
      flex: 1 1 45%;
      margin: 20px;
      margin-top: 20px;
      word-break: keep-all;
      font-size: 1.2em;
      .icons {
        text-align: center;
        margin-top: 20px;
        img {
          cursor: pointer;
          width: 25px;
          margin: 15px;
          transition: .2s;
          &:hover {
            transform: translateY(-3px);
          }
        }
      }
    }
  }
  .blue {
    background: blue;
  }
  .yellow {
    background: yellow;
  }
  .red {
    background: red;
  }
  .green {
    background: rgb(91, 255, 59);
  }
}
</style>
