<script setup>
import { ref } from 'vue';

const hitokoto = ref('');

async function getHitokoto() {
    const response = await fetch('https://v1.hitokoto.cn/?max_length=20');
    hitokoto.value = await response.json();
}

getHitokoto();
</script>

<template>
    <div class="meBox-hitokoto">
        <p>{{ hitokoto.hitokoto }} —— 「{{ hitokoto.from }}」</p>
    </div>
</template>

<style scoped>
.meBox-hitokoto {
    font-size: 1.2rem;
    text-shadow: 0.5px 0.5px 0 #000;
    border-right: 0 solid;
    width: 80%;
    margin: 0 auto;
    padding: 0 0 40px;
}
</style>