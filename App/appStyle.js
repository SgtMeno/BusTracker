import * as React from 'react';
import { DefaultTheme} from 'react-native-paper';


export const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'skyblue',
    accent: 'yellow',
    background: 'transparent',
  }
}

