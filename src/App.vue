<script setup>
import TypeJS from './components/TypeJS.vue';
import Hitokoto from './components/Hitokoto.vue';
import Copyrights from './components/Copyrights.vue';
</script>

<template>
  <div id="marpper">
    <div class="meBox">
      <div class="meBox-headPhoto"></div>
      <TypeJS />
      <div class="meBox-line"></div>
      <Hitokoto />
      <div class="meBox-link">
        <a href="https://font.yukonga.top/">字体字重测试</a>
      </div>
      <div class="meBox-link">
        <a href="https://icon.yukonga.top/">iOS 应用图标</a>
      </div>
    </div>
  </div>
  <Copyrights />
</template>

<style scoped>
.meBox {
  text-align: center;
}

.meBox-headPhoto {
  width: 8rem;
  height: 8rem;
  background: url(/favicon.ico) no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.65s;
}

.meBox-headPhoto:hover {
  transform: rotate(360deg);
}


.meBox-line {
  width: 120px;
  height: 0.5px;
  background-color: #fff;
  border-radius: 50px;
  margin: 0 auto 40px auto;
}

.meBox-link {
  width: 115px;
  text-align: center;
  padding: 10px;
  display: inline-block;
  border: solid 1px #fff;
  border-radius: 8px;
  background-color: rgb(0, 0, 0, 0.05);
  transition: background-color 0.35s;
  margin: 5px;
}

.meBox-link:hover {
  background-color: rgb(255, 255, 255, 0.25);
}

@media screen and (max-width : 560px) {
  .meBox-link {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>