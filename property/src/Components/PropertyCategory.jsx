import {
  Box,
  Button,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react';
import residential from "../Images/Residental.png"
import residential2 from "../Images/residental2.png"
import commercial2 from "../Images/commercial2.png"
import commercial from "../Images/commercial.png"
import { ResidentialTenant } from './ResidentialTenant';
import { CommercialTenant } from './CommercialTenant';
import { ResidentialOwner } from './ResidentialOwner';
import { CommercialOwner } from './CommercialOwner';


export const PropertyCategory = () => {



  const [bgColor, setBgColor] = useState('none');
  const [btnborder, setBtnBorder] = useState('none');

  const changeBgResidental = () => {
    setBgColor('residental')
  }

  const changeBgCommercial = () => {
    setBgColor('commercial')
  }

  const changeBtnBorderTenant = () => {
    setBtnBorder('tenant');
  };

  const changeBtnBorderOwner = () => {
    setBtnBorder('owner');
  }




  return (
    <>
      <Box border={'1px solid transperant'} mt='30px'>

        <Box
        ><Text fontFamily={'Poppins'}
          fontWeight={'600'}
          fontSize={"16px"}
          lineHeight={"24px"}
          color='rgba(10, 58, 103, 1)'
          textAlign={'left'}
          width={'128px'} h='24px'
          ml={{ base: '20px', md: "40px", lg: "60px" }}
        >Select Category</Text></Box>

        <Flex justifyContent={'space-between'} gap={'20px'} mt='15px' >
          <Box onClick={changeBgResidental} w={'157px'}
            height={'168px'}
            cursor={'pointer'}
            borderRadius={"15px"}
            color={bgColor == "none" ? 'rgba(10, 58, 103, 1)' : bgColor == "residental" ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
            bg={bgColor == "none" ? '#ECEEF5' : bgColor == "residental" ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
            ml={{ base: '20px', md: "40px", lg: "60px" }}
            boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
          > <Image
              m={'12px'}
              width={'133px'}
              h={"110px"}
              src={bgColor == "none" ? residential : bgColor == "residental" ? residential2 : residential}
            />
            <Text fontFamily={'Poppins'}
              fontWeight={'bold'}
              fontSize={"14px"}
              lineHeight={"21px"}
              textAlign={'center'}
              mt='12px'>
              Residental
            </Text>
          </Box>
          <Box onClick={changeBgCommercial}
            w={'157px'}
            cursor={'pointer'}
            height={'168px'}
            borderRadius={"15px"}
            color={bgColor == "none" ? 'rgba(10, 58, 103, 1)' : bgColor == "commercial" ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
            bg={bgColor == "none" ? '#ECEEF5' : bgColor == "commercial" ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
            mr={{ base: '20px', md: "40px", lg: "60px" }}
            boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}>
            <Image
              m={'12px'}
              width={'133px'}
              h={"110px"}
              src={bgColor == "none" ? commercial : bgColor == "commercial" ? commercial2 : commercial}
            />
            <Text fontFamily={'Poppins'}
              fontWeight={'bold'}
              fontSize={"14px"}
              lineHeight={"21px"}
              textAlign={'center'}
              mt='12px'>
              Commercial
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box border={'1px solid transperant'} mt={"30px"} >
        <Box>
          <Text fontFamily={'Poppins'}
            fontWeight={'600'}
            fontSize={"16px"}
            lineHeight={"24px"}
            color='rgba(10, 58, 103, 1)'
            textAlign={'left'}
            width={'128px'} h='24px'
            ml={{ base: '20px', md: "40px", lg: "60px" }}
          >Renting as
          </Text>
        </Box>

        <Flex mt={'20px'} gap={'10px'} justifyContent={'flex-start'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
          <Button
            onClick={changeBtnBorderTenant}
            w={'117px'}
            h={"50px"}
            color='rgba(10, 58, 103, 1)'
            bg={"#ECEEF5"}
            border={btnborder == "none" ? 'none' : btnborder == "tenant" ? '2px solid rgba(10, 58, 103, 1)' : 'none'}
            boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
            borderRadius={'10px'}
          >Tenant</Button>
          <Button onClick={changeBtnBorderOwner}
            w={'117px'}
            h={"50px"}
            color='rgba(10, 58, 103, 1)'
            border={btnborder == "none" ? 'none' : btnborder == "owner" ? '2px solid rgba(10, 58, 103, 1)' : 'none'}
            bg={"#ECEEF5"}
            boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
            borderRadius={'10px'}
          >Owner</Button>
        </Flex>
      </Box>

      {bgColor == "none" || btnborder == "none" ? null : bgColor == "residental" && btnborder == 'tenant' ? <ResidentialTenant /> : bgColor == "commercial" && btnborder == 'tenant' ? <CommercialTenant /> : bgColor == "residental" && btnborder == 'owner' ? <ResidentialOwner /> : bgColor == "commercial" && btnborder == 'owner' ? <CommercialOwner /> : null}


    </>
  )
}
