import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { has } from 'lodash'

export function apiService() {
  const route = useRoute()
  const router = useRouter()

  const apiCore = axios.create({
    baseURL:
      process.env.NODE_ENV != 'production'
        ? 'http://localhost:8000/api/v1'
        : 'https://linkagil.com/api/v1',
  })

  apiCore.interceptors.request.use(
    function (config) {
      if (localStorage.getItem('access_token') && localStorage.getItem('session')) {
        const access_token = localStorage.getItem('access_token')
        config.headers.Authorization = `Bearer ${access_token}`
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    },
  )

  apiCore.interceptors.response.use(
    function (response) {
      if (has(response, 'data.access_token')) {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('session', 'is_valid')
      }
      return response
    },
    function (error) {
      if (error.response.status === 401 && route.name !== 'login') {
        localStorage.removeItem('access_token')
        localStorage.removeItem('session')
        router.push({ name: 'login' })
        return
      }
      return Promise.reject(error)
    },
  )

  return { apiCore }
}
