<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="
        w-full
        p-6
        m-auto
        bg-white
        border-t border-purple-600
        rounded
        shadow-lg shadow-purple-800/50
        lg:max-w-md
      "
    >
      <h1 class="text-3xl font-semibold text-center text-purple-700">LOGO</h1>

      <form class="mt-6">
        <div>
          <label for="email" class="block text-sm text-gray-800">Login</label>
          <input
            type="phone"
            v-model="phoneNumber"
            class="
              block
              w-full
              px-4
              py-2
              mt-2
              text-purple-700
              bg-white
              border
              rounded-md
              focus:border-purple-400
              focus:ring-purple-300
              focus:outline-none
              focus:ring
              focus:ring-opacity-40
            "
          />
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800"
              >Mot de passe</label
            >
            <input
              type="password"
              v-model="password"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-purple-700
                bg-white
                border
                rounded-md
                focus:border-purple-400
                focus:ring-purple-300
                focus:outline-none
                focus:ring
                focus:ring-opacity-40
              "
            />
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline"
            >Forget Password?</a
          >
          <div class="mt-6 flex justify-center align-center">
            <!-- <button
              @click.prevent="() => login()"
              :disabled="isLoadding"
              type="button"
              class="
                bg-primary
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                mr-2
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                inline-flex
                items-center
              "
            >
              <svg
                v-if="isLoadding"
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Se connecter
            </button> -->
            <loading-button label="Se connecter" @click="() => login()"></loading-button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <a href="#" class="font-medium text-purple-600 hover:underline"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { useStore } from "vuex";
import LoadingButton from "./LoadingButton.vue"
const toast = inject("toast");
const emit = defineEmits(["logged"]);
const phoneNumber = ref("");
const password = ref("");
const store = useStore();
const isLoadding = computed(() => store.getters.isLoading);
const login = () => {
  store
    .dispatch("login", {
      phoneNumber: phoneNumber.value,
      password: password.value,
    })
    .then(() => {
      toast.success("Connection réussi");
      emit("logged");
    })
    .catch((err) => {
      toast.error("Login ou mot de passe incorrect");
    });
};
</script>
<style scoped>
input{
    color : black !important;
}
</style>