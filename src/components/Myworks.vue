<template>
  <p class="title">My Works</p>
  <div class="projectInfo">
    <p class="projectTitle">계란 판매 사이트</p>
    <p class="projectTitleDes">디자인 100% </p>
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
      <div class="projectDes">hi</div>
      <div class="projectDes">hi</div>
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
    onMounted(() => {

    })
    return {
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
  background: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  .projectTitle {
    text-align: center;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .projectTitleDes {
    text-align: center;
  }
  .sliderWrap {
    display: flex;
    flex-flow: row;
  }
  .slider {
    position: relative;
    // transform: translate(-50%, -50%);
    // top: 50%;
    left: 0%;
    text-align: left;
    width: 60%;
    margin: 20px;
    height: 50vh;
    overflow: hidden;
    cursor: pointer;
    // dd {
    // }
  }
  .projectDes {
    width: 50%;
    margin-top: 20px;
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
