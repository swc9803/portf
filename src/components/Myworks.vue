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
        <swiper-slide><img src="@/assets/egg/egg1.png"></swiper-slide>
        <swiper-slide><img src="@/assets/egg/egg2.png"></swiper-slide>
        <swiper-slide><img src="@/assets/egg/egg3.png"></swiper-slide>
        <swiper-slide><img src="@/assets/egg/egg4.png"></swiper-slide>
      </swiper>
      <div class="projectDes">
        <p class="firstDes">가장 최근에 제작한 사이트입니다. 여러 사이트를 제작해 보며 반응형 웹과 애니메이션이 부족하다고 느껴 본 사이트는 반응형 레이아웃과 애니메이션에 중점을 두어 제작을 하였습니다.</p>
        <p>개발을 하며 반응형 구현과 애니메이션 제작에 한 발짝 더 다가간 것을 느꼈고, 제작을 하는 데에 익숙해져 시간을 많이 절약했다는 생각이 드는 프로젝트였습니다.</p>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToEggSite">
          <img src="@/assets/githubIcon.png" @click="goToEggGit">
        </div>
      </div>
    </div>
  </div>
  <div class="projectInfo">
    <p class="projectTitle">GSAP 애니메이션 연습</p>
    <div class="sliderWrap">
      <swiper class="slider"
        :slidesPerView="1"
        :spaceBetween="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="modules"
      >
        <swiper-slide><img src="@/assets/gsap/spring.png"></swiper-slide>
        <swiper-slide><img src="@/assets/gsap/summer.png"></swiper-slide>
        <swiper-slide><img src="@/assets/gsap/fall.png"></swiper-slide>
        <swiper-slide><img src="@/assets/gsap/winter.png"></swiper-slide>
        <swiper-slide><img src="@/assets/gsap/sea.png"></swiper-slide>
        <swiper-slide><img src="@/assets/gsap/process.png"></swiper-slide>
      </swiper>
      <div class="projectDes">
        <p class="firstDes">피그마를 배우며 로고와 여러 그림 등을 그리다 보니 직접 그린 svg로 애니메이션을 만들면 재밌을 것 같다는 생각이 들어 스크롤 애니메이션 등을 제작하게 되었습니다.</p>
        <div class="dd">
          <b>Main-Function</b>
          <p class="ss">애니메이션 감상</p>
        </div>
        <div class="dd">
          <b>Front</b>
          <p class="ss">vue</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToGsapSite">
        </div>
      </div>
    </div>
  </div>
  <div class="projectInfo">
    <p class="projectTitle">Review Site</p>
    <div class="sliderWrap">
      <swiper class="slider"
        :slidesPerView="1"
        :spaceBetween="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="modules"
      >
        <swiper-slide><img src="@/assets/review/review1.png"></swiper-slide>
        <swiper-slide><img src="@/assets/review/review2.png"></swiper-slide>
        <swiper-slide><img src="@/assets/review/review3.png"></swiper-slide>
        <swiper-slide><img src="@/assets/review/review4.png"></swiper-slide>
        <swiper-slide><img src="@/assets/review/review5.png"></swiper-slide>
      </swiper>
      <div class="projectDes">
        <p class="firstDes">Review</p>
        <div class="dd">
          <b>Main-Function</b>
          <p class="ss">CRUD</p>
        </div>
        <div class="dd">
          <b>Front</b>
          <p class="ss">vue</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToReviewSite">
        </div>
      </div>
    </div>
  </div>
  <div class="projectInfo">
    <p class="projectTitle">Pizza Site</p>
    <div class="sliderWrap">
      <swiper class="slider"
        :slidesPerView="1"
        :spaceBetween="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="modules"
      >
        <swiper-slide><img src="@/assets/pizza/pizza1.png"></swiper-slide>
        <swiper-slide><img src="@/assets/pizza/pizza2.png"></swiper-slide>
        <swiper-slide><img src="@/assets/pizza/pizza3.png"></swiper-slide>
        <swiper-slide><img src="@/assets/pizza/pizza4.png"></swiper-slide>
      </swiper>
      <div class="projectDes">
        <p class="firstDes">pizza</p>
        <div class="dd">
          <b>Main-Function</b>
          <p class="ss">직접 피자 만들기</p>
        </div>
        <div class="dd">
          <b>Front</b>
          <p class="ss">vue</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToPizzaSite">
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
      open('https://segg-1.web.app/')
    }
    const goToEggGit = () => {
      open('https://github.com/swc9803/eggtest')
    }
    const goToGsapSite = () => {
      open('https://pofo-55041.web.app/sea')
    }
    const goToReviewSite = () => {
      open('https://rhdyd-a7e3b.firebaseapp.com/')
    }
    const goToPizzaSite = () => {
      open('https://pizza-48258.firebaseapp.com/')
    }
    onMounted(() => {

    })
    return {
      goToEggSite,
      goToEggGit,
      goToGsapSite,
      goToReviewSite,
      goToPizzaSite,
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
  background: rgb(235, 235, 235);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5%;
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
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .projectDes {
      flex: 1 1 45%;
      margin: 20px;
      margin-top: 20px;
      word-break: keep-all;
      font-size: 1em;
      .dd {
        margin: 0;
        display: flex;
        p {
          margin: 0;
        }
      }
      .firstDes {
        margin: 0
      }
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
}
</style>
