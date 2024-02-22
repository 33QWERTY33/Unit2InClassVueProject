<!-- FormView.vue -->
<template>
    <div>
        <input class="form-control pb-4 bg-secondary-subtle" v-model="input1" placeholder="input 1">
        <input class="form-control pb-4 bg-secondary-subtle" v-model="input2" placeholder="input 2">
        <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"> {{ input1 }}</div>
        <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"> {{ input2 }}</div>
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