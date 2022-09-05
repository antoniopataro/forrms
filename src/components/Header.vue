<script setup lang="ts"></script>

<template>
  <header class="flex align-items justify-between px-16 py-4 border-b-[1px] border-fg font-medium text-sm">
    <router-link to="/" class="text-primary font-bold text-base">RECUEIL</router-link>
    <nav class="flex gap-4 align-center">
      <!-- <router-link to="/" class="transition-colors cursor-pointer hover:text-primary align-center justify-center">A props</router-link>
      <a href="https://github.com/antoniopataro/forrms" target="_blank" class="transition-colors hover:text-primary"
        >Aide</a
      > -->
      <loading-button label="Se deconnecter"  @click="logout"></loading-button>

    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoadingButton from "./LoadingButton.vue"
const store= useStore();
const emit = defineEmits('logout')

const logout = ()=>{
   emit('logout')
  store.dispatch('logout')
 

}
</script>
