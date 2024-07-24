import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/index.tsx';
import Portfolio from '../screens/Portfolio/index.tsx';
import Search from '../screens/Search/index.tsx';
import Profile from '../screens/Profile/index.tsx';
import SignUp from '../screens/SignUp/index.tsx';
import SignIn from '../screens/SignIn/index.tsx';
import Welcome from '../screens/Welcome';
import CreatePin from '../screens/Pin/CreatePin/index.tsx';
import ConfirmPin from '../screens/Pin/ConfirmPin/index.tsx';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="CreatePin"
        component={CreatePin}
        options={{ headerShown: false }}
      />
        <AuthStack.Screen
            name="ConfirmPin"
            component={ConfirmPin}
            options={{ headerShown: false }}
        />
    </AuthStack.Navigator>
  );
}

const MainStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Auth" component={AuthStackNavigator} />
        <MainStack.Screen name="Main" component={MainTabs} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
