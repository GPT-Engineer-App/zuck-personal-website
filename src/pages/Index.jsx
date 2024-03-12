import { Box, Container, Heading, Text, VStack, HStack, Image, Button, Link, Icon, useColorMode, useColorModeValue, IconButton, Flex } from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaSun, FaMoon, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.md" py={10}>
        <VStack spacing={5}>
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Heading as="h1" size="xl" fontWeight="bold" color={textColor}>
              Mark Zuckerberg
            </Heading>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
          </Flex>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1568378780196-a9a0444a9151?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNYXJrJTIwWnVja2VyYmVyZ3xlbnwwfHx8fDE3MTAyNTY2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Mark Zuckerberg" />
          <Text fontSize="xl" color={textColor}>
            Co-founder & CEO at Facebook, Inc.
          </Text>
          <Text textAlign="center" color={textColor}>
            Dedicated to building the future of technology, connecting people through social media, and expanding the boundaries of our digital world.
          </Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebookF} w={6} h={6} />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedinIn} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
          </HStack>
          <Button rightIcon={<FaPlus />} colorScheme="blue">
            Connect with Mark
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
