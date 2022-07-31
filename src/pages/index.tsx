import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'red'} p={3} mb={6} textAlign={'center'}>
        Hello, I&apos;m a full stack developer
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            walnut
          </Heading>
          <p>Application Engineer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
