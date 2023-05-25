import Header from "@/components/Header";
import { Box, Flex, Input } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import React from "react";
import ProductCard from "@/components/ProductCard";

export default function Dashboard() {
  const imgLink =
    "https://a-static.mlcdn.com.br/800x560/computador-gamer-completo-rgb-intel-core-i5-8gb-hd-1tb-kit-gamer-com-headset-monitor-20-windows-10-3green-premium/3greentechnology/50453/d4dd7914cea1aab6a398ff297c73306a.jpeg";

  return (
    <div>
      <Header companyName="Scan Borba" />

      <Flex align="center" justify="center" h="80px" bg="#f3f3f3">
        <Input placeholder="Busque um produto pelo nome" w="420px" />
        <Box
          ml="-40px"
          h="42px"
          _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
          zIndex={10}
        >
          <GoSearch size={28} />
        </Box>
      </Flex>

      <Box
        display="grid"
        gridTemplateColumns="350px 350px 350px"
        gap="100px"
        justifyContent="center"
        bg="#e2e3e6"
        overflowY="scroll"
        maxHeight="calc(100vh - 200px)"
        p="10px 0"
      >
        <ProductCard
          imgUrl={imgLink}
          productName="Computador – Desktop – Dell – Inspiron 24 5400"
          inStock={false}
          price={6290.33}
          description=""
        />
        <ProductCard
          imgUrl={imgLink}
          productName="Computador – Desktop – Dell – Inspiron 24 5400"
          inStock={true}
          price={6290.33}
          description=""
        />
        <ProductCard
          imgUrl={imgLink}
          productName="Computador – Desktop – Dell – Inspiron 24 5400"
          inStock={true}
          price={6290.33}
          description=""
        />
        <ProductCard
          imgUrl={imgLink}
          productName="Computador – Desktop – Dell – Inspiron 24 5400"
          inStock={true}
          price={6290.33}
          description=""
        />
      </Box>
    </div>
  );
}
