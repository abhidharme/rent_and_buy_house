import {
    Box,
    Center,
    Flex
} from '@chakra-ui/react'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { PropertyCategory } from './PropertyCategory'

export const BackAndCall = () => {

    const navigate = useNavigate();

    return (
        <>
            <Center>
                <Box width={{ base: "373px", md: "400px", lg: "500px" }}>
                    <Flex justifyContent={'space-between'} >
                        <Box
                            mt="69px"
                            ml={{ base: '20px', md: "40px", lg: "60px" }}
                            bg={'#EEF0F6'}
                            boxShadow='4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'
                            fontSize={'40px'}
                            width={'40px'}
                            h="40px"
                            borderRadius={'10px'}
                            onClick={() => navigate("/")}
                            cursor='pointer'>
                            <BsArrowLeftShort color='#0A3A67' />
                        </Box>
                        <Box
                            mt="69px"
                            mr={{ base: '20px', md: "40px", lg: "60px" }}
                        >
                            <Flex
                                justifyContent={'center'}
                                alignItems='center'
                                bg={'#EEF0F6'}
                                boxShadow='4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'
                                fontSize={'20px'}
                                width={'40px'}
                                h="40px"
                                borderRadius={'10px'}
                                cursor='pointer'>
                                <FiPhoneCall color='rgba(128, 22, 78, 1)' />
                            </Flex>
                        </Box>
                    </Flex>

                    <Box><PropertyCategory /></Box>

                </Box>
            </Center>
        </>
    )
}
