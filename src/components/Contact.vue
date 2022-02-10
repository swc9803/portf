<template>
  <div>
    <p>깃헙 링크</p>
    <svg @click="goToGithub" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 300 250">
      <defs>
        <path id="Line 11" d="M1-1h27.9"/>
      </defs>
      <g id="Frame 4">
        <path fill="#fff" d="M0 0h300v250H0z"/>
        <path id="githubIcon 1" fill="url(#git1)" d="M62 89h160v160H62z"/>
        <g class="light" id="light1" stroke="#D9DB8A" stroke-linecap="round" stroke-width="2">
          <path id="Line 8" d="M63.2 100.4 37.5 89.3"/>
          <use xlink:href="#Line 11" transform="scale(1 -1) rotate(23.4 359.2 519.2)"/>
          <path id="Line 9" d="M82.1 66.1 62.4 46.3"/>
          <use xlink:href="#Line 11" id="Line 12" transform="scale(1 -1) rotate(45 187.9 228)"/>
          <path id="Line 10" d="m112.5 35.2-7.2-27"/>
          <use xlink:href="#Line 11" id="Line 13" transform="scale(1 -1) rotate(75 116.4 103.2)"/>
        </g>
      </g>
      <defs>
        <pattern id="git1" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use xlink:href="#image0_138_63" transform="scale(.00625)"/>
        </pattern>
        <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAKyUExURUdwTBQTExQUFBQTExQTExQTExQTExQTEwAAABQTEwAAAAAAABQTEysrKxQTExMSEhUTExAQEBMTExMSEhwUFBMSEhMSEhMTExQUFBMTExMSEhMTExQUFBMSEhQTExMTExMSEhMSEhENDRMTExQTExQSEhkZGRMSEhQTExMSEhQTExQTExQTExQSEhkZGRMTExQTExMSEhURERMTEyQkJBUTExMSEhQUFBQTExQRERQSEhISEhQTExQSEhMSEhQSEhYUFBQTExQSEhEPDxMSEhMSEhQTExUUFBUUFBQTExUSEhQSEhQTExYWFhQTExQTExMTExMTExMSEhcXFxQSEhISEhQUFBMTExQTExQTEx4WFhUTExUTExwcHBQSEhcVFRQSEhMTExISEhQUFBERERMSEhMTExQSEhMTExMREQ8PDxMSEhQTExQTExQSEhMSEhMTExMSEhMSEhQTExUVFRQSEhwVFRUTExQTE1VVVRQSEhISEhQTExMTExMSEhMTExQSEhQTExMSEhMTExQNDRQTExMTExUTExQSEhQUFBQTExQUFBMSEhQUFBQUFBQSEhMSEhAQEBUUFBUSEhMSEg4ODhQSEhUTExUVFRUTExMTExQSEicnJxQUFBMTExQTExYTExMSEhQSEhMTExMSEhMTExQTExQUFBMTExQSEhMSEhQTExMSEhMRERQTExUTExQTExQSEhQUFBUQEBMSEhQTExISEhMTExMTExQTExUTExMRERQUFAoKChQTExQTExMSEhUTExUVFRMRERMRERERERMTExISEhMSEhMSEhQUFBUVFRYUFBcXFxUTExQTExQUFBUVFRMRERQUFBMSEhQSEhISEhQTExQUFBMTExMSEhUTE39/fxUUFBMRERQTExQSEhQUFBUQEBMTExUTExQTEx82S7sAAADldFJOUwDyF/379fe/Af4CA7cF/FK4EMr5BPD74CPJ0WoNkM5d69QTpOdnD6j2OePz6MEK+omjHa4Hui0/2CwcRtyEVXEh6X8iWouNOzPArIFZGu/s17LJC6YOm57xZRHRUAnQIEDVKksV7r3CSFgR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" id="image0_138_63" width="160" height="160" data-name="githubIcon.png"/>
      </defs>
    </svg>
    <p>이메일</p>
    <svg @click="goToEmail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 300 250">
      <defs>
        <path id="Line 11" d="M1-1h27.9"/>
      </defs>
      <g id="Frame 5">
        <path fill="#fff" d="M0 0h300v250H0z"/>
        <g id="email">
          <rect id="Rectangle 37" width="157" height="107.8" x="71.5" y="123.5" fill="#fff" stroke="url(#paint0_radial_138_64)" stroke-width="3" rx="8.5"/>
          <g id="Rectangle 38">
            <mask id="path-2-inside-1_138_64" fill="#fff">
              <path d="m150 177.4 72.1 49.9a3 3 0 0 1-1.7 5.5H79.6a3 3 0 0 1-1.7-5.5l72.1-50Z"/>
            </mask>
            <path fill="#fff" d="m150 177.4 72.1 49.9a3 3 0 0 1-1.7 5.5H79.6a3 3 0 0 1-1.7-5.5l72.1-50Z"/>
            <path fill="url(#paint1_radial_138_64)" d="M151.5 177.4v-3.5h-3v3.5h3Zm-1.5 0 1.7-2.5-1.7-1.2-1.7 1.2 1.7 2.5Zm72.1 49.9 1.7-2.5-1.7 2.5Zm-73.8-47.4 72.1 49.9 3.4-5-72-49.9-3.5 5Zm72.1 49.9H79.6v6h140.8v-6Zm-140.8 0 72.1-50-3.4-4.9-72.1 50 3.4 4.9Zm0 0-3.4-5a6 6 0 0 0 3.4 11v-6Zm140.8 0v6a6 6 0 0 0 3.4-11l-3.4 5Z" mask="url(#path-2-inside-1_138_64)"/>
          </g>
          <g id="top">
            <mask id="path-4-inside-2_138_64" fill="#fff">
              <path d="m150 189.8-73.7-61.6a3 3 0 0 1 2-5.3h143.4a3 3 0 0 1 2 5.3L150 189.8Z"/>
            </mask>
            <path fill="#fff" d="m150 189.8-73.7-61.6a3 3 0 0 1 2-5.3h143.4a3 3 0 0 1 2 5.3L150 189.8Z"/>
            <path fill="url(#paint2_radial_138_64)" d="M148.5 189.8v4.3h3v-4.3h-3Zm1.5 0-2 2.3 2 1.6 2-1.6-2-2.3Zm73.7-61.6-2-2.3 2 2.3Zm-147.4 0 2-2.3-2 2.3Zm75.6 59.3L78.3 126l-3.9 4.6 73.7 61.6 3.8-4.6ZM78.3 126h143.4v-6H78.3v6Zm143.4 0-73.6 61.6 3.8 4.6 73.7-61.6-3.9-4.6Zm0 0 3.9 4.6a6 6 0 0 0-3.9-10.6v6Zm-143.4 0v-6a6 6 0 0 0-3.9 10.6l3.9-4.6Z" mask="url(#path-4-inside-2_138_64)"/>
          </g>
          <g id="emark">
            <circle id="Ellipse 28" cx="150" cy="182.7" r="14.3" fill="#fff" stroke="url(#paint3_radial_138_64)" stroke-width="3"/>
            <path id="@" fill="#212121" d="M159.6 183.7c0 .7-.2 1.4-.4 2.2a7 7 0 0 1-.8 2c-.4.5-.9 1-1.5 1.4a4 4 0 0 1-2.1.5c-.6 0-1 0-1.4-.2-.4-.2-.8-.5-1-.9-.3-.3-.5-.8-.6-1.3v-1.7l.6-6.5h1.7l-.6 6.5v1.4c.1.4.2.7.4.9.2.1.3.3.5.3l.6.1c.5 0 .9 0 1.3-.3a3 3 0 0 0 .9-1l.6-1.5.3-1.9c0-1.2 0-2.2-.2-3.2s-.4-1.9-.8-2.6a6 6 0 0 0-3.7-3.1 9.4 9.4 0 0 0-5.6 0c-.8.3-1.6.7-2.2 1.3-.7.6-1.3 1.2-1.7 2a11 11 0 0 0-1.2 2.7 14.5 14.5 0 0 0 .6 9 6.6 6.6 0 0 0 3.7 3.2 9.2 9.2 0 0 0 6.6-.5l.4 1.4a6 6 0 0 1-2 .7 11.2 11.2 0 0 1-5.6-.2 8 8 0 0 1-4.5-3.7 15.2 15.2 0 0 1 .6-13.4 10 10 0 0 1 2-2.4 8.9 8.9 0 0 1 6-2c1.3 0 2.4 0 3.3.4a7.8 7.8 0 0 1 4.4 3.7c.5.9.9 1.9 1.1 3 .2 1.1.3 2.4.3 3.7Zm-12 1v1.5c0 .4 0 .8.2 1 .2.3.4.6.7.7a1.8 1.8 0 0 0 1.6 0c.2 0 .5-.2.7-.5.3-.2.5-.5.7-.9l.5-1.4.8.8a7 7 0 0 1-.7 1.7c-.3.5-.6 1-1 1.2a4 4 0 0 1-1 .8 3 3 0 0 1-1.3.2 3 3 0 0 1-1.5-.3c-.4-.3-.8-.6-1-1-.3-.5-.5-1-.6-1.7v-2.1a10.5 10.5 0 0 1 1.2-4.1c.3-.6.7-1 1.1-1.4.4-.4.9-.7 1.3-.9l1.4-.3c.9 0 1.5.1 2 .4l1.4.8-1 1.2-.9-.6c-.3-.2-.8-.3-1.3-.3l-1.2.3-1 1-.8 1.6-.4 2.3Z"/>
          </g>
        </g>
        <g class="light" id="light2" stroke="#D9DB8A" stroke-linecap="round" stroke-width="2">
          <path id="Line 8" d="M63.2 100.4 37.5 89.3"/>
          <use xlink:href="#Line 11" transform="scale(1 -1) rotate(23.4 359.2 519.2)"/>
          <path id="Line 9" d="M82.1 66.1 62.4 46.3"/>
          <use xlink:href="#Line 11" id="Line 12" transform="scale(1 -1) rotate(45 187.9 228)"/>
          <path id="Line 10" d="m112.5 35.2-7.2-27"/>
          <use xlink:href="#Line 11" id="Line 13" transform="scale(1 -1) rotate(75 116.4 103.2)"/>
        </g>
      </g>
      <defs>
        <radialGradient id="paint0_radial_138_64" cx="0" cy="0" r="1" gradientTransform="matrix(0 55.3846 -80 0 150 177.4)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AAA"/>
          <stop offset="1" stop-color="#212121"/>
        </radialGradient>
        <radialGradient id="paint1_radial_138_64" cx="0" cy="0" r="1" gradientTransform="matrix(0 29.4506 -80 0 150 203.3)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AAA"/>
          <stop offset="1" stop-color="#212121"/>
        </radialGradient>
        <radialGradient id="paint2_radial_138_64" cx="0" cy="0" r="1" gradientTransform="matrix(0 -35.6044 80 0 150 158.5)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AAA"/>
          <stop offset="1" stop-color="#212121"/>
        </radialGradient>
        <radialGradient id="paint3_radial_138_64" cx="0" cy="0" r="1" gradientTransform="rotate(90 -16.3 166.3) scale(15.8242)" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AAA"/>
          <stop offset="1" stop-color="#212121"/>
        </radialGradient>
      </defs>
    </svg>
    <p>오픈채팅</p>
    <svg @click="goToKakao" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 300 250">
      <defs>
        <path id="Line 11" d="M1-1h27.9"/>
      </defs>
      <g id="kakao">
        <path fill="#fff" d="M0 0h300v250H0z"/>
        <path id="kakao 1" fill="url(#pattern0)" d="M70 94h160v156H70z"/>
        <g class="light" id="light3" stroke="#D9DB8A" stroke-linecap="round" stroke-width="2">
          <path id="Line 8" d="M63.2 100.4 37.5 89.3"/>
          <use xlink:href="#Line 11" transform="scale(1 -1) rotate(23.4 359.2 519.2)"/>
          <path id="Line 9" d="M82.1 66.1 62.4 46.3"/>
          <use xlink:href="#Line 11" id="Line 12" transform="scale(1 -1) rotate(45 187.9 228)"/>
          <path id="Line 10" d="m112.5 35.2-7.2-27"/>
          <use xlink:href="#Line 11" id="Line 13" transform="scale(1 -1) rotate(75 116.4 103.2)"/>
        </g>
      </g>
      <defs>
        <pattern id="pattern0" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use xlink:href="#image0_138_73" transform="scale(.00625 .00641)"/>
        </pattern>
        <image xlink:href="data:image/png;base64,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" id="image0_138_73" width="160" height="156" data-name="kakao.png"/>
      </defs>
    </svg>
    <p>아이콘만 있다가 호버시 아이콘 이름 opacity 1 트렌지션</p>
  </div>
</template>

<script>
export default {
  setup () {
    const goToGithub = () => {
      open('https://github.com/swc9803')
    }
    const goToEmail = () => {
      open('mailto:swc9803@naver.com')
    }
    const goToKakao = () => {
      open('https://open.kakao.com/o/sA1wdaZd')
    }
    return {
      goToGithub, goToEmail, goToKakao
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 160px;
  .light {
    opacity: 0;
  }
}
</style>
