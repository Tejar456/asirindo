<template>
  <div class="w-full">
    <div class="mx-auto">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="message in messages"
          :key="message.id"
          class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ message.name }}
            </h2>
            <span class="text-sm text-gray-400">{{ message.email }}</span>
          </div>

          <h3 class="text-sm text-indigo-600 font-medium mb-2">
            {{ message.subject }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            {{ message.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();
const messages = ref([]);

const getMessages = async () => {
  try {
    const { data, error } = await supabase
      .from("contact")
      .select("*")      

    if (error) throw error;
    messages.value = data || [];
  } catch (err) {
    console.error("Failed to fetch messages:", err.message);
  }
};

onMounted(() => {
  getMessages();
});
</script>
