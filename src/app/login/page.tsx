'use client';
import React from 'react';
import { FieldError, FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  function onSubmit(values: FieldValues) {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/company/login`, values)
      .then((response) => {
        Cookies.set('auth-token', response.data.token);
        Cookies.set('company-id', response.data.company.id);
        localStorage.setItem(
          'company-name',
          JSON.stringify(response.data.company.name)
        );

        console.log(response);
        router.push('/dashboard');
      })
      .catch((error) => console.log(error));
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
            <FormErrorMessage data-testid="email-error">
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
            <FormErrorMessage data-testid="password-error">
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
            Entrar
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
