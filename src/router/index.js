import { createRouter, createWebHistory } from 'vue-router'

// // Auth
import AuthLayout from '@/views/layouts/auth/Main.vue'
import Login from '@/views/layouts/auth/login/Main.vue'
import Register from '@/views/layouts/auth/register/Main.vue'

// // Home
import HomeLayout from '@/views/layouts/home/Main.vue'
import AboutProfessional from '@/views/modules/professionals/Main.vue'
import Profile from '@/views/modules/professionals/components/profile/Main.vue'

// Error page
import ErrorPage from '@/views/error-page/Main.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
    ],
  },
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name: 'professional',
        component: AboutProfessional,
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
      },
    ],
  },
  // {
  //   path: '/',
  //   component: DashboardLayout,
  //   children: [
  //     {
  //       path: '/',
  //       name: 'dashboard',
  //       component: AdminDashboard,
  //     },
  //   ],
  // },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
  },],
})

export default router
