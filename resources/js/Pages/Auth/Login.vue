<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AppLayout from '../../Layouts/AppLayout.vue'

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const submit = () => {
  form.post('/login', {
    onFinish: () => form.reset('password'),
  })
}
</script>

<template>
  <AppLayout>
    <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <Link href="/register" class="font-medium text-indigo-400 hover:text-indigo-300">
            create a new account
          </Link>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 ring-1 ring-white/10">
          <form @submit.prevent="submit" class="space-y-6">
            <!-- Email Address -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-200">
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                  class="block w-full rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <p v-if="form.errors.email" class="mt-2 text-sm text-red-400">
                  {{ form.errors.email }}
                </p>
              </div>
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-200">
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  required
                  autocomplete="current-password"
                  class="block w-full rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <p v-if="form.errors.password" class="mt-2 text-sm text-red-400">
                  {{ form.errors.password }}
                </p>
              </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember"
                  v-model="form.remember"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-600 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
                />
                <label for="remember" class="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="form.processing"
                class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="form.processing">Signing in...</span>
                <span v-else>Sign in</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
