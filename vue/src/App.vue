<script setup lang="ts">
import { reactive, ref } from 'vue';
import Select from './Select.vue';

const state = reactive({ framework: "react", status: "good" });

const color = ref('red');


</script>

<template>
    <h1>Reactive Method</h1>
    <Select name="framework" v-model="state.framework" label="Framework" :options='["react", "vue", "qwik"]'  />
    <Select name="status" v-model="state.status" label="Status" :options='["good", "ok", "bad"]'  />
    <pre>{{ JSON.stringify(state, null, 2) }}</pre>
   <Select name="color" v-model="color" label="Select" :options="['red', 'blue', 'green']" />
    <pre>color: {{ color }}</pre>
</template>
