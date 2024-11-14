// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backgroundImage: "url('/marstheme.avif')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'teal.400',
          color: 'white',
          _hover: {
            bg: 'teal.500',
          },
        },
        outline: {
          borderColor: 'teal.400',
          color: 'teal.400',
          _hover: {
            bg: 'teal.500',
            color: 'white',
          },
        },
      },
    },
  },
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Orbitron', sans-serif`,
  },
});

export default theme;
