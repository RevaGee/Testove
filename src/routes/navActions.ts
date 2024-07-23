// Navigation.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screens/Welcome'; // Імпортуй свої компоненти екрану
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
  <Stack.Screen name="SignIn" component={SignIn} />
  <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
  {/* Додай інші вкладки тут */}
  </Tab.Navigator>
  </NavigationContainer>
);
}
