<template>
    <div>
        <h1>Form Configuration</h1>
        <div
            v-for="(field, index) in fields"
            :key="`field-${index}`"
            class="field-config"
        >
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

        <!-- Guide for users -->
        <div class="guide">
            <h2>How to Use</h2>
            <p>1. Add a field by clicking the "Add Field" button.</p>
            <p>2. Specify the label and type for each field.</p>
            <p>
                3. Remove any field if necessary by clicking the "Remove" button
                next to it.
            </p>
            <p>4. Click "Save Configuration" to store your form setup.</p>
            <p>
                Visit the <a :href="dynamicFormLink">Dynamic Form</a> to see
                your form in action.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: [],
            dynamicFormLink:
                "https://text-change-detection.vercel.app/dynamic-form", // Dynamic form link
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
            console.log("Saving config:", JSON.stringify(this.fields));
            localStorage.setItem("formConfig", JSON.stringify(this.fields));
            alert("Configuration saved!");
        },
    },
};
</script>

<style>
.field-config,
.guide {
    margin-bottom: 10px;
}

.guide h2 {
    margin-top: 20px;
}

.guide p {
    margin: 5px 0;
}
</style>
