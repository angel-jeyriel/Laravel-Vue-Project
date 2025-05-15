<script setup lang="ts">
    import { usePostStore } from "../../store/post.ts";
    const { createPost } = usePostStore();
</script>

<template>
    <h1 class="text-3xl text-slate-700 p-4">Create Post</h1>

    <div class="max-w-md mx-auto bg-slate-500 rounded-lg p-4">
        <FormKit type="form" submit-label="Create" @submit="createPost">
            <FormKit type="text" label="Title" name="title" />
            <FormKit type="textarea" label="Body" name="body" />
        </FormKit>
    </div>
</template>
