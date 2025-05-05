<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Image Section -->
    <div class="hidden lg:flex lg:w-3/5 bg-gray-900">
      <img
        src="/assets/img/hero.webp"
        alt="Hero Image"
        class="w-full h-full object-cover opacity-85"
      />
      <!-- Overlay text -->
      <div
        class="absolute inset-0 flex flex-col justify-end p-12 text-white bg-gradient-to-t from-black/60 to-transparent lg:w-3/5"
      >
        <h2 class="text-3xl font-bold mb-2">Welcome Back</h2>
        <p class="text-gray-200 max-w-md">
          Login to access asirindo dashboard.
        </p>
      </div>
    </div>

    <!-- Login Form Section -->
    <div class="w-full lg:w-2/5 flex items-center justify-center p-8">
      <div class="w-full max-w-md">
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold mb-2 text-gray-800">Login</h1>
          <p class="text-gray-500 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        <form @submit.prevent="Login" class="space-y-6">
          <!-- Email -->
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="w-full pl-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
            />
          </div>
          <div class="space-y-2">
            <label for="password" class="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full pl-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition text-sm font-medium shadow-sm"
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
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      // Handle error (you could add toast notification here)
      console.error("Login error:", error.message);
      return;
    }

    if (data) {
      // Successful login
      navigateTo("/dashboard");
    }
  } catch (e) {
    console.error("Unexpected error:", e);
  }
};
</script>
