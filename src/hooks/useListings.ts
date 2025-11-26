import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { type Response } from "../services/api-client";
import type { Listing } from "../services/listingService";
import listingService from "../services/listingService";

const useListings = () =>
  useQuery<Response<Listing>, Error>({
    queryKey: ["listings"],
    queryFn: listingService.getAll,
    staleTime: ms("24 hours"), // 24 hours // TODO:change time
    gcTime: ms("24 hours") // 24 hous - same as cachetime
  });
export default useListings;
