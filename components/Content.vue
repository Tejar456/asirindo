<template>
    <div class="mb-20 flex items-center justify-center">
        <div class="w-full max-w-4xl px-4">
            <div class="mt-3">
                <h1 class="text-center text-2xl md:text-4xl font-semibold">Our Content Assets</h1>
                <div class="mx-auto h-1 w-20 md:w-28 bg-yellow-400 rounded mb-3 md:mb-4 mt-3 md:mt-4"></div>
                <h2 class="text-center text-base md:text-lg mt-6  max-w-xl mx-auto">
                    Everything we have are legally licensed and ready to use.
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
                    <div v-for="(stat, index) in stats" :key="index"
                        class="block max-w-md p-8 bg-white border border-slate-800 rounded-lg shadow mx-2 md:mx-4 transition-all duration-300"
                        :class="{
                            'translate-y-10 opacity-0': !stat.isVisible,
                            'hover:scale-105': stat.isVisible
                        }">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-yellow-400">
                            <AnimatedNumber :value="stat.value" :is-visible="stat.isVisible" />
                        </h5>
                        <p class="text-lg text-center font-bold tracking-wide text-slate-800">
                            {{ stat.label }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = ref([
    { value: 24993, label: 'VIDEO', isVisible: false },
    { value: 79410, label: 'AUDIO', isVisible: false },
    { value: 6372038, label: 'DATABASE', isVisible: false },
    { value: 63, label: 'PRODUCERS', isVisible: false }
])

let observer = null

const setupIntersectionObserver = () => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    stats.value[index].isVisible = true
                } else {
                    stats.value[index].isVisible = false
                }
            })
        },
        { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.block')
    cards.forEach((card) => observer.observe(card))
}

onMounted(() => {
    setupIntersectionObserver()
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

const AnimatedNumber = defineComponent({
    props: {
        value: {
            type: Number,
            required: true
        },
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const displayValue = ref(0)

        watch(() => props.isVisible, (newVisible) => {
            if (newVisible) {
                const duration = 2000
                const startTime = Date.now()

                const updateNumber = () => {
                    const progress = Math.min((Date.now() - startTime) / duration, 1)
                    displayValue.value = Math.floor(progress * props.value)

                    if (progress < 1) {
                        requestAnimationFrame(updateNumber)
                    } else {
                        displayValue.value = props.value
                    }
                }

                requestAnimationFrame(updateNumber)
            }
        }, { immediate: true })

        return { displayValue }
    },
    render() {
        return h('span', this.displayValue.toLocaleString())
    }
})
</script>