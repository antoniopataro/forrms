<script setup lang="ts">
import CheckboxOption from "./CheckboxOption.vue";

import { ref, Ref,watch } from "vue";

interface OptionProps {
  label: string;
  checked: boolean;
}

const props = defineProps({
  number: String,
  label: String,
  placeholder: String,
    ml:String,
    modelProp : String,
    modelValue : String
});

const options: Ref<OptionProps[]> = ref([
  {
    label: "OUI",
    checked: false,
  },
  {
    label: "NON",
    checked: false,
  },

]);

const isValid = ref();
const input = ref('')
const emit = defineEmits(['update:modelValue', 'eventB'])
watch(input,(val)=>{
  console.log("emiting input",val)
  emit('update:modelValue',val)
})

const handleChecked = (option: OptionProps) => {
  options.value = options.value.map((item) => {
    if (item === option) {
      return { ...item, checked: !item.checked };
    }
    return item;
  });
  input.value = option.label
  isValid.value = options.value.find((option) => option.checked === true);
};
watch(() => props.modelValue, (val)=>{
  console.log("ModelValue",val)
  input.value = val + ''
},{immediate:true})
</script>

<template>
  <li class="group z-10 flex w-full gap-8">
    <span
      class="flex min-w-[24px] w-min min-h-[24px] h-min items-center justify-center ring-1 ring-fgVar rounded bg-fg font-medium text-xs transition-all group-focus-within:ring-primary"
      :class="{ 'ring-primary': isValid }"
      >{{ number }}</span
    >
    <div class="flex flex-col w-fit gap-1" :class="ml ? 'ml-' +ml : 'ml-2'">
      <label for="name" class="w-fit pb-4 font-medium text-sm">{{ label }}</label>
      <CheckboxOption
        v-model="input"
        v-for="option in options"
        :label="option.label"
        :checked="option.checked"
        @change="() => handleChecked(option)"
      ></CheckboxOption>
    </div>
  </li>
</template>
