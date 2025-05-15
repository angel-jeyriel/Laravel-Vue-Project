<script setup lang="ts">
import { useAuthStore } from "../../store/auth.ts";

const { register } = useAuthStore();

</script>
<template>
    <h1 class="text-3xl text-slate-700 p-4">Register</h1>

    <div class="max-w-md mx-auto bg-slate-500 rounded-lg p-4">
        <FormKit type="form" submit-label="Register" @submit="register">
            <FormKit type="text" label="Name" name="name" />
            <FormKit type="email" label="Email" name="email" />
            <FormKit type="password" label="Password" name="password" />
            <FormKit type="password" label="Password confirmation" name="password_confirmation" />
        </FormKit>
    </div>

</template>