<script setup>
import TypeJS from './components/TypeJS.vue';
import Hitokoto from './components/Hitokoto.vue';
import Copyrights from './components/Copyrights.vue';
import MyButton from './components/MyButton.vue';
</script>

<script>
export default {
  methods: {
    handleAnimationEnd(event) {
      event.target.style.transition = 'transform 0.3s ease';
    },
  },
};
</script>

<template>
  <div id="main">
    <div class="center-flexbox">
      <div class="meBox">
        <div class="meBox-headPhoto"></div>
        <TypeJS />
        <div class="meBox-line"></div>
        <div class="meBox-main">
          <Hitokoto />
        </div>
        <MyButton />
      </div>
    </div>
  </div>
  <Copyrights />
</template>

<style scoped>
.meBox {
  min-width: 30rem;
  max-width: 35rem;
}

.meBox-headPhoto {
  width: 8rem;
  height: 8rem;
  background: url(/favicon.ico);
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  animation: floatUp 1s ease-out;
  transition: transform 0.67s ease;
}

.meBox-headPhoto:hover {
  transform: rotate(360deg) scale(1.1);
}

.meBox-main {
  padding: 2rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: #00000018;
  animation: floatUp 1s ease-out;
  transition: transform 0.3s ease;
}

.meBox-main:hover {
  transform: scale(1.01);
}

.meBox-line {
  width: 120px;
  height: 0.5px;
  background-color: #fff;
  margin: 0 auto 40px auto;
  animation: floatUp 1s ease-out;
}

@media screen and (max-width : 560px) {
  .meBox {
    min-width: 100%;
  }

  .meBox-main {
    box-sizing: border-box;
  }
}
</style>