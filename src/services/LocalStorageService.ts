import { Authentication } from "../interfaces/Authentication";

const setItem = (params: { [key: string]: any }, key: string) => localStorage.setItem(key, JSON.stringify(params));
export const saveAuth = (auth: Authentication) => setItem(auth, 'AUTHORIZATION_KEY');

const getItem = (key: string) => localStorage.getItem(key);
export const getAuth = () => JSON.parse(getItem('AUTHORIZATION_KEY') || '{}') as Authentication;