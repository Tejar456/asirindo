<template>
  <div class="p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white shadow-md rounded-2xl p-6 border border-gray-200">      
      <div class="col-span-1 p-6">        
        <form @submit.prevent="handleSubmit" @reset="handleReset">
          <label for="file-input" class="block text-sm font-medium mb-2"
            >Pilih Gambar</label
          >
          <input
            type="file"
            name="file-input"
            id="file-input"
            accept="image/*"
            @change="onFileChange"
            class="block w-full border border-gray-300 shadow-sm rounded-lg text-sm file:bg-gray-100 file:border-0 file:py-2 file:px-4 mb-4"
          />

          <label for="title-id" class="block text-sm font-medium mb-2"
            >Titel ID</label
          >
          <input
            type="text"
            id="title-id"
            v-model="titleId"
            class="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm mb-4 focus:border-blue-500 focus:ring-blue-500"
          />

          <label for="title-en" class="block text-sm font-medium mb-2"
            >Titel EN</label
          >
          <input
            type="text"
            id="title-en"
            v-model="titleEn"
            class="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm mb-6 focus:border-blue-500 focus:ring-blue-500"
          />          
          <div class="flex justify-end space-x-4">
            <button
              type="reset"
              class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>      
      <div
        class="rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center"
      >
        <h2 class="text-lg font-semibold mb-4">Preview Gambar</h2>
        <div v-if="previewUrl" class="w-full max-w-xs">
          <img
            :src="previewUrl"
            alt="Preview"
            class="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div v-else class="text-gray-400 text-sm">
          Belum ada gambar dipilih.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  title: "Create Hero",
});

const titleId = ref("");
const titleEn = ref("");
const previewUrl = ref(null);

function onFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    previewUrl.value = URL.createObjectURL(file);
  } else {
    previewUrl.value = null;
  }
}

function handleSubmit() {
  alert(
    `Data disubmit:\nJudul ID: ${titleId.value}\nJudul EN: ${titleEn.value}`
  );  
}

function handleReset() {
  titleId.value = "";
  titleEn.value = "";
  previewUrl.value = null;
}
</script>
