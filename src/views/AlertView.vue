<!-- AlertView.vue -->
<template>
    <main>
        <button class = "btn btn-outline-primary" @click="showAlert">Show Alert</button>
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