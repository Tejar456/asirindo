<template>
  <div>
    <!-- Slider -->
    <div data-hs-carousel='{
              "loadingClasses": "opacity-0",
              "dotsItemClasses": "hs-carousel-active:bg-white hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer",
              "isAutoPlay": true
          }' class="relative bg-gray-700">
      <div class="hs-carousel relative overflow-hidden h-screen bg-white">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div class="hs-carousel-slide">
            <div class="flex justify-center h-full w-full bg-gray-100 relative">
              <img src="/assets/img/hero.jpg" alt="hero" class="object-cover brightness-50 w-full" />
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div class="flex justify-center h-full w-full bg-gray-200">
              <img src="assets/img/hero4.jpg" alt="hero" class="object-cover w-full brightness-50" />
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div class="flex justify-center h-full w-full bg-gray-300">
              <img src="/assets/img/hero3.jpg" alt="hero" class="object-cover w-full brightness-50" />
            </div>
          </div>
        </div>
      </div>
      <button type="button"
        class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-white">
        <span class="text-2xl hover:bg-gray-800/30 p-3 rounded-md" aria-hidden="true">
          <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button type="button"
        class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-white">
        <span class="sr-only">Next</span>
        <span class="text-2xl hover:bg-gray-800/40 p-3 rounded-md" aria-hidden="true">
          <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>
      <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
    </div>
    <!-- Overlay -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 mt-10 w-4/5">
      <h1 class="text-4xl font-semibold">
        {{ currentText }}
      </h1>
      <p class="mt-5">
        ASIRINDO is a one stop music licensing solution for business customers
        in Indonesia.
      </p>
      <div class="flex gap-10 justify-center mt-10">
        <nuxt-link to="#contact">

          <button type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-xs md:text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none">
            Contact Us
          </button>
        </nuxt-link>
        <nuxt-link to="#talk">

          <button type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-xs md:text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none transition duration-300">
            Learn More
          </button>
        </nuxt-link>
      </div>
    </div>
    <!-- End Overlay -->
    <section id="talk">

      <div class="banner w-full h-auto p-5 bg-[#1E1E1E] flex justify-center items-center flex-col gap-5 text-center">
        <h2 class="text-xl md:text-3xl text-white font-semibold" data-aos="fade-up">
          Need music license? Talk to us!
        </h2>
        <p class="text-white text-sm" data-aos="fade-up">
          ASIRINDO had licensed thousands of Indonesian songs to use legally in
          restaurants, cafes, hotels, karaoke, broadcasts and any other
          businesses, so you don't have to
        </p>
        <div class="flex gap-10 justify-center" data-aos="fade-up">
          <nuxt-link to="#contact">

            <button type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none">
              Contac Us
            </button>
          </nuxt-link>
          <nuxt-link to="#about">

            <button type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none transition duration-300">
              Learn More
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const texts = [
  "Music is an effective tool to engage your customers",
  "You need music in your restaurants karaoke and hotels",
  "Music is an integral part in hospitality business",
  "Broadcasting businesses need to have legal products",
  "Support Indonesian music with legally licensed songs",
];

const currentText = ref(texts[0]);

onMounted(() => {
  let index = 0;
  let interval = setInterval(() => {
    index = (index + 1) % texts.length;
    currentText.value = texts[index];
  }, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
