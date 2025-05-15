<script setup lang="ts">
    import { usePostStore } from "../../store/post.ts";
    import { useRoute } from "vue-router";
    import { ref, watch } from "vue";
    import Loading1 from "../../components/Loading1.vue";

    const postStore = usePostStore();
    const route = useRoute();
    
    watch(
        () => route.params.slug,
        (slug) => postStore.getPost(String(slug)), {immediate: true}
    )
</script>

<template>
    <section>
        <template v-if="postStore.isLoading">
            <Loading1 />
        </template>
        <template v-else>
            <h1 class="text-3xl text-slate-700 p-4">{{ postStore.post?.title }}</h1>
            <div class="max-w-[64em] text-white text-center mx-auto bg-slate-900 rounded-lg p-4">
                {{ postStore.post?.body }}
            </div>
            <span class="text-sm text-slate-400 p-4">Created: {{ postStore.post?.createdAt }}</span>
        </template>
    </section>
</template>
