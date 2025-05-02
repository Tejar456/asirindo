<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div class="md:col-span-2">
          <label for="image" class="block text-sm font-medium mb-2">
            Gambar Berita
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            @change="handleImageChange"
            class="block w-full border border-gray-300 shadow-sm rounded-lg text-sm file:bg-gray-100 file:border-0 file:py-2 file:px-4 mb-4"
          />
          <div v-if="imagePreview" class="mt-4">
            <span class="block text-xs text-gray-500 mb-2"
              >Preview Gambar:</span
            >
            <div class="border p-2 inline-block rounded">
              <img
                :src="imagePreview"
                alt="Preview"
                class="w-40 h-auto object-contain rounded"
              />
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <label for="title" class="block text-sm font-medium mb-2"
            >Judul Berita</label
          >
          <input
            type="text"
            id="title"
            v-model="form.title"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>

        <div class="md:col-span-2">
          <label for="headline" class="block text-sm font-medium mb-2"
            >Headline Singkat</label
          >
          <input
            type="text"
            id="headline"
            v-model="form.headline"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>

        <div class="md:col-span-2">
          <label for="content" class="block text-sm font-medium mb-2"
            >Isi Berita</label
          >
          <textarea
            id="content"
            v-model="form.content"
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          ></textarea>
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
  layout: "dashboard",
  title: "Tambah Berita",
});

const supabase = useSupabaseClient();

const imageFile = ref(null);
const imagePreview = ref(null);
const form = ref({
  title: "",
  headline: "",
  content: "",
});

function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    imageFile.value = file;
    imagePreview.value = URL.createObjectURL(file);
  } else {
    imageFile.value = null;
    imagePreview.value = null;
  }
}

async function handleSubmit() {
  if (!imageFile.value) {
    alert("Silakan pilih gambar terlebih dahulu.");
    return;
  }

  const fileName = `${Date.now()}-${imageFile.value.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("img")
    .upload(fileName, imageFile.value);

  if (uploadError) {
    console.error("Upload error:", uploadError.message);
    alert("Gagal mengunggah gambar.");
    return;
  }

  const { data: publicUrlData } = supabase.storage
    .from("img")
    .getPublicUrl(uploadData.path);

  const imageUrl = publicUrlData.publicUrl;

  const { error: insertError } = await supabase.from("news").insert({
    title: form.value.title,
    headline: form.value.headline,
    content: form.value.content,
    image: imageUrl,
  });

  if (insertError) {
    console.error("Insert error:", insertError.message);
    alert("Gagal menyimpan data.");
    return;
  }

  alert("Berita berhasil ditambahkan!");
  handleReset();
}

function handleReset() {
  form.value.title = "";
  form.value.headline = "";
  form.value.content = "";
  imageFile.value = null;
  imagePreview.value = null;
}
</script>
