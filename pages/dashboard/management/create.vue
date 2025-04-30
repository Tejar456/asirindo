<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">      
      <form
        @submit.prevent="handleSubmit"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >        
        <div class="md:col-span-2">
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
          <div class="mt-4" v-if="previewUrl">
            <span class="block text-xs text-gray-500 mb-2">Preview Icon:</span>
            <div class="border p-2 inline-block rounded">
              <img
                :src="previewUrl"
                alt="Preview"
                class="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
        
        <div class="md:col-span-2">
          <label for="title-id" class="block text-sm font-medium mb-2"
            >Name</label
          >
          <input
            type="text"
            id="position-id"
            v-model="positionid"            
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label for="title-id" class="block text-sm font-medium mb-2"
            >Position ID</label
          >
          <input
            type="text"
            id="position-id"
            v-model="positionid"            
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label for="title-en" class="block text-sm font-medium mb-2"
            >Position EN</label
          >
          <input
            type="text"
            id="position-en"
            v-model="positionen"            
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
  layout: "dashboard",
  title: "Create Management",
});

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    iconFile.value = file;
    previewUrl.value = URL.createObjectURL(file);
  } else {
    iconFile.value = null;
    previewUrl.value = null;
  }
}

function handleSubmit() {
  alert(`
      Title ID: ${titleId.value}
      Title EN: ${titleEn.value}
      File: ${iconFile.value ? iconFile.value.name : "Tidak ada"}
    `);  
}

function handleReset() {
  titleId.value = "";
  titleEn.value = "";
  iconFile.value = null;
  previewUrl.value = null;
}
</script>
