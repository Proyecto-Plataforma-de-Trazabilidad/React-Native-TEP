import { View, StyleSheet, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import logo from '../../assets/marcador.png';

const MapaDist = ({latitud, longitud}) => {
    return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: latitud,
                        longitude: longitud,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: latitud,
                            longitude: longitud,
                        }}
                    />
                </MapView>
            </View>
        );
}