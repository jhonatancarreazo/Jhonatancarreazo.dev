
'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Links = [
  { name: 'Sobre mi', path: '/sobre-mi' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Blog', path: '/blog' }
];

const NavLink = ({ children, path }) => {
  return (
    <ChakraLink
      as={RouterLink} 
      to={path}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('black.200', 'black.700'),
      }}
    >
      {children}
    </ChakraLink>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
            <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://media.licdn.com/dms/image/v2/D4E03AQHL567pmMCwZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699673195518?e=1729123200&v=beta&t=zJZtAqqSYxXmfLpCRNZZbyraqD7TIKcQGiYxMpRZ3Q8'
                  }
                />
              </MenuButton>
             
            </Menu>
          </Flex>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
