
# 📘 Laravel + Vue 3 SPA CRUD with Authentication

This is a full-stack single-page CRUD application built with **Laravel (as a REST API)** and **Vue 3 (as the frontend SPA)**. It includes:

- User authentication (Laravel Breeze, Sanctum, Fortify)
- Vue Router for client-side navigation
- Secure CRUD operations
- Separation of backend (`/backend`) and frontend (`/frontend`) projects

---

## 📁 Project Structure

```
my-project/
├── backend/   # Laravel API with Breeze, Sanctum, Fortify
├── frontend/  # Vue 3 SPA with Vue Router and Axios
```

---

## 🚀 Features

- ✅ Register / Login / Logout (Laravel Breeze + Fortify + Sanctum)
- ✅ Vue 3 + Composition API + TypeScript
- ✅ RESTful API with Laravel
- ✅ Vue Router for SPA routing
- ✅ Tailwind CSS for styling
- ✅ Secure CRUD operations
- ✅ Fully decoupled frontend and backend

---

## 🧰 Tech Stack

| Layer      | Technology                 |
|------------|----------------------------|
| Backend    | Laravel 10, Sanctum, Fortify, Breeze |
| Frontend   | Vue 3, Vue Router, TypeScript |
| Auth       | Token-based (Sanctum)      |
| Styling    | Tailwind CSS               |
| HTTP Client| Axios                      |

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/my-project.git
cd my-project
```

---

### 2. Setup Laravel Backend

```bash
cd backend

# Install dependencies
composer install

# Copy .env and set database config
cp .env.example .env

# Generate key and run migrations
php artisan key:generate
php artisan migrate --seed

# Install Laravel Breeze (API mode)
composer require laravel/breeze --dev
php artisan breeze:install api
npm install && npm run build

# Install Sanctum & Fortify (already installed via Breeze)
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"

# Serve backend API
php artisan serve
```

✅ Laravel API will be running at: `http://127.0.0.1:8000`

---

### 3. Setup Vue Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Run the dev server
npm run dev
```

✅ Vue app will be running at: `http://localhost:5173`

### 🔧 Configure Axios to point to the API

In `frontend/src/axios.ts`:

```ts
axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true; // Needed for Sanctum
```

Update `backend/.env`:

```env
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:5173
```

---

## 🧭 Vue Router Setup

Vue Router handles client-side routing:

```ts
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/posts', component: Posts },
]
```

---

## 🔐 Authentication Flow

- Laravel Fortify manages authentication endpoints
- Sanctum issues secure tokens via cookies
- Vue Router guards protect private routes

---

## 📷 Example Routes

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| POST   | /register         | Register new user |
| POST   | /login            | Login user        |
| GET    | /api/user         | Authenticated user info |
| POST   | /logout           | Logout            |
| GET    | /api/posts        | List all posts    |
| POST   | /api/posts        | Create post       |
| PUT    | /api/posts/{id}   | Update post       |
| DELETE | /api/posts/{id}   | Delete post       |

---

## 🧪 Testing

```bash
php artisan test
```

Use Postman/Insomnia for manual API testing.

---

## ✅ To Do

- [ ] Add email verification
- [ ] Add role-based permissions
- [ ] Add search and filter for posts
- [ ] Add pagination to API and frontend
- [ ] Add unit & feature tests

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
