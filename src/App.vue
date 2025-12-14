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
        <div class="meBox-title text-blur">YuKongA</div>
        <div class="meBox-divider"></div>
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
  margin-bottom: 1.2rem;
}

.meBox-title {
  font-size: 4.5rem;
  line-height: 1.2;
}

.meBox-divider {
  height: 3px;
  width: 100px;
  margin: 12px auto 24px;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/Blur_Text.webp);
  background-repeat: no-repeat, no-repeat;
  background-attachment: fixed, fixed;
  background-position: center, center;
  background-size: cover, cover;
  border-radius: 999px;
  position: relative;
}

@media screen and (max-width : 560px) {
  .meBox {
    min-width: 100%;
  }
}
</style>
