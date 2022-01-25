import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";


const NavBar = (props) => {
    const { selectedContract } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory()

    const handleRedirect = useCallback((path) => {
        return () => {
            history.push(path);
        }
    }, [])
    return (
        <NavBarContainer {...props}>
            <a href={'/'}>
             <Text fontSize="30px"fontWeight="700" fontFamily="'Lora', serif"fontStyle="italic" color="white">Esther</Text>
          
            </a>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <EndLinks toggle={toggle} isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="30" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="#ffffff"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="30px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box
            _hover={{ cursor: "pointer" }}
            display={{ base: "block", md: "block", lg:"none" }}
            transition="0.2s ease-in-out "
            onClick={toggle}>
            {isOpen ? <CloseIcon color="white" /> : <MenuIcon color="white" />}
        </Box>
    );
};

const MenuItem = ({ icon, children, isLast, toggle, nohash=false, to = "/", display, ...rest }) => {
    return (
        <a href={nohash? to :`/#${to}`}>
            <Text onClick={() => toggle()} color="white" _hover={{  color:"buttons.100", borderBottom:"1px solid #89efe5"}}
              fontSize="14px" fontWeight="800" display={display} {...rest}>
                {children}
            </Text>
        </a>
    );
};

const EndLinks = ({ isOpen, toggle }) => {
    const history = useHistory()

    const handleRedirect = useCallback((path) => {
        return () => {
            history.push(path);
        }
    }, [])
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: isOpen ? "block" : "none", lg:"block" }}
            pb={["20px", 0, 0, 0]}
            flexBasis={{ base: "100%", md: "100%", lg:"auto" }}>
            <Stack
                spacing={["10px","10px","10px", "50px"]}
                mr={["0", "60px"]}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "column", "column", "row"]}
                mt={[4, 4, 0, 0]}
                pt={[4, 4, 0, 0]}>

                <MenuItem display={isOpen ? "block" : "auto"} toggle={toggle} to=""  > Home </MenuItem>
               
                <MenuItem display={isOpen ? "block" : "auto"} toggle={toggle} to="about" isLast>About</MenuItem>
                <MenuItem display={isOpen ? "block" : "auto"} toggle={toggle} to="projects" isLast>Projects</MenuItem>
                <MenuItem display={isOpen ? "block" : "auto"} toggle={toggle} to="resume" isLast>Resume</MenuItem>
               

            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align={["flex-start","center"]}
            justify="space-between"
            wrap="wrap"
            w="100%"  
            minH="50px"
            color={"black"}
            pos="fixed"
            top="0" left="0"
            zIndex="100"
            alignItems="center"
            boxShadow="md"
            px={8}
            pt={2}
            bg="primary.100"
            {...props}>
            {children}
        </Flex>
    );
};



export default NavBar;