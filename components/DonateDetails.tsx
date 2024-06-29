import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function DonateDetails() {
  //   const [quantity, setQuantity] = useState('');
  //   const [items, setItems] = useState('');
  const navigation = useNavigation();
  const handlePickupLocationPress = () => {
    navigation.navigate('SelectLocation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter details</Text>

      <Text style={styles.label}>Enter quantity</Text>
      <TextInput
        style={styles.input}
        placeholder="How many people can it feed.."
      // value={quantity}
      // onChangeText={setQuantity}
      />

      <Text style={styles.label}>Items</Text>
      <TextInput
        style={styles.input}
        placeholder="What items do you have.."
      // value={items}
      // onChangeText={setItems}
      />

      <TouchableOpacity style={styles.button} onPress={handlePickupLocationPress}>
        <Text style={styles.buttonText}>Select pickup location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBlockColor: 'black',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // padding: 20,
    // borderRadius: 10,
    // borderWidth:1,
    // width: '80%',
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
