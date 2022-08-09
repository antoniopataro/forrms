<script setup lang="ts">
import Input from "./Input.vue";
import Range from "./Range.vue";
import Textarea from "./Textarea.vue";
</script>

<template>
  <form class="flex flex-col w-1/3 gap-16 py-16 mx-auto my-0">
    <ul
      class="relative flex flex-col w-full gap-16 before:absolute before:content-[''] before:z-[-1] before:top-6 before:left-3 before:w-[1px] before:h-[calc(100%-24px)] before:mx-auto before:my-0 before:bg-fg"
    >
      <span class="flex flex-col w-full gap-6 my-0 mx-auto">
        <Input number="1" label="Your name" placeholder="Antonio Pataro" name="name" type="name"></Input>
        <Input
          number="2"
          label="Your e-mail"
          placeholder="antoniopatarodev@gmail.com"
          name="email"
          type="email"
        ></Input>
      </span>
      <span class="flex flex-col w-full gap-6 my-0 mx-auto">
        <Textarea
          number="3"
          label="Send me a nice message"
          placeholder="Type here..."
          name="message"
          type="text"
        ></Textarea>
        <Textarea
          number="4"
          label="Tell me what you think about Forrm"
          placeholder="Type here also..."
          name="feedback"
          type="text"
        ></Textarea>
      </span>
      <span>
        <Range name="positiveness" number="5" min="0" max="50" step="1" label="How positive you are?" />
      </span>
    </ul>
    <span class="flex w-full justify-end gap-4">
      <button
        disabled
        class="px-4 py-2 rounded bg-fg font-semibold text-sm cursor-pointer transition-colors hover:bg-fgVar"
      >
        Cancel
      </button>
      <button
        disabled
        class="px-4 py-2 rounded bg-primary font-semibold text-sm cursor-pointer transition-colors hover:bg-primaryVar"
      >
        Save
      </button>
    </span>
  </form>
</template>
