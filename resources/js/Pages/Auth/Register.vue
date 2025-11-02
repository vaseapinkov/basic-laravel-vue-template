<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import Button from '../../Components/Button.vue';
import Input from '../../Components/Input.vue';
import AppLayout from '../../Layouts/AppLayout.vue';

const { t } = useI18n();

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post('/register', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AppLayout
        :title="t('auth.register.title')"
        description="Create a new account to get started with Laravel and unlock powerful features."
    >
        <div
            class="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8"
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2
                    class="mt-6 text-center text-3xl font-bold tracking-tight text-white"
                >
                    {{ t('auth.register.title') }}
                </h2>
                <p class="mt-2 text-center text-sm text-gray-400">
                    {{ t('auth.register.have_account') }}
                    <Link
                        href="/login"
                        class="font-medium text-indigo-400 hover:text-indigo-300"
                    >
                        {{ t('auth.register.login_link') }}
                    </Link>
                </p>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div
                    class="bg-gray-800 px-4 py-8 shadow-lg ring-1 ring-white/10 sm:rounded-lg sm:px-10"
                >
                    <form @submit.prevent="submit" class="space-y-6">
                        <Input
                            id="name"
                            v-model="form.name"
                            type="text"
                            :label="t('auth.register.name')"
                            :error="form.errors.name"
                            autocomplete="name"
                            required
                        />

                        <Input
                            id="email"
                            v-model="form.email"
                            type="email"
                            :label="t('auth.register.email')"
                            :error="form.errors.email"
                            autocomplete="email"
                            required
                        />

                        <Input
                            id="password"
                            v-model="form.password"
                            type="password"
                            :label="t('auth.register.password')"
                            :error="form.errors.password"
                            autocomplete="new-password"
                            required
                        />

                        <Input
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            :label="t('auth.register.password_confirmation')"
                            autocomplete="new-password"
                            required
                        />

                        <Button
                            type="submit"
                            :loading="form.processing"
                            class="w-full"
                        >
                            {{ t('auth.register.submit') }}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
