import { extendTheme } from 'native-base';
import { LinearGradient } from 'react-native-svg';



export const CustomTheme = extendTheme({
    colors: {
      // Add new color
      base:{
        'cream': '#FAE0AC',
        'creamDark': '#9D896A',
        'purple': '#9549FF',
        'purpleDark': '#39206D',
        'grey': '#8C8B91',
        'greyDark': '#44434A',
        'red': '#C9212B',
        'black': '#1C1B20',
        'transparent': '#4a485200'

      },
      shadows: {
        "1": {
          "box-shadow": "0px 2px 6px rgba(230,20,187,1), 0px 4px 12px rgba(230,20,187,1)"
        }
      },
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });


  export const CustomConfig = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };

