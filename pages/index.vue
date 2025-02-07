<template>
  <div>
    <Hero />
    <About />
    <Licensing />
    <Content />
    <Management />
    <Contact />
  </div>
</template>

<script setup>
useHead({
  title: "ASIRINDO",
  meta: [
    {
      name: "description",
      content: "Home Page",
    },
  ],
});
</script>
