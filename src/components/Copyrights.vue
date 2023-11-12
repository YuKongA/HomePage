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
    transition: all 0.5s ease-out;
    border-radius: 10px;
    transition: background-color 0.5s;
    font-family: "MiSans VF";
    text-align: center;
}

#footer:hover {
    background-color: rgb(0, 0, 0, 0.67);
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