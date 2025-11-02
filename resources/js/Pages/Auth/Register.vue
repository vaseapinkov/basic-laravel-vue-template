<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import AppLayout from '../../Layouts/AppLayout.vue'
import Button from '../../Components/Button.vue'
import Input from '../../Components/Input.vue'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post('/register', {
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <AppLayout
    title="Create Account"
    description="Create a new account to get started with Laravel and unlock powerful features."
  >
    <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <Link href="/login" class="font-medium text-indigo-400 hover:text-indigo-300">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 ring-1 ring-white/10">
          <form @submit.prevent="submit" class="space-y-6">
            <Input
              id="name"
              v-model="form.name"
              type="text"
              label="Full name"
              :error="form.errors.name"
              autocomplete="name"
              required
            />

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
              autocomplete="new-password"
              required
            />

            <Input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              label="Confirm password"
              autocomplete="new-password"
              required
            />

            <Button type="submit" :loading="form.processing" class="w-full">
              Create account
            </Button>
          </form>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
