<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 70px;
}
</style>
