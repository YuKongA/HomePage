<template>
  <div id="app-root">
    <div id="wrapper">
      <header id="header">
        <div class="logo">
          <img src="/YuKongA.webp" alt="YuKongA" width="80%" height="80%" style="position: relative; top: 10%"
            loading="eager" decoding="async">
        </div>
        <div class="content">
          <div class="inner">
            <h1>YuKongA</h1>
          </div>
        </div>
        <nav ref="nav">
          <ul>
            <li><a href="https://font.yukonga.top/">字体字重测试</a></li>
            <li><a href="https://afdian.com/a/YuKongA/">爱发电</a></li>
            <li><a href="https://icon.yukonga.top/">获取高清图标</a></li>
            <li><a href="https://t.me/YuKongA13579/">Telegram</a></li>
            <li><a href="https://github.com/YuKongA/">GitHub</a></li>
            <li><a href="https://miuix-js.yukonga.top/">Miuix Demo</a></li>
          </ul>
        </nav>
      </header>

      <footer id="footer">
        <p class="copyright">
          Copyright &copy; {{ new Date().getFullYear() }} YuKongA
        </p>
      </footer>
    </div>

    <div id="bg" :style="bgStyle"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

const nav = ref(null)
const bgs = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp']
const bgIndex = Math.floor(Math.random() * bgs.length)
const currentBg = bgs[bgIndex]
const bgStyle = computed(() => ({
  '--bg-image': `url("/${currentBg}")`
}))

const preloadLink = document.createElement('link')
preloadLink.rel = 'preload'
preloadLink.as = 'image'
preloadLink.href = `/${currentBg}`
document.head.appendChild(preloadLink)

onMounted(() => {
  const body = document.body
  const img = new Image()
  img.src = `/${currentBg}`

  const reveal = () => {
    requestAnimationFrame(() => {
      body.classList.remove('is-preload')
    })
  }

  if (img.complete) {
    reveal()
  } else {
    img.onload = reveal
    img.onerror = reveal
    setTimeout(reveal, 800)
  }

  const $nav = nav.value
  if ($nav) {
    const items = $nav.querySelectorAll('li')
    if (items.length % 2 === 0) {
      $nav.classList.add('use-middle')
      const mid = items[items.length / 2]
      if (mid) mid.classList.add('is-middle')
    }
  }
})
</script>

<style>
#bg:after {
  transform: scale(1.125);
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out;
  filter: blur(10px);
  background-image: var(--bg-image);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  will-change: transform, filter;
}
</style>
