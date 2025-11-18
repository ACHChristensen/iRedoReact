import { Button } from "@chakra-ui/react";

const loggedIn = false; // TODO - Make login functionality and "Logout" button
const logginButton = () => {
    return (
        <Button variant="ghost" size="xs" defaultValue="Market Place" alignSelf="center" justifyContent="right">
            {loggedIn ? 'Logout' : 'Register / Login'}
        </Button>
    );
};  

export default logginButton;