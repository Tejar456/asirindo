<template>
  <div class="w-full h-full">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink v-for="(card, index) in cards" :key="index" :to="`/dashboard/${card.title}`"
          class="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div class="p-8 h-40 flex items-center gap-6">
            <div :class="`flex-shrink-0 ${card.bgColor} rounded-xl p-5`" v-html="card.icon"></div>
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
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-indigo-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

`,
  },
  {
    title: "about",
    count: 0,
    bgColor: "bg-blue-50",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
</svg>
`,
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
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-amber-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
`,
  },
  {
    title: "management",
    count: 0,
    bgColor: "bg-emerald-50",
    icon: `
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-12 h-12 text-emerald-600">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>`,
  },
  {
    title: "news",
    count: 0,
    bgColor: "bg-rose-50",
    icon: `
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-rose-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>
`,
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
