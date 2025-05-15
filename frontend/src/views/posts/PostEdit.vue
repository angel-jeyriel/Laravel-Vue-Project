<script setup lang="ts">
    import { usePostStore } from "../../store/post.ts";
    import { useRoute } from "vue-router";
    import { ref, watch } from "vue";
    import type { FormKitNode } from "@formkit/core";
    import type { postForm } from "../../types/index.ts";
    import Loading1 from "../../components/Loading1.vue";

    const route = useRoute();
    const postStore = usePostStore();

    const handleUpdate = (payload: postForm, node?: FormKitNode) => {
        postStore.updatePost(String(route.params.slug), payload, node)
    }

    watch(
        () => route.params.slug,
        (slug) => postStore.getPost(String(slug)), {immediate: true}
    )
</script>

<template>
    <section v-if="postStore.post">
        <template v-if="postStore.isLoading">
            <Loading1 />
        </template>
        <template v-else>
            <h1 class="text-3xl text-slate-700 p-4">Update: {{ postStore.post.title }}</h1>
            <div class="max-w-[50em] text-white mx-auto bg-slate-900 rounded-lg p-4">
                <FormKit type="form" submit-label="Update" @submit="handleUpdate">
                    <FormKit type="text" label="Title" name="title" :value="postStore.post.title" />
                    <FormKit type="textarea" label="Body" name="body" :value="postStore.post.body" />
                </FormKit>
            </div>
        </template>
    </section>
</template>
