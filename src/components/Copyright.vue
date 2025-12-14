<template>
    <div id="footer">
        <p class="text-blur">Copyright © 2025 - YuKongA</p>
    </div>
</template>

<style scoped>
#footer {
    position: fixed;
    bottom: max(8px, env(safe-area-inset-bottom));
    left: 16px;
    right: 16px;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    text-shadow: #00000043;
    transition: all 0.3s ease;
    z-index: 10;
}
</style>
