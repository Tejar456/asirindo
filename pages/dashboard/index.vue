<template>
  <!-- Main Dashboard Content -->
  <div class="w-full bg-gray-50 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">          
      <!-- Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div class="p-6 flex items-center gap-5">
            <div class="flex-shrink-0 bg-indigo-50 rounded-lg p-4">
              <svg 
                class="size-8 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Hero</p>
              <h3 class="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-500">Last updated: Today</span>
              <span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <svg 
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                12% increase
              </span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div class="p-6 flex items-center gap-5">
            <div class="flex-shrink-0 bg-blue-50 rounded-lg p-4">
              <svg 
                class="size-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Hero</p>
              <h3 class="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-500">Last updated: Today</span>
              <span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <svg 
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                8% increase
              </span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div class="p-6 flex items-center gap-5">
            <div class="flex-shrink-0 bg-purple-50 rounded-lg p-4">
              <svg 
                class="size-8 text-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Hero</p>
              <h3 class="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-500">Last updated: Today</span>
              <span class="inline-flex items-center gap-1 text-xs font-medium text-rose-600">
                <svg 
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                3% decrease
              </span>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div class="p-6 flex items-center gap-5">
            <div class="flex-shrink-0 bg-amber-50 rounded-lg p-4">
              <svg 
                class="size-8 text-amber-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Hero</p>
              <h3 class="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-500">Last updated: Today</span>
              <span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <svg 
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                5% increase
              </span>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div class="p-6 flex items-center gap-5">
            <div class="flex-shrink-0 bg-emerald-50 rounded-lg p-4">
              <svg 
                class="size-8 text-emerald-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Hero</p>
              <h3 class="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-500">Last updated: Today</span>
              <span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <svg 
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                10% increase
              </span>
            </div>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
          <div class="p-6 flex items-center gap-5">
            <div class="flex-shrink-0 bg-rose-50 rounded-lg p-4">
              <svg 
                class="size-8 text-rose-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Hero</p>
              <h3 class="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
          <div class="bg-gray-50 px-6 py-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-gray-500">Last updated: Today</span>
              <span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <svg 
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                7% increase
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>