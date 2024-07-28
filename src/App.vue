<script setup>
import Hitokoto from './components/Hitokoto.vue';
import Copyright from './components/Copyright.vue';
import MyButton from './components/MyButton.vue';
</script>

<template>
  <div id="main">
    <div class="meBox-headPhoto"></div>
    <div class="center-flexbox">
      <div class="meBox">
        <div class="meBox-title text-blur">YukongA</div>
        <div class="meBox-line"></div>
        <Hitokoto />
        <MyButton />
      </div>
    </div>
  </div>

  <Copyright />
</template>

<style scoped>
.meBox {
  min-width: 30rem;
  max-width: 35rem;
}

.meBox-headPhoto {
  width: 8rem;
  height: 8rem;
  background: url(/YuKongA.webp);
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.45);
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.meBox-headPhoto:hover {
  transform: rotate(360deg) scale(1.1);
}

.meBox-title {
  font-size: 4rem;
}

.meBox-line {
  width: 150px;
  height: 4px;
  margin: 20px auto 40px auto;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/Blur_Text.webp);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

@media screen and (max-width : 560px) {
  .meBox {
    min-width: 100%;
  }
}
</style>