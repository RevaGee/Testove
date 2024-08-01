
import React from 'react';
import { View } from 'react-native';

import Navigation from './src/routes/RootFull.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/screens/auth/AuthContext.tsx';
import './src/translation/i18n.ts';
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
