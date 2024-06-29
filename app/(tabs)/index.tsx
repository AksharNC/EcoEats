import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainIndex from '@/components/MainIndex';
import DonateNow from '@/components/DonateNow';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="MainIndex">
      <Stack.Screen
        name="MainIndex"
        component={MainIndex}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DonateNow"
        component={DonateNow}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
