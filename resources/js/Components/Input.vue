<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
        default: '',
    },
    autocomplete: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const inputId = computed(
    () => props.id || `input-${Math.random().toString(36).substr(2, 9)}`,
);

const inputClasses = computed(() => {
    const baseClasses =
        'block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 transition-colors duration-200';
    const colorClasses = props.error
        ? 'bg-red-500/10 text-white ring-red-500/50 focus:ring-2 focus:ring-inset focus:ring-red-500'
        : 'bg-white/5 text-white ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500';
    const disabledClasses = props.disabled
        ? 'opacity-50 cursor-not-allowed'
        : '';

    return [baseClasses, colorClasses, disabledClasses].join(' ');
});

const handleInput = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <div>
        <label
            v-if="label"
            :for="inputId"
            class="mb-1 block text-sm font-medium text-gray-200"
        >
            {{ label }}
            <span v-if="required" class="text-red-400">*</span>
        </label>
        <input
            :id="inputId"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :required="required"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :class="inputClasses"
            @input="handleInput"
        />
        <p v-if="error" class="mt-2 text-sm text-red-400">
            {{ error }}
        </p>
    </div>
</template>
