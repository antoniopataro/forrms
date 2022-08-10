<script setup lang="ts">
defineProps({
  label: String,
  checked: Boolean,
});
</script>

<template>
  <label class="flex w-fit items-center gap-2">
    <input type="checkbox" class="hidden" :value="checked" />
    <span
      class="relative flex w-4 h-4 items-center justify-center rounded cursor-pointer bg-fg transition-colors hover:bg-fgVar after:absolute after:content-[''] after:w-[4px] after:h-[6px] after:border-b-2 after:border-r-2 after:border-extreme after:rotate-[40deg] after:opacity-0 after:transition-opacity after:bg-transparent"
      :class="{
        'bg-primary hover:bg-primary after:opacity-100': checked,
      }"
    />
    <span class="font-medium text-text text-sm">{{ label }}</span>
  </label>
</template>
