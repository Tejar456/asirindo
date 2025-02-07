<template>
  <div>
    <!-- ========== HEADER ========== -->
    <header
      ref="headerRef"
      class="fixed top-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 h-16 lg:h-20 w-full transition-all duration-300 scroll-smooth"
      :class="{
        'bg-white/0 backdrop-blur-0 border-transparent': !isScrolled,
        'bg-[#1E1E1E]/90 backdrop-blur-sm': isScrolled,
      }"
    >
      <nav
        class="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 py-auto sm:px-6 lg:px-8 py-2"
      >
        <!-- Logo w/ Collapse Button -->
        <div class="flex items-center justify-between">
  <Nuxt-link class="flex gap-3" to="#" aria-label="Brand">
    <img
      src="assets/img/logo.png"
      alt="logo"
      class="w-48 sm:w-56 md:w-64 mt-6 md:mt-0"
    />
          </Nuxt-link>
          <!-- Collapse Button -->
          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-white bg-[#1E1E1E] focus:outline-none focus:bg-[#1E1E1E] disabled:opacity-50 disabled:pointer-events-none"
              id="hs-header-classic-collapse"
              aria-expanded="false"
              aria-controls="hs-header-classic"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-classic"
            >
              <svg
                class="hs-collapse-open:hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block shrink-0 hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span class="sr-only">Toggle navigation</span>
            </button>
          </div>
          <!-- End Collapse Button -->
        </div>
        <!-- End Logo w/ Collapse Button -->
        <!-- Collapse -->
        <div
          id="hs-header-classic"
          class="hs-collapse hidden overflow-hidden bg-[#1E1E1E] w-full md:bg-transparent rounded-lg px-10 pt-3 mt-5 lg:mt-0 lg:pt-0 lg:px-0 transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-header-classic-collapse"
        >
          <div
            class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <div
              class="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1"
            >
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="/"
                aria-current="page"
              >
                {{ $t("home") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="#about"
              >
                {{ $t("about") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="#solution"
              >
                {{ $t("solution") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="#content"
              >
                {{ $t("content") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="#management"
              >
                {{ $t("management") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="https://docs.google.com/spreadsheets/d/1R-3Vlsx_FypKPsbt7SlUo0b58TaGLpH_/edit?gid=821110041#gid=821110041"
                target="_blank"
              >
                {{ $t("catalog") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="#contact"
              >
                {{ $t("contact") }}
              </Nuxt-link>
              <Nuxt-link
                class="p-2 flex items-center text-sm text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                to="/news"
              >
                {{ $t("news") }}
              </Nuxt-link>

              <div class="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-custom-trigger"
                  type="button"
                  class="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center text-sm font-medium rounded-full border border-gray-200 bg-white text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                <span v-html="currentLocale === 'Id' ? idFlag : enFlag" class="pl-3"></span>
                  <span class="text-white font-medium truncate">{{
                    currentLocale
                  }}</span>
                  <svg
                    class="hs-dropdown-open:rotate-180 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                  role="menu"
                >
                  <div class="p-1 space-y-0.5">
                    <button
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      @click="switchLanguage(locale.code)"
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 w-full text-left"
                    >
                      {{ locale.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Collapse -->
      </nav>
    </header>
    <!-- ========== END HEADER ========== -->
  </div>
</template>

<script setup>
const isScrolled = ref(false);
const enFlag = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rounded-full me-2" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>`
const idFlag = `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rounded-full me-3" viewBox="0 0 32 32"><path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#ea3323"></path><path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#fff"></path><path d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>`

const { locale } = useI18n();

const availableLocales = [
  { code: "id", name: "Indonesia" },
  { code: "en", name: "English" },
];

const currentLocale = computed(() => {
  return locale.value === "id" ? "Id" : "En";
});

const switchLanguage = (newLocale) => {
  locale.value = newLocale;
  localStorage.setItem("preferredLanguage", newLocale);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
