import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            👨‍💻 Desarrollador Web Front-End | HTML | CSS | JavaScript | GitHub | React
          </Text>
          <Heading>Sobre mí</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
        

Soy <Text as='b'>Jhonatan Carreazo</Text> , un apasionado Desarrollador Web especializado en el desarrollo frontend. Mi enfoque se centra en crear sitios web visualmente atractivos y altamente funcionales que ofrezcan una excelente experiencia de usuario. <br></br>

Con experiencia sólida en <Text as='b'>HTML, CSS y JavaScript</Text>, así como en el uso de <Text as='b'>herramientas de control de versiones como Git.</Text>
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
           
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://avatars.githubusercontent.com/u/142127117?v=4'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

/* function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <ul>
        <li>
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1.</p>
        </li>
        <li>
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2.</p>
        </li>
        <li>
          <h3>Proyecto 3</h3>
          <p>Descripción del proyecto 3.</p>
        </li>
      </ul>
    </section>
  );
}

export { Projects };
 */