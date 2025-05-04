<script setup>
const supabase = useSupabaseClient()
const license = ref([])
const { locale } = useI18n()

const titleField = computed(() => locale.value === 'en' ? 'title_en' : 'title_id')
const descriptionField = computed(() => locale.value === 'en' ? 'description_en' : 'description_id')
const contohField = computed(() => locale.value === 'en' ? 'contoh_en' : 'contoh_id')

const getLisensi = async () => {
  const { data, error } = await supabase
    .from("license")
    .select(`*`)
  if (data) {
    license.value = data
    if (error) throw error
  }
}

onMounted(() => {
  getLisensi()
})
</script>

<template>
  <section id="lisencing">
    <div class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto h-full md:h-full mb-10">
      <header class="text-center">
        <h1 class="text-2xl md:text-4xl font-semibold text-slate-800" data-aos="fade-up">
          {{ $t("licensingtitle") }}
        </h1>
        <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded my-4" data-aos="fade-up"></div>
      </header>
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-20 pt-10">
        <div class="col-span-1 mb-5 md:mb-3">
          <img data-aos="fade-up" class="h-96 rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG11c2ljfGVufDB8fDB8fHww"
            alt="" />
        </div>


        <div data-aos="fade-up">
          <div class="grid grid-cols-1 gap-6">
            <div v-for="(item, i) in license" :key="i"
              class="p-4 bg-white rounded-lg border border-gray-100 hover:border-yellow-400 transition-all duration-300">
              <h3 class="font-semibold text-base text-gray-800 mb-2">
                {{ item[titleField] }}
              </h3>
              <p class="text-sm text-gray-700 mb-2">
                {{ item[descriptionField] }}
              </p>
              <p class="text-sm text-gray-700">
                {{ item[contohField] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>