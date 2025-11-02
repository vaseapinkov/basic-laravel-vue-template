<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import Button from '../../Components/Button.vue';
import Input from '../../Components/Input.vue';
import AppLayout from '../../Layouts/AppLayout.vue';

const { t } = useI18n();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AppLayout
        :title="t('auth.login.title')"
        description="Sign in to your account to access your dashboard and manage your data."
    >
        <div
            class="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8"
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2
                    class="mt-6 text-center text-3xl font-bold tracking-tight text-white"
                >
                    {{ t('auth.login.title') }}
                </h2>
                <p class="mt-2 text-center text-sm text-gray-400">
                    {{ t('auth.login.no_account') }}
                    <Link
                        href="/register"
                        class="font-medium text-indigo-400 hover:text-indigo-300"
                    >
                        {{ t('auth.login.register_link') }}
                    </Link>
                </p>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div
                    class="bg-gray-800 px-4 py-8 shadow-lg ring-1 ring-white/10 sm:rounded-lg sm:px-10"
                >
                    <form @submit.prevent="submit" class="space-y-6">
                        <Input
                            id="email"
                            v-model="form.email"
                            type="email"
                            :label="t('auth.login.email')"
                            :error="form.errors.email"
                            autocomplete="email"
                            required
                        />

                        <Input
                            id="password"
                            v-model="form.password"
                            type="password"
                            :label="t('auth.login.password')"
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
                            <label
                                for="remember"
                                class="ml-2 block text-sm text-gray-300"
                            >
                                {{ t('auth.login.remember_me') }}
                            </label>
                        </div>

                        <Button
                            type="submit"
                            :loading="form.processing"
                            class="w-full"
                        >
                            {{ t('auth.login.submit') }}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
