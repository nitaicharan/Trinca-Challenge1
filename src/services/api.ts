import axios from "axios";
import { getAuth } from "./LocalStorageService";

// TODO insert dynamically access token to requests

export const api = getApi();

function getApi() {
    const api = axios.create({
        baseURL: 'http://localhost:3333',
    });

    api.interceptors.request.use(config => {
        const auth = getAuth();
        config.headers.Authorization = `Bearer ${auth?.access_token}`;
        return config;
    })

    return api;
}