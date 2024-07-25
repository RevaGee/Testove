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
import Language from '../screens/Profile/Language/index.tsx';
import HomeIcon from '../assets/icon/home.svg'
import PortfolioIcon from '../assets/icon/portfolio.svg'
import SearchIcon from '../assets/icon/search.svg'
import ProfileIcon from '../assets/icon/profile.svg'



const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false, tabBarIcon: () => (<HomeIcon/>)}}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{ headerShown: false, tabBarIcon: () => (<PortfolioIcon/>)}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, tabBarIcon: () => (<SearchIcon/>)}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, tabBarIcon: () => (<ProfileIcon/>)}}
      />
    </Tab.Navigator>
  );
}

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

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <MainStack.Screen name="Auth" component={AuthStackNavigator} />
        <MainStack.Screen name="Main" component={MainTabs} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
