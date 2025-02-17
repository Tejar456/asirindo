<template>
  <section id="management">
    <div class="h-full flex items-center md:h-[90vh]">
      <div class="mx-auto px-4">
        <h1 class="text-center text-2xl md:text-4xl font-semibold" data-aos="fade-up">
          {{ $t("titlemanagement") }}
        </h1>
        <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4" data-aos="fade-up"></div>
        <h2 class="text-center text-base md:text-lg mt-6 max-w-xl mx-auto" data-aos="fade-up">
          {{ $t("deskmanagement") }}
        </h2>

       <div class="container mx-auto px-4 pt-8">
    <div class="flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 place-items-center">
        <!-- First Team Member -->
        <div class="text-center" data-aos="flip-left" duration="3000">
          <img
            class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto object-cover"
            src="assets/img/Jusak.jpg"
            alt="Jusak"
          />
          <div class="mt-4">
            <h3 class="font-medium text-lg sm:text-xl text-gray-800">
              Jusak Irwan Sutiono
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t("director") }}
            </p>
          </div>
        </div>

        <!-- Second Team Member -->
        <div class="text-center" data-aos="flip-right" duration="3000">
          <img
            class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto object-cover"
            src="assets/img/salfitri2.jpg"
            alt="Salfitri"
          />
          <div class="mt-4">
            <h3 class="font-medium text-lg sm:text-xl text-gray-800">
              Salfitri Tri Dasa Yunita
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t("financial") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </section>
</template>