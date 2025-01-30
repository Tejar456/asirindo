<script setup>
useHead({
  title: "News",
  meta: [
    {
      name: "description",
      content: "News Page",
    },
  ],
});

import { ref, onMounted } from "vue";
import news1 from '@/assets/img/news1.jpeg';
import news2 from '@/assets/img/news2.jpg';
import news3 from '@/assets/img/news3.jpg';


const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});

const berita = [
  {
    id: 1,
    image: news1,
    alt: 'news1',
    title: 'Asirindo Laporkan 15 Pengusaha Karaoke Pengguna Lagu Tanpa Izin'
  },
  {
    id: 2,
    image: news2, 
    alt: 'news2',
    title: 'Asirindo Tunjuk Musik Hub untuk Konten Musik Indonesia yang Legal'
  },
  {
    id: 3,
    image: news3, 
    alt: 'news3',
    title: 'PT. Asirindo Ungkap Pelanggaran HAKI Bos Karaoke Rasa Sayang'
  }
];
</script>
<template>
  <!-- Title -->
  <div class="h-[30vh] w-full relative mb-5 shadow-md flex items-center justify-center">
    <div>
      <div v-if="loading">
        <div v-for="n in skeletonCount" :key="n"
          class="bg-gray-500 border-2 border-gray-100 rounded-md mb-4 p-4 flex items-center">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div class="flex-1">
            <div class="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div class="w-1/2 h-3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div v-else>
        <img src="assets/img/news3.webp" alt="foto-persyaratan1" class="w-full h-full object-cover absolute inset-0" />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <h1 class="text-white text-4xl font-semibold z-10 text-center">
            News
          </h1>
          <h4 class="text-white text-base sm:text-lg font-semibold z-10 text-center">
            <nuxt-link to="/" class="text-white hover:text-yellow-100">Home</nuxt-link>
            >
            <nuxt-link to="/news" class="text-yellow-400">News</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- End Title -->
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <a v-for="news in berita" :key="news.id" class="group flex flex-col focus:outline-none border-2 border-slate-200 rounded-2xl p-4 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg" href="/news/detail">
        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" :src="news.image" :alt="news.alt" />
        </div>
        <div class="mt-7">
          <h3 class="text-xl font-semibold text-gray-800">
            {{ news.title }}
          </h3>
          <div class="flex justify-center mt-5">
            <p class="inline-flex items-center gap-x-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 rounded-lg text-sm text-gray-800 font-medium">
              Read more
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
              </p>
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
</template>
