<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
    strings: ["YuKongA", "余空"],
    loop: true,
    backSpeed: 30,
    typeSpeed: 60,
    startDelay: 120,
};
</script>

<template>
    <div class="meBox-title">
        <Typed :options="options">
            <span class="typing"></span>
        </Typed>
    </div>
</template>

<style scoped>
.meBox-title {
    height: 100px;
    font-size: 3rem;
    color: #fff;
    text-shadow: 0.5px 0.5px 0 #000;
    margin: 40px auto 0px auto;
}
</style>