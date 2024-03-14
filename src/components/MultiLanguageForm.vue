<template>
    <div>
        <h1>{{ t("form.title") }}</h1>

        <form @submit.prevent="handleSubmit">
            <label for="name">{{ t("form.name") }}</label>
            <input type="text" id="name" v-model="name" />

            <button type="submit">{{ t("form.submit") }}</button>
        </form>

        <div v-if="submittedName">
            {{ t("form.submitted") }} {{ submittedName }}
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const { t } = useI18n();
        const name = ref("");
        const submittedName = ref("");

        const handleSubmit = () => {
            submittedName.value = name.value;
        };

        return {
            name,
            submittedName,
            handleSubmit,
            t,
        };
    },
};
</script>
