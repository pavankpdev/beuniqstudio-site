import {NextPage} from "next";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay, Flex, Text,
    DrawerHeader, Button, Menu, MenuButton, MenuList, MenuItem
} from "@chakra-ui/react";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {IoLogoYoutube} from "react-icons/io";
import React from "react";
import {useRouter} from "next/router";

const HamburgerMenu: NextPage<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => {
    const router = useRouter();
    return <>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader >
                    <Flex gridGap={"1rem"} fontSize={"2xl"}>
                        <AiFillFacebook/>
                        <AiFillInstagram/>
                        <IoLogoYoutube/>
                    </Flex>
                </DrawerHeader>

                <DrawerBody>

                <Flex flexDirection={"column"}  gridGap={".1rem"}>
                    <Box _active={{bg:"brandPrimary.50", color:"brandPrimary.600"}} borderRadius={"6px"} p={".5rem"}>
                        <Text fontSize={"lg"}>
                            Home
                        </Text>
                    </Box>
                    <Box _active={{bg:"brandPrimary.50", color:"brandPrimary.600"}} borderRadius={"6px"} p={".5rem"}>
                        <Menu>
                            <MenuButton as={Text} fontWeight={"semibold"}>
                                Our Training
                            </MenuButton>
                            <MenuList>
                                <MenuItem  color={"heading"}>Guitar</MenuItem>
                                <MenuItem  color={"heading"}>Paino</MenuItem>
                                <MenuItem  color={"heading"}>Drums</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>

                <Button onClick={() => router.push("/booking")} mt={"1rem"} w={"100%"} colorScheme={"brandPrimary"}>Book your seat now</Button>

                </DrawerBody>

            </DrawerContent>
        </Drawer>
    </>
};

export default HamburgerMenu;