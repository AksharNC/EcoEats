import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '@/components/LoginScreen'; // Adjust the path accordingly
import SignUpScreen from '@/components/SignUpScreen'; // Adjust the path accordingly

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown:false,
            title: 'Login or Sign Up', // Set a common title for both screens
            headerStyle: {
              backgroundColor: '#f4511e', // Customize header background color
            },
            headerTintColor: '#fff', // Customize header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Customize header title style
            },
          }}
          />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown:false,
            title: 'Login or Sign Up', // Set a common title for both screens
            headerStyle: {
              backgroundColor: '#f4511e', // Customize header background color
            },
            headerTintColor: '#fff', // Customize header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Customize header title style
            },
          }}
        />
      </Stack.Navigator>
  );
}
