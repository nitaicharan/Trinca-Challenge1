import { api } from "./api";

export const login = (params: { email: string, password: string }) => api.post<any>('/login', params).then(({ data }) => data);
export const refreshToken = () => { };