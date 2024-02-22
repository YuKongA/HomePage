
<script>
export default {
    data() {
        return {
            links: [
                { name: 'GitHub', url: 'https://github.com/YuKongA/' },
                { name: 'Telegram', url: 'https://t.me/YuKongA13579/' },
                { name: 'Bilibili', url: 'https://space.bilibili.com/275669376/' },
            ],
        };
    },
};
</script>

<template>
    <div class="myButton-container">
        <a class="meBox-button" v-for="(link, i) in links" :key="i" :href="link.url">
            {{ link.name }}
        </a>
    </div>
</template>

<style scoped>
.myButton-container {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}

.meBox-button {
    flex: 1;
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #00000018;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    text-shadow: #00000018;
    animation: floatUp 1s ease-out;
    transition: transform 0.3s ease;
}

.meBox-button:hover {
    transform: scale(1.02);
}

.meBox-button:first-child {
    margin-left: 0;
}

.meBox-button:last-child {
    margin-right: 0;
}

.meBox-button:hover {
    background-color: #00000038;
    transition: all 0.3s;
}
</style>