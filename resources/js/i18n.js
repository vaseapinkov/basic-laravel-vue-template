import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        nav: {
            home: 'Home',
            login: 'Login',
            register: 'Register',
            logout: 'Logout',
            product: 'Product',
            features: 'Features',
            marketplace: 'Marketplace',
            company: 'Company',
        },
        auth: {
            login: {
                title: 'Login',
                email: 'Email',
                password: 'Password',
                remember_me: 'Remember me',
                submit: 'Sign in',
                no_account: "Don't have an account?",
                register_link: 'Register here',
            },
            register: {
                title: 'Register',
                name: 'Name',
                email: 'Email',
                password: 'Password',
                password_confirmation: 'Confirm Password',
                submit: 'Register',
                have_account: 'Already have an account?',
                login_link: 'Login here',
            },
        },
        home: {
            announcement: 'Announcing our next round of funding.',
            read_more: 'Read more',
            hero_title: 'Data to enrich your online business',
            hero_description:
                'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
            get_started: 'Get started',
            learn_more: 'Learn more',
        },
    },
    ru: {
        nav: {
            home: 'Главная',
            login: 'Вход',
            register: 'Регистрация',
            logout: 'Выход',
            product: 'Продукт',
            features: 'Возможности',
            marketplace: 'Маркетплейс',
            company: 'Компания',
        },
        auth: {
            login: {
                title: 'Вход',
                email: 'Email',
                password: 'Пароль',
                remember_me: 'Запомнить меня',
                submit: 'Войти',
                no_account: 'Нет аккаунта?',
                register_link: 'Зарегистрируйтесь здесь',
            },
            register: {
                title: 'Регистрация',
                name: 'Имя',
                email: 'Email',
                password: 'Пароль',
                password_confirmation: 'Подтвердите пароль',
                submit: 'Зарегистрироваться',
                have_account: 'Уже есть аккаунт?',
                login_link: 'Войдите здесь',
            },
        },
        home: {
            announcement: 'Объявляем о следующем раунде финансирования.',
            read_more: 'Подробнее',
            hero_title: 'Данные для развития вашего онлайн-бизнеса',
            hero_description:
                'Создавайте современные веб-приложения с помощью Laravel и Vue 3. Быстрая разработка, удобная архитектура и готовые компоненты.',
            get_started: 'Начать',
            learn_more: 'Узнать больше',
        },
    },
};

// Get locale from localStorage or default to 'en'
const savedLocale = localStorage.getItem('locale') || 'en';

export const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: savedLocale,
    fallbackLocale: 'en',
    messages,
});

export function setLocale(locale) {
    i18n.global.locale.value = locale;
    localStorage.setItem('locale', locale);
}
