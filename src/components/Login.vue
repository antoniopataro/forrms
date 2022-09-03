<template>
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div
        class="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-purple-700">LOGO</h1>

        <form class="mt-6">
            <div>
                <label for="email" class="block text-sm text-gray-800" >Login</label>
                <input type="phone" v-model="phoneNumber"
                    class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    
            </div>
            <div class="mt-4">
                <div>
                    <label for="password" class="block text-sm text-gray-800" >Mot de passe</label>
                    <input type="password" v-model="password"
                        class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
                <div class="mt-6">
                    <button
                    @click.prevent="() => login()"
                        class="w-full text-white px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
  <div v-if="isLoadding" class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-500" role="status">
    <span class="visually-hidden">o</span>
  </div>
                        Se connecter
                    </button>
                </div>
                </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="#"
                class="font-medium text-purple-600 hover:underline">Sign up</a></p>
    </div>
</div>
</template>
<script setup lang="ts">
import { computed, inject, ref } from "vue"
import { useStore } from "vuex"
const toast = inject('toast')
const emit = defineEmits(['logged'])
const phoneNumber = ref("")
const password = ref('')
const store = useStore()
const isLoadding = computed(() => store.state.isLoadding)
const login = ()=> {
    store.dispatch('login',{phoneNumber : phoneNumber.value,password : password.value}).then(()=>{
         toast.success("Connection réussi")
          emit('logged')
    }).catch((err)=>{
         toast.error("Login ou mot de passe incorrect")
        
    })

}

</script>