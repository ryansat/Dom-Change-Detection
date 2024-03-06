<template>
    <div>
        <input v-model="userInput" placeholder="Enter a math equation" />
        <button @click="updateEquation">Render Equation</button>
        <button @click="addSampleEquation">Add Sample Equation</button>
        <div v-html="renderedEquation"></div>
        <div class="equation-guide">
            <h3>Equation Input Guide</h3>
            <p>Here are some examples of how to input equations:</p>
            <ul>
                <li>
                    <code>c = \pm\sqrt{a^2 + b^2}</code> - Pythagorean theorem
                </li>
                <li><code>E = mc^2</code> - Mass-energy equivalence</li>
                <li><code>\frac{n!}{k!(n-k)!}</code> - Binomial coefficient</li>
                <li>...and many more based on LaTeX syntax.</li>
            </ul>
            <p>Use LaTeX syntax for equations.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import katex from "katex";

const userInput = ref("");
const equation = ref("");

const renderedEquation = computed(() => {
    try {
        return katex.renderToString(equation.value, {
            throwOnError: true,
        });
    } catch (error) {
        return `<span style="color: red;">Error rendering equation: ${error.message}</span>`;
    }
});

function updateEquation() {
    equation.value = userInput.value;
}

function addSampleEquation() {
    userInput.value = "c = \\pm\\sqrt{a^2 + b^2}";
}
</script>

<style scoped>
.equation-guide {
    margin-top: 20px;
}

.equation-guide h3 {
    margin-bottom: 10px;
}

.equation-guide ul {
    list-style-type: none;
    padding: 0;
}

.equation-guide ul li {
    margin-bottom: 5px;
}

.equation-guide code {
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 4px;
}
</style>
