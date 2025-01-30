<script>
export default {
    data() {
        return {
            links: [
                { name: 'GitHub', url: 'https://github.com/YuKongA/' },
                { name: 'Telegram', url: 'https://t.me/YuKongA13579/' },
                { name: 'Afdian', url: 'https://afdian.com/a/YuKongA/' },
            ],
        };
    },
};
</script>

<template>
    <div class="myButton-container">
        <a class="meBox-button main-blur" v-for="(link, i) in links" :key="i" :href="link.url">
            <span class="click-status text-blur">
                {{ link.name }}
            </span>
        </a>
    </div>
</template>

<style scoped>
.myButton-container {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
}

.meBox-button {
    flex: 1;
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 10px;
    transition: all 0.3s;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    text-shadow: #00000043;
}

.meBox-button:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.67);
}

.meBox-button:first-child {
    margin-left: 0;
}

.meBox-button:last-child {
    margin-right: 0;
}

.click-status {
    transition: all 0.5s;
}

.click-status:active,
.click-status:focus {
    color: transparent;
}

.click-status:hover {
    color: #fff;
}
</style>