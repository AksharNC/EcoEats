import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import SignUpScreen from '@/components/SignUpScreen'; // Import the SignUpScreen component
import { useNavigation } from '@react-navigation/native';
const backgroundphoto = require('@/assets/images/favicon.png');

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={undefined} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder="Username/E-mail"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={styles.signupText}>Don't have an account? <Text style={styles.signupLink}>Sign up</Text></Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#1E824C',
    fontSize: 18,
  },
  signupText: {
    color: '#fff',
    marginTop: 20,
  },
  signupLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
