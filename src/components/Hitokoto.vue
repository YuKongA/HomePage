<script setup>
import { ref } from 'vue';

const hitokoto = ref({
    hitokoto: '不以物喜，不以己悲。',
    from: '岳阳楼记'
});

async function getHitokoto() {
    const response = await fetch('https://v1.hitokoto.cn/?max_length=20?c=a&c=b&c=c');
    hitokoto.value = await response.json();
}

getHitokoto();
</script>

<template>
    <div class="meBox-hitokoto main-blur">
        <div class="bracket left text-blur">“</div>
        <p class="text-blur">{{ hitokoto.hitokoto }}</p>
        <div class="bracket right text-blur">”</div>
        <p class="right-align text-blur">——「{{ hitokoto.from }}」</p>
    </div>
</template>

<style scoped>
.meBox-hitokoto {
    font-size: 1.2rem;
    text-shadow: #00000043;
    border-right: 0 solid;
    padding: 1.8rem;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    background-color: #00000050;
}

.right-align {
    text-align: right;
}

.bracket {
    font-size: 1.8rem;
    text-shadow: #00000043;
}

.bracket.left {
    text-align: left;
}

.bracket.right {
    text-align: right;
}
</style>