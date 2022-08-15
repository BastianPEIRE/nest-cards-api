import { Cards } from "src/cards/cards.interface";

export interface Profiles {
    profileID?: string;
    userId: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    cards: Cards[];
}
