'use client';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from 'src/components/Header';
import SideMenu from 'src/components/SideMenu';

export default function Products() {
  return (
    <Flex direction="column">
      <Header />
      <Flex>
        <SideMenu />
      </Flex>
    </Flex>
  );
}
