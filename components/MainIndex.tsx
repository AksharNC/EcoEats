import React from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PagerView from 'react-native-pager-view';
import Footer from '@/components/Footer';
import FooterWork from '@/components/FooterWork';
import { useNavigation } from '@react-navigation/native';

const image1 = require('@/assets/images/please.png');
const image2 = require('@/assets/images/save.png');
const image3 = require('@/assets/images/campaign.png');

export default function MainIndex() {
    const navigation = useNavigation();

    const handleSignUpPress = () => {
        navigation.navigate('DonateNow');
    };
    return (
        <View style={{
            flex: 1,
            position: 'relative',
        }}>

            <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}>
                <ScrollView contentContainerStyle={styles.mainContent}>
                    <View style={styles.container}>
                        <PagerView style={styles.pagerView} initialPage={0}>
                            <View style={styles.page} key="1">
                                <Image source={image1} style={styles.image} />
                            </View>
                            <View style={styles.page} key="2">
                                <Image source={image2} style={styles.image} />
                            </View>
                            <View style={styles.page} key="3">
                                <Image source={image3} style={styles.image} />
                            </View>
                        </PagerView>
                    </View>
                    <ThemedView style={styles.titleContainer}>
                        <ThemedText type="title">Top Donors</ThemedText>
                        <View style={styles.scrollContent}>
                            {Array.from({ length: 10 }, (_, index) => (
                                <View style={styles.donorItem} key={index}>
                                    <Avatar
                                        size={40}
                                        rounded
                                        title="J"
                                        containerStyle={styles.avatar}
                                    />
                                    <View style={styles.donorInfo}>
                                        <Text style={styles.donorName}>John Doe</Text>
                                        <Text style={styles.donorContribution}>7000 people fed, donated 22k...</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ThemedView>
                </ScrollView>
            </ParallaxScrollView>
            <Footer />
        </View>
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

