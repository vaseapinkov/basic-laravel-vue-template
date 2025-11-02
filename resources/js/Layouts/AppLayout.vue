<script setup>
import { Link, usePage, router } from '@inertiajs/vue3'
import { computed } from 'vue'

const page = usePage()
const user = computed(() => page.props.auth.user)

const logout = () => {
  router.post('/logout')
}
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
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
          <a href="#" class="text-sm/6 font-semibold text-white">Product</a>
          <a href="#" class="text-sm/6 font-semibold text-white">Features</a>
          <a href="#" class="text-sm/6 font-semibold text-white">Marketplace</a>
          <a href="#" class="text-sm/6 font-semibold text-white">Company</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <template v-if="user">
            <span class="text-sm text-gray-300">{{ user.name }}</span>
            <button
              @click="logout"
              class="text-sm/6 font-semibold text-white hover:text-gray-300"
            >
              Log out
            </button>
          </template>
          <template v-else>
            <Link href="/login" class="text-sm/6 font-semibold text-white hover:text-gray-300">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/register"
              class="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400"
            >
              Sign up
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
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-white/10">
                  <div class="space-y-2 py-6">
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >Product</a
                    >
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >Features</a
                    >
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >Marketplace</a
                    >
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >Company</a
                    >
                  </div>
                  <div class="py-6 space-y-2">
                    <template v-if="user">
                      <div class="-mx-3 px-3 py-2 text-base/7 text-gray-300">
                        {{ user.name }}
                      </div>
                      <button
                        @click="logout"
                        class="-mx-3 w-full text-left block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Log out
                      </button>
                    </template>
                    <template v-else>
                      <Link
                        href="/login"
                        class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Log in
                      </Link>
                      <Link
                        href="/register"
                        class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-indigo-400 hover:bg-white/5"
                      >
                        Sign up
                      </Link>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
    </header>

    <slot />
  </div>
</template>
