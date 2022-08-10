<script setup lang="ts">
import CheckboxOption from "./CheckboxOption.vue";

import { ref, Ref } from "vue";

interface OptionProps {
  label: string;
  checked: boolean;
}

defineProps({
  number: String,
  label: String,
  placeholder: String,
});

const options: Ref<OptionProps[]> = ref([
  {
    label: "A",
    checked: false,
  },
  {
    label: "B",
    checked: false,
  },
  {
    label: "C",
    checked: false,
  },
  {
    label: "D",
    checked: false,
  },
  {
    label: "E",
    checked: false,
  },
]);

const isValid = ref();

const handleChecked = (option: OptionProps) => {
  options.value = options.value.map((item) => {
    if (item === option) {
      return { ...item, checked: !item.checked };
    }
    return item;
  });

  isValid.value = options.value.find((option) => option.checked === true);
};
</script>

<template>
  <li class="group z-10 flex w-full gap-8">
    <span
      class="flex min-w-[24px] w-min min-h-[24px] h-min items-center justify-center ring-1 ring-fgVar rounded bg-fg font-medium text-xs transition-all group-focus-within:ring-primary"
      :class="{ 'ring-primary': isValid }"
      >{{ number }}</span
    >
    <div class="flex flex-col w-fit gap-1">
      <label for="name" class="w-fit pb-4 font-medium text-sm">{{ label }}</label>
      <CheckboxOption
        v-for="option in options"
        :label="option.label"
        :checked="option.checked"
        @change="() => handleChecked(option)"
      ></CheckboxOption>
    </div>
  </li>
</template>
