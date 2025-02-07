Untuk mengganti isi teks di kode Vue.js Anda dengan menggunakan variabel internasionalisasi (i18n), Anda perlu mengganti teks statis dengan referensi ke variabel yang sesuai. Berikut adalah contoh bagaimana Anda dapat melakukannya:

```vue
<template>
  <section id="about">
    <div class="bg-slate-200 py-10" ref="statsSection">
      <div class="mx-auto px-4">
        <!-- Header Section -->
        <header class="text-center">
          <h1
            class="text-2xl md:text-4xl font-semibold text-slate-800"
            data-aos="fade-up"
          >
            {{ $t("title") }}
          </h1>
          <div
            class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded my-4"
            data-aos="fade-up"
          ></div>
          <p
            class="text-base md:text-lg text-slate-600 max-w-xl mx-auto"
            data-aos="fade-up"
          >
            {{ $t("desk") }}
          </p>
        </header>
        <div class="flex justify-center mt-4 md:mt-8">
          <div
            class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl p-8 mx-auto"
          >
            <div data-aos="fade-up">
              <div
                class="w-full p-4 bg-white border border-slate-800 rounded-lg shadow-lg-lg mx-2 md:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div class="flex justify-center py-4">
                  <img src="/assets/img/legal.png" alt="legal" class="w-12" />
                </div>
                <p
                  class="text-md text-center font-bold tracking-wide text-slate-800"
                >
                  {{ $t("card1") }}
                </p>
              </div>
              <div class="w-full p-4 mx-2 md:mx-4">
                <p class="text-md text-center tracking-wide text-slate-800">
                  {{ $t("descard1") }}
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                class="w-full p-4 bg-white border border-slate-800 rounded-lg shadow-lg-lg mx-2 md:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div class="flex justify-center py-4">
                  <img
                    src="/assets/img/service.png"
                    alt="support"
                    class="w-12"
                  />
                </div>
                <p
                  class="text-md text-center font-bold tracking-wide text-slate-800"
                >
                  {{ $t("card2") }}
                </p>
              </div>
              <div class="w-full p-4 mx-2 md:mx-4">
                <p class="text-md text-center tracking-wide text-slate-800">
                  {{ $t("descard2") }}
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                class="w-full p-4 bg-white border border-slate-800 rounded-lg shadow-lg-lg mx-2 md:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div class="flex justify-center py-4">
                  <img
                    src="/assets/img/catalogue.png"
                    alt="catalog"
                    class="w-12"
                  />
                </div>
                <p
                  class="text-md text-center font-bold tracking-wide text-slate-800"
                >
                  {{ $t("card3") }}
                </p>
              </div>
              <div class="w-full p-4 mx-2 md:mx-4">
                <p class="text-md text-center tracking-wide text-slate-800">
                  {{ $t("descard3") }}
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <div
                class="w-full p-4 bg-white border border-slate-800 rounded-lg shadow-lg-lg mx-2 md:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div class="flex justify-center py-4">
                  <img src="/assets/img/music.png" alt="for all" class="w-12" />
                </div>
                <p
                  class="text-md text-center font-bold tracking-wide text-slate-800"
                >
                  {{ $t("card4") }}
                </p>
              </ div>
              <div class="w-full p-4 mx-2 md:mx-4">
                <p class="text-md text-center tracking-wide text-slate-800">
                  {{ $t("descard4") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>