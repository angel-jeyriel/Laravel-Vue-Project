<template>
    <section class="py-20 bg-gradient-to-r from-indigo-100 to-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-extrabold text-indigo-700 mb-4">
          Welcome to the Vue + Laravel CRUD App
        </h2>
        <p class="text-lg text-gray-700 mb-8">
          Easily manage posts with create, read, update, and delete functionality.
          Built with Laravel API & Vue 3 SPA.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">         
          <RouterLink class="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition" to="/dashboard/posts">View Posts</RouterLink>
          <RouterLink class="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition" to="/login">Get Started</RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-white text-center text-md text-indigo-700">
      © 2025  	&#60;austine /&#62; | Built with Laravel & Vue.
    </footer>
</template>
