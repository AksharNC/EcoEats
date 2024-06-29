import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/components/LoginScreen'; // Adjust the path accordingly
import SignUpScreen from '@/components/SignUpScreen'; // Adjust the path accordingly
import { NavigationContainer } from '@react-navigation/native';
import Footer from './Footer';
import { View } from 'react-native';
import DonateNow from './DonateNow';
const Stack = createStackNavigator();

export default function FooterWork() {
    return (
        <Stack.Navigator initialRouteName="Footer">
            <Stack.Screen
                name="Footer"
                component={Footer}
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
