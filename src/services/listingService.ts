import ApiClient from "./api-client";

export interface Listing {
    id: number;
    soldSeperately: boolean;
    price: number;
}

export default new ApiClient<Listing>("/listings");