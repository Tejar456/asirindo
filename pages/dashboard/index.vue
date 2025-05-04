<template>
  <div class="w-full h-full">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(card, index) in cards"
          :key="index"
          :to="`/dashboard/${card.title}`"
          class="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div class="p-8 h-40 flex items-center gap-6">
            <div
              :class="`flex-shrink-0 ${card.bgColor} rounded-xl p-5`"
              v-html="card.icon"
            ></div>
            <div>
              <p class="text-base font-medium text-gray-500 mb-1 capitalize">
                {{ card.title }}
              </p>
              <h3 class="text-4xl font-bold text-gray-800">
                {{ card.count }}
              </h3>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const cards = ref([
  {
    title: "hero",
    count: 0,
    bgColor: "bg-indigo-50",
    icon: `
      <svg class="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z"/>
      </svg>`,
  },
  {
    title: "about",
    count: 0,
    bgColor: "bg-blue-50",
    icon: `
      <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 17.804A10 10 0 0112 2a10 10 0 016.879 15.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>`,
  },
  {
    title: "content",
    count: 0,
    bgColor: "bg-purple-50",
    icon: `
      <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 16h8M8 12h8m-6 8h4a2 2 0 002-2V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>`,
  },
  {
    title: "license",
    count: 0,
    bgColor: "bg-amber-50",
    icon: `
      <svg class="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 12l8-4-8-4-8 4 8 4zm0 0v8"/>
      </svg>`,
  },
  {
    title: "management",
    count: 0,
    bgColor: "bg-emerald-50",
    icon: `
      <svg class="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 17v-2a4 4 0 014-4h4m-6 6v4m0-4h6"/>
      </svg>`,
  },
  {
    title: "news",
    count: 0,
    bgColor: "bg-rose-50",
    icon: `
      <svg class="w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h7l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2z"/>
      </svg>`,
  },
]);

onMounted(async () => {
  const tableNames = cards.value.map((card) => card.title);

  const responses = await Promise.all(
    tableNames.map((table) =>
      supabase.from(table).select("*", { count: "exact", head: true })
    )
  );

  responses.forEach((res, index) => {
    if (res.count !== null) {
      cards.value[index].count = res.count;
    }
  });
});

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>
