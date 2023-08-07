'use client';
import React from 'react';
import { Roboto } from 'next/font/google';
import { Box, ChakraProvider } from '@chakra-ui/react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body suppressHydrationWarning className={roboto.className}>
        <ChakraProvider>
          <Box as="main" minH="100vh">
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
