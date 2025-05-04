<template>
  <div class="grid grid-cols-1 md:grid-cols-5 min-h-screen bg-white">
    <!-- Gambar Samping -->
    <div class="hidden md:block col-span-3">
      <img
        src="/assets/img/hero.webp"
        alt="Hero Image"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Form Login -->
    <div class="col-span-2 flex items-center justify-center p-6">
      <div class="w-full max-w-md p-6 sm:p-8">
        <h1 class="text-3xl font-bold mb-8 text-gray-800">Login</h1>

        <form @submit.prevent="Login" class="space-y-6">
          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <!-- Tombol -->
          <div>
            <button
              type="submit"
              class="w-full py-2.5 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm font-medium"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Login",
  layout: "auth",
});

const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");

const Login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (data) {
    navigateTo("/dashboard");
  }
  if (error) console.log("error");
};
</script>
