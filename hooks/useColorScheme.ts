// export { useColorScheme } from 'react-native';


// hooks/useColorScheme.ts
import { useStyleTheme } from '../context/ThemeContext';

export function useColorScheme(): 'light' | 'dark' {
  const { theme } = useStyleTheme();
  return theme.toLowerCase() as 'light' | 'dark';
}