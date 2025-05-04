<script setup>
const supabase = useSupabaseClient()
const abouts = ref([])
const { locale } = useI18n()

const titleField = computed(() => locale.value === 'en' ? 'title_en' : 'title_id')
const descriptionField = computed(() => locale.value === 'en' ? 'description_en' : 'description_id')

const getabout = async () => {
  const { data, error } = await supabase
    .from("about")
    .select(`*`)
  if (data) {
    abouts.value = data
    if (error) throw error
  }
}

onMounted(() => {
  getabout()
})
</script>


<template>
  <section id="about">
    <div class="bg-slate-200 py-10" ref="statsSection">
      <div class="mx-auto px-4">
        <header class="text-center">
          <!-- <h1
            class="text-2xl md:text-4xl font-semibold text-slate-800"
            data-aos="fade-up"
          >
            {{ $t("title") }}
          </h1>
          <div
            class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded my-4"
            data-aos="fade-up"
          ></div>  -->
          <p class="text-base md:text-md text-slate-600 max-w-xl mx-auto" data-aos="fade-up">
            {{ $t("desk") }}
          </p>
        </header>
        <div class="flex justify-center mt-4 md:mt-8">
          <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl p-8 mx-auto">
            <div v-for="(about, i) in abouts" :key="i" data-aos="fade-up">
              <div
                class="w-full p-4 bg-white border border-slate-800 rounded-lg shadow-lg-lg mx-2 md:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div class="flex justify-center py-4">
                  <img :src="about.icon" alt="legal" class="w-12" />
                </div>
                <p class="text-md text-center font-bold tracking-wide text-slate-800">
                  {{ about[titleField] }}
                </p>
              </div>
              <div class="w-full p-4 mx-2 md:mx-4">
                <p class="text-sm text-center tracking-wide text-slate-800">
                  {{ about[descriptionField] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>