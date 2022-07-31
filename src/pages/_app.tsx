import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainTemplate from '../components/layouts/MainTemplate';

const Website = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <MainTemplate>
        <Component {...pageProps}></Component>
      </MainTemplate>
    </ChakraProvider>
  );
};

export default Website;
