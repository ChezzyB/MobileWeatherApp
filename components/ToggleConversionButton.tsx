// components/ToggleConversionButton.tsx
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useConversion } from '@/context/ConversionContext';
import { useStyleTheme } from '../context/ThemeContext';

export default function ToggleConversionButton() {
  const { theme: unitTheme, toggleConversion } = useConversion();
  const { theme } = useStyleTheme(); // <-- Correct usage
  const isDark = theme === 'dark';

  return (
    <View style={{ alignItems: 'center', marginVertical: 5 }}>
      <TouchableOpacity
        onPress={toggleConversion}
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: isDark ? '#333' : '#ddd',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: isDark ? '#fff' : '#000' }}>
          {unitTheme === 'Celcius' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}





// // components/ToggleConversionButton.tsx
// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text } from 'react-native';
// import { useConversion } from '@/context/ConversionContext';
// import { useStyleTheme } from '../context/ThemeContext';

// export default function ToggleConversionButton() {
//   const { theme, toggleConversion } = useConversion();
//   const { styleTheme, toggleTheme } = useStyleTheme();
//   const isDark = styleTheme === 'dark';
//   return (
//     <TouchableOpacity style={styles.button} onPress={toggleConversion}>
//       <Text style={styles.text}>
//         {theme === 'Celcius' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
//       </Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#3478f6',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignSelf: 'flex-start',
//   },
//   text: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });
