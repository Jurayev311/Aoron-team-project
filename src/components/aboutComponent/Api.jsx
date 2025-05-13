import axios from "axios";

const api = axios.create({
    baseURL: "https://testaoron.limsa.uz/api",
});

export const imageUrl = "https://testaoron.limsa.uz";

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        } else {
            config.headers["Content-Type"] = "application/json";
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error("API xatosi:", error.response?.status, error.response?.data || error.message);
        return Promise.reject({
            message: error.response?.data?.message || error.message,
            status: error.response?.status,
        });
    }
);

export const getTeam = async () => {
    try {
        const res = await api.get("/team-section");
        return Array.isArray(res) ? res : res.data || [];
    } catch (error) {
        throw new Error(error.message || "Jamoa ma'lumotlarini olishda xatolik yuz berdi");
    }
};

export const getNews = async () => {
    try {
        const res = await api.get("/news");
        return Array.isArray(res) ? res : res.data || [];
    } catch (error) {
        throw new Error(error.message || "Yangiliklarni olishda xatolik yuz berdi");
    }
};

export const getNewsItem = async (id) => {
    try {
        const res = await api.get(`/news/${id}`);
        return res.data || null;
    } catch (error) {
        throw new Error(error.message || `ID ${id} ga tegishli yangilikni olishda xatolik yuz berdi`);
    }
};

export const getFaqs = async () => {
    try {
        const res = await api.get("/faq");
        return Array.isArray(res) ? res : res.data || [];
    } catch (error) {
        throw new Error(error.message || "FAQ ma'lumotlarini olishda xatolik yuz berdi");
    }
};

export default api;