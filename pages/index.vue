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
definePageMeta({
  title: "Home",
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ASIRINDO` : "ASIRINDO - Music Hub Indonesia";
  },
  meta: [
    {
      name: "description",
      content: "ASIRINDO is the first and the only music hub in Indonesia. We've licensed thousands of songs from hundreds of producers and labels so you don't have to. Music ...",
    },
    { name: "google-site-verification", content: "4Iq2w8lKdPpgaV2TLWgiUBvXDxfeNapBjYB8STyBDsE" },
    { name: "keywords", content: "music licensed " },
    { property: "og:site_name", content: "ASIRINDO" },
    { property: "og:title", content: "ASIRINDO - ASIRINDO is the first and the only music hub in Indonesia. We've licensed thousands of songs from hundreds of producers and labels so you don't have to. Music ..." },
    { property: "og:description", content: "ASIRINDO is the first and the only music hub in Indonesia. We've licensed thousands of songs from hundreds of producers and labels so you don't have to. Music ..." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://lenteartstory.vercel.app" },
    { property: "og:image", content: "/assets/logo.webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "ASIRINDO is the first and the only music hub in Indonesia. We've licensed thousands of songs from hundreds of producers and labels so you don't have to. Music" },
    { name: "twitter:description", content: "ASIRINDO is the first and the only music hub in Indonesia. We've licensed thousands of songs from hundreds of producers and labels so you don't have to." },
    { name: "twitter:image", content: "/assets/logo.webp" },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "id",
  },
});
</script>
