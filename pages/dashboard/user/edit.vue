<template>
  <div class="mx-auto">
    <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h2>

      <form
        @submit.prevent="handleUpdate"
        @reset="handleReset"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <!-- image Upload -->
        <div>
          <label class="block text-sm font-medium mb-2">Profile Photo</label>

          <div v-if="!imagePreview" class="w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
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
          <label for="username" class="block text-sm font-medium mb-2"
            >Username</label
          >
          <input
            type="text"
            id="username"
            v-model="form.username"
            required
            class="input-field"
          />

          <label for="email" class="block text-sm font-medium mb-2 mt-4"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="input-field"
          />
          <label
            for="currentPassword"
            class="block text-sm font-medium mb-2 mt-4"
            >Current Password</label
          >
          <input
            type="password"
            id="currentPassword"
            v-model="passwords.current"
            class="input-field"
          />

          <label for="newPassword" class="block text-sm font-medium mb-2 mt-4"
            >New Password</label
          >
          <input
            type="password"
            id="newPassword"
            v-model="passwords.new"
            class="input-field"
          />

          <label
            for="confirmPassword"
            class="block text-sm font-medium mb-2 mt-4"
            >Confirm New Password</label
          >
          <input
            type="password"
            id="confirmPassword"
            v-model="passwords.confirm"
            class="input-field"
          />
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
  title: "Edit Profile",
  middleware: "auth",
});

import { ref, watch, onMounted } from "vue";
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const isSubmitting = ref(false);
const imagePreview = ref(null);
const passwords = ref({
  current: "",
  new: "",
  confirm: "",
});

const form = ref({
  image: null,
  username: "",
  email: "",
  avatar_url: "",
});

function fillForm(userData) {
  form.value.email = userData.email;
  form.value.username = userData.user_metadata?.username || "";
  form.value.avatar_url = userData.user_metadata?.avatar_url || "";
  imagePreview.value = form.value.avatar_url;
}

watch(user, (val) => {
  if (val) fillForm(val);
});

onMounted(async () => {
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    fillForm(data.user);
  }
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    form.value.image = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  form.value.image = null;
  imagePreview.value = null;
  const input = document.getElementById("dropzone-file");
  if (input) input.value = "";
};

const handleUpdate = async () => {
  if (!form.value.username || !form.value.email) {
    alert("Please fill all required fields");
    return;
  }

  if (passwords.value.new !== passwords.value.confirm) {
    alert("New password and confirmation do not match.");
    return;
  }

  isSubmitting.value = true;

  try {
    let avatarUrl = form.value.avatar_url;

    if (form.value.image) {
      const file = form.value.image;
      const fileName = `avatar-${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("img")
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("img")
        .getPublicUrl(fileName);
      avatarUrl = urlData.publicUrl;
    }

    const { data, error } = await supabase.auth.updateUser({
      email: form.value.email,
      data: {
        username: form.value.username,
        avatar_url: avatarUrl,
      },
    });

    if (error) throw error;
    
    if (passwords.value.new && passwords.value.current) {
      const { error: passwordError } = await supabase.auth.signInWithPassword({
        email: form.value.email,
        password: passwords.value.current,
      });

      if (passwordError) throw passwordError;

      const { error: passwordUpdateError } = await supabase.auth.updateUser({
        password: passwords.value.new,
      });

      if (passwordUpdateError) throw passwordUpdateError;
    }

    alert("Profile updated successfully!");
  } catch (err) {
    alert("Failed to update profile: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const handleReset = () => {
  if (user.value) {
    fillForm(user.value);
    form.value.image = null;
    passwords.value = {
      current: "",
      new: "",
      confirm: "",
    };
  }
};
</script>
