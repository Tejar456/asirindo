<template>
  <div class="mx-auto">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        Edit Company Data
      </h2>

      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- Logo Upload -->
        <div>
          <label class="block text-sm font-medium mb-2">Company Logo</label>

          <div v-if="!imagePreview" class="w-full">
            <label
              for="logo-file"
              class="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500"
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
                <p class="text-sm text-gray-500">
                  <span class="font-semibold">Click to upload</span> or drag &
                  drop
                </p>
              </div>
              <input
                id="logo-file"
                type="file"
                accept="image/*"
                class="hidden"
                @change="onFileChange"
              />
            </label>
          </div>
          <div
            v-else
            class="relative w-full h-60 border border-gray-300 rounded-lg overflow-hidden"
          >
            <img
              :src="imagePreview"
              alt="Logo Preview"
              class="w-full h-full object-contain"
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

        <!-- Form Fields -->
        <div>
          <label class="block text-sm font-medium mb-2"
            >Telephone <span class="text-red-500">*</span></label
          >
          <input
            v-model="form.telephone"
            required
            type="text"
            class="input-field"
          />

          <label class="block text-sm font-medium mb-2 mt-4"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            v-model="form.email"
            required
            type="email"
            class="input-field"
          />

          <label class="block text-sm font-medium mb-2 mt-4"
            >Address <span class="text-red-500">*</span></label
          >
          <textarea
            v-model="form.address"
            rows="4"
            required
            class="textarea-field"
          ></textarea>
        </div>

        <!-- Actions -->
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
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
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
  middleware: "auth",
  title: "Edit Company",
});

const supabase = useSupabaseClient();
const router = useRouter();

const isSubmitting = ref(false);
const imagePreview = ref(null);

const form = ref({
  logo: null,
  telephone: "",
  email: "",
  address: "",
  existingLogo: null,
});

onMounted(async () => {
  const { data, error } = await supabase.from("profile").select("*").single();

  if (error) {
    alert("Gagal memuat data: " + error.message);
    return;
  }

  form.value = {
    logo: null,
    telephone: data.telephone,
    email: data.email,
    address: data.address,
    existingLogo: data.logo,
  };
  imagePreview.value = data.logo;
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.value.logo = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  form.value.logo = null;
  form.value.existingLogo = null;
  imagePreview.value = null;
  const input = document.getElementById("logo-file");
  if (input) input.value = "";
};

const handleSubmit = async () => {
  if (!form.value.telephone || !form.value.email || !form.value.address) {
    alert("Harap isi semua field yang wajib.");
    return;
  }

  isSubmitting.value = true;

  try {
    let logoUrl = form.value.existingLogo;

    if (form.value.logo) {
      const file = form.value.logo;
      const fileName = `company-logo-${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("img")
        .upload(fileName, file);
      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("img")
        .getPublicUrl(fileName);
      logoUrl = urlData.publicUrl;
    }

    const { error: updateError } = await supabase
      .from("profil")
      .update({
        logo: logoUrl,
        telephone: form.value.telephone,
        email: form.value.email,
        address: form.value.address,
      })
      .eq("id", "38a237d1-2004-4da5-83be-03e91eaeb766");

    if (updateError) throw updateError;

    alert("Data perusahaan berhasil diperbarui!");
    router.push("/dashboard");
  } catch (err) {
    alert("Gagal update data: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const handleReset = () => {
  form.value.logo = null;
  imagePreview.value = form.value.existingLogo;
};
</script>
