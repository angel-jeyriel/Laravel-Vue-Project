import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/auth/Dashboard.vue'
import PostIndex from '../views/posts/PostIndex.vue'
import PostCreate from '../views/posts/PostCreate.vue'
import PostView from '../views/posts/PostView.vue'
import PostEdit from '../views/posts/PostEdit.vue'
import { useAuthStore } from '../store/auth'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: { requiresGuest: true },
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: "/dashboard/posts",
        name: "PostIndex",
        component: PostIndex,
        meta: { requiresAuth: true },
    },
    {
        path: "/dashboard/posts/create",
        name: "PostCreate",
        component: PostCreate,
        meta: { requiresAuth: true },
    },
    {
        path: "/dashboard/posts/:slug/edit",
        name: "PostEdit",
        component: PostEdit,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: "/dashboard/posts/:slug",
        name: "PostView",
        component: PostView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: "/404",
        name: "404",
        component: () => import("../views/404.vue"),
    },
    {
        path: "/500",
        name: "500",
        component: () => import("../views/500.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    if (to.matched.some((record) => record.meta.requiresAuth) && !auth.isLoggedIn)
        next({ name: "Login" });
    else if (to.matched.some((record) => record.meta.requiresGuest) && auth.isLoggedIn)
        next({ name: "Dashboard" });
    else next();
});

export default router
