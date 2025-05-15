import { defineStore } from "pinia";
import { ref } from "vue";

import axiosInstance from "../lib/axios.ts";
import type { FormKitNode } from "@formkit/core";
import { AxiosError } from 'axios';
import type { LaravelResponseCollection, Post, PostForm } from "../types/index.ts";
import router from "../router/index.ts";

export const usePostStore = defineStore("post", () => {
    const postsCollection = ref<LaravelResponseCollection | null>(null);
    const post = ref<Post | null>(null);
    const isLoading = ref<boolean>(false);

    const getPosts = async (page: number) => {
        isLoading.value = true;
        try {
            const { data } = await axiosInstance.get(`/dashboard/posts?page=${page}`);
            postsCollection.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    }

    const getPost = async (slug: string) => {
        isLoading.value = true;
        try {
            const { data } = await axiosInstance.get(`/dashboard/posts/${slug}`);
            post.value = data.data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    }

    const createPost = async (payload: PostForm, node?: FormKitNode) => {
        try {
            await axiosInstance.post("/dashboard/posts", payload);
            router.push("/dashboard/posts");
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                node?.setErrors([], e.response?.data.errors)
            }
        }
    }

    const updatePost = async (slug: string, payload: PostForm, node?: FormKitNode) => {
        try {
            await axiosInstance.put(`/dashboard/posts/${slug}`, payload);
            await router.push("/dashboard/posts");
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                node?.setErrors([], e.response?.data.errors)
            }
        }
    }

    const deletePost = async (page: number, slug: string) => {
        isLoading.value = true;
        try {
            await axiosInstance.delete(`/dashboard/posts/${slug}`);
            await getPosts(page);
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        postsCollection,
        post,
        isLoading,
        getPosts,
        getPost,
        createPost,
        updatePost,
        deletePost,
    }
},
    {
        persist: {
            storage: sessionStorage,
            pick: ["user", "isLoggedIn"],
        },
    }
);