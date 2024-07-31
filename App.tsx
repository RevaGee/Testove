/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';

import Navigation from './src/routes/RootFull.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/screens/auth/AuthContext.tsx';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <AppProvider>
        <View style={{ backgroundColor: '#F2F3F5', flex: 1 }}>
          <Navigation />
        </View>
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default App;
