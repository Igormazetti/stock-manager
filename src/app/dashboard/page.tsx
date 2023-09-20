'use client';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from 'src/components/Header';

export default function Dashboard() {
  return (
    <Flex direction="column">
      <Header />
    </Flex>
  );
}
