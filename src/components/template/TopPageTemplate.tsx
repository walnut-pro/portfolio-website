import { Box, Center, Container } from '@chakra-ui/react';
import BioTemplate from './BioTemplate';
import ExperienceTemplate from './ExperienceTemplate';
import IntroduceTemplate from './IntroduceTemplate';
import LinksTemplate from './LinksTemplate';
import StandardTemplate from './StandardTemplate';

const TpoPageTemplate = () => {
  return (
    <Container maxW={'md'}>
      <StandardTemplate>
        <Center w={'100%'}>
          <IntroduceTemplate />
        </Center>
        <Box>
          <BioTemplate />
        </Box>
        <Box>
          <ExperienceTemplate />
        </Box>
        <Box>
          <LinksTemplate />
        </Box>
      </StandardTemplate>
    </Container>
  );
};

export default TpoPageTemplate;
