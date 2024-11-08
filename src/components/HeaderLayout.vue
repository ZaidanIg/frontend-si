<template>
  <header class="relative w-full">
    <!-- Background dengan efek brightness -->
    <div
      class="absolute -mt-64 inset-0 bg-[url('@/assets/images/header-hero.jpg')] bg-cover bg-center brightness-75"
    ></div>

    <!-- Overlay gradasi untuk memperjelas teks -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>

    <div class="py-[60px] space-y-[315px]">
      <div class="relative z-10 flex items-center space-x-5 page-content">
        <img src="../assets/images/fti-logo.png" alt="logo" width="88" height="88" />
        <div class="text-white">
          <h1 class="text-3xl font-bold">ORGANISASI FAKULTAS TEKNOLOGI INFORMASI</h1>
          <p class="text-lg">Universitas Sebelas April</p>
        </div>
      </div>

      <!-- Navigation Menu -->
      <Navigasi />
    </div>
  </header>
</template>

<script setup lang="ts">
import Navigasi from '@/components/NavigasiLayout.vue'
</script>
