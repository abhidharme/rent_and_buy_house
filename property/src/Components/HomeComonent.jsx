import {
    Box,
    Center,
    Text,
    Button,
    Image
} from '@chakra-ui/react'
import home_screen_logo from "../Images/home screen.png"
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const HomeComonent = () => {

    const navigate = useNavigate();

    return (
        <>
            <Center>
                <Box width={{ base: "373px", md: "400px", lg: "500px" }}>
                    <Center>
                        <Image position={'absolute'}
                            top={{ base: "228px", md: "130px", lg: "130px" }}
                            src={home_screen_logo} />
                    </Center>

                    <Center>
                        <Text position={'absolute'}
                            top={{ base: "525.96px", md: "435px", lg: "435px" }}
                            fontSize={'24px'}
                            fontStyle='normal'
                            fontWeight={'600'}
                            lineHeight={'36px'}
                            fontFamily="Poppins"
                            color={' #7E134B'}>
                            Let's add your rental
                            <Text>
                                Prefrences
                            </Text>
                        </Text>

                        <Button width={'167px'}
                            h='50px'
                            color={'white'}
                            bg={'#0A3A67'}
                            position={'absolute'}
                            top={{ base: "672px", md: "600px", lg: "600px" }}
                            boxShadow='inset -4.14221e-16px -6.76474px 6.76474px #082C4E, inset 4.14221e-16px 6.76474px 6.76474px #0C457B'
                            borderRadius={'14px'}
                            colorScheme='facebook'
                            onClick={() => navigate("/bookhome")}>
                            Proceed
                        </Button>

                    </Center>

                </Box>
            </Center>
        </>
    )
}
