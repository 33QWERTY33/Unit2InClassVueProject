<!-- FormView.vue -->
<template>
    <div>
        <input v-model="input1" placeholder="input 1">
        <input v-model="input2" placeholder="input 2">
    </div>
</template>

<script>
export default {
    data() {
        return {
            input1: '',
            input2: ''
        }
    },
}
</script>