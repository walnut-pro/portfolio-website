import { Box, Text, VStack } from '@chakra-ui/react';

const IntroduceTemplate = () => {
  return (
    <VStack>
      <Box>Banner area</Box>
      <Box>NamePlate Area</Box>
      <Box>
        <Text>Who am I?</Text>
      </Box>
      <Box>
        <Text>
          I&apros;m an Application Engineer working in Tokyo. I always develop products with a
          passion for helping people. When I was a child, I had a disease called epilepsy, and
          I&apors;ve spent a lot of time in anxiety. Now, I am fully recovered and I have a strong
          desire to empower people who need to help through the power of technology. Currently,
          I&apors;m interested in web and iOS application engineering, education, and medical
          engineering.
        </Text>
      </Box>
    </VStack>
  );
};

export default IntroduceTemplate;
