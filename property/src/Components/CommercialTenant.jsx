import {
  Box,
  Grid,
  Image,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import prop1 from "../Images/line art_VILLA 2 2office.png"
import prop2 from "../Images/line art_VILLA 2 2comm.png"
import prop3 from "../Images/line art_VILLA 2 2shop.png"
import prop4 from "../Images/line art_VILLA 2 2warehouse.png"
import prop6 from "../Images/line art_VILLA 2 2showroom.png"
import plot from "../Images/line art_VILLA 2 2plot.png"
import { CallBack } from './CallBack'


export const CommercialTenant = () => {


  const [Office, setOffice] = useState(true);
  const [Shop, setShop] = useState(true);
  const [Warehouse, setWarehouse] = useState(true);
  const [studio, setStudio] = useState(true);
  const [Showroom, setShowroom] = useState(true);
  const [plots, setPlots] = useState(true);

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
            <Box onClick={() => setOffice(!Office)} cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={Office ? 'rgba(10, 58, 103, 1)' : !Office ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={Office ? '#ECEEF5' : !Office ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={prop1}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='3px'>
                Office space
              </Text>
            </Box>

            <Box onClick={() => setStudio(!studio)} cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={studio ? 'rgba(10, 58, 103, 1)' : !studio ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={studio ? '#ECEEF5' : !studio ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
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
                mt='0px'>
                Commercial studio
              </Text>
            </Box>

            <Box onClick={() => setShop(!Shop)} cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={Shop ? 'rgba(10, 58, 103, 1)' : !Shop ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={Shop ? '#ECEEF5' : !Shop ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
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
                mt='3px'>
                Shop
              </Text>
            </Box>

            <Box onClick={() => setWarehouse(!Warehouse)} cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={Warehouse ? 'rgba(10, 58, 103, 1)' : !Warehouse ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={Warehouse ? '#ECEEF5' : !Warehouse ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
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
                Warehouse
              </Text>
            </Box>

            <Box onClick={() => setPlots(!plots)} cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={plots ? 'rgba(10, 58, 103, 1)' : !plots ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={plots ? '#ECEEF5' : !plots ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
              boxShadow={'4px 4px 7px rgba(0, 0, 0, 0.07), -4px -4px 13px #FFFFFF, 6px 6px 36px rgba(0, 0, 0, 0.06)'}
            > <Image
                m={'auto'}
                mt="12px"
                width={'114px'}
                h={"96px"}
                src={plot}
              />
              <Text fontFamily={'Poppins'}
                fontWeight={'bold'}
                fontSize={"14px"}
                lineHeight={"21px"}
                textAlign={'center'}
                m='auto'
                w={"106px"}
                mt='3px'>
                Plot
              </Text>
            </Box>

            <Box onClick={() => setShowroom(!Showroom)} cursor={'pointer'} w={'156px'}
              height={'162px'}
              borderRadius={"15px"}
              color={Showroom ? 'rgba(10, 58, 103, 1)' : !Showroom ? 'rgba(255, 255, 255, 1)' : 'rgba(10, 58, 103, 1)'}
              bg={Showroom ? '#ECEEF5' : !Showroom ? 'rgba(10, 58, 103, 1)' : '#ECEEF5'}
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
                Showroom
              </Text>
            </Box>

          </Grid>
        </Box>

        <CallBack />

      </Box>
    </>
  )
}
