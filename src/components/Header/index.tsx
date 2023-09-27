'use client';
import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  const companyName = localStorage.getItem('company-name');

  return (
    <Flex h="120px" bg="#1d1e1f" justifyContent="center" alignItems="center">
      <Text color="#FFFFFF" fontSize="40px" fontWeight="800">
        {companyName?.replaceAll('"', '')}
      </Text>
    </Flex>
  );
}
