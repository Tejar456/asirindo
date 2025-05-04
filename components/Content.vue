<script setup>
const supabase = useSupabaseClient()
const content = ref([])
const { locale } = useI18n()

const titleField = computed(() => locale.value === 'en' ? 'title_en' : 'title_id')

const getContent = async () => {
  const { data, error } = await supabase
    .from("content")
    .select(`*`)
  if (data) {
    content.value = data
    if (error) throw error
  }
}

onMounted(() => {
  getContent()
})
</script>

<template>
  <section id="content">
    <div class="bg-slate-200 py-16" ref="statsSection">
      <div class="mx-auto px-4">
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
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
              <div v-for="(item, i) in content" :key="i"
                class="w-full max-w-sm p-6 bg-white border-2 border-slate-200 rounded-xl shadow-lg hover:border-yellow-400 hover:scale-105 transition-all duration-300"
                data-aos="fade-up" :data-aos-delay="i * 100">
                <div class="flex flex-col items-center justify-center h-full">
                  <div class="mb-4">
                    <div v-html="item.icon" class="size-10 text-slate-700"></div>
                  </div>
                  <h5 class="mb-2 text-yellow-500 text-2xl font-bold text-center">
                    {{ item.amount }}
                  </h5>
                  <p class="text-base font-bold text-center text-slate-700 uppercase">
                    {{ item[titleField] }}
                  </p>
                </div>
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