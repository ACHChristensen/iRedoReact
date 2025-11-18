import { IconButton, Image, Stack } from "@chakra-ui/react";

import logoDark from "../../assets/iRedo-logo-darkmode.png";
import logoLight from "../../assets/iRedo-logo.png";
import { useColorMode } from "../ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import PlatformSelector from "./PlatformSelector";
import LoginButton from "../../pages/login/LoginButton";


export const NavBar = () => {
    const { toggleColorMode, colorMode } = useColorMode();
  return (
  <Stack direction={{ base: "column", md: "row" }} justifyContent="space-between" bgColor={colorMode === "light" ? "white" : "#003B54"} boxShadow="md" paddingStart="2rem" paddingEnd="2rem">
    <Stack direction={{ md: "row", base: "column" }} h="20" >
    <Image src={colorMode === "light" ? logoLight : logoDark} className="marked" boxSize="20" width="10pc" alignSelf="center"/>
        
    </Stack>
        <Stack justifyContent="center">
        <PlatformSelector/>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          <IconButton onClick={toggleColorMode} variant="ghost" size="sm" boxSize="6" alignSelf="center">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
          <LoginButton/>
        </Stack>
    </Stack>
  );
};