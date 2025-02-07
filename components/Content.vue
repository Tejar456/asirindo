<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const vidio = ref("0");
const audio = ref("0");
const db = ref("0");
const producer = ref("0");
const statsSection = ref(null);
let hasAnimated = false;
let observer = null;

const formatNumber = (num) => {
  return new Intl.NumberFormat("id-ID").format(num);
};
const animateNumber = (refVar, target, duration = 2000) => {
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(easeOutQuart * target);

    refVar.value = formatNumber(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      refVar.value = formatNumber(target);
    }
  };

  requestAnimationFrame(animate);
};

const startAnimation = () => {
  if (!hasAnimated) {
    animateNumber(vidio, 24993);
    animateNumber(audio, 79410);
    animateNumber(db, 6372038);
    animateNumber(producer, 168);
    hasAnimated = true;
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startAnimation();
      }
    },
    { threshold: 0.5 }
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <section id="content">
    <div class="bg-slate-200 py-16" ref="statsSection">
      <div class="mx-auto px-4">
        <!-- Header Section -->
        <header class="text-center mb-16">
          <h1 class="text-2xl md:text-4xl font-semibold text-slate-800" data-aos="fade-up">
            {{ $t("titlecontent") }}
          </h1>
          <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded my-4" data-aos="fade-up"></div>
          <p class="text-base md:text-lg text-slate-600 max-w-xl mx-auto" data-aos="fade-up">
            {{ $t("desksolution") }}
          </p>
        </header>
        <div class="flex flex-col md:flex-row items-center md:items-start justify-center">
          <!-- Grid Container -->
          <div
            class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 justify-items-center md:justify-items-start items-start max-w-md md:max-w-md mx-auto">
            <div
              class="block relative transform transition-all duration-300 bg-white border-2 border-slate-200 rounded-xl shadow-lg p-4 flex-col items-center hover:border-yellow-400 hover:scale-105 aspect-square"
              data-aos="fade-right" data-aos-delay="200">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <h5 class="mb-2 text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight text-center">
                  {{ vidio }}
                </h5>
                <p class="text-md md:text-lg text-center font-bold tracking-wide text-slate-700 uppercase">
                  {{ $t("vidio") }}
                </p>
              </div>
            </div>

            <div
              class="block relative overflow-hidden transform transition-all duration-300 bg-white border-2 border-slate-200 rounded-xl shadow-lg p-4 flex-col items-center hover:border-yellow-400 hover:scale-105 aspect-square"
              data-aos="fade-right" data-aos-delay="300">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8 .25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <h5 class="mb-2 text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight text-center">
                  {{ audio }}
                </h5>
                <p class="text-md md:text-lg text-center font-bold tracking-wide text-slate-700 uppercase">
                  {{ $t("audio") }}
                </p>
              </div>
            </div>

            <div
              class="block relative overflow-hidden transform transition-all duration-300 bg-white border-2 border-slate-200 rounded-xl shadow-lg p-4 flex-col items-center hover:border-yellow-400 hover:scale-105 aspect-square"
              data-aos="fade-right" data-aos-delay="400">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h5 class="mb-2 text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight text-center">
                  {{ db }}
                </h5>
                <p class="text-md md:text-lg text-center font-bold tracking-wide text-slate-700 uppercase">
                  {{ $t("database") }}
                </p>
              </div>
            </div>

            <div
              class="block relative overflow-hidden transform transition-all duration-300 bg-white border-2 border-slate-200 rounded-xl shadow-lg p-4 flex-col items-center hover:border-yellow-400 hover:scale-105 aspect-square"
              data-aos="fade-right" data-aos-delay="600">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <div class="mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h5 class="mb-2 text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight text-center">
                  {{ producer }}
                </h5>
                <p class="text-md md:text-lg text-center font-bold tracking-wide text-slate-700 uppercase">
                  {{ $t("producers") }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full h-full md:w-1/2 mt-5 md:mt-0 flex items-start justify-start" data-aos="fade-down"
            duration="300">
            <img src="assets/img/music1.png" alt="Music Visual"
              class="rounded-xl shadow-lg object-cover h-full w-full max-w-md" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.block {
  width: 200px;
  height: 200px;
}

@media (max-width: 1280px) {
  .block {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .block {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 640px) {
  .block {
    width: 140px;
    height: 140px;
  }
}
</style>
