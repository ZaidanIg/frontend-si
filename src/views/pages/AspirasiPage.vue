<template>
  <div class="flex items-center justify-center p-8 bg-gray-100 min-h-screen">
    <div class="w-full max-w-md space-y-8">
      <!-- Informasi Kotak Aspirasi -->
      <div class="bg-gray-300 p-6 rounded-lg">
        <h2 class="font-semibold text-lg italic text-center mb-2">Informasi Kotak Aspirasi</h2>
        <p class="text-gray-700 text-justify">
          Kotak aspirasi online ini dibuat untuk menampung seluruh aspirasi dari masyarakat
          mahasiswa Fakultas Teknologi Informasi Universitas Sebelas April Sumedang. Dengan adanya
          kotak aspirasi ini, diharapkan seluruh masukan dan aspirasi mahasiswa Fakultas Teknologi
          Informasi dapat tersampaikan dan ditindaklanjuti secara optimal untuk meningkatkan
          kualitas pembelajaran dan lingkungan akademik.
        </p>
      </div>

      <!-- Form Kotak Aspirasi -->
      <div class="bg-gray-300 p-6 rounded-lg">
        <h2 class="font-semibold text-lg text-center mb-4">Kotak Aspirasi</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-gray-700">Nama :</label>
            <input
              v-model="formData.nama"
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div>
            <label class="block text-gray-700">Kelas :</label>
            <input
              v-model="formData.kelas"
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Kelas Anda"
            />
          </div>
          <div>
            <label class="block text-gray-700">Prodi :</label>
            <input
              v-model="formData.prodi"
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Program Studi Anda"
            />
          </div>
          <div>
            <textarea
              v-model="formData.deskripsi"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Aspirasi Anda"
              rows="4"
            ></textarea>
          </div>
          <div class="container flex justify-end">
            <button
              type="submit"
              class="bg-purple-400 text-white rounded-lg font-semibold px-4 py-2"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      // Form data model
      formData: {
        nama: '',
        kelas: '',
        prodi: '',
        deskripsi: ''
      }
    };
  },
  methods: {
    // Submit form data to the server using Axios
    async submitForm() {
      try {
        // Send POST request with form data
        const response = await axios.post('http://localhost:5000/api/aspirations', this.formData, {
          headers: {
            'Content-Type': 'application/json', // Ensure JSON content type
          }
        });

        // Handle success
        if (response.status === 201) {
          alert('Aspirasi berhasil dikirim!');
          // Optionally reset the form after successful submission
          this.resetForm();
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim aspirasi.');
      }
    },
    // Reset form data after submission
    resetForm() {
      this.formData = {
        nama: '',
        kelas: '',
        prodi: '',
        deskripsi: ''
      };
    }
  }
});
</script>

<style scoped>
/* Add any custom styles you need here */
</style>
