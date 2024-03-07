<template>
    <div>
        <h1>Dynamic Form</h1>
        <form @submit.prevent="submitForm">
            <div
                v-for="(field, index) in fields"
                :key="index"
                class="form-field"
            >
                <label :for="'field-' + index">{{ field.label }}</label>
                <input
                    :id="'field-' + index"
                    :type="field.type"
                    v-model="formData[field.label]"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: [],
            formData: {},
        };
    },
    mounted() {
        this.loadFormConfig();
    },
    methods: {
        loadFormConfig() {
            // Load the form configuration
            const config = localStorage.getItem("formConfig");
            if (config) {
                this.fields = JSON.parse(config);
                this.fields.forEach((field) => {
                    this.formData[field.label] = ""; // Initialize formData with the fields
                });
            }
        },
        submitForm() {
            console.log("Form Data:", this.formData);
            // Here you'd handle form submission, e.g., send the data to a backend
        },
    },
};
</script>

<style>
.form-field {
    margin-bottom: 15px;
}
</style>
