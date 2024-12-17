<template>
  <div class="flex flex-col items-center p-8 bg-gray-100 min-h-screen space-y-6">
    <!-- Header Ulasan Mahasiswa -->
    <div class="w-full max-w-3xl text-center">
      <h1 class="text-2xl font-semibold text-white bg-gray-300 rounded-full py-3 px-8 inline-block">
        Ulasan Mahasiswa
      </h1>
      <p class="text-gray-600 mt-4">
        Berikut adalah ulasan dan tanggapan terhadap aspirasi yang telah disampaikan oleh mahasiswa
        Fakultas Teknologi Informasi Universitas Sebelas April Sumedang.
      </p>
    </div>

    <!-- Filter Ulasan -->
    <div class="w-full max-w-3xl flex justify-between items-center space-x-4">
      <select class="bg-gray-200 p-2 rounded w-1/2">
        <option>Semua Kategori</option>
        <option>Akademik</option>
        <option>Fasilitas</option>
      </select>
      <select class="bg-gray-200 p-2 rounded w-1/2">
        <option>Tanggal Terbaru</option>
        <option>Tanggal Terlama</option>
        <option>Ulasan Terpopuler</option>
      </select>
    </div>

    <!-- Daftar Ulasan Mahasiswa -->
    <div class="w-full max-w-3xl space-y-8">
      <!-- Dynamically generated aspiration cards -->
      <div
        v-for="(aspiration, index) in aspirations"
        :key="index"
        class="bg-white p-6 rounded-lg shadow flex flex-col space-y-4"
      >
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-lg">{{ aspiration.nama }}</h2>
          <p class="text-gray-500 text-sm">{{ new Date(aspiration.createdAt).toLocaleDateString() }}</p>
        </div>
        <p class="text-gray-700">{{ aspiration.deskripsi }}</p>
      </div>
    </div>

    <!-- Pagination -->
    <div class="w-full max-w-3xl text-center">
      <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-l">« Prev</button>
      <span class="px-4 py-2 bg-gray-300 text-gray-700">1</span>
      <span class="px-4 py-2 bg-gray-200 text-gray-700">2</span>
      <span class="px-4 py-2 bg-gray-200 text-gray-700">3</span>
      <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r">Next »</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Aspiration {
  id: number;
  nama: string;
  kelas: string;
  prodi: string;
  deskripsi: string;
  createdAt: string;
}

export default defineComponent({
  data() {
    return {
      aspirations: [] as Aspiration[], // Properly typed aspirations array
    };
  },
  async mounted() {
    // Fetch aspirations data when the component is mounted
    this.fetchAspirations();
  },
  methods: {
    // Fetch aspirations from the API
    async fetchAspirations() {
      try {
        const response = await axios.get('http://localhost:5000/api/aspirations'); // Adjust API endpoint if necessary
        this.aspirations = response.data; // Store the fetched aspirations in the data property
      } catch (error) {
        console.error('Error fetching aspirations:', error);
      }
    },
  },
});
</script>

