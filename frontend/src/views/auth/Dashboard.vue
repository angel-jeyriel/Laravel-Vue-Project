<script setup lang="ts">
import { useAuthStore } from "../../store/auth.ts";
import { onMounted } from "vue";

const auth = useAuthStore();

onMounted(() => {
    if (!auth.isLoggedIn) auth.getUser();
});
</script>

<template>
    <div class="p-6">
        <h1 class="text-3xl text-slate-700">Dashboard</h1>
        <div class="flex items-center justify-between">
            <div>
                <p class="text-lg text-slate-500">Welcome back, {{ auth.user?.name }}</p>
                <p class="text-sm text-slate-500">{{ auth.user?.email }}</p>
            </div>
            <button @click="auth.logout" class="text-white bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>

        </div>
    </div>
</template>