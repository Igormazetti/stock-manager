import React from 'react';
import { Button, VStack } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';

export default function SideMenu() {
  const router = useRouter();

  return (
    <VStack
      bg="#1d1e1f"
      h="calc(100vh - 120px)"
      w={{ base: '100px', lg: '200px' }}
      justifyContent="flex-start"
      p="0 5px"
    >
      <Button
        w="100%"
        _hover={{ opacity: 0.8 }}
        onClick={() => router.push('/products')}
        borderRadius={8}
        bg="#525759"
        color="#FFFFFF"
        fontWeight="400"
      >
        Produtos
      </Button>
    </VStack>
  );
}
