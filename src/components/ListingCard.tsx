import { useEffect, useState } from "react";
import { Button, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
import listingService, { type Listing } from "../services/listingService";

export const ListingCard = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await listingService.getAll();

        // Map Spring Data REST _embedded.listings to state
        const data: Listing[] = response._embedded?.listings || [];

        setListings(data); // <-- update state so component re-renders

        console.log("Fetched listings:", data);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 3]} p={6}>
      {listings.map((item, index) => (
        <Card.Root key={index} maxW="sm" overflow="hidden">
          <Image 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Product image"
          />

          <Card.Body gap="2">
            <Card.Title>{item.id ?? index + 1}</Card.Title>
            <Card.Description>
              Sold separately? {item.soldSeperately ? "Yes" : "No"}
            </Card.Description>

            <Text textStyle="2xl" fontWeight="medium" mt="2">
              {item.price} kr.
            </Text>
          </Card.Body>

          <Card.Footer gap="2">
            <Button as="div" variant="solid">Buy now</Button>
            <Button as="div" variant="ghost">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};
