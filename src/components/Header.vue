<script setup lang="ts"></script>

<template>
  <header class="flex align-items justify-between px-16 py-4 border-b-[1px] border-fg font-medium text-sm">
    <router-link to="/forrms/" class="text-primary font-bold text-base">Forrms</router-link>
    <nav class="flex gap-4">
      <router-link to="/forrms/about" class="transition-colors cursor-pointer hover:text-primary">About</router-link>
      <a href="https://github.com/antoniopataro/forrms" target="_blank" class="transition-colors hover:text-primary"
        >Repository</a
      >
      <router-link to="/forrms/technologies" class="transition-colors cursor-pointer hover:text-primary"
        >Technologies</router-link
      >
    </nav>
  </header>
</template>
