import React from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const image1 = require('@/assets/images/please.png');
const image2 = require('@/assets/images/save.png');
const image3 = require('@/assets/images/campaign.png');

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}>
      <ScrollView contentContainerStyle={styles.mainContent}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={{fontSize:25}}>Available Pickups</ThemedText>
          <View style={styles.scrollContent}>
            {Array.from({ length: 10 }, (_, index) => (
              <TouchableOpacity style={styles.donorItem} key={index}>
                <Avatar
                size={40}
                  rounded
                  title="J"
                  containerStyle={styles.avatar}
                />
                <View style={styles.donorInfo}>
                  <Text style={styles.donorName}>John Doe</Text>
                  <Text style={styles.donorContribution}>7000 people  fed ,  donated  22k</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ThemedView>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    left: -10,
  },
  pagerView: {
    width: 340,
    height: 180,
    marginBottom: 20,
  },
  page: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  scrollContainer: {
    height: 300,
  },
  scrollContent: {
    padding: 10,
  },
  donorItem: {
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10, // Add margin bottom to create space between donor items
  },
  avatar: {
    backgroundColor: '#cccccc',
  },
  donorInfo: {
    marginLeft: 10,
  },
  donorName: {
    fontWeight: 'bold',
    color: '#000',
  },
  donorContribution: {
    color: '#555',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

