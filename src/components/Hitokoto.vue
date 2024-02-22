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
    <div class="meBox-hitokoto">
        <div class="bracket left">“</div>
        <p>{{ hitokoto.hitokoto }}</p>
        <div class="bracket right">”</div>
        <p class="right-align">——「{{ hitokoto.from }}」</p>
    </div>
</template>

<style scoped>
.meBox-hitokoto {
    font-size: 1.2rem;
    text-shadow: #00000018;
    border-right: 0 solid;
}

.right-align {
    text-align: right;
}

.bracket {
    font-size: 2rem;
    color: #fff;
    text-shadow: #00000018;
}

.bracket.left {
    text-align: left;
}

.bracket.right {
    text-align: right;
}
</style>