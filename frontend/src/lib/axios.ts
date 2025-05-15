import axios from "axios"
import { useAuthStore } from "../store/auth";
import router from "../router";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    withXSRFToken: true,
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const auth = useAuthStore();
        const $toast = useToast();
        switch (error.response.status) {
            case 401:
                auth.cleanState();
                $toast.error("Unauthorized");
                router.push("/login");
                break;
            case 404:
                $toast.error("Page not found");
                router.push("/404");
                break;
            case 419:
                auth.cleanState();
                $toast.error("Unauthorized");
                router.push("/login");
                break;
            case 500:
                router.push("/500");
                break;
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;