<template>
    <div class="relative">
        <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center gap-2 rounded-md border border-transparent bg-gray-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
        >
            <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
            </svg>
            <span>{{ currentLocaleLabel }}</span>
            <svg
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <div
                v-if="isOpen"
                class="absolute right-0 z-50 mt-2 w-48 rounded-md border border-gray-700 bg-gray-800 shadow-lg ring-1 ring-white/10"
            >
                <div class="py-1">
                    <button
                        v-for="lang in languages"
                        :key="lang.code"
                        @click="changeLocale(lang.code)"
                        class="flex w-full items-center gap-3 px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-gray-700"
                        :class="{
                            'bg-gray-700': currentLocale === lang.code,
                        }"
                    >
                        <span class="text-xl">{{ lang.flag }}</span>
                        <span class="text-sm">{{ lang.label }}</span>
                        <svg
                            v-if="currentLocale === lang.code"
                            class="ml-auto h-4 w-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale } from '../i18n';

const { locale } = useI18n();
const isOpen = ref(false);

const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

const currentLocale = computed(() => locale.value);
const currentLocaleLabel = computed(() => {
    return (
        languages.find((lang) => lang.code === currentLocale.value)?.label ||
        'English'
    );
});

function changeLocale(newLocale) {
    setLocale(newLocale);
    isOpen.value = false;
}

function handleClickOutside(event) {
    if (isOpen.value && !event.target.closest('.relative')) {
        isOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
