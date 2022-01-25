import { Button, Circle, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import MyPic from '../assets/images/IMG_20210610_151226.jpg';
import Herobg from '../assets/images/hero_bg.jpg';


function Hero(props) {
    return (
        <Stack align={'center'} spacing={'40px'} bg="secondary.100" pb={'200px'}>

            {/* hero section */}
            <Stack style={{
                backgroundImage: ` url(${Herobg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} spacing={'50px'} align="center" justify={'center'} h="calc(100vh - 90px)" w="100%"   >
                <Text fontWeight="500" fontSize="38px" textAlign="center" color="white">
                    Hi, I' am &nbsp;
                    <Text as="span" fontWeight={'700'}>Esther</Text>
                    <br /> and Welcome to my world </Text>
                <Circle maxW="252px" maxH="252px">
                    <Image src={MyPic} w="100%" borderRadius={'100%'} />
                </Circle>
            </Stack>

            {/* about sections */}
            <Stack w={'100%'} align={'center'} px={'auto'} spacing={'20px'}>
                <Text fontSize={'36px'} fontWeight={'700'} color={'accent.100'}> About</Text>
                <Text fontSize={'24px'} fontWeight={'500'} color={'accent.100'} textAlign={'center'} w={'900px'}>
                    Esther is an accomplished Front-End Web Developer who has a knack for finding optimal solutions to client problems, having gained experience building and maintaining responsive websites for businesses with complex needs. At AIME, she creates progressive web apps and websites for clients that are intuitive, accessible and engaging.
                </Text>
                <Button bg="buttons.100">
                    More  &nbsp;
                </Button>
            </Stack>
            {/* Projects */}
            <Stack bg={'white'} w={'100%'} h={'50vh'} p={'30px'} gridGap={'30px'}  >
                <Text fontSize={'36px'} fontWeight={'700'} color={'secondary.100'} textAlign={'center'} > Projects</Text>
                <SimpleGrid columns={4} >
                    <Stack border={'1px solid gray'} h={'345px'} >
                        <Text>hello</Text>
                    </Stack>

                </SimpleGrid>
            </Stack>

        </Stack>
    );
}

export default Hero;