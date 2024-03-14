<template>
    <div>
        <h1>Dashboard</h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>
                    <router-link to="/dom-detection">Dom Detection</router-link>
                </li>
                <li>
                    <router-link to="/math-question">Math Question</router-link>
                </li>
                <li>
                    <router-link to="/admin-form-config"
                        >Admin Form Configuration</router-link
                    >
                </li>
                <li>
                    <router-link to="/dynamic-form">Dynamic Form</router-link>
                </li>
                <li>
                    <router-link to="/multi-lang-form"
                        >Multi Lang Example</router-link
                    >
                </li>
                <li>
                    <router-link to="/meet-integration"
                        >Meet Integration</router-link
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
};
</script>

<style>
nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    margin-bottom: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #007bff;
}

nav ul li a:hover {
    text-decoration: underline;
}
</style>
