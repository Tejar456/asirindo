<script setup>
definePageMeta({
  layout: "auth",
});

const supabase = useSupabaseClient();

async function keluar() {
  const { error } = await supabase.auth.signOut();
  if (!error) navigateTo("/");
}

onMounted(() => {
  keluar();
});
</script>

<template>
  <div>
    <h1 class="flex justify-center items-center text-2xl font-semibold">
      Logout
    </h1>
  </div>
</template>
