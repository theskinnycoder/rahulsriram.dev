import {
  extendTheme,
  theme as defaultTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const brandColor = defaultTheme.colors.gray;

const theme = extendTheme(
  {
    styles: {
      global: (props: { colorMode: string }) => ({
        body: {
          bgColor: props.colorMode === 'dark' ? '#08070B' : '#F9FAFB',
        },
      }),
    },
    config,
    fonts: {
      heading: `Neuzeit Grotesk Bold, ${defaultTheme.fonts.heading}`,
      body: `Inter var, ${defaultTheme.fonts.body}`,
      mono: `Fira Code, ${defaultTheme.fonts.mono}`,
    },
    colors: {
      brand: {
        100: brandColor['100'],
        200: brandColor['200'],
        300: brandColor['300'],
        400: brandColor['400'],
        500: brandColor['500'],
        600: brandColor['600'],
        700: brandColor['700'],
        800: brandColor['800'],
        900: brandColor['900'],
        50: brandColor['50'],
      },
    },
    components: {
      Button: {
        baseStyle: {
          _focus: {
            ring: 'none',
          },
        },
        variants: {
          solid: () => ({
            _hover: {
              transform: 'scale(1.05)',
            },
            _focusWithin: {
              transform: 'scale(0.95)',
            },
          }),
        },
      },
      IconButton: {
        baseStyle: {
          _focus: {
            ring: 'none',
          },
        },
      },
      Link: {
        baseStyle: {
          _focus: {
            ring: 'none',
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);

export default theme;
