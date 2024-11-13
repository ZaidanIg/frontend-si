<template>
  <div class="my-14 flex gap-4 justify-between">
    <main class="flex flex-col gap-10">
      <div class="flex flex-col gap-4 bg-gray-100 p-4 rounded-md">
        <img src="@/assets/images/main-1.png" alt="main-foto-1" />
        <div class="flex flex-col items-start text-black">
          <h1 class="text-2xl font-semibold">SUB JUDUL</h1>
          <p class="text-lg font-medium">penjelasan sebuah kegiatan yang sama dengan sub judul</p>
          <p class="text-lg font-medium">penjelasan sebuah kegiatan yang sama dengan sub judul</p>
          <p class="text-lg font-medium">penjelasan sebuah kegiatan yang sama dengan sub judul</p>
        </div>
      </div>

      <div class="flex flex-col gap-4 bg-gray-100 p-4 rounded-md">
        <img src="@/assets/images/main-2.png" alt="main-foto-2" />
        <div class="flex flex-col items-start text-black">
          <h1 class="text-2xl font-semibold">SUB JUDUL</h1>
          <p class="text-lg font-medium">penjelasan sebuah kegiatan yang sama dengan sub judul</p>
          <p class="text-lg font-medium">penjelasan sebuah kegiatan yang sama dengan sub judul</p>
          <p class="text-lg font-medium">penjelasan sebuah kegiatan yang sama dengan sub judul</p>
        </div>
      </div>
    </main>

    <aside class="flex flex-col gap-6 overflow-y-scroll max-h-[160vh] no-scrollbar">
      <div class="flex flex-col gap-4 p-10 bg-gray-100 rounded-3xl">
        <img src="@/assets/images/aside-1.png" alt="aside-foto-1" />
        <div class="flex flex-col gap-4 items-center text-black">
          <h1 class="text-2xl font-semibold">SUB JUDUL</h1>
          <div class="flex flex-col">
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
          </div>
        </div>
        <button
          class="flex space-x-2 py-2 px-3 bg-[#B57EE6] items-center justify-center rounded-full"
        >
          <IconPlus class="text-white" />
          <span class="text-white text-lg font-medium">Berita lainnya</span>
        </button>
      </div>

      <div class="flex flex-col gap-4 p-10 bg-gray-100 rounded-3xl">
        <img src="@/assets/images/aside-2.png" alt="aside-foto-1" />
        <div class="flex flex-col gap-4 items-center text-black">
          <h1 class="text-2xl font-semibold">SUB JUDUL</h1>
          <div class="flex flex-col">
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
          </div>
        </div>
        <button
          class="flex space-x-2 py-2 px-3 bg-[#B57EE6] items-center justify-center rounded-full"
        >
          <IconPlus class="text-white" />
          <span class="text-white text-lg font-medium">Berita lainnya</span>
        </button>
      </div>

      <div class="flex flex-col gap-4 p-10 bg-gray-100 rounded-3xl">
        <img src="@/assets/images/aside-1.png" alt="aside-foto-1" />
        <div class="flex flex-col gap-4 items-center text-black">
          <h1 class="text-2xl font-semibold">SUB JUDUL</h1>
          <div class="flex flex-col">
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
          </div>
        </div>
        <button
          class="flex space-x-2 py-2 px-3 bg-[#B57EE6] items-center justify-center rounded-full"
        >
          <IconPlus class="text-white" />
          <span class="text-white text-lg font-medium">Berita lainnya</span>
        </button>
      </div>

      <div class="flex flex-col gap-4 p-10 bg-gray-100 rounded-3xl">
        <img src="@/assets/images/aside-2.png" alt="aside-foto-1" />
        <div class="flex flex-col gap-4 items-center text-black">
          <h1 class="text-2xl font-semibold">SUB JUDUL</h1>
          <div class="flex flex-col">
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
            <p class="text-lg font-medium">TEKS ISI SUB JUDUL</p>
          </div>
        </div>
        <button
          class="flex space-x-2 py-2 px-3 bg-[#B57EE6] items-center justify-center rounded-full"
        >
          <IconPlus class="text-white" />
          <span class="text-white text-lg font-medium">Berita lainnya</span>
        </button>
      </div>
    </aside>
  </div>

  <div
    class="relative -mx-[73px] bg-[url('@/assets/images/main-footer.png')] bg-cover bg-center py-36 px-32"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      <div class="flex flex-col items-center space-y-4 py-10 px-12 bg-[#D9D9D9] rounded-3xl">
        <img src="@/assets/images/cilpa.png" alt="cilpa-foto" width="150" height="150" />
        <span class="font-semibold text-2xl text-black">Cilpa</span>
        <button
          class="flex space-x-2 py-3 px-4 bg-[#B57EE6] items-center justify-center rounded-xl"
        >
          <span class="text-white text-lg font-medium">Selanjutnya</span>
        </button>
      </div>

      <div class="flex flex-col items-center space-y-4 py-10 px-12 bg-[#D9D9D9] rounded-3xl">
        <img src="@/assets/images/icc.png" alt="icc-foto" width="150" height="150" />
        <span class="font-semibold text-2xl text-black">Inter Culture Club</span>
        <button
          class="flex space-x-2 py-3 px-4 bg-[#B57EE6] items-center justify-center rounded-xl"
        >
          <span class="text-white text-lg font-medium">Selanjutnya</span>
        </button>
      </div>

      <div class="flex flex-col items-center space-y-4 py-10 px-12 bg-[#D9D9D9] rounded-3xl">
        <img src="@/assets/images/cilpa.png" alt="cilpa-foto" width="150" height="150" />
        <span class="font-semibold text-2xl text-black">Cilpa</span>
        <button
          class="flex space-x-2 py-3 px-4 bg-[#B57EE6] items-center justify-center rounded-xl"
        >
          <span class="text-white text-lg font-medium">Selanjutnya</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
</script>
