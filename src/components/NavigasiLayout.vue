<template>
  <nav class="relative z-10 flex items-center justify-end mt-4 space-x-4 page-content">
    <RouterLink
      v-for="page in mainPages.filter((i) => i.path != '/:pathMatch(.*)*')"
      :key="page.path"
      :to="page.path"
      class="text-white"
    >
      <div class="px-4 py-2 bg-[#B57EE6] rounded-full text-xl">
        <span v-if="page.path === '/beranda'">Beranda</span>
        <span v-if="page.path === '/aspirasi'">Aspirasi</span>
        <span v-if="page.path === '/ulasan'">Ulasan</span>
        <span v-if="page.path === '/tentang-kami'">Tentang Kami</span>
      </div>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { mainPages } from '@/router'
</script>
