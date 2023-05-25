import Header from "@/components/Header";
import { Box, Flex, Input } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Header companyName="Scan Borba" />
      <Flex align="center" justify="center" h="120px">
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
    </div>
  );
}
