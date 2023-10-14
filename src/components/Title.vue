<script setup lang="ts">
import { ref } from "vue";

defineProps({
  type: String,
  name: String,
  number: String,
  label: String,
  placeholder: String,
    ml:String
});

const isValid = ref();

const handleInput = (e: any) => {
  const input = e.target.value;

  if (!input) {
    isValid.value = false;
    return;
  }

  isValid.value = true;
};
</script>

<template>
  <li class="group z-10 flex w-full gap-8 title">
    <span
      class="flex min-w-[24px] w-min min-h-[24px] ring-primary h-min items-center justify-center ring-1 ring-fgVar rounded bg-fg font-medium text-xs transition-all group-focus-within:ring-primary from-primary to-primaryVar"
      :class="{ 'ring-primary': isValid }"
      >{{ number }}</span
    >
    <div class="flex flex-col w-full gap-2" :class="ml ? 'ml-' +ml : ''">
      <label for="name" class="font-medium text-sm ">{{ label }}</label>
    </div>
  </li>
</template>

<style scoped>
.rounded{
    border-radius: 50%;
}
.title{
    color : #676CDB
}
</style>
