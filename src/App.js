import React from 'react';

import {
  Heading,
  Icon,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Circle,
  HStack,
  Container,
} from '@chakra-ui/react';
import { RiUser5Fill, RiHome4Fill, RiFileTextFill } from 'react-icons/ri';

import FormUserCreation from './Components/Form/FormUserCreation';

import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Flex align="center" justify="center">
          <Card
            bg="#fff"
            borderRadius="8px"
            border="2px solid #F0F2F6"
            boxShadow="0px
          4px 31px #EEF1F5"
            w="auto"
            p="3rem"
            marginTop={80}
            justify="center"
          >
            <CardHeader>
              <Heading as="h1" fontSize="2.25rem" fontWeight="bold">
                Criação de Usuário
              </Heading>

              <HStack gap={20} align="center" wrap="wrap">
                <Circle size="50px" bg="#F0F2F6" color="#5357B1">
                  <Icon as={RiUser5Fill} w={20} h={20} />
                </Circle>
                <Heading as="h4" fontWeight="bold">
                  Identificação Usuário
                </Heading>

                <Circle size="50px" bg="#F0F2F6" color="#8C98A9">
                  <Icon as={RiHome4Fill} w={20} h={20} />
                </Circle>
                <Heading as="h4" fontWeight="bold">
                  Endereço do Usuário
                </Heading>

                <Circle size="50px" bg="#F0F2F6" color="#8C98A9">
                  <Icon as={RiFileTextFill} w={20} h={20} />
                </Circle>
                <Heading as="h4" fontWeight="bold">
                  Sobre Você
                </Heading>
              </HStack>
            </CardHeader>

            <CardBody>
              <FormUserCreation />
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
