<script setup lang="ts">
import { ref,watch } from "vue";

const props = defineProps({
  type: String,
  name: String,
  number: String,
  label: String,
  placeholder: String,
  options : Array,
  ml:String,
  modelValue:String
});

const isValid = ref();
const input = ref('')
const emit = defineEmits(['update:modelValue'])
watch(input,(val)=>{
  emit('update:modelValue',val?.toLowerCase())

})
const handleInput = (e: any) => {
  
  input.value = e?.target?.value || e;

  if (!input) {
    isValid.value = false;
    return;
  }

  isValid.value = true;
};
watch(() => props.modelValue, (val)=>{
  input.value = val
},{immediate:true})

</script>

<template>
  <li class="group z-10 flex w-full gap-8">
    <span
      class="flex min-w-[24px] w-min min-h-[24px] h-min items-center justify-center ring-1 ring-fgVar rounded bg-fg font-medium text-xs transition-all group-focus-within:ring-primary"
      :class="{ 'ring-primary': isValid }"
      >{{ number }}</span
    >
    <div class="flex flex-col w-full gap-2" :class="ml ? 'ml-' +ml : 'ml-2'">
      <label for="name" class="font-medium text-sm">{{ label }}</label>
      <select
        class="w-full px-4 py-2 outline-none border-none rounded bg-fg text-base text-text placeholder:text-fgVar transition-all ring-transparent ring-1 focus:ring-primary"
        :class="{ 'outline-offset-0 outline-1 outline-primary': isValid }"
        @change="handleInput"
        :placeholder="placeholder"
      >
        <option disabled :selected="!value" value > -- Selectionnez une option -- </option>
        <option v-for="option in options" :selected="option === input" :key="option">{{option?.toUpperCase()}}</option>
        
      </select>
    </div>
  </li>
</template>
