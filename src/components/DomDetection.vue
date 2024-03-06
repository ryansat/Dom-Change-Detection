<template>
    <div>
        <h1>Detection of Unauthorized DOM Changes</h1>
        <!-- Link to the Math Question page -->
        <router-link to="/math-question">Go to Equation Page</router-link>
    </div>
</template>

<script>
export default {
    name: "DomDetection",
    mounted() {
        this.detectDomChanges();
    },
    methods: {
        detectDomChanges() {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    // Handle attribute changes
                    if (mutation.type === "attributes") {
                        console.log(
                            `Attribute ${mutation.attributeName} was modified in`,
                            mutation.target,
                        );
                    }
                    // Handle added nodes
                    if (
                        mutation.type === "childList" &&
                        mutation.addedNodes.length > 0
                    ) {
                        mutation.addedNodes.forEach((node) => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                // Ensure it is an element node
                                console.log("Added node:", node);
                            }
                        });
                    }
                    // Handle removed nodes
                    if (
                        mutation.type === "childList" &&
                        mutation.removedNodes.length > 0
                    ) {
                        mutation.removedNodes.forEach((node) => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                // Ensure it is an element node
                                console.log("Removed node:", node);
                            }
                        });
                    }
                    // For characterData changes, if needed
                    if (mutation.type === "characterData") {
                        console.log("Text content changed in", mutation.target);
                        alert("Unauthorized text change detected!");
                    }
                });
            });

            observer.observe(document.body, {
                // Observe the body to avoid catching initial script insertions
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                attributeOldValue: true,
                characterDataOldValue: true,
            });

            console.log("DOM change detection is active.");
        },
    },
};
</script>

<style scoped>
h1 {
    color: #2c3e50;
}

/* Style the link for visual consistency */
.router-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.router-link:hover {
    background-color: #45a049;
}
</style>
