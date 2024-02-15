<!-- CounterView.vue -->
<template>
    <main>
        <h1>Counter: {{ counter }}</h1>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-danger" @click="decrement">Decrement</button>
        <button class="btn btn-warning" @click="reset">Reset</button>
    </main>
</template>

<script>
export default {
    data(){
        return {
        counter: 0
        };
    },
    methods: {
        increment() {
            this.counter ++;
        },
        decrement() {
            this.counter --;
        },
        reset() {
            this.counter = 0;
        }
    }
}
</script>