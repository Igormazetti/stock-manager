'use client';
import React from 'react';
import { FieldError, FieldValues, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  console.log(errors);
  function onSubmit(values: FieldValues) {
    console.log(values);
  }

  return (
    <Flex
      h="100vh"
      minH="100vh"
      bg="#111212"
      color="#FFF"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="30px"
    >
      <Text fontSize="30px" fontWeight="700">
        Login
      </Text>
      <Flex
        direction="column"
        w="500px"
        h="350px"
        p="30px"
        borderRadius="20px"
        bg="#c4c8c8"
        color="#000000"
        boxShadow="6px 6px 3px 0px rgba(117, 114, 114, 0.75)"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.email} mb="10px">
            <FormLabel htmlFor="emailInput">Email</FormLabel>
            <Input
              borderColor="black"
              id="emailInput"
              placeholder="email"
              {...register('email', {
                required: 'Insira seu e-mail',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Insira um e-mail válido',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && (errors.email as FieldError).message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="passwordInput">Senha</FormLabel>
            <Input
              id="passwordInput"
              borderColor="black"
              placeholder="senha"
              {...register('password', {
                required: 'Insira sua senha',
                minLength: {
                  value: 5,
                  message: 'A senha deve ter no mínimo 5 caracteres',
                },
              })}
            />
            <FormErrorMessage>
              {errors.password && (errors.password as FieldError).message}
            </FormErrorMessage>
          </FormControl>

          <Button
            mt={6}
            colorScheme="teal"
            transition="ease-in-out 0.2s"
            _hover={{
              background: '#282b2b',
              color: '#FFF',
              opacity: 0.8,
            }}
            isLoading={isSubmitting}
            type="submit"
            bg="#111212"
            w="100%"
          >
            Submit
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
