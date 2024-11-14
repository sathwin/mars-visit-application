// pages/_app.js
import React from 'react'; // Add this line
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
