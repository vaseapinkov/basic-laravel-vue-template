<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AppLayout from '../../Layouts/AppLayout.vue'
import Button from '../../Components/Button.vue'
import Input from '../../Components/Input.vue'

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
            <Input
              id="email"
              v-model="form.email"
              type="email"
              label="Email address"
              :error="form.errors.email"
              autocomplete="email"
              required
            />

            <Input
              id="password"
              v-model="form.password"
              type="password"
              label="Password"
              :error="form.errors.password"
              autocomplete="current-password"
              required
            />

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

            <Button type="submit" :loading="form.processing" class="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
