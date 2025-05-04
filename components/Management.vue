<script setup>
const supabase = useSupabaseClient()
const mng = ref([])
const { locale } = useI18n()

const positionField = computed(() => locale.value === 'en' ? 'position_en' : 'position_id')

const getMng = async () => {
  const { data, error } = await supabase
    .from("management")
    .select(`*`)
    .order("id", { ascending: true })
  if (data) {
    mng.value = data
    if (error) throw error
  }
}

onMounted(() => {
  getMng()
})
</script>

<template>
  <section id="management">
    <div class="h-full flex items-center py-10 md:py-2 md:h-[90vh]">
      <div class="mx-auto w-full">
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
              <div v-for="(item, i) in mng" :key="i" class="text-center" data-aos="flip-left" duration="3000">
                <img :src="item.image" alt="img"
                  class="rounded-full border border-slate-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto object-cover" />
                <div class="mt-4">
                  <h3 class="font-medium text-lg sm:text-xl text-gray-800">
                    {{ item.name }}
                  </h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    {{ item[positionField] }}
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