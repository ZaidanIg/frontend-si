import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Beranda from '@/views/pages/BerandaPage.vue'
import Aspirasi from '@/views/pages/AspirasiPage.vue'
import Ulasan from '@/views/pages/UlasanPage.vue'
import TentangKami from '@/views/pages/TentangKamiPage.vue'

export const mainPages: RouteRecordRaw[] = [
  {
    path: '/beranda',
    name: 'Beranda',
    component: Beranda,
  },
  {
    path: '/aspirasi',
    name: 'Aspirasi',
    component: Aspirasi,
  },
  {
    path: '/ulasan',
    name: 'Ulasan',
    component: Ulasan,
  },
  {
    path: '/tentang-kami',
    name: 'Tentang Kami',
    component: TentangKami,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/beranda',
    },
    ...mainPages,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/beranda',
    },
  ],
})

export default router
