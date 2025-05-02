<template>
  <!-- Table Section -->
  <div class="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div
            class="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden"
          >
            <!-- Header -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200"
            >
              <div>
                <h2 class="text-2xl font-semibold text-gray-800">Lisence</h2>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <a
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    View all
                  </a>

                  <NuxtLink
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="/dashboard/license/create"
                  >
                    <svg
                      class="shrink-0 size-4"
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
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Create
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase text-gray-800"
                      >
                        Title Id
                      </span>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase text-gray-800"
                      >
                        Title En
                      </span>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase text-gray-800"
                      >
                        Description Id
                      </span>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase text-gray-800"
                      >
                        Description En
                      </span>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase text-gray-800"
                      >
                        Action
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <tr v-for="license in licenses" :key="license.id">
                  <td class="px-6 py-3 align-top max-w-xs">
                    <p class="text-sm text-gray-600 break-words">
                      {{ license.title_id }}
                    </p>
                  </td>

                  <td class="px-6 py-3 align-top max-w-xs">
                    <p class="text-sm text-gray-600 break-words">
                      {{ license.title_en }}
                    </p>
                  </td>
                  <td class="px-6 py-3 align-top max-w-xs">
                    <p class="text-sm text-gray-600 break-words">
                      {{ license.description_id }}
                    </p>
                  </td>
                  <td class="px-6 py-3 align-top max-w-xs">
                    <p class="text-sm text-gray-600 break-words">
                      {{ license.description_en }}
                    </p>
                  </td>
                  <td class="px-6 py-1.5 text-right w-px">
                    <div
                      class="hs-dropdown [--placement:bottom-right] relative inline-block"
                    >
                      <button
                        id="hs-table-dropdown-1"
                        type="button"
                        class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        <svg
                          class="shrink-0 size-4"
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
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                      <div
                        class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-table-dropdown-1"
                      >
                        <div class="py-2 first:pt-0 last:pb-0">
                          <a
                            class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                            href="#"
                          >
                            Edit
                          </a>
                        </div>
                        <div class="py-2 first:pt-0 last:pb-0">
                          <a
                            class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100"
                            href="#"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200"
            >
              <div>
                <p class="text-sm text-gray-600">
                  <span class="font-semibold text-gray-800">6</span> results
                </p>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg
                      class="shrink-0 size-4"
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
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Prev
                  </button>

                  <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Next
                    <svg
                      class="shrink-0 size-4"
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <!-- End Footer -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Table Section -->
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();
const licenses = ref([]);

const getLicense = async () => {
  const { data, error } = await supabase
    .from("license")
    .select("*")
    .order("id", { ascending: false });
  if (error) {
    console.error("Error fetching license data:", error);
  } else {
    licenses.value = data;
  }
};

onMounted(() => {
  getLicense();
});
</script>
