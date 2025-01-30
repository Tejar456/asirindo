<template>
  <section id="management">
    <div class="h-full flex items-center md:h-[90vh]">
      <div class="mx-auto px-4">
        <h1 class="text-center text-2xl md:text-4xl font-semibold" data-aos="fade-up">
          Management
        </h1>
        <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4" data-aos="fade-up"></div>
        <h2 class="text-center text-base md:text-lg mt-6 max-w-xl mx-auto" data-aos="fade-up">
          ASIRINDO is safely guarded by music executives with decades of
          experiences in music licensing.
        </h2>

        <div class="flex justify-center px-4 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10">
            <div class="text-center" data-aos="flip-left" duration="3000">
              <img
                class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                src="assets/img/Jusak.jpg" alt="Jusak" />
              <div class="mt-2 sm:mt-4">
                <h3 class="font-medium text-lg sm:text-xl text-gray-800">Jusak Setiono</h3>
                <p class="text-sm sm:text-md text-gray-600">Director</p>
              </div>
            </div>

            <div class="text-center" data-aos="flip-right" duration="3000">
              <img
                class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                src="assets/img/salfitri.jpg" alt="Salfitri" />
              <div class="mt-2 sm:mt-4">
                <h3 class="font-medium text-lg sm:text-xl text-gray-800">Salfitri Tri Dasa Yunita</h3>
                <p class="text-sm sm:text-md text-gray-600">Financial</p>
              </div>
            </div>

            <div class="text-center" data-aos="flip-right" duration="3000">
              <img
                class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                src="https://pagedone.io/asset/uploads/1696238396.png" alt="Salfitri" />
              <div class="mt-2 sm:mt-4">
                <h3 class="font-medium text-lg sm:text-xl text-gray-800">Patricia Angely</h3>
                <p class="text-sm sm:text-md text-gray-600">Co-Founder</p>
              </div>
            </div>

            <div class="text-center" data-aos="flip-right" duration="3000">
              <img
                class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                src="https://pagedone.io/asset/uploads/1696238425.png" alt="Salfitri" />
              <div class="mt-2 sm:mt-4">
                <h3 class="font-medium text-lg sm:text-xl text-gray-800">Yasmine Tano</h3>
                <p class="text-sm sm:text-md text-gray-600">Product
                  Manager</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <template>
  <section id="management">
    <div class="mt-3 mb-5">
      <div class="mx-auto px-4">
        <h1 class="text-center text-2xl md:text-4xl font-semibold" data-aos="fade-up">
          Management
        </h1>
        <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4" data-aos="fade-up"></div>
        <h2 class="text-center text-base md:text-lg mt-6 max-w-xl mx-auto" data-aos="fade-up">
          ASIRINDO is safely guarded by music executives with decades of
          experiences in music licensing.
        </h2>

        <div class="flex justify-center px-4 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10">
            <div v-for="(member, index) in management" :key="index" class="text-center" :data-aos="member.animation" :duration="member.duration">
              <img
                class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto"
                :src="member.img" :alt="member.name" />
              <div class="mt-2 sm:mt-4">
                <h3 class="font-medium text-lg sm:text-xl text-gray-800">{{ member.name }}</h3>
                <p class="text-sm sm:text-md text-gray-600">{{ member.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      management: [
        {
          name: 'Jusak Setiono',
          position: 'Director',
          img: 'assets/img/Jusak.jpg',
          animation: 'flip-left',
          duration: '3000'
        },
        {
          name: 'Salfitri Tri Dasa Yunita',
          position: 'Financial',
          img: 'assets/img/salfitri.jpg',
          animation: 'flip-right',
          duration: '3000'
        },
        {
          name: '........',
          position: 'Financial',
          img: 'assets/img/user.jpg',
          animation: 'flip-right',
          duration: '3000'
        },
        {
          name: '......',
          position: 'Financial',
          img: 'assets/img/user.jpg',
          animation: 'flip-right',
          duration: '3000'
        }
      ]
    };
  }
};
</script> -->