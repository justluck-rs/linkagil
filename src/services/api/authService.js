import { apiService } from './apiService'

export function authService() {
  const { apiCore } = apiService()

  function register(data) {
    return apiCore.post('auth/register', data)
  }

  function login(data) {
    return apiCore.post('auth/login', data)
  }

  function logout() {
    return apiCore.post('auth/logout')
  }

  function profile() {
    return apiCore.get('auth/profile')
  }

  return { register, login, logout, profile }
}
