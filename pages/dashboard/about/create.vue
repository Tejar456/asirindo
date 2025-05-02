<template>
  <div class="mx-auto">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        Create About Item
      </h2>

      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- Icon Upload -->
        <div>
          <label class="block text-sm font-medium mb-2">Icon</label>

          <div v-if="!imagePreview" class="w-full">
            <!-- Dropzone -->
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="image/*"
                class="hidden"
                @change="onFileChange"
              />
            </label>
          </div>
          <div
            v-else
            class="relative w-full h-96 border border-gray-300 rounded-lg overflow-hidden"
          >
            <img
              :src="imagePreview"
              alt="Preview"
              class="w-full h-full object-cover"
            />
            <button
              @click="clearImage"
              type="button"
              class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Form Input -->
        <div>
          <label for="title-id" class="block text-sm font-medium mb-2">
            Title ID <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title-id"
            v-model="form.title_id"
            required
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title in Indonesian"
          />

          <label for="title-en" class="block text-sm font-medium mb-2 mt-4">
            Title EN <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title-en"
            v-model="form.title_en"
            required
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title in English"
          />

          <label for="desc-id" class="block text-sm font-medium mb-2 mt-4">
            Description ID <span class="text-red-500">*</span>
          </label>
          <textarea
            id="desc-id"
            v-model="form.description_id"
            required
            rows="4"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Enter description in Indonesian"
          ></textarea>

          <label for="desc-en" class="block text-sm font-medium mb-2 mt-4">
            Description EN <span class="text-red-500">*</span>
          </label>
          <textarea
            id="desc-en"
            v-model="form.description_en"
            required
            rows="4"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Enter description in English"
          ></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="md:col-span-2 flex justify-end gap-4">
          <button
            type="reset"
            class="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 font-medium text-sm transition-colors"
          >
            Reset
          </button>
          <button
            type="submit"
            class="px-5 py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium text-sm transition-colors flex items-center"
            :disabled="isSubmitting"
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
import { ref } from "vue";
import { useRouter } from "vue-router";

definePageMeta({
  layout: "dashboard",
  title: "Create About",
  middleware: "auth",
});

const router = useRouter();
const supabase = useSupabaseClient();
const isSubmitting = ref(false);
const imagePreview = ref(null);

const form = ref({
  icon: null,
  title_id: "",
  title_en: "",
  description_id: "",
  description_en: "",
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.value.icon = file;

    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  form.value.icon = null;
  imagePreview.value = null;
  const input = document.getElementById("dropzone-file");
  if (input) input.value = "";
};

const handleSubmit = async () => {
  if (
    !form.value.title_id ||
    !form.value.title_en ||
    !form.value.description_id ||
    !form.value.description_en
  ) {
    alert("Please fill all required fields");
    return;
  }

  isSubmitting.value = true;

  try {
    let iconUrl = null;

    if (form.value.icon) {
      const file = form.value.icon;
      const fileName = `about-${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("img")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("img")
        .getPublicUrl(fileName);
      iconUrl = urlData.publicUrl;
    }

    const { error: insertError } = await supabase.from("about").insert([
      {
        icon: iconUrl,
        title_id: form.value.title_id,
        title_en: form.value.title_en,
        description_id: form.value.description_id,
        description_en: form.value.description_en,
      },
    ]);

    if (insertError) throw insertError;

    alert("Data successfully submitted!");
    router.push("/dashboard/about");
  } catch (err) {
    alert("Failed to submit: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const handleReset = () => {
  form.value = {
    icon: null,
    title_id: "",
    title_en: "",
    description_id: "",
    description_en: "",
  };
  imagePreview.value = null;
  isSubmitting.value = false;
};
</script>
