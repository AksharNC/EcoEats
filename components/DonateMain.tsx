import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainIndex from '@/components/MainIndex';
// import DonateNow from '@/components/DonateNow';
import SelectLocation from '@/components/SelectLocation';
import DonateDetails from '@/components/DonateDetails';
const Stack = createStackNavigator();

export default function DonateMain() {
  return (
    <Stack.Navigator initialRouteName="DonateDetails">
      <Stack.Screen
        name="DonateDetails"
        component={DonateDetails}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
