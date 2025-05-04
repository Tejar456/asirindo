<template>
  <div class="mx-auto">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Edit About Item</h2>

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
            class="input-field"
          />

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
        </div>

        <!-- Action Buttons -->
        <div class="md:col-span-2 flex justify-end gap-4">
          <button type="reset" class="btn-secondary">Reset</button>
          <button type="submit" class="btn-primary" :disabled="isSubmitting">
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
            {{ isSubmitting ? "Updating..." : "Update" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  title: "Edit About",
  middleware: "auth",
});

const route = useRoute();
const router = useRouter();
const supabase = useSupabaseClient();

const isSubmitting = ref(false);
const imagePreview = ref(null);
const aboutId = route.params.id;

const form = ref({
  icon: null,
  title_id: "",
  title_en: "",
  description_id: "",
  description_en: "",
  existingIcon: null,
});

onMounted(async () => {
  const { data, error } = await supabase
    .from("about")
    .select("*")
    .eq("id", aboutId)
    .single();

  if (error) {
    alert("Gagal memuat data: " + error.message);
    router.push("/dashboard/about");
    return;
  }

  form.value = {
    icon: null,
    title_id: data.title_id,
    title_en: data.title_en,
    description_id: data.description_id,
    description_en: data.description_en,
    existingIcon: data.icon,
  };
  imagePreview.value = data.icon;
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
  form.value.existingIcon = null;
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
    alert("Harap isi semua field yang wajib");
    return;
  }

  isSubmitting.value = true;

  try {
    let iconUrl = form.value.existingIcon;

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

    const { error: updateError } = await supabase
      .from("about")
      .update({
        icon: iconUrl,
        title_id: form.value.title_id,
        title_en: form.value.title_en,
        description_id: form.value.description_id,
        description_en: form.value.description_en,
      })
      .eq("id", aboutId);

    if (updateError) throw updateError;

    alert("Data berhasil diperbarui!");
    router.push("/dashboard/about");
  } catch (err) {
    alert("Gagal update data: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const handleReset = () => {
  form.value.icon = null;
  imagePreview.value = form.value.existingIcon;
};
</script>
