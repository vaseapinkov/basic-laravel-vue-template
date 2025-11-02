<script setup>
import { Head, Link, usePage, router } from '@inertiajs/vue3'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../Components/Button.vue'
import LanguageSwitcher from '../Components/LanguageSwitcher.vue'

const { t } = useI18n()

defineProps({
  title: {
    type: String,
    default: 'Welcome',
  },
  description: {
    type: String,
    default: 'A modern Laravel + Vue + Inertia application',
  },
})

const page = usePage()
const user = computed(() => page.props.auth.user)

const logout = () => {
  router.post('/logout')
}
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <Head>
      <title>{{ title }} - Laravel</title>
      <meta name="description" :content="description" />
      <meta property="og:title" :content="`${title} - Laravel`" />
      <meta property="og:description" :content="description" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" :content="`${title} - Laravel`" />
      <meta name="twitter:description" :content="description" />
    </Head>
        <header class="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
                <div class="flex lg:flex-1">
                    <Link href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            alt=""
                            class="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div class="flex lg:hidden">
                    <button
                        type="button"
                        command="show-modal"
                        commandfor="mobile-menu"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            data-slot="icon"
                            aria-hidden="true"
                            class="size-6"
                        >
                            <path
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#" class="text-sm/6 font-semibold text-white">{{ t('nav.product') }}</a>
                    <a href="#" class="text-sm/6 font-semibold text-white">{{ t('nav.features') }}</a>
                    <a href="#" class="text-sm/6 font-semibold text-white">{{ t('nav.marketplace') }}</a>
                    <a href="#" class="text-sm/6 font-semibold text-white">{{ t('nav.company') }}</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
                    <LanguageSwitcher />
                    <template v-if="user">
                        <span class="text-sm text-gray-300">{{ user.name }}</span>
                        <Button variant="ghost" @click="logout">
                            {{ t('nav.logout') }}
                        </Button>
                    </template>
                    <template v-else>
                        <Link href="/login" class="text-sm/6 font-semibold text-white hover:text-gray-300">
                            {{ t('nav.login') }} <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <Link
                            href="/register"
                            class="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400"
                        >
                            {{ t('nav.register') }}
                        </Link>
                    </template>
                </div>
            </nav>
            <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
                <div tabindex="0" class="fixed inset-0 focus:outline-none">
                    <div
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10"
                    >
                        <div class="flex items-center justify-between">
                            <Link href="/" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    alt=""
                                    class="h-8 w-auto"
                                />
                            </Link>
                            <button
                                type="button"
                                command="close"
                                commandfor="mobile-menu"
                                class="-m-2.5 rounded-md p-2.5 text-gray-200"
                            >
                                <span class="sr-only">Close menu</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    class="size-6"
                                >
                                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-white/10">
                                <div class="space-y-2 py-6">
                                    <a
                                        href="#"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >{{ t('nav.product') }}</a
                                    >
                                    <a
                                        href="#"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >{{ t('nav.features') }}</a
                                    >
                                    <a
                                        href="#"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >{{ t('nav.marketplace') }}</a
                                    >
                                    <a
                                        href="#"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >{{ t('nav.company') }}</a
                                    >
                                </div>
                                <div class="py-6 space-y-2">
                                    <div class="-mx-3 px-3 py-2">
                                        <LanguageSwitcher />
                                    </div>
                                    <template v-if="user">
                                        <div class="-mx-3 px-3 py-2 text-base/7 text-gray-300">
                                            {{ user.name }}
                                        </div>
                                        <Button variant="ghost" @click="logout"
                                        >
                                            {{ t('nav.logout') }}
                                        </Button>
                                    </template>
                                    <template v-else>
                                        <Link
                                            href="/login"
                                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                        >
                                            {{ t('nav.login') }}
                                        </Link>
                                        <Link
                                            href="/register"
                                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-indigo-400 hover:bg-white/5"
                                        >
                                            {{ t('nav.register') }}
                                        </Link>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </header>

        <slot/>
    </div>
</template>
