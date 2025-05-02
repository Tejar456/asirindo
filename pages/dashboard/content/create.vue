<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <form
        @submit.prevent="createContent"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div class="md:col-span-2">
          <label for="svg-icon" class="block text-sm font-medium mb-2"
            >SVG Icon</label
          >
          <textarea
            id="svg-icon"
            v-model="form.icon"
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label for="title-id" class="block text-sm font-medium mb-2"
            >Title ID</label
          >
          <input
            type="text"
            id="title-id"
            v-model="form.title_id"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="title-en" class="block text-sm font-medium mb-2"
            >Title EN</label
          >
          <input
            type="text"
            id="title-en"
            v-model="form.title_en"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>

        <div class="md:col-span-2">
          <label for="amount" class="block text-sm font-medium mb-2"
            >Amount</label
          >
          <input
            type="number"
            id="amount"
            v-model="form.amount"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>

        <div class="md:col-span-2 flex justify-end gap-4 pt-4">
          <button
            type="reset"
            class="px-4 py-2 rounded-lg border text-gray-700 bg-white hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Create Content",
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();

const form = ref({
  title_id: "",
  title_en: "",
  amount: "",
  icon: "",
});

async function createContent() {
  const { error } = await supabase.from("content").insert({
    title_id: form.value.title_id,
    title_en: form.value.title_en,
    amount: form.value.amount,
    icon: form.value.icon,
  });

  if (error) {
    console.error("Insert error:", error.message);
    alert("Gagal menyimpan data.");
    return;
  }

  alert("Data berhasil disimpan!");
  handleReset();
}

function handleReset() {
  form.value = {
    title_id: "",
    title_en: "",
    amount: "",
    icon: "",
  };
}
</script>
