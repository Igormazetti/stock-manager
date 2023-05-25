import React from "react";
import { Flex } from "@chakra-ui/react";

type HeaderProps = {
  companyName: string;
};

export default function Header({ companyName }: HeaderProps) {
  return (
    <Flex
      as="header"
      bg="#4b6d91"
      h="120px"
      w="100vw"
      align="center"
      justify="center"
      color="#FFF"
    >
      {companyName}
    </Flex>
  );
}
