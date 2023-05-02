import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default GMap = () => {
    return(
        <View>
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: 19.676118285255924,
                    longitude: -103.4872933767691,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
               }}
            >
                { MARKERS_DATA.map( (marker) => (
                        <Marker
                            key={marker.id}
                            title={marker.name}
                            description={marker.direction}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                        >
                        </Marker>
                    ) )
                }
            </MapView>
        </View>
    );
}

const MARKERS_DATA = [
    {
      id: '1',
      latitude: 19.676118285255924,
      longitude: -103.4872933767691,
      color: '#2F3136',
      name: 'TecNM',
      direction: 'Av. Tecnológico 100',
      
    },
    {
      id: '2',
      latitude: 19.678,
      longitude: -103.4872933767691,
      color: '#2F3136',
      name: 'Otro',
      direction: 'Otro',
      
    }
  ];

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });