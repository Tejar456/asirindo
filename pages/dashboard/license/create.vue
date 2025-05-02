<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <form
        @submit.prevent="createLicense"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- Title ID -->
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

        <!-- Title EN -->
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

        <!-- Description ID -->
        <div>
          <label for="desc-id" class="block text-sm font-medium mb-2"
            >Description ID</label
          >
          <textarea
            id="desc-id"
            v-model="form.description_id"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Description EN -->
        <div>
          <label for="desc-en" class="block text-sm font-medium mb-2"
            >Description EN</label
          >
          <textarea
            id="desc-en"
            v-model="form.description_en"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Buttons -->
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
  title: "Create License",
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();

const form = ref({
  title_id: "",
  title_en: "",
  description_id: "",
  description_en: "",
});

const createLicense = async () => {
  const { data, error } = await supabase
    .from("license")
    .insert([form.value])
    .select("*");

  if (error) {
    console.error("Error creating license:", error);
    alert("Failed to create license.");
  } else {
    console.log("License created:", data);
    alert("License created successfully!");
    handleReset();
  }
};

const handleReset = () => {
  form.value = {
    title_id: "",
    title_en: "",
    description_id: "",
    description_en: "",
  };
};
</script>
