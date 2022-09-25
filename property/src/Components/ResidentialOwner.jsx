import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri'
import { CallBack } from './CallBack';

export const ResidentialOwner = () => {

  const [ownership, setOwnership] = useState('none');
  const [occupancy, setOcuupancy] = useState('none');
  const [ptype, setPtype] = useState('none');
  const [bedrooms, setBedrooms] = useState('none');


  return (
    <div>

      <Box>

        <Box border={'1px solid transperant'} mt={"30px"} >
          <Box>
            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"16px"}
              lineHeight={"24px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'88px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Ownership
            </Text>
          </Box>

          <Flex mt={'20px'} gap={'15px'} justifyContent={'flex-start'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Button
              onClick={() => setOwnership('Owned by self')}
              w={'105px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={ownership == "none" ? 'none' : ownership == "Owned by self" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'85px'} h='18px'
            >Owned by self</Text></Button>
            <Button
              onClick={() => setOwnership('Owned family member')}
              w={'188px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              border={ownership == "none" ? 'none' : ownership == "Owned family member" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              bg={"#ECEEF5"}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'168px'} h='18px'
            >Owned by a family member</Text></Button>
          </Flex>
        </Box>

        {/*------*/}

        <Box>
          <Box border={'1px solid transperant'} mt={"30px"} >
            <Box>
              <Text fontFamily={'Poppins'}
                fontWeight={'600'}
                fontSize={"16px"}
                lineHeight={"24px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'150px'} h='24px'
                ml={{ base: '20px', md: "40px", lg: "60px" }}
              >Occupancy status
              </Text>
            </Box>

            <Flex mt={'20px'} w={{ base: "305px", md: '320px', lg: "360px" }} justifyContent={'flex-start', 'space-between'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
              <Button
                onClick={() => setOcuupancy('Vacant')}
                w={'84px'}
                h={"44px"}
                color='rgba(10, 58, 103, 1)'
                bg={"#ECEEF5"}
                border={occupancy == "none" ? 'none' : occupancy == "Vacant" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
                boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
                borderRadius={'10px'}
              ><Text
                fontFamily={'Poppins'}
                fontWeight={'400'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'44px'} h='18px'
              >Vacant</Text>
              </Button>

              <Button
                onClick={() => setOcuupancy('Rented')}
                w={'83px'}
                h={"44px"}
                color='rgba(10, 58, 103, 1)'
                border={occupancy == "none" ? 'none' : occupancy == "Rented" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
                bg={"#ECEEF5"}
                boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
                borderRadius={'10px'}
              ><Text
                fontFamily={'Poppins'}
                fontWeight={'400'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'43px'} h='18px'
              >Rented</Text></Button>

              <Button
                onClick={() => setOcuupancy('Leased')}
                w={'83px'}
                h={"44px"}
                color='rgba(10, 58, 103, 1)'
                border={occupancy == "none" ? 'none' : occupancy == "Leased" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
                bg={"#ECEEF5"}
                boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
                borderRadius={'10px'}
              ><Text
                fontFamily={'Poppins'}
                fontWeight={'400'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'43px'} h='18px'
              >Leased</Text></Button>
            </Flex>

            <Flex mt={'15px'} gap={'15px'} justifyContent={'flex-start'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
              <Button
                onClick={() => setOcuupancy('Self occupied')}
                w={'122px'}
                h={"44px"}
                color='rgba(10, 58, 103, 1)'
                bg={"#ECEEF5"}
                border={occupancy == "none" ? 'none' : occupancy == "Self occupied" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
                boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
                borderRadius={'10px'}
              ><Text
                fontFamily={'Poppins'}
                fontWeight={'400'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'82px'} h='18px'
              >Self occupied</Text></Button>
              <Button
                onClick={() => setOcuupancy('Under construction')}
                w={'155px'}
                h={"44px"}
                color='rgba(10, 58, 103, 1)'
                border={occupancy == "none" ? 'none' : occupancy == "Under construction" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
                bg={"#ECEEF5"}
                boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
                borderRadius={'10px'}
              ><Text
                fontFamily={'Poppins'}
                fontWeight={'400'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'115px'} h='18px'
              >Under construction</Text></Button>
            </Flex>

            <Flex mt={'15px'} gap={'15px'} justifyContent={'flex-start'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
              <Button
                onClick={() => setOcuupancy('Newly constructed/Ready')}
                w={'262px'}
                h={"44px"}
                color='rgba(10, 58, 103, 1)'
                bg={"#ECEEF5"}
                border={occupancy == "none" ? 'none' : occupancy == "Newly constructed/Ready" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
                boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
                borderRadius={'10px'}
              ><Text
                fontFamily={'Poppins'}
                fontWeight={'400'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'222px'} h='18px'
              >Newly constructed/Ready to move in</Text></Button>
            </Flex>
          </Box>
        </Box>

        <Box border={'1px solid transperant'} mt={"30px"} >
          <Box>
            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"16px"}
              lineHeight={"24px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'119px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Property Type*
            </Text>
          </Box>

          <Flex mt={'20px'} gap={'15px'} w={{ base: "305px", md: '320px', lg: "360px" }} justifyContent={'flex-start', 'space-between'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Button
onClick={()=>setPtype('Villa/Villament')}
              w={'115px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={ptype == "none" ? 'none' : ptype == "Villa/Villament" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'85px'} h='18px'
            >Villa/Villament</Text>
            </Button>

            <Button
            onClick={()=>setPtype('Apartment')}
              w={'94px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              border={ptype == "none" ? 'none' : ptype == "Apartment" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              bg={"#ECEEF5"}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'64px'} h='18px'
            >Apartment</Text></Button>

            <Button
            onClick={()=>setPtype('Row house')}
              w={'95px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              border={ptype == "none" ? 'none' : ptype == "Row house" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              bg={"#ECEEF5"}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'65px'} h='18px'
            >Row house</Text></Button>
          </Flex>

          <Flex mt={'15px'} gap={'15px'} justifyContent={'flex-start'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Button
            onClick={()=>setPtype('Studio apartment')}
              w={'137px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={ptype == "none" ? 'none' : ptype == "Studio apartment" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'107px'} h='18px'
            >Studio apartment</Text></Button>
            <Button
            onClick={()=>setPtype('Independent house')}
              w={'147px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              border={ptype == "none" ? 'none' : ptype == "Independent house" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              bg={"#ECEEF5"}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'117px'} h='18px'
            >Independent house</Text></Button>
          </Flex>

          <Flex mt={'15px'} gap={'15px'} justifyContent={'flex-start'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Button
            onClick={()=>setPtype('Plot')}
              w={'52px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={ptype == "none" ? 'none' : ptype == "Plot" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'22px'} h='18px'
            >Plot</Text></Button>

            <Button
            onClick={()=>setPtype('Penthouse')}
              w={'94px'}
              h={"40px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={ptype == "none" ? 'none' : ptype == "Penthouse" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            ><Text
              fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'64px'} h='18px'
            >Penthouse</Text></Button>
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
              width={'119px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Location*
            </Text>
          </Box>

          <Flex mt={'15px'} justifyContent={'center'}>
            <InputGroup
              borderRadius={'18px'}
              width={{ base: "333px", md: "320px", lg: "380px" }}>
              <InputLeftElement
                mt={'8px'}
                ml='2px'
                pointerEvents='none'
                children={<RiSearchLine fontSize={'24px'} color='rgba(10, 58, 103, 0.3)' />}
              />
              <Input
                border={'none'}
                variant='none'
                h="55px"
                borderRadius={'18px'}
                boxShadow="-4px -4px 16px rgba(255, 255, 255, 0.25), 4px 4px 8px rgba(66, 83, 107, 0.09), inset 0px -4px 14px #FFFFFF, inset 0px 2px 6px rgba(66, 83, 107, 0.22)"
                type='text'
                placeholder='Search location'
                color={'rgba(10, 58, 103, 0.3)'} />
            </InputGroup>
          </Flex>
        </Box>

        <Box>
          <Box border={'1px solid transperant'} mt={"30px"} >
            <Box>
              <Text fontFamily={'Poppins'}
                fontWeight={'600'}
                fontSize={"16px"}
                lineHeight={"24px"}
                color='rgba(10, 58, 103, 1)'
                textAlign={'left'}
                width={'177px'} h='24px'
                ml={{ base: '20px', md: "40px", lg: "60px" }}
              >Project/Society name
              </Text>
            </Box>


            <Flex mt={'15px'} justifyContent={'center'}>
              <InputGroup
                borderRadius={'18px'}
                width={{ base: "333px", md: "320px", lg: "380px" }}>
                <Input
                  border={'none'}
                  variant='none'
                  h="55px"
                  borderRadius={'18px'}
                  boxShadow="-4px -4px 16px rgba(255, 255, 255, 0.25), 4px 4px 8px rgba(66, 83, 107, 0.09), inset 0px -4px 14px #FFFFFF, inset 0px 2px 6px rgba(66, 83, 107, 0.22)"
                  type='text'
                  placeholder='Enter project/Society name'
                  color={'rgba(10, 58, 103, 0.3)'} />
              </InputGroup>
            </Flex>
          </Box>
        </Box>


        <Box border={'1px solid transperant'} mt={"30px"} >
          <Box>
            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"16px"}
              lineHeight={"24px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'174px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Built-up area (sq.ft)
            </Text>
          </Box>
          <Box mt={'15px'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <InputGroup
              borderRadius={'18px'}
              w='140px'>
              <Input
                border={'none'}
                variant='none'
                textAlign={'center'}
                h="55px"
                borderRadius={'18px'}
                boxShadow="-4px -4px 16px rgba(255, 255, 255, 0.25), 4px 4px 8px rgba(66, 83, 107, 0.09), inset 0px -4px 14px #FFFFFF, inset 0px 2px 6px rgba(66, 83, 107, 0.22)"
                type='text'
                placeholder='0 sq.ft'
                color={'rgba(10, 58, 103, 0.3)'} />
            </InputGroup>
          </Box>
        </Box>


        <Box border={'1px solid transperant'} mt={"30px"} >
          <Box>
            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"16px"}
              lineHeight={"24px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'84px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Bedrooms
            </Text>
          </Box>

          <Flex mt={'20px'} gap={'15px'} w={{ base: "305px", md: '320px', lg: "360px" }} justifyContent={'flex-start', 'space-between'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Button
onClick={()=>setBedrooms('1')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "1" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >1</Button>
            <Button
            onClick={()=>setBedrooms('2')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "2" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >2</Button>
            <Button
            onClick={()=>setBedrooms('2.5')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "2.5" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >2.5</Button>
             <Button
             onClick={()=>setBedrooms('3')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "3" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >3</Button>
          </Flex>

          <Flex mt={'30px'} gap={'15px'} w={{ base: "305px", md: '320px', lg: "360px" }} justifyContent={'flex-start', 'space-between'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Button
            onClick={()=>setBedrooms('3.5')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "3.5" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >3.5</Button>
            <Button
            onClick={()=>setBedrooms('4')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "4" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >4</Button>
            <Button
            onClick={()=>setBedrooms('5+')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "5+" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >5+</Button>
             <Button
            onClick={()=>setBedrooms('Studio')}
              w={'60px'}
              h={"53px"}
              color='rgba(10, 58, 103, 1)'
              bg={"#ECEEF5"}
              border={bedrooms == "none" ? 'none' : bedrooms == "Studio" ? '1px solid rgba(10, 58, 103, 1)' : 'none'}
              boxShadow=" 4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)"
              borderRadius={'10px'}
            >
              <Text
                fontFamily={'Poppins'}
                fontWeight={'600'}
                fontSize={"12px"}
                lineHeight={"18px"}
                color='rgba(10, 58, 103, 1)'
                width={'39px'} h='18px'
              >Studio</Text>
            </Button>
          </Flex>
        </Box>

        <Box border={'1px solid transperant'} mt={"30px"} >
          <Flex mt={'30px'} gap={'15px'} w={{ base: "305px", md: '320px', lg: "360px" }} justifyContent={'flex-start', 'space-between'} ml={{ base: '20px', md: "40px", lg: "60px" }}>
            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"16px"}
              lineHeight={"24px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'199px'} h='24px'
            >Expected monthly rental
            </Text>

            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"14px"}
              lineHeight={"21px"}
              color='rgba(117, 1, 61, 1)'
              textAlign={'left'}
              width={'18px'} h='21px'
            >₹0
            </Text>
          </Flex>

          <Flex mt={'15px'} justifyContent={'center'}>
            <InputGroup
              borderRadius={'18px'}
              width={{ base: "333px", md: "320px", lg: "380px" }}>
              <Input
                border={'none'}
                variant='none'
                h="55px"
                borderRadius={'18px'}
                boxShadow="-4px -4px 16px rgba(255, 255, 255, 0.25), 4px 4px 8px rgba(66, 83, 107, 0.09), inset 0px -4px 14px #FFFFFF, inset 0px 2px 6px rgba(66, 83, 107, 0.22)"
                type='text'
                placeholder='Enter monthly rental value'
                color={'rgba(10, 58, 103, 0.3)'} />
            </InputGroup>
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
              width={'132px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Security deposit
            </Text>
          </Box>

          <Box
            ml={{ base: '20px', md: "40px", lg: "60px" }}
            mr={{ base: '20px', md: "40px", lg: "60px" }}
            mt={'15px'} >
            <RangeSlider
              W={"full"}
              overflow='hidden'
              outline={'none'}
              boxShadow="-5px -5px 5px rgba(255, 255, 255, 0.4), 5px 5px 10px rgba(174, 174, 192, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF"
              h="25px"
              fontSize={'30px'}
              borderRadius="10px"
              color="rgba(10, 58, 103, 1)"
              aria-label={['min', 'max']}
              defaultValue={[0, 12]}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Box>
        </Box>



        <Box border={'1px solid transperant'} mt={"30px"} >
          <Box>
            <Text fontFamily={'Poppins'}
              fontWeight={'600'}
              fontSize={"16px"}
              lineHeight={"24px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'left'}
              width={'138px'} h='24px'
              ml={{ base: '20px', md: "40px", lg: "60px" }}
            >Save property as
            </Text>
          </Box>

          <Flex mt={'15px'} justifyContent={'center'}>
            <InputGroup
              borderRadius={'18px'}
              width={{ base: "333px", md: "320px", lg: "380px" }}>
              <Input
                border={'none'}
                variant='none'
                h="55px"
                borderRadius={'18px'}
                boxShadow="-4px -4px 16px rgba(255, 255, 255, 0.25), 4px 4px 8px rgba(66, 83, 107, 0.09), inset 0px -4px 14px #FFFFFF, inset 0px 2px 6px rgba(66, 83, 107, 0.22)"
                type='text'
                placeholder='Ex: Summer house'
                color={'rgba(10, 58, 103, 0.3)'} />
            </InputGroup>
          </Flex>
        </Box>

        <Flex justifyContent={'center'} mt={"20px"} >
          <Box>
            <Text fontFamily={'Poppins'}
              fontWeight={'400'}
              fontSize={"12px"}
              lineHeight={"18px"}
              color='rgba(10, 58, 103, 1)'
              textAlign={'center'}
              width={'317px'} h='36px'
            >Provide full information on your property to get a more accurate rental valuation
            </Text>
          </Box>
        </Flex>



        <CallBack />


      </Box>

    </div>
  )
}
