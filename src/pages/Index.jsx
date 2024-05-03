import { Box, Flex, Image, Heading, Text, VStack, Spacer } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Monkey Gallery</Heading>
        <Text fontSize="lg" mb={6}>Explore the fascinating world of monkeys through our curated images.</Text>
      </Flex>
      <Flex wrap="wrap" justify="center">
        <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/500?text=Monkey+1" alt="Monkey in natural setting" />
        </Box>
        <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/500?text=Monkey+2" alt="Monkey hanging from tree" />
        </Box>
        <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://via.placeholder.com/500?text=Monkey+3" alt="Group of monkeys" />
        </Box>
      </Flex>
      <Spacer />
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.200">
        <Text fontSize="xl" p={2}>Home</Text>
        <Text fontSize="xl" p={2}>About</Text>
        <Text fontSize="xl" p={2}>Contact</Text>
      </Flex>
    </Box>
  );
};

export default Index;