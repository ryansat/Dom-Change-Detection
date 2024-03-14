<template>
    <select v-model="selectedLocale" @change="changeLocale">
        <option value="en">English</option>
        <option value="id">Bahasa Indonesia</option>
    </select>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const { locale } = useI18n();
        const selectedLocale = ref(locale.value);

        const changeLocale = () => {
            locale.value = selectedLocale.value;
        };

        return {
            selectedLocale,
            changeLocale,
        };
    },
};
</script>
