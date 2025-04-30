<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <h2 class="text-lg font-semibold mb-4">Tambah Data Tentang</h2>
      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >        
        <div>
          <label for="title-id" class="block text-sm font-medium mb-2"
            >Title ID</label
          >
          <input
            type="text"
            id="title-id"
            v-model="titleId"
            placeholder="Judul dalam Bahasa Indonesia"
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
            v-model="titleEn"
            placeholder="Title in English"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>
    
        <div class="md:col-span-1">
          <label for="desc-id" class="block text-sm font-medium mb-2"
            >Description ID</label
          >
          <textarea
            id="desc-id"
            v-model="descriptionId"
            rows="3"
            placeholder="Deskripsi dalam Bahasa Indonesia"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          ></textarea>
        </div>
        
        <div class="md:col-span-1">
          <label for="desc-en" class="block text-sm font-medium mb-2"
            >Description EN</label
          >
          <textarea
            id="desc-en"
            v-model="descriptionEn"
            rows="3"
            placeholder="Description in English"
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
  title: "Create License",
  layout: "dashboard",
});

const titleId = ref("");
const titleEn = ref("");
const descriptionId = ref("");
const descriptionEn = ref("");

function handleSubmit() {
  alert(`
    Data disubmit:
    Title ID: ${titleId.value}
    Title EN: ${titleEn.value}
    Description ID: ${descriptionId.value}
    Description EN: ${descriptionEn.value}
  `);
}

function handleReset() {
  titleId.value = "";
  titleEn.value = "";
  descriptionId.value = "";
  descriptionEn.value = "";
}
</script>
