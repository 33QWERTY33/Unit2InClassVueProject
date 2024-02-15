<!-- AlertView.vue -->
<template>
    <main>
        <button @click="showAlert">Show Alert</button>
    </main>
</template>

<script>
export default {
    methods: {
        showAlert() {
            alert("Hello, this is an alert!")
        }
    }
}
</script>