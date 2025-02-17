<template>
    <footer class=" text-white py-10" style="background-color: #1E1E1E;">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-20 md:ml-28">
                <!-- Social Media -->
                <div class="md:ml-5">
                    <h4 class="font-semibold mb-4 text-xl"> {{ $t("sosmed") }}</h4>
                    <div class="flex flex-col space-y-4">
                        <!-- Facebook -->
                        <a href="https://web.facebook.com/asirindo/" target="_blank"
                            class="inline-flex items-center gap-x-2 text-gray-500 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            <span>Facebook</span>
                        </a>


                        <!-- Instagram -->
                        <a href="https://www.instagram.com/asirindo/" target="_blank"
                            class="inline-flex items-center gap-x-2 text-gray-500 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>Instagram</span>
                        </a>


                        <!-- Twitter -->
                        <!-- X -->
                        <a href="https://x.com/asirindo" target="_blank"
                            class="inline-flex items-center gap-x-2 text-gray-500 hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                viewBox="0 0 30 30" class="fill-current">
                                <path
                                    d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z">
                                </path>
                            </svg>
                            <span class="text-lg">X</span>
                        </a>

                    </div>
                </div>


                <!-- Contact -->
                <div class="md:col-span-2">
                    <h2 class="text-xl font-bold mb-4"> {{ $t("our") }}</h2>
                    <div class="flex flex-col space-y-4">
                        <!-- Phone -->
                        <a href="tel:(+62)21 -26963025" target="_blank"
                            class="inline-flex items-center gap-x-2 text-gray-500 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                            </svg>
                            <span>(+62)21 -26963025</span>
                        </a>


                        <!-- Email -->
                        <a href="mailto:info@asirindo.org" target="_blank"
                            class="inline-flex items-center gap-x-2 text-gray-500 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span>info@asirindo.org
                            </span>
                        </a>


                        <!-- Location -->
                        <a href="https://maps.app.goo.gl/CYScWLUu94ga8CZL7" target="_blank"
                            class="inline-flex items-center gap-x-2 text-gray-500 hover:text-white transition">
                            <svg class="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Jl. Raya Pasar Minggu No.16 A – B RT.008 RW 09
                                Kelurahan Pasar Minggu, Kecamatan Pancoran
                                Jakarta Selatan 12780 - Indonesia
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-gray-800 mt-8 pt-6 text-center">
                <p class="text-white">
                    © 2025 ASIRINDO - All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>