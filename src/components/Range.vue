<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  name: String,
  number: String,
  min: String,
  max: String,
  step: String,
  label: String,
});

const value = ref(props.max);
const isValid = ref();

const handleRange = (e: any) => {
  const input = e.target.value;

  if (!input) return;

  value.value = input;
  isValid.value = true;
};
</script>

<template>
  <li class="group z-10 flex w-full gap-8">
    <span
      class="flex min-w-[24px] w-min min-h-[24px] h-min items-center justify-center ring-1 ring-fgVar rounded bg-fg font-medium text-xs transition-all group-focus-within:ring-primary"
      :class="{ 'ring-primary': isValid }"
      >{{ number }}</span
    >
    <div class="flex flex-col w-full gap-2">
      <label for="name" class="font-medium text-sm">{{ label }}</label>
      <div class="flex items-center gap-4">
        <input
          type="range"
          :name="name"
          :min="min"
          :max="max"
          :step="step"
          class="w-full h-1 outline-none border-none rounded appearance-none cursor-pointer bg-fg"
          @change="handleRange"
        />
        <span class="flex px-2 py-1 items-center justify-center rounded bg-fg font-medium text-xs">{{ value }}</span>
      </div>
    </div>
  </li>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 10px;
  height: 10px;
  background: #676cdb;
  border-radius: 50%;
}
</style>
