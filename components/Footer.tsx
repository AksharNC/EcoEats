// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, Button, Pressable,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Footer() {
    const navigation = useNavigation();

    const handleSignUpPress = () => {
      navigation.navigate('DonateNow');
    };
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button}  onPress={handleSignUpPress}>
                <Text style={styles.text}>Donate Now</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    footer: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#f8f8f8',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    footerText: {
        color: '#333',
    },
});
