import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type ProductCardProps = {
  imgUrl: string;
  productName: string;
  inStock: boolean;
  price: number;
  description: string;
};

export default function ProductCard({
  imgUrl,
  productName,
  inStock,
  price,
  description,
}: ProductCardProps) {
  return (
    <Flex
      direction="column"
      align="center"
      gap="15px"
      borderRadius="10px"
      bg="#f3f3f3"
      maxH="370px"
      p="12px"
    >
      <Image
        src={imgUrl}
        alt="produto sem imagem"
        boxSize="200px"
        objectFit="cover"
      />
      <Text h="60px">{productName}</Text>
      {inStock ? (
        <Flex
          bg="#50e798"
          color="#FFF"
          h="30px"
          w="140px"
          borderRadius="20px"
          align="center"
          justify="center"
        >
          Disponível
        </Flex>
      ) : (
        <Flex
          bg="#ed4625"
          color="#FFF"
          h="30px"
          w="120px"
          borderRadius="20px"
          align="center"
          justify="center"
        >
          Indisponível
        </Flex>
      )}
      <Text>R$ {price}</Text>
    </Flex>
  );
}
