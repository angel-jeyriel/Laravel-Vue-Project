<script setup lang="ts">
import { useAuthStore } from "../../store/auth.ts";

const { login } = useAuthStore();

</script>
<template>
    <h1 class="text-3xl text-slate-700 p-4">Login</h1>

    <div class="max-w-md mx-auto bg-slate-500 rounded-lg p-4">
        <FormKit type="form" submit-label="Login" @submit="login">
            <FormKit type="email" label="Email" name="email" />
            <FormKit type="password" label="Password" name="password" />
        </FormKit>
    </div>
</template>