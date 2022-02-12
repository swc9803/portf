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
        <div class="desTitle">
          <p>Main-Function</p>
          <p>제품 보기, 고객센터, 오시는 길, 비디오 시청</p>
        </div>
        <div class="desTitle">
          <p>Front-End</p>
          <p><img src="@/assets/vue.png">Vue, <img src="@/assets/scss.png">Scss</p>
        </div>
        <div class="desTitle">
          <p>Distribution</p>
          <p><img src="@/assets/firebase.png">Firebase</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToEggSite">
          <img src="@/assets/githubIcon.png" @click="goToEggGit">
        </div>
      </div>
    </div>
  </div>
  <div class="projectInfo">
    <p class="projectTitle">GSAP Animation Practice</p>
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
        <p class="firstDes">Figma를 배우며 로고와 여러 그림 등을 그리다 보니 직접 그린 svg로 애니메이션을 만들면 재밌을 것 같다는 생각이 들어 스크롤 애니메이션 등을 제작하게 되었습니다.</p>
        <div class="desTitle">
          <p>Main-Function</p>
          <p>애니메이션 감상</p>
        </div>
        <div class="desTitle">
          <p>Front-End</p>
          <p><img src="@/assets/vue.png">Vue</p>
        </div>
        <div class="desTitle">
          <p>Distribution</p>
          <p><img src="@/assets/firebase.png">Firebase</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToGsapSite">
        </div>
      </div>
    </div>
  </div>
  <div class="projectInfo">
    <p class="projectTitle">Portfolio Site</p>
    <div class="sliderWrap">
      <swiper class="slider"
        :slidesPerView="1"
        :spaceBetween="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :modules="modules"
      >
        <swiper-slide><img src="@/assets/portfolio/pf1.png"></swiper-slide>
        <swiper-slide><img src="@/assets/portfolio/pf2.png"></swiper-slide>
        <swiper-slide><img src="@/assets/portfolio/pf3.png"></swiper-slide>
        <swiper-slide><img src="@/assets/portfolio/pf4.png"></swiper-slide>
        <swiper-slide><img src="@/assets/portfolio/pf5.png"></swiper-slide>
      </swiper>
      <div class="projectDes">
        <p class="firstDes">포트폴리오 용으로 제작한 사이트입니다. 이 곳에 작성한 모든 프로젝트는 모두 저 혼자 만든 것입니다.</p>
        <p>제작 기간 동안 많은 사람들의 포트폴리오를 보며 자신이 아직 많이 부족하다는 생각이 들며 뒤쳐지지 않게 더 열심히 배워야겠다는 동기부여를 시켜주었습니다.</p>
        <div class="desTitle">
          <p>Main-Function</p>
          <p>자기 소개, 보유 기술 나열, 프로젝트 설명</p>
        </div>
        <div class="desTitle">
          <p>Front-End</p>
          <p><img src="@/assets/vue.png">Vue, <img src="@/assets/scss.png">Scss</p>
        </div>
        <div class="desTitle">
          <p>Distribution</p>
          <p><img src="@/assets/firebase.png">Firebase</p>
        </div>
        <div class="icons">
          <img src="@/assets/githubIcon.png" @click="goToPortfolioGit">
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
        <p class="firstDes">제가 vue를 배운 후 제일 처음으로 만든 사이트입니다. No-SQL인 Firebase를 사용해 클라우드 데이터베이스를 관리하였습니다.</p>
        <p>css에 대한 지식이 부족했던 시기라 Bootstrap 클래스의 margin 기능을 많이 활용하였습니다. CRUD에 대해 많은 것을 알게 되었고, 데이터를 효율적으로 관리하는 방법을 배우게 만들어준 사이트 제작이었습니다.</p>
        <div class="desTitle">
          <p>Main-Function</p>
          <p>로그인 및 회원가입, 글 읽기, 쓰기, 삭제, 수정, 이미지 업로드, 댓글 기능</p>
        </div>
        <div class="desTitle">
          <p>Front-End</p>
          <p><img src="@/assets/vue.png">Vue</p>
        </div>
        <div class="desTitle">
          <p>Back-End & Distribution</p>
          <p><img src="@/assets/firebase.png">Firebase & Firestore</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToReviewSite">
        </div>
      </div>
    </div>
  </div>
  <div class="projectInfo">
    <p class="projectTitle">Custom Made Pizza Site</p>
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
        <p class="firstDes">scss와 반응형 레이아웃을 배우기 이전에 직접 만든 svg를 사용자가 가지고 놀 수 있게끔 만들면 재밌겠다는 생각이 들어 만든 사이트입니다.</p>
        <div class="desTitle">
          <p>Main-Function</p>
          <p>제품 보기, 직접 피자 만들기, 오시는 길(Kakao Map)</p>
        </div>
        <div class="desTitle">
          <p>Front-End</p>
          <p><img src="@/assets/vue.png">Vue</p>
        </div>
        <div class="desTitle">
          <p>Distribution</p>
          <p><img src="@/assets/firebase.png">Firebase</p>
        </div>
        <div class="icons">
          <img src="@/assets/homeIcon.png" @click="goToPizzaSite">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'
import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const goToEggSite = () => { open('https://segg-1.web.app/') }
    const goToEggGit = () => { open('https://github.com/swc9803/eggtest') }
    const goToGsapSite = () => { open('https://pofo-55041.web.app/sea') }
    const goToPortfolioGit = () => { open('https://github.com/swc9803/portf') }
    const goToReviewSite = () => { open('https://rhdyd-a7e3b.firebaseapp.com/') }
    const goToPizzaSite = () => { open('https://pizza-48258.firebaseapp.com/') }

    return {
      goToEggSite,
      goToEggGit,
      goToGsapSite,
      goToPortfolioGit,
      goToReviewSite,
      goToPizzaSite,
      modules: [Pagination, Scrollbar, A11y]
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
    color: rgb(70, 70, 70) !important;
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
        margin-bottom: 30px;
        width: 100%;
      }
    }
    .projectDes {
      flex: 1 1 45%;
      margin: 20px;
      margin-top: 20px;
      word-break: keep-all;
      font-size: 1em;
      display: flex;
      flex-direction: column;
      .desTitle {
        margin: 0;
        p {
          margin: 0;
          flex: 0 0 30%;
          &:nth-child(1) {
            color: rgb(41, 41, 41);
            letter-spacing: 1px;
            font-size: 1.2em;
            font-weight: 600;
            margin: 20px 0 3px 0;
          }
          img {
            width: 1em;
            margin-right: 5px;
          }
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
@media screen and (max-width: 1200px) {
  .sliderWrap {
    display: block !important;
      margin: 0px;
  }
}
</style>
