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
      <!-- Ulasan Card -->
      <div class="bg-white p-6 rounded-lg shadow flex flex-col space-y-4">
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-lg">Deden Nurchayadi</h2>
          <p class="text-gray-500 text-sm">10 November 2024</p>
        </div>
        <p class="text-gray-700">
          “Saya merasa fasilitas ruang kelas online di fakultas perlu ditingkatkan. Beberapa kali
          mengalami kendala teknis yang cukup mengganggu proses pembelajaran. Mohon diperbaiki agar
          lebih optimal.”
        </p>
        <button class="text-purple-600 font-semibold">Lihat Lebih</button>
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-500">Rating: Suka (120) - Tidak Suka (5)</p>
          <span class="text-sm bg-yellow-200 text-yellow-700 rounded-full px-4 py-1"
            >Status Aspirasi: Sedang Diproses</span
          >
        </div>
        <div class="bg-purple-100 p-3 rounded-lg">
          <p class="text-sm text-purple-700">
            <strong>Respon Admin:</strong> Terima kasih atas masukannya. Kami telah mencatat masalah
            ini dan sedang berkoordinasi dengan tim IT untuk meningkatkan performa platform online.
            Harap bersabar, perbaikan akan segera dilakukan.
          </p>
        </div>
      </div>

      <!-- Ulasan Card 2 -->
      <div class="bg-white p-6 rounded-lg shadow flex flex-col space-y-4">
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-lg">M Husni Haykal</h2>
          <p class="text-gray-500 text-sm">15 November 2024</p>
        </div>
        <p class="text-gray-700">
          “Saya merasa fasilitas ruang kelas online di fakultas perlu ditingkatkan. Beberapa kali
          mengalami kendala teknis yang cukup mengganggu proses pembelajaran. Mohon diperbaiki agar
          lebih optimal.”
        </p>
        <button class="text-purple-600 font-semibold">Lihat Lebih</button>
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-500">Rating: Suka (120) - Tidak Suka (5)</p>
          <span class="text-sm bg-green-200 text-green-700 rounded-full px-4 py-1"
            >Status Aspirasi: Selesai</span
          >
        </div>
        <div class="bg-purple-100 p-3 rounded-lg">
          <p class="text-sm text-purple-700">
            <strong>Respon Admin:</strong> Terima kasih atas masukannya. Kami telah mencatat masalah
            ini dan sedang berkoordinasi dengan tim IT untuk meningkatkan performa platform online.
            Harap bersabar, perbaikan akan segera dilakukan.
          </p>
        </div>
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
