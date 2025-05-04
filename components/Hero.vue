<script setup>
const supabase = useSupabaseClient();
const slides = ref([]);
const currentIndex = ref(0);
const { locale } = useI18n();

const titleField = computed(() =>
  locale.value === "en" ? "title_en" : "title_id"
);
const currentTextKey = computed(
  () => slides.value[currentIndex.value]?.[titleField.value] || ""
);

const getSliderData = async () => {
  try {
    const { data, error } = await supabase.from("hero").select(`*`);

    if (error) {
      console.error("Error:", error);
      return;
    }

    if (data && data.length > 0) {
      slides.value = data;
    }
  } catch (err) {
    console.error("Failed to fetch slider data:", err);
  }
};
let interval = null;

const nextText = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  resetInterval();
};

const prevText = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  resetInterval();
};

const startInterval = () => {
  interval = setInterval(() => {
    nextText();
  }, 4000);
};

const resetInterval = () => {
  clearInterval(interval);
  startInterval();
};

onMounted(() => {
  getSliderData();
  startInterval();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div>
    <!-- Slider -->
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-white hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer",
        "isAutoPlay": true
      }'
      class="relative bg-gray-700"
    >
      <div class="relative bg-gray-700 h-screen">
        <div class="relative overflow-hidden h-full">
          <div
            class="absolute inset-0 flex transition-transform duration-700"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(item, i) in slides"
              :key="i"
              class="min-w-full h-full flex-shrink-0"
            >
              <div class="h-full w-full relative">
                <img
                  :src="item.image"
                  :alt="`Slide ${i + 1}`"
                  class="object-cover w-full h-full brightness-50"
                  @error="item.imageError = true"
                />
                <!-- Fallback untuk gambar error -->
                <div
                  v-if="item.imageError"
                  class="absolute inset-0 bg-gray-800 flex items-center justify-center"
                >
                  <span class="text-white text-lg">Image not available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation  -->
      <button
        type="button"
        @click="prevText"
        class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-white"
      >
        <span
          class="text-2xl hover:bg-gray-800/30 p-3 rounded-md"
          aria-hidden="true"
        >
          <svg
            class="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span class="sr-only">Previous</span>
      </button>

      <button
        type="button"
        @click="nextText"
        class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-white"
      >
        <span class="sr-only">Next</span>
        <span
          class="text-2xl hover:bg-gray-800/40 p-3 rounded-md"
          aria-hidden="true"
        >
          <svg
            class="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div
        class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"
      ></div>
    </div>

    <!-- Overlay -->
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 mt-10 w-4/5 transition-all duration-700"
    >
      <h1 class="text-3xl md:text-4xl font-semibold">
        {{ currentTextKey }}
      </h1>
      <p class="mt-5">
        {{ $t("text") }}
      </p>
      <div class="flex gap-10 justify-center mt-10">
        <nuxt-link to="#contact">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-xs md:text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none"
          >
            {{ $t("contactus") }}
          </button>
        </nuxt-link>
        <nuxt-link to="#talk">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-xs md:text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none transition duration-300"
          >
            {{ $t("more") }}
          </button>
        </nuxt-link>
      </div>
    </div>

    <!-- Talk Section -->
    <section id="talk">
      <div
        class="banner w-full h-auto p-5 bg-[#1E1E1E] flex justify-center items-center flex-col gap-5 text-center"
      >
        <h2
          class="text-xl md:text-3xl text-white font-semibold"
          data-aos="fade-up"
        >
          {{ $t("talk") }}
        </h2>
        <p class="text-white text-sm" data-aos="fade-up">
          {{ $t("talk1") }}
        </p>
        <div class="flex gap-10 justify-center" data-aos="fade-up">
          <nuxt-link to="#contact">
            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none"
            >
              {{ $t("contactus") }}
            </button>
          </nuxt-link>
          <nuxt-link to="#about">
            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-black/30 text-gray-50 shadow-sm hover:bg-black/70 focus:outline-none focus:bg-black/70 disabled:opacity-50 disabled:pointer-events-none transition duration-300"
            >
              {{ $t("more") }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>
