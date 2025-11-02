import prettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';

export default [
    ...pluginVue.configs['flat/essential'],
    {
        ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/components/ui/*'],
    },
    {
        rules: {
            'vue/multi-word-component-names': 'off',
        },
    },
    prettier,
];
