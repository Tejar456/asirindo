<template>
  <!-- Table Section -->
  <div class="w-full mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div
            class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <!-- Header -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200"
            >
              <div>
                <h2 class="text-2xl font-semibold text-gray-800">About Data</h2>
              </div>

              <div class="flex items-center gap-3">
                <NuxtLink
                  class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                  to="/dashboard/about/create"
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
            <!-- End Header -->

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800"
                        >
                          Icon
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800"
                        >
                          Title Id
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800"
                        >
                          Title En
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800"
                        >
                          Description Id
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span
                          class="text-xs font-semibold uppercase tracking-wide text-gray-800"
                        >
                          Description En
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800"
                      >
                        Action
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="about in paginatedAbouts"
                    :key="about.id"
                    class="hover:bg-gray-50 transition-colors"
                  >
                    <td class="px-6 py-4 w-40">
                      <img
                        :src="about.icon"
                        class="w-24 h-auto rounded-md border border-gray-200 object-cover"
                        alt="Icon"
                      />
                    </td>

                    <td class="px-6 py-4 align-top max-w-xs">
                      <p class="text-sm text-gray-800 break-words font-medium">
                        {{ about.title_id }}
                      </p>
                    </td>

                    <td class="px-6 py-4 align-top max-w-xs">
                      <p class="text-sm text-gray-800 break-words font-medium">
                        {{ about.title_en }}
                      </p>
                    </td>

                    <td class="px-6 py-4 align-top max-w-xs">
                      <p class="text-sm text-gray-600 break-words line-clamp-3">
                        {{ about.description_id }}
                      </p>
                    </td>

                    <td class="px-6 py-4 align-top max-w-xs">
                      <p class="text-sm text-gray-600 break-words line-clamp-3">
                        {{ about.description_en }}
                      </p>
                    </td>

                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      <div class="flex items-center justify-center gap-2">
                        <button
                          @click="editAbout(about.id)"
                          class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-pencil-line"
                          >
                            <path d="M12 20h9" />
                            <path
                              d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
                            />
                          </svg>
                          Edit
                        </button>
                        <button
                          @click="confirmDelete(about.id)"
                          class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <!-- Empty state when no results -->
                  <tr v-if="paginatedAbouts.length === 0">
                    <td colspan="6" class="px-6 py-12 text-center">
                      <div
                        class="flex flex-col items-center justify-center space-y-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-gray-400"
                        >
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                        <h3 class="text-lg font-medium text-gray-900">
                          No data found
                        </h3>
                        <p class="text-sm text-gray-500">
                          No matching data was found or the data table is empty.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- End Table -->

            <!-- Footer -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200"
            >
              <div>
                <p class="text-sm text-gray-600">
                  Showing
                  {{
                    paginatedAbouts.length
                      ? (currentPage - 1) * itemsPerPage + 1
                      : 0
                  }}
                  to
                  {{
                    Math.min(currentPage * itemsPerPage, filteredAbouts.length)
                  }}
                  of {{ filteredAbouts.length }} results
                </p>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <button
                    type="button"
                    :disabled="currentPage === 1"
                    :class="[
                      'py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm transition-all',
                      currentPage === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    ]"
                    @click="prevPage"
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

                  <div class="flex items-center gap-x-1">
                    <template v-for="page in totalPages" :key="page">
                      <button
                        type="button"
                        :class="[
                          'py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg transition-all',
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                        ]"
                        @click="goToPage(page)"
                      >
                        {{ page }}
                      </button>
                    </template>
                  </div>

                  <button
                    type="button"
                    :disabled="currentPage === totalPages || totalPages === 0"
                    :class="[
                      'py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm transition-all',
                      currentPage === totalPages || totalPages === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    ]"
                    @click="nextPage"
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

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-red-600"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                  />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Delete About Item
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Are you sure you want to delete this item? This action
                    cannot be undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              @click="deleteAbout"
            >
              Delete
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="showDeleteModal = false"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Table Section -->
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const router = useRouter();
const supabase = useSupabaseClient();
const abouts = ref([]);
const filteredAbouts = ref([]);
const showDeleteModal = ref(false);
const deleteItemId = ref(null);

const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() =>
  Math.ceil(filteredAbouts.value.length / itemsPerPage)
);

const paginatedAbouts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return filteredAbouts.value.slice(startIndex, startIndex + itemsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};

watch(
  abouts,
  () => {
    filteredAbouts.value = [...abouts.value];
  },
  { immediate: true }
);

const editAbout = (id) => {
  router.push(`/dashboard/about/edit/${id}`);
};

const confirmDelete = (id) => {
  deleteItemId.value = id;
  showDeleteModal.value = true;
};

const deleteAbout = async () => {
  if (!deleteItemId.value) return;

  try {
    const { error } = await supabase
      .from("about")
      .delete()
      .eq("id", deleteItemId.value);

    if (error) throw error;

    abouts.value = abouts.value.filter(
      (item) => item.id !== deleteItemId.value
    );
    filteredAbouts.value = abouts.value;

    if (paginatedAbouts.value.length === 0 && currentPage.value > 1) {
      currentPage.value--;
    }
  } catch (error) {
    console.error("Error deleting item:", error.message);
  } finally {
    showDeleteModal.value = false;
    deleteItemId.value = null;
  }
};

const getAbout = async () => {
  try {
    const { data, error } = await supabase
      .from("about")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;

    abouts.value = data || [];
    filteredAbouts.value = [...abouts.value];
  } catch (error) {
    console.error("Error fetching about data:", error.message);
  }
};

onMounted(getAbout);
</script>
