<script setup>
import { ref } from 'vue';

const copyrights = ref('Copyrights © 2023 - ');
const links = ref([{ name: 'YuKongA', url: 'https://github.com/YuKongA/' }]);
</script>

<template>
    <div id="footer" class="main-blur">
        <p class="text-blur">{{ copyrights }}
            <a class="footer-msg text-blur" v-for="link in links" :key="link.name" :href="link.url">{{ link.name }}</a>
        </p>
    </div>
</template>

<style scoped>
#footer {
    position: fixed;
    bottom: 8px;
    left: calc(50vw - 130px);
    right: calc(50vw - 130px);
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    text-shadow: #00000043;
    transition: all 0.3s ease;
}

#footer:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.67);
}

a.footer-msg {
    transition: color 0.3s;
}

a.footer-msg:hover {
    color: #66CC66;
}
</style>