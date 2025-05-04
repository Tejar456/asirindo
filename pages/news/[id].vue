<script setup>

const supabase = useSupabaseClient()
const route = useRoute()
const news = ref(null) // Change from array to single object

const getNews = async () => {
  const { data, error } = await supabase
    .from("news")
    .select('*')
    .eq('id', route.params.id)
    .single() // Get single record

  if (error) {
    console.error('Error:', error)
    return
  }

  if (data) {
    news.value = data
    console.log('Fetched news:', data) // Debug log
  }
}

onMounted(() => {
  getNews()
})
</script>

<template>
  <div class="h-[30vh] w-full relative mb-5 shadow-md flex items-center justify-center">
    <div>
      <div>
        <div class="bg-gray-500 border-2 border-gray-100 rounded-md mb-4 p-4 flex items-center">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div class="flex-1">
            <div class="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div class="w-1/2 h-3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div>
        <img src="assets/img/news3.webp" alt="foto-persyaratan1" class="w-full h-full object-cover absolute inset-0" />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <h1 class="text-white text-4xl font-semibold z-10 text-center">
            Baca Berita
          </h1>
          <h4 class="text-white text-base sm:text-lg font-semibold z-10 text-center">
            <nuxt-link to="/" class="text-white hover:text-yellow-100">Home</nuxt-link>
            >
            <nuxt-link to="/news" class="text-yellow-400">Baca Berita</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div>

    <div v-if="news" class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div class="max-w-2xl">
        <div class="space-y-5 md:space-y-8">
          <div class="space-y-3">
            <h2 class="text-2xl font-bold md:text-3xl">
              {{ news.title }}
            </h2>

            <p class="text-lg text-gray-800">
              {{ news.headline }}
            </p>
          </div>

          <figure>
            <img class="w-full object-cover rounded-xl" :src="news.image" :alt="news.title"
              @error="(e) => console.error('Image load error:', e)" />
          </figure>

          <p class="text-lg text-gray-800">
            {{ news.content }}
          </p>
        </div>
      </div>
    </div>

    <!-- Loading state -->
    <!-- Replace the loading state div with this -->
    <div v-else class="max-w-3xl mx-auto px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8">
      <div class="max-w-2xl animate-pulse">
        <!-- Title skeleton -->
        <div class="h-8 bg-gray-200 rounded-lg w-3/4 mb-4"></div>

        <!-- Headline skeleton -->
        <div class="h-4 bg-gray-200 rounded-lg w-full mb-8"></div>

        <!-- Image skeleton -->
        <div class="aspect-video bg-gray-200 rounded-xl mb-8"></div>

        <!-- Content skeleton -->
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded-lg w-full"></div>
          <div class="h-4 bg-gray-200 rounded-lg w-11/12"></div>
          <div class="h-4 bg-gray-200 rounded-lg w-full"></div>
          <div class="h-4 bg-gray-200 rounded-lg w-10/12"></div>
          <div class="h-4 bg-gray-200 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>