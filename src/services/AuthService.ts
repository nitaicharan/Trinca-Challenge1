import { Authentication } from './../interfaces/Authentication';
import { api } from "./api";

export const login = (params: { email: string, password: string }) => api.post<Authentication>('/login', params).then(({ data }) => data);
export const refreshToken = () => { };