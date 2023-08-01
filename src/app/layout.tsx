'use client';
import React from 'react';

import { Box, ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body suppressHydrationWarning>
        <ChakraProvider>
          <Box as="main" minH="100vh">
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
