<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderLayout.vue'
import Footer from './components/FooterLayout.vue'
</script>

<template>
  <Header />
  <div class="page-content">
    <RouterView />
  </div>
  <Footer />
</template>
