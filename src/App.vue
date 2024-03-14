<template>
    <div id="app">
        <language-switcher />
        <router-view />
    </div>
</template>

<script>
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

export default {
    name: "App",
    components: {
        LanguageSwitcher,
    },
};
</script>

<style></style>
