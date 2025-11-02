# Laravel + Vue + Inertia Template

A modern, full-stack web application template featuring Laravel 12, Vue 3, and Inertia.js with Tailwind CSS 4. This template provides a solid foundation with pre-configured development tools, code quality standards, and best practices.

## Tech Stack

### Backend
- **Laravel 12** - Latest version of the PHP framework
- **PHP 8.2+** - Modern PHP with type safety and performance improvements
- **Inertia.js 2.0** - Server-side routing with client-side rendering

### Frontend
- **Vue 3.5** - Progressive JavaScript framework with Composition API
- **Vue I18n 9** - Internationalization plugin for Vue.js
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Vite 7** - Lightning-fast build tool and dev server

### Development Tools
- **ESLint** - JavaScript/Vue linting with auto-fix
- **Prettier** - Code formatting with Tailwind plugin
- **PHPStan** - Static analysis for PHP
- **Laravel Pint** - Opinionated PHP code style fixer
- **Pest** - Testing framework for PHP
- **Larastan** - PHPStan wrapper for Laravel

## Features

### Core Features
- **Authentication System** - Complete user authentication with login and registration
- **Internationalization (i18n)** - Multi-language support with English and Russian translations
- **Reusable UI Components** - Pre-built Button and Input components with variants
- **SEO Optimized** - Meta tags configured for social sharing and search engines
- **Server-Side Rendering (SSR)** - Full SSR support with Inertia.js
- **Hot Module Replacement (HMR)** - Instant development feedback

### Developer Experience
- Pre-configured queue and logging with Laravel Pail
- Database session and cache drivers
- Automatic code formatting and linting
- Static analysis for type safety
- Comprehensive testing setup
- One-command setup and development scripts

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL (or update DB_CONNECTION in .env for other databases)
- NPM or other package manager

## Installation

### Quick Setup

The easiest way to set up the project:

```bash
composer setup
```

This will:
1. Install PHP dependencies
2. Create .env file from .env.example
3. Generate application key
4. Run database migrations
5. Install npm dependencies
6. Build frontend assets

### Manual Setup

If you prefer to run commands individually:

```bash
# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure your database in .env, then run migrations
php artisan migrate

# Install JavaScript dependencies
npm install

# Build assets
npm run build
```

## Development

### Starting the Development Server

Run all services concurrently with a single command:

```bash
composer dev
```

This starts:
- Laravel development server (http://localhost:8000)
- Queue worker
- Log viewer (Laravel Pail)
- Vite dev server with HMR

### Individual Commands

You can also run services separately:

```bash
# Laravel server
php artisan serve

# Vite dev server
npm run dev

# Queue worker
php artisan queue:listen

# Log viewer
php artisan pail
```

## Available Scripts

### Composer Scripts

```bash
composer setup          # Complete project setup
composer dev           # Start all development services
composer test          # Run tests
composer format        # Format PHP code with Pint
composer format:check  # Check PHP code style without modifying
composer lint          # Run static analysis with PHPStan
```

### NPM Scripts

```bash
npm run dev            # Start Vite dev server
npm run build          # Build for production
npm run build:ssr      # Build with SSR support
npm run format         # Format code with Prettier
npm run format:check   # Check formatting
npm run lint           # Lint and fix with ESLint
```

### Code Quality

```bash
# PHP - Format code
composer format            # Auto-fix code style with Pint
composer format:check      # Check code style without modifying

# PHP - Static analysis
composer lint              # Run PHPStan

# Run tests
composer test
```

## Project Structure

```
├── app/                      # Laravel application code
├── bootstrap/                # Framework bootstrap files
├── config/                   # Configuration files
├── database/                 # Migrations, factories, and seeders
├── public/                   # Public web directory
├── resources/
│   ├── css/                  # Stylesheets
│   ├── js/                   # Vue components and JavaScript
│   │   └── Pages/            # Inertia page components
│   ├── app.js                # Frontend entry point
│   └── views/                # Blade templates
├── routes/                   # Application routes
├── storage/                  # Generated files, logs, cache
├── tests/                    # Test files
└── vendor/                   # Composer dependencies
```

## Authentication

The template includes a complete authentication system with login and registration functionality.

### Available Routes

- `GET /login` - Login page
- `POST /login` - Process login
- `GET /register` - Registration page
- `POST /register` - Process registration
- `POST /logout` - Logout (authenticated users only)

### Controllers

Authentication is handled by dedicated controllers:
- `app/Http/Controllers/Auth/LoginController.php` - Handles user login
- `app/Http/Controllers/Auth/RegisterController.php` - Handles user registration

### Pages

- `resources/js/Pages/Auth/Login.vue` - Login form component
- `resources/js/Pages/Auth/Register.vue` - Registration form component

The authentication system integrates with Laravel's built-in session management and uses Inertia.js for seamless page transitions.

## UI Components

Pre-built, reusable Vue components with consistent styling:

### Button Component

`resources/js/Components/Button.vue`

Supports multiple variants and sizes:

```vue
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="danger">Danger Button</Button>
<Button variant="ghost">Ghost Button</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button :loading="true">Loading...</Button>
```

**Variants:**
- `primary` - Indigo background (default)
- `secondary` - Gray background
- `danger` - Red background
- `ghost` - Transparent background

### Input Component

`resources/js/Components/Input.vue`

Form input with label and error handling:

```vue
<Input
  id="email"
  v-model="form.email"
  type="email"
  label="Email Address"
  :error="form.errors.email"
  required
/>
```

Features:
- Automatic label association
- Error message display
- Support for all input types
- Consistent styling with Tailwind CSS

## Internationalization (i18n)

Multi-language support with Vue I18n, currently supporting English and Russian.

### Configuration

Localization is configured in `resources/js/i18n.js` with translations for:
- Navigation menu items
- Authentication pages (login/register)
- Home page content

### Language Switcher

A dropdown component in the navigation allows users to switch between languages:
- Language selection persists in `localStorage`
- Instant UI updates when switching languages
- Flag icons for visual identification

### Supported Languages

- **English (en)** - Default language
- **Russian (ru)** - Complete translation

### Adding New Languages

1. Add translations to `resources/js/i18n.js`:
```javascript
const messages = {
  en: { ... },
  ru: { ... },
  // Add your language here
  es: {
    nav: {
      home: 'Inicio',
      // ... other translations
    }
  }
}
```

2. Update the language switcher in `resources/js/Components/LanguageSwitcher.vue`:
```javascript
const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }, // Add new language
]
```

3. Optionally create Laravel translation files in `resources/lang/{locale}/messages.php` for server-side translations.

### Using Translations in Components

```vue
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <h1>{{ t('home.welcome') }}</h1>
  <p>{{ t('home.description') }}</p>
</template>
```

## Environment Configuration

Key environment variables to configure in `.env`:

```env
APP_NAME=YourAppName
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password

QUEUE_CONNECTION=database
CACHE_STORE=database
SESSION_DRIVER=database
```

## Code Quality Standards

This template enforces code quality through:

- **ESLint**: Ensures JavaScript/Vue code follows best practices
- **Prettier**: Maintains consistent code formatting
- **PHPStan (Level 5)**: Catches bugs through static analysis
- **Laravel Pint**: Enforces Laravel coding standards
- **Pest**: Provides elegant testing syntax

Run all quality checks before committing:

```bash
# Frontend checks
npm run format:check   # Check JS/Vue formatting
npm run lint          # Check JS/Vue code quality

# Backend checks
composer format:check  # Check PHP code style
composer lint         # Run static analysis
composer test         # Run test suite
```

Or run everything at once:

```bash
# Frontend and Backend
npm run format:check && npm run lint && composer format:check && composer lint && composer test
```

## Testing

This template uses Pest for testing. Tests are located in the `tests/` directory.

```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test --filter=ExampleTest

# Run with coverage
php artisan test --coverage
```

## Building for Production

```bash
# Build frontend assets
npm run build

# For SSR support
npm run build:ssr

# Optimize Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
