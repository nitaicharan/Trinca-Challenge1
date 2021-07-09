import { Barbecue } from "../interfaces/Barbecue";
import { api } from "./api";

export const fetchList = () => api.get<Barbecue[]>('/barbecues').then(({ data }) => data);
export const fetchDetail = (id: string) => api.get<Barbecue>(`/barbecues/${id}`).then(({ data }) => data);