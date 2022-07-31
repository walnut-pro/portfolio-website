import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import LayoutProps from '../../types/props/LayoutProps';

const MainTemplate = ({ children }: LayoutProps) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <title>walnut - portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container maxWidth={'md'} pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default MainTemplate;
