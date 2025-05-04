<template>
  <div class="mx-auto">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        Edit License Item
      </h2>

      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- Kolom Kiri -->
        <div>
          <label for="title-id" class="block text-sm font-medium mb-2 mt-4">
            Title ID <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title-id"
            v-model="form.title_id"
            required
            class="input-field"
          />

          <label for="desc-id" class="block text-sm font-medium mb-2 mt-4">
            Description ID <span class="text-red-500">*</span>
          </label>
          <textarea
            id="desc-id"
            v-model="form.description_id"
            required
            rows="4"
            class="textarea-field"
          ></textarea>

          <label for="contoh-id" class="block text-sm font-medium mb-2 mt-4">
            Contoh ID <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contoh-id"
            v-model="form.contoh_id"
            required
            class="input-field"
          />
        </div>

        <!-- Kolom Kanan -->
        <div>
          <label for="title-en" class="block text-sm font-medium mb-2 mt-4">
            Title EN <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title-en"
            v-model="form.title_en"
            required
            class="input-field"
          />

          <label for="desc-en" class="block text-sm font-medium mb-2 mt-4">
            Description EN <span class="text-red-500">*</span>
          </label>
          <textarea
            id="desc-en"
            v-model="form.description_en"
            required
            rows="4"
            class="textarea-field"
          ></textarea>

          <label for="contoh-en" class="block text-sm font-medium mb-2 mt-4">
            Contoh EN <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contoh-en"
            v-model="form.contoh_en"
            required
            class="input-field"
          />
        </div>

        <div class="md:col-span-2 flex justify-end gap-4 mt-4">
          <button type="reset" class="btn-secondary">Reset</button>
          <button type="submit" :disabled="isSubmitting" class="btn-primary">
            <svg
              v-if="isSubmitting"
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {{ isSubmitting ? "Submitting..." : "Submit" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  title: "Edit License",
  middleware: "auth",
});

const router = useRouter();
const supabase = useSupabaseClient();
const route = useRoute();

const isSubmitting = ref(false);

const form = ref({
  title_id: "",
  title_en: "",
  description_id: "",
  description_en: "",
  contoh_id: "",
  contoh_en: "",
});

// Fetch the existing license data when editing
const fetchLicenseData = async () => {
  const { data, error } = await supabase
    .from("license")
    .select("*")
    .eq("id", route.params.id)
    .single();

  if (error) {
    alert("Error fetching data: " + error.message);
    return;
  }

  form.value = {
    title_id: data.title_id,
    title_en: data.title_en,
    description_id: data.description_id,
    description_en: data.description_en,
    contoh_id: data.contoh_id,
    contoh_en: data.contoh_en,
  };
};

onMounted(() => {
  fetchLicenseData();
});

const handleSubmit = async () => {
  if (
    !form.value.title_id ||
    !form.value.title_en ||
    !form.value.description_id ||
    !form.value.description_en ||
    !form.value.contoh_id ||
    !form.value.contoh_en
  ) {
    alert("Please fill in all required fields");
    return;
  }

  isSubmitting.value = true;

  try {
    const { error } = await supabase
      .from("license")
      .update({
        title_id: form.value.title_id,
        title_en: form.value.title_en,
        description_id: form.value.description_id,
        description_en: form.value.description_en,
        contoh_id: form.value.contoh_id,
        contoh_en: form.value.contoh_en,
      })
      .eq("id", route.params.id);

    if (error) throw error;

    alert("Data successfully updated!");
    router.push("/dashboard/license");
  } catch (err) {
    alert("Update failed: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const handleReset = () => {
  form.value = {
    title_id: "",
    title_en: "",
    description_id: "",
    description_en: "",
    contoh_id: "",
    contoh_en: "",
  };
};
</script>
