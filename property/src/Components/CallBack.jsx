import React from 'react'
import {
    Box,
    Button,
    Flex,
    Text
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export const CallBack = () => {

    const navigate = useNavigate();

  return (
    <div>
    <Box>
        <Flex gap={'10px'}
        mt='40px'
        justifyContent={'space-between'}
        ml={{ base: '20px', md: "40px", lg: "60px" }}
        mr={{ base: '20px', md: "40px", lg: "60px" }}>
        <Button
        onClick={() => navigate("/")}
        w={'154px'}
        h={"50px"}
        color='rgba(10, 58, 103, 1)'
        bg={"#ECEEF5"}
        border={'1px solid rgba(10, 58, 103, 1)'}
        boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
        borderRadius={'10px'}
      >
        <Text
          fontFamily={'Poppins'}
          fontWeight={'600'}
          fontSize={"16px"}
          lineHeight={"24px"}
          color='rgba(10, 58, 103, 1)'
          width={'30px'} h='24px'
        >Skip</Text>
      </Button>
      <Button
      onClick={() => navigate("/")}
        w={'154px'}
        h={"50px"}
        color='#ECEEF5'
        colorScheme={'facebook'}
        bg={"rgba(10, 58, 103, 1)"}
        border={'1px solid rgba(10, 58, 103, 1)'}
        boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
        borderRadius={'10px'}
        textAlign="center"
      >
        <Text
          fontFamily={'Poppins'}
          fontWeight={'600'}
          fontSize={"16px"}
          m={'auto'}
          lineHeight={"24px"}
          color='#ECEEF5'
          width={'67px'} h='24px'
        >Proceed</Text>
      </Button>        
        </Flex>

        <Text
        fontFamily={'Poppins'}
        fontWeight={'600'}
        fontSize={"14px"}
        lineHeight={"21px"}
        m="auto"
        mt="30px"
        textAlign='center'
        color='rgba(10, 58, 103, 1)'
        width={'17px'} h='21px'
        >Or</Text>

        <Text
        fontFamily={'Poppins'}
        fontWeight={'600'}
        fontSize={"18px"}
        lineHeight={"27px"}
        textDecoration="underline"
        m="auto"
        cursor={'pointer'}
        mt="5px"
        textAlign='center'
        color='rgba(126, 19, 75, 1)'
        width={'179px'} h='27px'
        >Request a call back</Text>

        <Text
        fontFamily={'Poppins'}
        fontWeight={'600'}
        fontSize={"10px"}
        lineHeight={"15px"}
        m="auto"
        mt="5px"
        textAlign='center'
        color='rgba(10, 58, 103, 1)'
        width={'97px'} h='15px'
        >We’ll take care of it</Text>
        </Box>
    
    </div>
  )
}
