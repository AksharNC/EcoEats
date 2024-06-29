import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Modal, Image, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SelectAddressScreen() {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [coordinates, setCoordinates] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleRegionChangeComplete = (region) => {
        setRegion(region);
        const coordinates = `${region.latitude.toFixed(6)}, ${region.longitude.toFixed(6)}`;
        setCoordinates(coordinates);
    };

    const handleDonePress = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select address</Text>
            <Text style={styles.label}>Enter address</Text>
            <TextInput
                style={styles.input}
                placeholder="Address here.."
                placeholderTextColor="#ccc"
                value={coordinates}
                editable={false} // Make the input field read-only
            />
            <Text style={styles.label}>Select on map</Text>
            <View style={{ borderRadius: 10 }}>
                <MapView
                    style={styles.map}
                    region={region}
                    onRegionChangeComplete={handleRegionChangeComplete}
                >
                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                </MapView>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleDonePress}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={require('@/assets/images/done.png')} style={styles.modalImage} />
                        <Text style={styles.modalText}>Address Selected</Text>
                        <Text style={styles.modalTextSmall}>You have successfully selected your address.</Text>
                        <Button
                            title="oK"
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    map: {
        width: Dimensions.get('window').width - 40,
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalImage: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalTextSmall: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
});
