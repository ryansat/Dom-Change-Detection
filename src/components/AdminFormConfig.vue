<template>
    <div>
        <h1>Form Configuration</h1>
        <div v-for="(field, index) in fields" :key="index" class="field-config">
            <input v-model="field.label" placeholder="Label" />
            <select v-model="field.type">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
            </select>
            <button @click="removeField(index)">Remove</button>
        </div>
        <button @click="addField">Add Field</button>
        <button @click="saveConfig">Save Configuration</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: [],
        };
    },
    methods: {
        addField() {
            this.fields.push({ label: "", type: "text" });
        },
        removeField(index) {
            this.fields.splice(index, 1);
        },
        saveConfig() {
            // Here you'd normally send the configuration to your backend to be saved
            console.log("Saving config:", JSON.stringify(this.fields));
            localStorage.setItem("formConfig", JSON.stringify(this.fields)); // For demonstration, using localStorage
            alert("Configuration saved!");
        },
    },
};
</script>

<style>
.field-config {
    margin-bottom: 10px;
}
</style>
