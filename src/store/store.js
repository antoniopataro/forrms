import axios from "axios"
import { inject } from "vue"
import tokenService from "../services/tokenService"
const toast = inject('toast')
const api = axios.create({
    baseURL: 'http://104.131.183.104:4000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.request.use(
    (config) => {
      const token = tokenService.getLocalAccessToken()

      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`
        // config.headers['x-access-token'] = token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  api.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      const originalConfig = err.config
      if (err?.response?.status === 403 || originalConfig?._retry) {
        EventBus.dispatch('logout')
      }
      
      if (originalConfig.url !== '/auth/token' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true
            await store.dispatch('auth/getRefreshToken',null,{root : true})
            return axiosInstance(originalConfig)
        }

      }
      return Promise.reject(err)
    },
  )

  const state = {
    user : null,
    loading : false
    
}
const getters = {
    isLogged(){
      console.log(!!tokenService.getLocalAccessToken())
        return !!tokenService.getLocalAccessToken()
    },
    isLoading(state){
      console.log("Is laoding",state.isLoading)
      return state.loading
    }
}
const mutations = {
    setLoading(bool){
        state.loading = bool
    },
    setUser(user){
        state.user = user
    }
}

const actions = {
    async login({commit,dispatch},payload){
        try{
          
            commit('setLoading',true)
            const user= (await api.post('/auth/signin',payload)).data
            console.log("Logged in user",user)
            commit('setUser',user)
            tokenService.setUser(user)
            return Promise.resolve(user)
        }
        catch(error){
            console.error(error)
            return Promise.reject(error)
        }
        finally{
            commit('setLoading',false)
        }
        
    },
    async logOut({commit,dispatch}){
        try{
            commit('setLoading',true)
            await api.post('/auth/logout',payload)
  
            tokenService.setUser(null)

        }
        catch(error){
            console.error(error)
        }
        finally{
            commit('setLoading',false)
        }

    },

    async addMri({commit,dispatch},payload){
        try{
            commit('setLoading',true)
            const response = await api.post('/mri/createmri',payload)
            return Promise.resolve(response)
        }
        catch(error){
          
            console.error(error)
            return Promise.reject(error)
        }
        finally{
            commit('setLoading',false)
        }
    }
}


export default{
    state,
    getters,
    mutations,
    actions
}