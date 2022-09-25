import {
    Box,
    Button,
    Flex,
    Grid,
    Image,
    Text
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import prop1 from "../Images/line art_VILLA 2 3.png"
import prop2 from "../Images/line art_VILLA 2 2.png"
import prop3 from "../Images/line art_VILLA 2 23.png"
import prop4 from "../Images/line art_VILLA 2 24.png"
import prop5 from "../Images/line art_studio appartment5.png"
import prop6 from "../Images/line art_studio appartment6.png"
import prop7 from "../Images/line art_VILLA 2 2plot.png"
import { CallBack } from './CallBack'


export const ResidentialTenant = () => {


 const [vill, setVill] = useState(true);
 const [apertment, setApertment] = useState(true);
 const [independent, setIndependent] = useState(true);
 const [penthouse, setPenthouse] = useState(true);
 const [studio, setStudio] = useState(true);
 const [rowhouse, setRowhouse] = useState(true);
 const [plot, setPlot] = useState(true);

  return (
    <>
    <Box mt={'30px'}>
        <Box>
          <Text fontFamily={'Poppins'}
            fontWeight={'600'}
            fontSize={"16px"}
            lineHeight={"24px"}
            fontStyle='normal'
            color='rgba(10, 58, 103, 1)'
            textAlign={'left'}
            width={'119px'}
            h='24px'
            ml={{ base: '20px', md: "40px", lg: "60px" }}
          >Property type*
          </Text>
        </Box>

        <Box mt={'15px'}>
          <Grid
          justifyContent={'center'}
            gridGap={{ base: '23px', md: "40px", lg: "60px" }}
            gridTemplateColumns={'156px 156px'} >
              <Box onClick={()=>setVill(!vill)} 
              cursor={'pointer'}
               w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={vill  ? 'rgba(10, 58, 103, 1)' : !vill  ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={vill ? '#ECEEF5' : !vill ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop1}
                color={'white'}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='3px'>
                Villa/Villament
              </Text>
            </Box>

            <Box onClick={()=>setApertment(!apertment)}
             cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={apertment  ? 'rgba(10, 58, 103, 1)' : !apertment ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={apertment  ? '#ECEEF5' : !apertment ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop2}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='3px'>
                Apartment
              </Text>
            </Box>

            <Box onClick={()=>setIndependent(!independent)}
             cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={independent  ? 'rgba(10, 58, 103, 1)' : !independent  ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={independent  ? '#ECEEF5' : !independent ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop3}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='0px'>
                Independent house
              </Text>
            </Box>

            <Box onClick={()=>setPenthouse(!penthouse)}
             cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={penthouse  ? 'rgba(10, 58, 103, 1)' : !penthouse ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={penthouse  ? '#ECEEF5' : !penthouse ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop4}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='3px'>
                Penthouse
              </Text>
            </Box>

            <Box onClick={()=>setStudio(!studio)}
             cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={studio  ? 'rgba(10, 58, 103, 1)' : !studio ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={studio  ? '#ECEEF5' : !studio  ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop5}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='0px'>
                Studio apartment
              </Text>
            </Box>

            <Box onClick={()=>setRowhouse(!rowhouse)}
             cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={rowhouse  ? 'rgba(10, 58, 103, 1)' : !rowhouse ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={rowhouse  ? '#ECEEF5' : !rowhouse  ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop6}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='3px'>
                Row house
              </Text>
            </Box>

           
        
          </Grid>
        </Box>

       <Flex justifyContent={'center'}
        mt={{ base: '23px', md: "40px", lg: "60px" }} >
         <Box onClick={()=>setPlot(!plot)}
         cursor={'pointer'} w={'156px'}
        height={'162px'}
        borderRadius={"15px"}
        color={plot  ? 'rgba(10, 58, 103, 1)' : !plot ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
        bg={plot  ? '#ECEEF5' : !plot  ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
        boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
      > <Image
          m={'auto'}
          mt="12px"
          width={'114px'}
          h={"96px"}
          src={prop7}
        />
        <Text fontFamily={'Poppins'}
          fontWeight={'bold'}
          fontSize={"14px"}
          lineHeight={"21px"}
          textAlign={'center'}
          m='auto'
          w={"106px"}
          mt='5px'>
          Plot
        </Text>
      </Box>
      </Flex>

        <CallBack/>
      </Box>
    </>
  )
}
