'use client';
import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <Flex h="150px" bg="#1d1e1f" justifyContent="center" alignItems="center">
      <Text>Nome da empresa</Text>
    </Flex>
  );
}
