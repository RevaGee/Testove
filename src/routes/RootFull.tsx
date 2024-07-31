// src/routes/RootFull.tsx
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import CreatePin from '../screens/Pin/CreatePin';
import ConfirmPin from '../screens/Pin/ConfirmPin';
import Dashboard from '../screens/Dashboard';
import Portfolio from '../screens/Portfolio';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import AppContext from '../screens/auth/AuthContext.tsx';
import Language from '../screens/Profile/Language/index.tsx';
import HomeIcon from '../assets/icon/home.svg';
import PortfolioIcon from '../assets/icon/portfolio.svg';
import SearchIcon from '../assets/icon/search.svg';
import ProfileIcon from '../assets/icon/profile.svg';
import SplashLoading from '../screens/SplashLoading';
import EnterPin from '../screens/Pin/EnterPin';

const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();
const RootStack = createStackNavigator();
const PinStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
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

function MainTabsNavigator() {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false, tabBarIcon: () => <HomeIcon /> }}
      />
      <MainTabs.Screen
        name="Portfolio"
        component={Portfolio}
        options={{ headerShown: false, tabBarIcon: () => <PortfolioIcon /> }}
      />
      <MainTabs.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, tabBarIcon: () => <SearchIcon /> }}
      />
      <MainTabs.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, tabBarIcon: () => <ProfileIcon /> }}
      />
    </MainTabs.Navigator>
  );
}

function Navigation() {
  const { state } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashLoading />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {state.isLoggedIn && state.pinConfirmed ? (
          <>
              <RootStack.Screen name="EnterPin" component={EnterPin} />
            <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
            <RootStack.Screen name="Language" component={Language} />
          </>
        ) : (
          <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
