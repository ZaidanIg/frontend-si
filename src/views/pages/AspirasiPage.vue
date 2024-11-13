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
        <form class="space-y-4">
          <div>
            <label class="block text-gray-700">Nama :</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div>
            <label class="block text-gray-700">NIM :</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan NIM Anda"
            />
          </div>
          <div>
            <label class="block text-gray-700">Kelas :</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Kelas Anda"
            />
          </div>
          <div>
            <label class="block text-gray-700">Prodi :</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Program Studi Anda"
            />
          </div>
          <div>
            <textarea
              class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan Aspirasi Anda"
              rows="4"
            ></textarea>
          </div>
          <div class="container flex justify-end">
            <button
              class="bg-purple-400 text-white rounded-lg font-semibold px-4 py-6[box-shadow:0_10px_0_purple] active:[box-shadow:0_5px_0_purple]active:translate-y-[5px]"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
