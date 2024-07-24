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
import {SafeAreaProvider} from "react-native-safe-area-context";

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <View style={{ backgroundColor: '#F2F3F5', flex: 1 }}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
