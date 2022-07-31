import { Box, Button, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';

const IntroduceTemplate = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  // const color = useColorModeValue('white', 'gray.800');
  return (
    <VStack>
      <Box>Banner area</Box>
      <Box borderRadius={'lg'} bg={bg} p={3} mb={6} textAlign={'center'}>
        Hello, I am a Application Engineer
      </Box>
      <Button size='sm' onClick={toggleColorMode}>
        Toggle Mode
      </Button>
      <Box>
        <Text>Who am I?</Text>
      </Box>
      <Box>
        <Text>
          I am an Application Engineer working in Tokyo. I always develop products with a passion
          for helping people. When I was a child, I had a disease called epilepsy, and I have spent
          a lot of time in anxiety. Now, I am fully recovered and I have a strong desire to empower
          people who need to help through the power of technology. Currently, I am interested in web
          and iOS application engineering, education, and medical engineering.
        </Text>
      </Box>
    </VStack>
  );
};

export default IntroduceTemplate;
