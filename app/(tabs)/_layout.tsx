import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Adjust import path as necessary
import { useColorScheme } from '@/hooks/useColorScheme'; // Adjust import path as necessary
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Text, View } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: '', // Remove default title
            headerTitle: () => (
              <Text style={{ color: 'white' }}>Home</Text> // Custom title style
            ),
            headerStyle: {
              backgroundColor: '#027148', // Set header background color to green
            },
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}>
                <Text style={{ color: 'white', paddingRight: 10 }}>Ritik</Text>
                <MaterialIcons name="account-circle" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="explore"
          options={{
            drawerLabel: 'Deliver Food',
            title: 'Explore',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitle: () => (
              <Text style={{ color: 'white' }}>Deliver Food</Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}>
                <Text style={{ color: 'white', paddingRight: 10 }}>Ritik</Text>
                <MaterialIcons name="account-circle" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: 'Login',
            title: 'Login',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTitle: () => (
              <Text style={{ color: 'white' }}>Login</Text>
            ),
            drawerIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}>
                <Text style={{ color: 'white', paddingRight: 10 }}>Akshar</Text>
                <MaterialIcons name="account-circle" size={24} color="white" />
              </View>
            ),
          }}
        />
      </Drawer>
      {/* <Footer /> */}
    </GestureHandlerRootView>
  );
}
