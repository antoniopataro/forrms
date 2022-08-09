<script setup lang="ts">
import vueIcon from "../assets/technologies/vueIcon.png";
import viteIcon from "../assets/technologies/viteIcon.png";
import typescriptIcon from "../assets/technologies/typescriptIcon.png";
import tailwindIcon from "../assets/technologies/tailwindIcon.png";

const technologies = [
  { name: "VueJs", img: vueIcon, url: "https://vuejs.org/" },
  { name: "ViteJs", img: viteIcon, url: "https://vitejs.dev/" },
  { name: "Typescript", img: typescriptIcon, url: "https://www.typescriptlang.org/" },
  { name: "TailwindCSS", img: tailwindIcon, url: "https://tailwindcss.com/" },
];
</script>

<template>
  <body class="w-full min-h-screen text-text bg-bg">
    <article class="flex flex-col w-1/3 gap-16 mx-auto my-0 py-16">
      <h1 class="w-full py-4 border-b-2 border-fg font-bold text-4xl text-text opacity-0 animate-slideDown">
        Technologies
      </h1>
      <p class="opacity-0 animate-slideDown25">
        This is my first <code>VueJs</code> project, which I bootstraped with <code>Vite</code>. I used
        <code>Typescript</code> as language and <code>TailwindCSS</code> for stylization.
      </p>
      <ul class="flex flex-wrap w-full justify-center gap-4 opacity-0 animate-slideDown50">
        <li v-for="technology in technologies">
          <a :href="technology.url" target="_blank">
            <img :src="technology.img" :alt="technology.name" :title="technology.name" width="40" />
          </a>
        </li>
      </ul>
    </article>
  </body>
</template>
