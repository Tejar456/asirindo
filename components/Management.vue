<template>
    <div class="mt-3 mb-5 ">
        <h1 class="text-center text-2xl md:text-4xl font-semibold ">Management
        </h1>
        <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4 "></div>
        <h2 class="text-center text-base md:text-lg mt-6 max-w-xl mx-auto">
            ASIRINDO is safely guarded by music executives with decades of experiences in music licensing.
        </h2>

        <div class="flex justify-center items-center mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                <div class="relative group mx-auto opacity-0 translate-y-10" :class="{ 'animate-fade-in': isInView }">
                    <img class="w-48 h-48 md:w-52 md:h-52 mb-3 rounded-full shadow-lg border border-slate-500 object-cover 
          transition-all duration-300 ease-in-out transform 
          hover:scale-105 hover:z-10 hover:-translate-y-2" src="assets/img/Jusak.jpg" alt="Jusak" />
                    <div class="flex flex-col items-center justify-center text-center mt-3">
                        <h1 class="text-xl font-medium">Jusak Setiono</h1>
                        <h2 class="text-lg">Director</h2>
                    </div>
                </div>

                <div class="relative group mx-auto opacity-0 translate-y-10"
                    :class="{ 'animate-fade-in delay-200': isInView }">
                    <!-- Second profile card -->
                    <img class="w-48 h-48 md:w-52 md:h-52 mb-3 rounded-full shadow-lg border border-slate-500 object-cover 
          transition-all duration-300 ease-in-out transform 
          hover:scale-105 hover:z-10 hover:-translate-y-2" src="assets/img/salfitri.jpg" alt="Salfitri" />
                    <div class="flex flex-col items-center justify-center text-center mt-3">
                        <h1 class="text-xl font-medium">Salfitri Tri Dasa Yunita</h1>
                        <h2 class="text-lg">Financial Controller</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isInView: false
        }
    },
    mounted() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                this.isInView = entry.isIntersecting;
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(this.$el);
    }
}
</script>

<style>
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}

.delay-200 {
    animation-delay: 200ms;
}
</style>