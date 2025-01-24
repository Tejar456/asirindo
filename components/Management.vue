<template>
    <div class="mt-3 md:mt-5 mb-3 md:mb-5 px-4 md:px-0">
        <h1 class="text-center text-2xl md:text-4xl font-semibold">Management</h1>
        <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4 animate-slide-up"></div>
        <h2 class="text-center text-base md:text-lg mt-6 md:mt-10 max-w-xl mx-auto">
            ASIRINDO is safely guarded by music executives with decades of experiences in music licensing.
        </h2>

        <!-- grid container -->
        <div class="flex justify-center items-center mt-10 pb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                <!-- First profile -->
                <div class="relative group mx-auto">
                    <img class="w-48 h-48 md:w-52 md:h-52 mb-3 rounded-full shadow-lg border border-slate-500 object-cover"
                        src="assets/img/Jusak.jpg" alt="Jusak" />
                    <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 md:w-52 md:h-52 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                        <h1 class="text-xl md:text-2xl font-medium text-center px-2">Jusak Setiono</h1>
                        <h2 class="text-lg md:text-xl text-center">Director</h2>
                    </div>
                </div>

                <!-- Second profile -->
                <div class="relative group mx-auto">
                    <img class="w-48 h-48 md:w-52 md:h-52 mb-3 rounded-full shadow-lg border border-slate-500 object-cover"
                        src="assets/img/salfitri.jpg" alt="Salfitri" />
                    <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 md:w-52 md:h-52 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                        <h1 class="text-xl md:text-2xl font-medium text-center px-2">Salfitri Tri Dasa Yunita</h1>
                        <h2 class="text-lg md:text-xl text-center">Financial Controller</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>