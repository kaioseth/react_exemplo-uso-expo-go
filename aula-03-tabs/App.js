import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator } from '@react-navigation/top-tabs';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Config from './screens/Config';

const Tab = createBottomTabNavigator();
//const Tab = createTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
        />

        <Tab.Screen
          name="Perfil"
          component={Profile}
        />

        <Tab.Screen
          name="Configurações"
          component={Config}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
