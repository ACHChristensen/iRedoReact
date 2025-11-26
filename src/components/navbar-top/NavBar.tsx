import { IconButton, Image, Flex, Stack } from "@chakra-ui/react";
import logoDark from "../../assets/iRedo-logo-darkmode.png";
import logoLight from "../../assets/iRedo-logo.png";
import { useColorMode } from "../ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import PlatformSelector from "./PlatformSelector";
import LoginButton from "../../pages/login/LoginButton";

export const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      bgColor={colorMode === "light" ? "white" : "#003B54"}
      px={{ base: 4, md: 8 }}
      py={4}
      boxShadow="md"
      wrap="wrap"
      gap={4}
    >
      {/* Logo */}
      <Image
        src={colorMode === "light" ? logoLight : logoDark}
        alt="iRedo Logo"
        boxSize={{ base: 12, md: 20 }}
        objectFit="contain"
      />

      {/* Platform menu */}
      <PlatformSelector />

      {/* Right side: theme toggle + login */}
      <Stack direction="row" justifyContent="space-between" align="center">
        <IconButton onClick={toggleColorMode} variant="ghost" size="sm" boxSize="6" alignSelf="center">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <LoginButton />
      </Stack>
    </Flex>
  );
};
