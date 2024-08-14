'use client';

import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  List,
  ListItem,
  Code, 
} from '@chakra-ui/react';


// BlogTags Component
const BlogTags = ({ marginTop = 0, tags }) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

// BlogAuthor Component
const BlogAuthor = ({ date, name }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </HStack>
  );
};

// ArticleList Component
const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Proyectos</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://raw.githubusercontent.com/jhonatancarreazo/Ethnos/librerias/img/ethnos_logo.png'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['React js', 'Chakra UI']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Ethnos Shoes
            </Text>
          </Heading>
          
          <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>
              Instalación
            </Heading>

            <List spacing={3}>
              <ListItem>
                <Text>
                  1. Clona este repositorio en tu máquina local:
                </Text>
                <Code p={2} display="block" bg="gray.100" borderRadius="md">
                  git clone https://github.com/jhonatancarreazo/ethnos_shoes.git
                </Code>
              </ListItem>

              <ListItem>
                <Text>2. Abre una terminal y navega hasta la carpeta del proyecto.</Text>
              </ListItem>

              <ListItem>
                <Text>
                  3. Ejecuta el siguiente comando para instalar todas las dependencias:
                </Text>
                <Code p={2} display="block" bg="gray.100" borderRadius="md">
                  npm install
                </Code>
              </ListItem>
            </List>
          </Box>

         
        </Box>
      </Box>
 
  
  
    </Container>
  );
};

export default ArticleList;
