<script setup lang="ts">
import { ref } from "vue";

defineProps({
  type: String,
  name: String,
  number: String,
  label: String,
  placeholder: String,
});

const isValid = ref();

const handleTextarea = (e: any) => {
  const input = e.target.value;

  if (!input) {
    isValid.value = false;
    return;
  }

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
      <textarea
        :type="type"
        :name="name"
        class="w-full h-48 px-4 py-2 outline-none border-none rounded bg-fg text-base text-text placeholder:text-fgVar transition-all ring-transparent ring-1 focus:ring-primary resize-none"
        :class="{ 'outline-offset-0 outline-1 outline-primary': isValid }"
        @blur="handleTextarea"
        :placeholder="placeholder"
      />
    </div>
  </li>
</template>
