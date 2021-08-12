import axios from "axios";

// TODO insert dynamically access token to requests
export const api = axios.create({
    baseURL: 'http://localhost:3333',
});