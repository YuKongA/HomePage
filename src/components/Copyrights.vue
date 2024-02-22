<script setup>
import { ref } from 'vue';

const copyrights = ref('Copyrights © 2023 - ');
const links = ref([{ name: 'YuKongA', url: 'https://github.com/YuKongA/' }]);
</script>

<template>
    <div id="footer">
        <p>{{ copyrights }}
            <a class="footer-msg" v-for="link in links" :key="link.name" :href="link.url">{{ link.name }}</a>
        </p>
    </div>
</template>

<style scoped>
#footer {
    position: fixed;
    bottom: 8px;
    left: calc(50vw - 130px);
    right: calc(50vw - 130px);
    color: #FFF;
    padding: 5px;
    border-radius: 10px;
    background-color: #00000018;
    font-family: "MiSans VF";
    text-align: center;
    text-shadow: #00000018;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    transition: background-color 0.3s ease;
    animation: floatUp 0.3s ease-out forwards;
}

#footer:hover {
    background-color: #00000038;
}

a.footer-msg {
    color: #FFF;
    transition: color 0.3s;
}

a.footer-msg:visited {
    color: #FFF;
}

a.footer-msg:hover {
    color: #66CC66;
}

a.footer-msg:active {
    color: #FFCC7A;
}
</style>