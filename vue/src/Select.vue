<script setup lang="ts">
const props = defineProps<{
  name: string;
  label: string;
  modelValue: string;
  options: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="input-container">
    <label :for="props.name">{{ props.label }}</label>
    <select
      :name="props.name"
      :id="props.name"
      :value="props.modelValue"
      @input="(e) => emit('update:modelValue', (e.target as HTMLSelectElement).value)"
    >
      <option v-for="option in props.options" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
