import { User } from "./User";

export interface Barbecue {
    id: string;
    create_at: Date,
    description: string,
    price: number,
    users: User[],
}