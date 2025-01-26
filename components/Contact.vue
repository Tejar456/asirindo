<template>
    <div class="bg-slate-200 py-10">
        <div class=" mx-auto px-4 ">
            <h1 class="text-center text-2xl md:text-4xl font-semibold">Contact Us</h1>
            <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4"></div>
            <h2 class="text-center text-base md:text-lg mt-6 max-w-xl mx-auto">
                Jl. Raya Pasar Minggu No. 16 A – 16 B Rt. 008 Rw. 09 <br>
                Kelurahan Pancoran, Kecamatan Pancoran <br>
                Jakarta Selatan, 12780<br>
                Ph: 021–26963025
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 mt-10">
                <!-- Form Column -->
                <div class="md:order-2 order-1">
                    <form>
                        <div class="space-y-4">
                            <!-- Name Input -->
                            <div class="relative">
                                <input type="text" id="hs-tac-input-name"
                                    class="peer p-4 block w-full border border-black rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-black disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                    placeholder="Name">
                                <label for="hs-tac-input-name"
                                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400">
                                    Name
                                </label>
                            </div>

                            <!-- Email Input -->
                            <div class="relative">
                                <input type="email" id="hs-tac-input-email"
                                    class="peer p-4 block w-full border border-black rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-black disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                    placeholder="Email">
                                <label for="hs-tac-input-email"
                                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400">
                                    Email
                                </label>
                            </div>

                            <!-- Subject Input -->
                            <div class="relative">
                                <input type="text" id="hs-tac-input-subject"
                                    class="peer p-4 block w-full border border-black rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-black disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                    placeholder="Subject">
                                <label for="hs-tac-input-subject"
                                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400">
                                    Subject
                                </label>
                            </div>

                            <!-- Message Textarea -->
                            <div class="relative">
                                <textarea id="hs-tac-message"
                                    class="peer p-4 block w-full border border-black rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-black disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                    placeholder="Message" rows="4"></textarea>
                                <label for="hs-tac-message"
                                    class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400">
                                    Your Message
                                </label>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="mt-6">
                            <button
                                class="group inline-flex items-center gap-x-2 py-3 px-4 bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 font-medium text-sm text-neutral-800 rounded-lg focus:outline-none">
                                Submit
                                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Image Column -->
                <div class="space-y-14">
                    <div class="aspect-w-16 aspect-h-6 lg:aspect-h-14 mb-5 overflow-hidden bg-gray-100 rounded-2xl">
                        <img class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                            src="assets/img/music.webp" alt="Contact Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
