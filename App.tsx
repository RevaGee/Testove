/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/routes/RootFull.tsx';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={{ backgroundColor: '#F2F3F5', flex: 1 }}>
        <Navigation />
      </View>
    </>
  );
}

export default App;
