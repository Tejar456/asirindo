<template>
    <section id="lisencing">
    <!-- Solution -->
    <div
      class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto h-full md:h-[90vh] mb-10"
    >
      <header class="text-center">
        <h1
          class="text-2xl md:text-4xl font-semibold text-slate-800"
          data-aos="fade-up"
        >
          {{ $t("licensingtitle") }}
        </h1>
        <div
          class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded my-4"
          data-aos="fade-up"
        ></div>
      </header>
      <!-- Grid -->
      <div
        class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-20 pt-10"
      >
        <div class="col-span-1 mb-5 md:mb-3">
          <img data-aos="fade-up"
            class="h-96 rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG11c2ljfGVufDB8fDB8fHww"
            alt=""
          />
        </div>

        <!-- Cards Column -->
       <div class="col-span-1">
  <!-- Feature Card 2 -->
  <div 
    data-aos="fade-up"
    class="block border border-gray-200 rounded-lg shadow-md hover:shadow-lg focus:outline-none mb-4 max-w-xl"
  >
    <div class="flex items-center overflow-hidden">
      <div class="grow p-4">
        <div class="min-h-20 flex flex-col justify-center">
          <h3 class="font-semibold text-base text-gray-800">
            {{ $t("feature2") }}
          </h3>
          <p class="mt-2 text-sm text-gray-700">
            {{ $t("feature2content") }}
          </p>
          <p class="mt-2 text-sm text-gray-700">
            {{ $t("feature2exm") }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Feature Card 3 -->
  <div 
    data-aos="fade-up"
    class="block border border-gray-200 rounded-lg shadow-md hover:shadow-lg focus:outline-none mb-4 max-w-xl"
  >
    <div class="flex items-center overflow-hidden">
      <div class="grow p-4">
        <div class="min-h-20 flex flex-col justify-center">
          <h3 class="font-semibold text-base text-gray-800">
            {{ $t("feature3") }}
          </h3>
          <p class="mt-2 text-sm text-gray-700">
            {{ $t("feature3content") }}
          </p>
          <p class="mt-2 text-sm text-gray-700">
            {{ $t("feature3exm") }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Feature Card 1 -->
  <div 
    data-aos="fade-up"
    class="block border border-gray-200 rounded-lg shadow-md hover:shadow-lg focus:outline-none mb-4 max-w-xl"
  >
    <div class="flex items-center overflow-hidden">
      <div class="grow p-4">
        <div class="min-h-20 flex flex-col justify-center">
          <h3 class="font-semibold text-base text-gray-800 text-center">
            {{ $t("feature1") }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </section>
</template>