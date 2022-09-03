<script setup lang="ts">
import { ref,watch } from "vue";

const props = defineProps({
  type: String,
  name: String,
  number: String,
  label: String,
  placeholder: String,
  ml:String,
  modelValue:String,
  length : Number
  
});

const isValid = ref();
const input = ref('0')
const emit = defineEmits(['update:modelValue', 'eventB'])
watch(input,(val)=>{
  emit('update:modelValue',val)
})
const handleInput = (e: any) => {
  
  input.value = e.target.value;

  if (!input) {
    isValid.value = false;
    return;
  }

  isValid.value = props.length ? input.value.length === props.length ? true : false :  true;
};
watch(() => props.modelValue, (val)=>{
  input.value = val
},{immediate:true})
</script>

<template>
  <li class="group z-10 flex w-full gap-8">
    <span
      class=" flex min-w-[24px] w-min min-h-[24px] h-min items-center justify-center ring-1 ring-fgVar rounded bg-fg font-medium text-xs transition-all group-focus-within:ring-primary"
      :class="{ 'ring-primary': isValid }"
      >{{ number }}</span
    >
    <div class="flex flex-col w-full gap-2" :class="ml ? 'ml-' +ml : 'ml-2'">
      <label for="name" class="font-medium text-sm">{{ label }}</label>
      <input
        :autocomplete="type"
        :type="type"
        :name="name"
        class="w-full px-4 py-2 outline-none border-none rounded bg-fg text-base text-text placeholder:text-fgVar transition-all ring-transparent ring-1 focus:ring-primary"
        :class="{ 'outline-offset-0 outline-1 outline-primary': isValid }"
        @blur="handleInput"
        :placeholder="placeholder"
        v-model="input"
      />
    </div>
  </li>
</template>
