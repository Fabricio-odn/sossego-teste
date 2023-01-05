import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export default function FormCreation() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box mt="40">
      <form>
        <Grid
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={30}
        >
          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                type="name"
                width="100%"
                outline="none"
                background="#F0F2F6"
                border="none"
                borderRadius="4px"
                h="30"
                {...register('name')}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem colStart={1} colEnd={2} rowStart={2}>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                width="100%"
                outline="none"
                background="#F0F2F6"
                border="none"
                borderRadius="4px"
                h="30"
                {...register('password')}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem colStart={2} colEnd={4} rowStart={2}>
            <FormControl>
              <FormLabel>Confirmar senha</FormLabel>
              <Input
                type="password"
                width="100%"
                outline="none"
                background="#F0F2F6"
                border="none"
                borderRadius="4px"
                h="30"
                {...register('confirmPassword')}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem colStart={1} colEnd={2} rowStart={3}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                width="100%"
                outline="none"
                background="#F0F2F6"
                border="none"
                borderRadius="4px"
                h="30"
                {...register('email')}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem colStart={2} colEnd={4} rowStart={3}>
            <FormControl>
              <FormLabel>Data de nascimento</FormLabel>
              <Input
                type="date"
                width="100%"
                outline="none"
                background="#F0F2F6"
                border="none"
                borderRadius="4px"
                h="30"
                {...register('dateofbird')}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem rowStart={4}>
            <Button
              type="submit"
              border="none"
              cursor={'pointer'}
              background={'#5357B1'}
              color={'#fff'}
              padding="15px 50px"
              rightIcon={<FiArrowRight size={20} />}
              borderRadius="4"
              fontWeight="bold"
            >
              Próximo Passo
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
}
