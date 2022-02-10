<template>
  <div class="footer">
    <svg @click="goToGithub" @mouseover="play1" @mouseout="reverse1" ref="gitIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 300 300">
      <defs>
        <path id="Line 11" d="M1-1h27.9"/>
      </defs>
      <g id="github">
        <path fill="#212121" d="M0 0h300v300H0z"/>
        <g ref="light1" id="light1" stroke="#D9DB8A" stroke-linecap="round" stroke-width="2">
          <path id="Line 8" d="M63.2 100.4 37.5 89.3"/>
          <use xlink:href="#Line 11" transform="scale(1 -1) rotate(23.4 359.2 519.2)"/>
          <path id="Line 9" d="M82.1 66.1 62.4 46.3"/>
          <use xlink:href="#Line 11" id="Line 12" transform="scale(1 -1) rotate(45 187.9 228)"/>
          <path id="Line 10" d="m112.5 35.2-7.2-27"/>
          <use xlink:href="#Line 11" id="Line 13" transform="scale(1 -1) rotate(75 116.4 103.2)"/>
        </g>
        <path ref="gitText" id="gitText" fill="#fff" d="M111.3 275.4c0 1.4.1 2.6.4 3.7.3 1 .6 2 1 2.7.5.8 1 1.3 1.6 1.7.6.4 1.3.6 2 .6.6 0 1.2-.2 1.7-.5.5-.2 1-.6 1.3-1 .4-.5.6-1 .8-1.6l.3-1.8v-1.6H116v-2.9h9v4.3a7 7 0 0 1-2.7 5.7 9 9 0 0 1-3 1.6c-1 .4-2.1.6-3.3.6-1.4 0-2.6-.3-3.8-.8a8 8 0 0 1-3-2c-.8-1-1.5-2.2-2-3.6-.4-1.4-.6-3.1-.6-5 0-2 .2-3.6.7-5 .5-1.5 1.2-2.7 2-3.6 1-1 2-1.7 3-2.2a10.5 10.5 0 0 1 7.1-.2c1.1.3 2 .7 2.7 1.2a6 6 0 0 1 1.7 2c.4.7.6 1.4.6 2.2 0 .7-.3 1.3-.8 1.7-.4.5-1 .7-1.7.7-1.1 0-2-.5-2.4-1.5.2-.5.2-1 .2-1.4 0-.5-.2-.9-.5-1.3a3 3 0 0 0-1.2-1 4 4 0 0 0-3.8.2c-.5.4-1 1-1.5 1.7a10 10 0 0 0-1 2.7c-.3 1.1-.4 2.3-.4 3.7Zm20.4 10.7h-4.5v-12.2c0-.3 0-.6-.2-.8a1 1 0 0 0-.5-.6l5.2-1.7V286Zm0-22v4.5h-4.5V264h4.5Zm2 6.6h2.4V268l-.1-.8a1 1 0 0 0-.6-.5l5.2-1.8v5.8h3.3v2.8h-3.3v8.7c0 .8.1 1.3.4 1.5.2.3.5.4 1 .4.3 0 .6 0 .9-.2l.8-.4.5 2.3c-.5.5-1.1.7-1.7.9l-1.7.2c-1.7 0-2.9-.5-3.6-1.3-.7-.9-1.1-2.3-1.1-4.3v-7.8h-2.4v-2.8Zm26.2 15.4h-4.5v-10c0-1-.2-1.8-.6-2.3-.4-.6-1.1-.8-2.1-.8a6 6 0 0 0-2.2.4V286H146v-19c0-.2 0-.5-.2-.7a1 1 0 0 0-.5-.6l5.2-1.8v6.8a8 8 0 0 1 1.7-.5l1.9-.2c1.2 0 2.2.2 3 .6.7.3 1.3.8 1.8 1.3.4.6.7 1.2.8 1.9.2.7.2 1.3.2 2V286Zm16.7-16.3V286H172v-1c-.5.5-1 .8-1.7 1-.7.3-1.4.4-2.1.4-1 0-2-.2-2.7-.6a5 5 0 0 1-2.7-3.2l-.2-2V273c0-.2 0-.5-.2-.7a1 1 0 0 0-.5-.6l5.2-1.7v10.5c0 1 .2 1.8.6 2.4.4.5 1 .7 1.7.7.5 0 1 0 1.5-.3l1.1-.8v-9.7l-.1-.7a1 1 0 0 0-.6-.6l5.3-1.7Zm10.6 16.7c-.7 0-1.3-.1-1.8-.3-.6-.2-1.1-.4-1.7-.8v.7h-4.5v-19c0-.2 0-.5-.2-.7a1 1 0 0 0-.5-.6l5.2-1.8v7.7c.5-.4 1-.6 1.6-.9.6-.2 1.2-.3 1.9-.3 1 0 2 .2 2.8.6a7 7 0 0 1 3.3 4.2 11.7 11.7 0 0 1 0 6.6c-.4 1-.8 1.7-1.4 2.4-.6.7-1.2 1.2-2 1.6a6 6 0 0 1-2.7.6Zm2-7.7c0-1-.1-1.9-.3-2.6a5 5 0 0 0-.8-1.7l-1-.9-1.1-.2a3.6 3.6 0 0 0-2.3.7v9l1 .4 1 .1c.5 0 1 0 1.3-.2.5-.2.8-.5 1.1-.9.3-.4.6-.9.8-1.5.2-.6.3-1.3.3-2.2Z"/>
        <path id="git" fill="#fff" fill-rule="evenodd" d="M150 88a80 80 0 0 0-25.3 155.9c4 .7 5.5-1.7 5.5-3.8l-.1-14.9c-20.1 3.7-25.3-4.9-26.9-9.4-.9-2.3-4.8-9.4-8.2-11.3-2.8-1.5-6.8-5.2-.1-5.3 6.3-.1 10.8 5.8 12.3 8.2 7.2 12.1 18.7 8.7 23.3 6.6.7-5.2 2.8-8.7 5.1-10.7-17.8-2-36.4-8.9-36.4-39.5 0-8.7 3.1-15.9 8.2-21.5-.8-2-3.6-10.2.8-21.2 0 0 6.7-2.1 22 8.2a74.2 74.2 0 0 1 40 0c15.3-10.4 22-8.2 22-8.2 4.4 11 1.6 19.2.8 21.2a31 31 0 0 1 8.2 21.5c0 30.7-18.7 37.5-36.5 39.5 2.9 2.5 5.4 7.3 5.4 14.8l-.1 22c0 2.1 1.5 4.6 5.5 3.8A80.1 80.1 0 0 0 150 88Z" clip-rule="evenodd"/>
      </g>
    </svg>
    <svg @click="goToEmail" @mouseover="play2" @mouseout="reverse2" ref="emailIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 300 300">
      <defs>
        <path id="Line 11" d="M1-1h27.9"/>
      </defs>
      <g id="email">
        <path fill="#212121" d="M0 0h300v300H0z"/>
        <g id="email_2">
          <rect id="Rectangle 37" width="157" height="107.8" x="71.5" y="123.5" fill="#2E2E2E" stroke="#fff" stroke-width="3" rx="8.5"/>
          <g id="Rectangle 38">
            <mask id="path-2-inside-1_138_64" fill="#fff">
              <path d="m150 177.4 72.1 49.9a3 3 0 0 1-1.7 5.5H79.6a3 3 0 0 1-1.7-5.5l72.1-50Z"/>
            </mask>
            <path fill="#212121" d="m150 177.4 72.1 49.9a3 3 0 0 1-1.7 5.5H79.6a3 3 0 0 1-1.7-5.5l72.1-50Z"/>
            <path fill="#fff" d="M151.5 177.4v-3.5h-3v3.5h3Zm-1.5 0 1.7-2.5-1.7-1.2-1.7 1.2 1.7 2.5Zm72.1 49.9 1.7-2.5-1.7 2.5Zm-73.8-47.4 72.1 49.9 3.4-5-72-49.9-3.5 5Zm72.1 49.9H79.6v6h140.8v-6Zm-140.8 0 72.1-50-3.4-4.9-72.1 50 3.4 4.9Zm0 0-3.4-5a6 6 0 0 0 3.4 11v-6Zm140.8 0v6a6 6 0 0 0 3.4-11l-3.4 5Z" mask="url(#path-2-inside-1_138_64)"/>
          </g>
          <path id="topunder" fill="#fff" stroke="#fff" stroke-width="3" d="m150 175.6-67.5-51.2h135L150 175.6Z"/>
          <g ref="top" id="top">
            <mask id="path-5-inside-2_138_64" fill="#fff">
              <path d="M150 190.5 78 123h144l-72 67.5Z"/>
            </mask>
            <path fill="#212121" d="M150 190.5 78 123h144l-72 67.5Z"/>
            <path fill="#fff" d="M148.5 190.5V211h3v-20.5h-3Zm1.5 0-2 2.2 2 2 2-2-2-2.2ZM78 123v-3h-7.6l5.5 5.2L78 123Zm144 0 2 2.2 5.6-5.2H222v3Zm-70 65.3-72-67.5-4 4.4 72 67.5 4-4.4ZM78 126h144v-6H78v6Zm142-5.2-72 67.5 4 4.4 72-67.5-4-4.4Z" mask="url(#path-5-inside-2_138_64)"/>
          </g>
          <g ref="paper" id="paper">
            <path id="Rectangle 32" fill="#fff" d="M121 97h58v62.3L150 187l-29-27.7V97Z"/>
            <path id="Line 5" stroke="#000" d="M126 129.1h48"/>
            <path id="Line 6" stroke="#000" d="M126 138.2h48"/>
            <path id="Line 4" stroke="#000" d="M126 120.1h48"/>
            <path id="Line 7" stroke="#000" d="M126 148.4h48"/>
            <path id="Line 8" stroke="#000" d="M126 158.6h48"/>
          </g>
          <g ref="emark" id="emark">
            <circle id="Ellipse 28" cx="150" cy="182.7" r="14.3" fill="#212121" stroke="#fff" stroke-width="3"/>
            <path id="@" fill="#fff" d="M159.6 183.7c0 .7-.2 1.4-.4 2.2a7 7 0 0 1-.8 2c-.4.5-.9 1-1.5 1.4a4 4 0 0 1-2.1.5c-.6 0-1 0-1.4-.2-.4-.2-.8-.5-1-.9-.3-.3-.5-.8-.6-1.3v-1.7l.6-6.5h1.7l-.6 6.5v1.4c.1.4.2.7.4.9.2.1.3.3.5.3l.6.1c.5 0 .9 0 1.3-.3a3 3 0 0 0 .9-1l.6-1.5.3-1.9c0-1.2 0-2.2-.2-3.2s-.4-1.9-.8-2.6a6 6 0 0 0-3.7-3.1 9.4 9.4 0 0 0-5.6 0c-.8.3-1.6.7-2.2 1.3-.7.6-1.3 1.2-1.7 2a11 11 0 0 0-1.2 2.7 14.5 14.5 0 0 0 .6 9 6.6 6.6 0 0 0 3.7 3.2 9.2 9.2 0 0 0 6.6-.5l.4 1.4a6 6 0 0 1-2 .7 11.2 11.2 0 0 1-5.6-.2 8 8 0 0 1-4.5-3.7 15.2 15.2 0 0 1 .6-13.4 10 10 0 0 1 2-2.4 8.9 8.9 0 0 1 6-2c1.3 0 2.4 0 3.3.4a7.8 7.8 0 0 1 4.4 3.7c.5.9.9 1.9 1.1 3 .2 1.1.3 2.4.3 3.7Zm-12 1v1.5c0 .4 0 .8.2 1 .2.3.4.6.7.7a1.8 1.8 0 0 0 1.6 0c.2 0 .5-.2.7-.5.3-.2.5-.5.7-.9l.5-1.4.8.8a7 7 0 0 1-.7 1.7c-.3.5-.6 1-1 1.2a4 4 0 0 1-1 .8 3 3 0 0 1-1.3.2 3 3 0 0 1-1.5-.3c-.4-.3-.8-.6-1-1-.3-.5-.5-1-.6-1.7v-2.1a10.5 10.5 0 0 1 1.2-4.1c.3-.6.7-1 1.1-1.4.4-.4.9-.7 1.3-.9l1.4-.3c.9 0 1.5.1 2 .4l1.4.8-1 1.2-.9-.6c-.3-.2-.8-.3-1.3-.3l-1.2.3-1 1-.8 1.6-.4 2.3Z"/>
          </g>
        </g>
        <g ref="light2" id="light2" stroke="#D9DB8A" stroke-linecap="round" stroke-width="2">
          <path id="Line 8_2" d="M63.2 100.4 37.5 89.3"/>
          <use xlink:href="#Line 11" transform="scale(1 -1) rotate(23.4 359.2 519.2)"/>
          <path id="Line 9" d="M82.1 66.1 62.4 46.3"/>
          <use xlink:href="#Line 11" id="Line 12" transform="scale(1 -1) rotate(45 187.9 228)"/>
          <path id="Line 10" d="m112.5 35.2-7.2-27"/>
          <use xlink:href="#Line 11" id="Line 13" transform="scale(1 -1) rotate(75 116.4 103.2)"/>
        </g>
        <path ref="emailText" id="emailText" fill="#fff" d="m115 267.1-.1-.7a1 1 0 0 0-.6-.6l5.4-1.8v1h9.7v2.8h-9.7v5.5h9.1v2.8h-9v7.1h10.4v2.9H115v-19Zm38.8 19h-4.4v-10a4 4 0 0 0-.6-2.2c-.3-.6-.9-.8-1.6-.8a3 3 0 0 0-2.2.8c.3.8.4 1.5.4 2.1v10h-4.5v-9.8c0-1-.1-1.8-.5-2.3-.3-.6-.8-.8-1.7-.8a3 3 0 0 0-1.2.2c-.3.1-.7.3-1 .6V286h-4.4v-13.3l-.1-.7a1 1 0 0 0-.6-.6l5.2-1.7v1.5c.5-.3 1-.6 1.7-.8l1.8-.3a4.9 4.9 0 0 1 4 1.8c.6-.7 1.4-1.2 2.2-1.4.9-.2 1.7-.4 2.5-.4 1 0 1.8.2 2.4.6.7.3 1.2.8 1.6 1.4.3.5.6 1.1.8 1.8l.2 2v10Zm16.8 0h-4.5v-1l-2.2 1c-.9.3-1.8.4-2.8.4-1.5 0-2.8-.4-3.8-1.2-1-.8-1.4-2-1.4-3.6 0-.8.2-1.5.6-2 .4-.7 1-1.1 1.5-1.6l2.1-1 2.3-.5a23.8 23.8 0 0 1 3.7-.2c-.1-1.3-.4-2.1-1-2.7-.4-.5-1-.8-1.7-.8-.8 0-1.6.2-2.2.7a7 7 0 0 0-1.8 1.8l-2.8-2.2c.7-1 1.6-1.8 2.8-2.3a10.2 10.2 0 0 1 6.8-.4 6 6 0 0 1 2.3 1.2c.6.5 1.1 1.2 1.5 2 .4 1 .6 2 .6 3.2v9.2Zm-10-4.2c0 .6.3 1 .7 1.4.4.2 1 .3 1.6.3.6 0 1.1 0 1.7-.2a8 8 0 0 0 1.5-.7v-4a49.7 49.7 0 0 0-3.6.8c-.3.1-.7.3-1 .6l-.6.8a2 2 0 0 0-.2 1Zm17.2 4.2h-4.6v-12.2l-.1-.8a1 1 0 0 0-.6-.6l5.3-1.7V286Zm0-22v4.5h-4.6V264h4.6Zm7.2 22h-4.6v-19l-.1-.7a1 1 0 0 0-.6-.6l5.3-1.8v22Z"/>
      </g>
    </svg>
    <svg @click="goToKakao" @mouseover="play3" @mouseout="reverse3" ref="kakaoIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 300 300">
      <defs>
        <path id="Line 11" d="M1-1h27.9"/>
      </defs>
      <g id="kakao">
        <path fill="#212121" d="M0 0h300v300H0z"/>
        <g ref="light3" id="light3" stroke="#D9DB8A" stroke-linecap="round" stroke-width="2">
          <path id="Line 8" d="M63.2 100.4 37.5 89.3"/>
          <use xlink:href="#Line 11" transform="scale(1 -1) rotate(23.4 359.2 519.2)"/>
          <path id="Line 9" d="M82.1 66.1 62.4 46.3"/>
          <use xlink:href="#Line 11" id="Line 12" transform="scale(1 -1) rotate(45 187.9 228)"/>
          <path id="Line 10" d="m112.5 35.2-7.2-27"/>
          <use xlink:href="#Line 11" id="Line 13" transform="scale(1 -1) rotate(75 116.4 103.2)"/>
        </g>
        <path ref="kakaoText" id="kakaoText" fill="#fff" d="M120.6 265.7h-3.8V249.9l-.5-.5 4.3-1.4v7.3l5.4-6.6h4.1l-6.4 7.5 7.3 9.5h-4.2l-5.2-7-1 1.1v5.9Zm22.2 0H139v-.8l-1.7.8c-.7.2-1.4.3-2.2.3-1.3 0-2.3-.3-3-1-.8-.6-1.2-1.6-1.2-2.9 0-.6.2-1.1.5-1.6s.7-.9 1.2-1.2a9.6 9.6 0 0 1 3.5-1.2 18.6 18.6 0 0 1 3-.2c-.1-1-.4-1.7-.8-2.1-.3-.5-.8-.7-1.4-.7a3 3 0 0 0-1.8.6c-.5.4-1 .8-1.4 1.4l-2.2-1.7c.6-.8 1.3-1.5 2.2-1.9a8.2 8.2 0 0 1 5.4-.4l1.9 1c.5.5.9 1 1.2 1.7.3.7.5 1.5.5 2.5v7.4Zm-8-3.4c0 .5.2.9.5 1.1.4.2.8.3 1.4.3.4 0 .8 0 1.2-.2l1.2-.5v-3.2a36.2 36.2 0 0 0-2.8.6 3 3 0 0 0-.7.5c-.3.1-.4.4-.6.6l-.2.8Zm13.7 3.4H145v-15.2l-.1-.6-.5-.5 4.2-1.4v9.4l3.5-4h4l-4.5 4.8 5.4 7.5h-4.1l-3.4-5.2-.9 1v4.2Zm20.4 0h-3.6v-.8l-1.8.8c-.6.2-1.3.3-2.1.3-1.3 0-2.3-.3-3-1-.8-.6-1.2-1.6-1.2-2.9 0-.6.1-1.1.5-1.6.3-.5.7-.9 1.2-1.2a9.6 9.6 0 0 1 3.5-1.2 18.6 18.6 0 0 1 2.9-.2c0-1-.3-1.7-.7-2.1-.4-.5-.9-.7-1.4-.7a3 3 0 0 0-1.8.6c-.6.4-1 .8-1.4 1.4l-2.3-1.7c.6-.8 1.3-1.5 2.2-1.9 1-.4 2-.6 3.2-.6.8 0 1.6 0 2.3.3.7.2 1.3.5 1.8 1 .5.4 1 1 1.3 1.6.3.7.4 1.5.4 2.5v7.4Zm-8-3.4c0 .5.3.9.6 1.1.3.2.8.3 1.3.3.4 0 .9 0 1.3-.2l1.2-.5v-3.2a36.8 36.8 0 0 0-2.8.6 2.6 2.6 0 0 0-1.3 1.1c-.2.2-.2.5-.2.8Zm13.5-2.7c0 .6 0 1.2.2 1.8l.5 1.4.8 1 1.2.2c.4 0 .8 0 1.2-.3.3-.2.6-.5.8-1 .3-.3.4-.8.5-1.3a7.9 7.9 0 0 0-.5-5l-.8-1a2 2 0 0 0-1.2-.3 2 2 0 0 0-1.2.4c-.3.2-.6.5-.8 1l-.5 1.3-.2 1.8Zm-3.8 0c0-1 .2-2 .5-2.8a6.5 6.5 0 0 1 6-4 6.6 6.6 0 0 1 4.6 1.9l1.4 2c.3 1 .5 1.8.5 2.9a7 7 0 0 1-2 5 6.6 6.6 0 0 1-7 1.3 6.2 6.2 0 0 1-3.5-3.5c-.3-.8-.5-1.8-.5-2.8Zm-33.7 34h-3.7V279h-4.7v-2.3h13v2.3h-4.6v14.7Zm15.4 0h-3.7v-.7l-1.7.8c-.7.2-1.4.3-2.2.3-1.3 0-2.3-.3-3-1-.8-.6-1.2-1.6-1.2-2.9 0-.6.2-1.1.5-1.6s.7-.9 1.2-1.2a9.6 9.6 0 0 1 3.5-1.2 18.6 18.6 0 0 1 3-.2c-.1-1-.4-1.7-.8-2.1-.3-.5-.8-.7-1.4-.7a3 3 0 0 0-1.8.6c-.5.4-1 .8-1.4 1.4l-2.2-1.7c.6-.8 1.3-1.5 2.2-1.9a8.2 8.2 0 0 1 5.4-.4l1.9 1c.5.5 1 1 1.2 1.7.3.7.5 1.5.5 2.5v7.4Zm-8-3.3c0 .5.2.9.5 1.1.4.2.8.3 1.4.3.4 0 .8 0 1.2-.2l1.2-.5v-3.2a36.2 36.2 0 0 0-2.8.6 3 3 0 0 0-.7.5c-.3.1-.4.4-.6.6l-.2.8Zm13.7 3.4h-3.6v-15.2l-.1-.6-.5-.5 4.2-1.4v17.7Zm5.8 0H160V277.9l-.5-.5 4.2-1.4v9.4l3.4-4h4.1l-4.5 4.8 5.4 7.5H168l-3.4-5.2-.8 1v4.2Z"/>
        <g ref="katalk" id="Group 11" fill="#fff" fill-rule="evenodd" clip-rule="evenodd">
          <path id="Vector" d="M150 94a70 70 0 1 0 0 140 70 70 0 0 0 0-140Zm-46.7 68.9c0-20.3 21-36.8 46.7-36.8 25.8 0 46.7 16.5 46.7 36.8 0 20.3-21 36.8-46.7 36.8-2.8 0-5.6-.2-8.3-.6a251.8 251.8 0 0 1-19.7 13s-.6.3-1.1 0c-.5-.3-.4-1.1-.4-1.1.1-1 4-14.5 4.7-17-13.1-6.5-21.9-18-21.9-31.1Z"/>
          <path id="Vector_2" d="M124.2 175.7a2.6 2.6 0 0 1-2.7-2.5v-16h-4.2a2.6 2.6 0 0 1 0-5.3h13.8a2.6 2.6 0 1 1 0 5.3h-4.2v16c0 1.4-1.2 2.5-2.7 2.5Zm23.6 0c-1.1 0-2-.5-2.2-1.2l-1.4-3.5H136l-1.3 3.5c-.3.7-1.1 1.2-2.3 1.2a4 4 0 0 1-1.7-.4c-.7-.3-1.4-1.3-.6-3.8l6.4-17a4 4 0 0 1 3.6-2.6 4 4 0 0 1 3.6 2.6l6.5 17c.8 2.5 0 3.5-.7 3.8-.5.3-1.1.4-1.7.4Zm-5-9.5-2.7-7.6-2.7 7.6h5.4Zm11.7 9.1a2.5 2.5 0 0 1-2.6-2.4v-18.3c0-1.5 1.2-2.7 2.8-2.7 1.5 0 2.7 1.2 2.7 2.7v15.8h5.7c1.4 0 2.6 1.1 2.6 2.5 0 1.3-1.2 2.4-2.6 2.4h-8.6Zm15 .4a2.7 2.7 0 0 1-2.7-2.7v-18.4a2.7 2.7 0 0 1 5.3 0v5.8l7.5-7.5a2 2 0 0 1 1.5-.6c.7 0 1.4.2 1.9.7.5.5.7 1.1.8 1.8 0 .6-.2 1.2-.6 1.6l-6.1 6.1 6.6 8.8a2.7 2.7 0 0 1 .5 2 2.7 2.7 0 0 1-3.9 2l-1-.7-6.2-8.4-1 1v5.8a2.7 2.7 0 0 1-2.7 2.7Z"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const goToGithub = () => { open('https://github.com/swc9803') }
    const goToEmail = () => { open('mailto:swc9803@naver.com') }
    const goToKakao = () => { open('https://open.kakao.com/o/sA1wdaZd') }
    const gitIcon = ref()
    const emailIcon = ref()
    const kakaoIcon = ref()
    const gitText = ref()
    const emailText = ref()
    const kakaoText = ref()
    const light1 = ref()
    const light2 = ref()
    const light3 = ref()
    const top = ref()
    const paper = ref()
    const emark = ref()
    const katalk = ref()
    const iconAni1 = gsap.timeline({ paused: true })
    const iconAni2 = gsap.timeline({ paused: true })
    const iconAni3 = gsap.timeline({ paused: true })

    onMounted(() => {
      iconAni1.to(gitIcon.value, {
        yPercent: -5, opacity: 1, duration: 0.3
      })
      iconAni1.to(light1.value, {
        opacity: 1
      }, '<')
      iconAni1.to(gitText.value, {
        opacity: 1
      }, '<')

      iconAni2.to(emailIcon.value, {
        yPercent: -5, opacity: 1, duration: 0.3
      })
      iconAni2.to(light2.value, {
        opacity: 1
      }, '<')
      iconAni2.to(emailText.value, {
        opacity: 1
      }, '<')
      iconAni2.to(emark.value, {
        opacity: 0, duration: 0.3
      }, '<')
      iconAni2.set(top.value, {
        yPercent: -90, rotate: 180, transformOrigin: 'center center'
      }, '<')
      iconAni2.to(paper.value, {
        opacity: 1, duration: 0.3
      }, '<')

      iconAni3.to(kakaoIcon.value, {
        yPercent: -5, opacity: 1, duration: 0.3
      })
      iconAni3.to(light3.value, {
        opacity: 1
      }, '<')
      iconAni3.to(kakaoText.value, {
        opacity: 1
      }, '<')
      iconAni3.fromTo(katalk.value, { xPercent: '3' }, { xPercent: '-3', repeat: 3, duration: 0.1 }, '>')
    })

    const play1 = () => iconAni1.play()
    const play2 = () => iconAni2.play()
    const play3 = () => iconAni3.play()
    const reverse1 = () => iconAni1.reverse()
    const reverse2 = () => iconAni2.reverse()
    const reverse3 = () => iconAni3.reverse()

    return {
      goToGithub,
      goToEmail,
      goToKakao,
      gitIcon,
      emailIcon,
      kakaoIcon,
      gitText,
      emailText,
      kakaoText,
      light1,
      light2,
      light3,
      top,
      paper,
      emark,
      katalk,
      play1,
      play2,
      play3,
      reverse1,
      reverse2,
      reverse3
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  transform: translate(-50%);
  left: 50%;
  display: flex;
  justify-content: center;
  svg {
    opacity: 0.7;
    cursor: pointer;
    width: 140px;
    margin: 20px 10px 10px 10px;
    #light1,
    #light2,
    #light3 {
      opacity: 0;
    }
    #gitText,
    #emailText,
    #kakaoText {
      opacity: 0;
    }
    #paper {
      opacity: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .footer {
    svg {
      width: 100px;
    }
  }
}
</style>
