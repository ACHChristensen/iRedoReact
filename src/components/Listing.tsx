import { Button, Card, Image, Text, SimpleGrid } from "@chakra-ui/react";

const listings = [
  {
    id: 1,
    title: "Living room Sofa",
    description:
      "This sofa is perfect for modern tropical spaces, baroque inspired spaces.",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Kitchen Chair",
    description: "Minimal wooden kitchen chair with soft cushion.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Office Desk",
    description: "Perfect desk for home office setups.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1770&q=80",
  },
];

export const Listing = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} p={6}>
      {listings.map((item) => (
        <Card.Root key={item.id} maxW="sm" overflow="hidden">
          <Image src={item.image} alt={item.title} />

          <Card.Body gap="2">
            <Card.Title>{item.title}</Card.Title>
            <Card.Description>{item.description}</Card.Description>

            <Text textStyle="2xl" fontWeight="medium" mt="2">
              ${item.price}
            </Text>
          </Card.Body>

          <Card.Footer gap="2">
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};
