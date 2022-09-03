<script setup lang="ts">
import Introduction from "../components/Introduction.vue";
import Form from "../components/Form.vue";
import Login from "../components/Login.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore()

const isLogged = computed(() => store.getters.isLogged)

</script>

<template>
  <body class="w-full min-h-screen text-text bg-bg">
    <div v-if="isLogged">
    <Introduction class="opacity-0 animate-slideDown"></Introduction>
    <Form class="opacity-0 animate-slideDown25"></Form>
    </div>
    <Login v-else></Login>
  </body>
</template>
