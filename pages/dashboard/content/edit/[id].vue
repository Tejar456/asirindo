<template>
  <div class="mx-auto">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        Edit Content Item
      </h2>

      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- Icon -->
        <div class="md:col-span-2">
          <label for="icon" class="form-label">
            Icon <span class="text-red-500">*</span>
          </label>
          <textarea
            id="icon"
            v-model="form.icon"
            required
            rows="3"
            class="textarea-field"
          ></textarea>
        </div>

        <!-- Title ID -->
        <div>
          <label for="title-id" class="form-label">
            Title ID <span class="text-red-500">*</span>
          </label>
          <input
            id="title-id"
            type="text"
            v-model="form.title_id"
            required
            class="input-field"
          />
        </div>

        <!-- Title EN -->
        <div>
          <label for="title-en" class="form-label">
            Title EN <span class="text-red-500">*</span>
          </label>
          <input
            id="title-en"
            type="text"
            v-model="form.title_en"
            required
            class="input-field"
          />
        </div>

        <!-- Amount -->
        <div class="md:col-span-2">
          <label for="amount" class="form-label">
            Amount <span class="text-red-500">*</span>
          </label>
          <input
            id="amount"
            type="number"
            v-model="form.amount"
            required
            class="input-field"
          />
        </div>

        <!-- Action Buttons -->
        <div class="md:col-span-2 flex justify-end gap-4 mt-4">
          <button type="reset" class="btn-secondary" :disabled="isSubmitting">
            Reset
          </button>

          <button
            type="submit"
            :disabled="isSubmitting || !isFormValid"
            :aria-disabled="isSubmitting"
            class="btn-primary"
          >
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
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
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
  title: "Edit Content",
  middleware: "auth",
});

const route = useRoute();
const router = useRouter();
const supabase = useSupabaseClient();

const isSubmitting = ref(false);
const form = ref({
  icon: "",
  title_id: "",
  title_en: "",
  amount: null,
});

const contentId = route.params.id;

// Validate form fields
const isFormValid = computed(() => {
  return (
    form.value.icon &&
    form.value.title_id &&
    form.value.title_en &&
    form.value.amount
  );
});

// Fetch data for the item to edit
onMounted(async () => {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("id", contentId)
    .single();

  if (error) {
    alert("Failed to fetch data: " + error.message);
    router.push("/dashboard/content");
    return;
  }

  // Populate form with existing data
  form.value = {
    icon: data.icon,
    title_id: data.title_id,
    title_en: data.title_en,
    amount: data.amount,
  };
});

// Handle form submission (update)
const handleSubmit = async () => {
  if (!isFormValid.value) {
    alert("Please fill in all required fields.");
    return;
  }

  isSubmitting.value = true;

  try {
    const { error } = await supabase
      .from("content")
      .update({
        icon: form.value.icon,
        title_id: form.value.title_id,
        title_en: form.value.title_en,
        amount: form.value.amount,
      })
      .eq("id", contentId);

    if (error) throw error;

    alert("Data successfully updated!");
    router.push("/dashboard/content");
  } catch (err) {
    alert("Failed to update data: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

// Reset form fields
const handleReset = () => {
  form.value = {
    icon: "",
    title_id: "",
    title_en: "",
    amount: null,
  };
};
</script>
