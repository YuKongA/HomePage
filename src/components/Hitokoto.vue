<script setup>
import { ref } from 'vue';

const hitokoto = ref({
    hitokoto: '不以物喜，不以己悲。',
    from: '岳阳楼记'
});

async function getHitokoto() {
    const response = await fetch('https://v1.hitokoto.cn/?max_length=20&c=a&c=b&c=c');
    hitokoto.value = await response.json();
}

getHitokoto();
</script>

<template>
    <div class="meBox-hitokoto main-blur">
        <div class="sentence-wrap">
            <p class="sentence text-blur">{{ hitokoto.hitokoto }}</p>
        </div>
        <p class="from text-blur">—— {{ hitokoto.from }}</p>
    </div>
</template>

<style scoped>
.meBox-hitokoto {
    font-size: 1.2rem;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 10px rgba(0, 0, 0, 0.25), inset 1px rgba(255, 255, 255, 0.05);
    background-color: #00000050;
    border: 1px solid rgba(255, 255, 255, 0.08);
    text-shadow: #00000043;
}

.sentence {
    line-height: 1.9;
    font-size: 1.35rem;
    padding: 0 0.5rem;
    position: relative;
    text-wrap: balance;
}

.sentence-wrap {
    position: relative;
    padding: 0 1.3rem;
}

.from {
    margin-top: 1.4rem;
    text-align: right;
    font-size: 1.28rem;
    opacity: 0.9;
}

.sentence-wrap::before,
.sentence-wrap::after {
    content: "";
    position: absolute;
    font-size: 1.8rem;
    line-height: 1;
    user-select: none;
    background: url(/Blur_Text.webp);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(255, 255, 255, 0.5);
}

.sentence-wrap::before {
    content: "「";
    left: 0rem;
    top: 0rem;
}

.sentence-wrap::after {
    content: "」";
    right: 0rem;
    bottom: 0rem;
}

@media screen and (max-width: 560px) {
    .meBox-hitokoto {
        padding: 1.5rem;
        border-radius: 12px;
    }

    .sentence {
        font-size: 1.2rem;
        line-height: 1.8;
    }

    .sentence-wrap::before,
    .sentence-wrap::after {
        font-size: 1.6rem;
    }
}
</style>
