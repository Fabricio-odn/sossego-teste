import React from 'react';

import { Icon } from '@chakra-ui/react';
import { RiUser5Fill, RiHome4Fill, RiFileTextFill } from 'react-icons/ri';
import { Container, Flex, Circle, Text } from '@chakra-ui/react';

import FormUserCreation from './Components/Form/FormUserCreation';

import './App.css';

function App() {
  return (
    <div>
      <Flex align="center" justify="center">
        <Container
          bg="#fff"
          borderRadius="8px"
          border="2px solid #F0F2F6"
          boxShadow="0px
          4px 31px #EEF1F5"
          w="1017px"
          p="3rem"
          marginTop={50}
        >
          <Text fontSize="2.25rem" fontWeight="bold">
            Criação de Usuário
          </Text>
          <Flex align="center" gap={20} wrap="wrap">
            <Circle size="50px" bg="#F0F2F6" color="#5357B1">
              <Icon as={RiUser5Fill} w={20} h={20} />
            </Circle>
            <Text fontWeight="500">Identificação Usuário</Text>

            <Circle size="50px" bg="#F0F2F6" color="#8C98A9">
              <Icon as={RiHome4Fill} w={20} h={20} />
            </Circle>
            <Text>Endereço do Usuário</Text>

            <Circle size="50px" bg="#F0F2F6" color="#8C98A9">
              <Icon as={RiFileTextFill} w={20} h={20} />
            </Circle>
            <Text>Sobre Você</Text>
          </Flex>

          <FormUserCreation />
        </Container>
      </Flex>
    </div>
  );
}

export default App;
