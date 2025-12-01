import { Flex, Button, Input, Link, useBreakpointValue } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const MENUTIMES: string[] = ["Marketplace", "Inspiration", "About us"];
const PLACEHOLDERFORSEARCH: string = "Search on website...";

const PlatformSelector = () => {
  // Adjust layout direction based on screen size
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const gap = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Flex
      direction={direction}
      align="center"
      wrap="wrap"
      gap={gap}
    >
      {MENUTIMES.map((item) => (
        <Link
          key={item}
          href="#"
          _hover={{ textDecoration: "none", color: "teal.500" }}
        >
          <Button variant="plain" size="sm">
            {item}
          </Button>
        </Link>
      ))}

      {/* Search input + button */}
      <Flex mt={{ base: 2, md: 0 }} gap={2} align="center">
        <Input
          type="search"
          placeholder={PLACEHOLDERFORSEARCH}
          size="sm"
          width={{ base: "100%", md: "12rem" }}
        />
        <Button size="sm" variant="outline">
          <CiSearch />
        </Button>
      </Flex>
    </Flex>
  );
};

export default PlatformSelector;
