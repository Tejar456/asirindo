Untuk menambahkan dukungan terjemahan (i18n) pada komponen Vue.js yang Anda berikan, Anda perlu mengganti teks statis dengan referensi ke variabel terjemahan menggunakan `$t()`. Berikut adalah langkah-langkah untuk melakukannya:

### 1. Definisikan Teks dalam File i18n

Pastikan Anda telah mendefinisikan semua teks yang ingin diterjemahkan dalam file i18n Anda. Berikut adalah contoh struktur file i18n:

```javascript
// i18n.js
export default {
  en: {
    solutionTitle: "Our Solution",
    solutionSubtitle: "One app to rule them all",
    feature1: "All content accessible from any places in the world. Available 24-7.",
    feature2: "Choose, change and play any song easily from categories and genres.",
    feature3: "Create playlists based on moods, activities, etc.",
    feature4: "Monthly subscription. Easy term..",
  },
  id: {
    solutionTitle: "Solusi Kami",
    solutionSubtitle: "Satu aplikasi untuk mengatur semuanya",
    feature1: "Semua konten dapat diakses dari mana saja di dunia. Tersedia 24-7.",
    feature2: "Pilih, ubah, dan putar lagu dengan mudah dari kategori dan genre.",
    feature3: "Buat daftar putar berdasarkan suasana hati, aktivitas, dll.",
    feature4: "Langganan bulanan. Syarat mudah..",
  },
};
```

### 2. Modifikasi Kode Vue.js

Berikut adalah kode Vue.js yang telah dimodifikasi untuk menggunakan `$t()`:

```vue
<template>
  <section id="solution">
    <!-- Solution -->
    <div class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto h-full md:h-[90vh]">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div data-aos="fade-up">
          <img
            class="rounded-xl"
            src="/assets/img/solution.png"
            alt="Solution Image"
          />
        </div>
        <!-- End Col -->

        <div class="mb-20">
          <div
            class="space-y-6 sm:space-y-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- Title -->
            <div class="mt-3 md:mt-5 mb-3 md:mb-5 px-4 md:px-0">
              <h1 class="text-center text-2xl md:text-4xl font-semibold">
                {{ $t("solutionTitle") }}
              </h1>
              <div
                class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4 animate-slide-up"
              ></div>
              <h2
                class="text-center text-base md:text-lg my-5 max-w-6xl mx-auto text-gray-700"
              >
                {{ $t("solutionSubtitle") }}
              </h2>
              <!-- End Title -->

              <!-- List -->
              <ul class="space-y-2 sm:space-y-4">
                <li class="flex gap-x-3">
                  <span
                    class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-300 text-white"
                  >
                    <svg
                      class="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div class="grow">
                    <p class="text-sm sm:text-base text-gray-700">
                      {{ $t("feature1") }}
                    </p>
                  </div>
                </li>
                <li class="flex gap-x-3">
                  <span
                    class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-300 text-white"
                  >
                    <svg
                      class="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div class="grow">
                    <p class="text-sm sm:text-base text-gray-700">
                      {{ $t("feature2") }}
                    </p>
                  </div>
                </li>
                <li class="flex gap-x-3">
                  <span
                    class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-300 text-white"
                  >
                    <svg
                      class="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div class="grow">
                    <p class="text-sm sm:text-base text-gray-700">
                      {{ $t("feature3") }}
                    </p>
                  </div>
                </li>
                <li class="flex gap-x-3">
                  <span
                    class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-gray-300 text-white"
                  >
                    <svg
                      class="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div class="grow">
                    <p class="text-sm sm:text-base text-gray-700">
                      {{ $t("feature4") }}
                    </p>
                  </div>
                </li>
              </ul>
              <!-- End List -->
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Solution -->
    </div>
  </section>
</template>