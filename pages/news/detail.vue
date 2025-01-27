<script setup>
useHead({
  title: "Read News",
  meta: [
    {
      name: "description",
      content: "Read Page",
    },
  ],
});

import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>
<template>
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
            Read News
          </h1>
          <h4 class="text-white text-base sm:text-lg font-semibold z-10 text-center">
            <nuxt-link to="/" class="text-white hover:text-yellow-100">Home</nuxt-link>
            >
            <nuxt-link to="/news" class="text-yellow-400">Read News</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!-- Blog Article -->
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div class="max-w-2xl">
        <!-- Content -->
        <div class="space-y-5 md:space-y-8">
          <div class="space-y-3">
            <h2 class="text-2xl font-bold md:text-3xl">
              Asirindo Laporkan 15 Pengusaha Karaoke Pengguna Lagu Tanpa Izin
            </h2>

            <p class="text-lg text-gray-800">
              “Hingga saat ini ada sekitar 15 pengusaha karaoke lainnya di Jawa, selain di Yogyakarta seperti di
              Jakarta, Surabaya, dan Karawang,”
            </p>
          </div>

          <!-- <p class="text-lg text-gray-800">
            We're proud to be a part of creating a more open culture and to
            continue building a product that supports this vision.
          </p> -->

          <figure>
            <img class="w-full object-cover rounded-xl" src="assets/img/news1.jpeg" alt="Blog Image" />
            <!-- <figcaption class="mt-3 text-sm text-center text-gray-500">
              A woman sitting at a table.
            </figcaption> -->
          </figure>

          <p class="text-lg text-gray-800">
            Ungkap General Manager Legal Asirindo, Braniko Indhyar di Sleman, DIY, Rabu.

            Sebenarnya Asirindo sudah melakukan pendekatan dan menerangkan bahwa mereka melanggar hak ekonomi produser
            rekaman dalam UU nomor 28 tahun 2014 tentang Hak Cipta. Sayangnya maksud baik tidak mendapat sambutan dari
            para pemilik dan pengelola tempat karaoke tersebut.

            Braniko juga menambahkan, kerugian produser rekaman yang timbul dari permasalahan ini berkisar 500 juta
            hingga 5 miliar rupiah.

            Lewat teleconference penyanyi, Marcell Siahaan pun ikut menyayangkan para pengusaha karaoke yang melanggar
            kewajibannya. Dia menyebut tindakan pelanggaran hak cipta ini memalukan.
          </p>

          <!-- <p class="text-lg text-gray-800">
            That's why we are excited to share that we now have a , which will
            allow individual designers, startups and other small teams a chance
            to create a culture of openness early on.
          </p> -->
        </div>
        <!-- End Content -->
      </div>
    </div>
    <!-- End Blog Article -->
  </div>
</template>
