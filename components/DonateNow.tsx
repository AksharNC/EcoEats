import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainIndex from '@/components/MainIndex';
// import DonateNow from '@/components/DonateNow';
import DonateMain from '@/components/DonateMain';
import SelectLocation from '@/components/SelectLocation';

const Stack = createStackNavigator();

export default function DonateNow() {
  return (
    <Stack.Navigator initialRouteName="DonateMain">
      <Stack.Screen
        name="DonateMain"
        component={DonateMain}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}
