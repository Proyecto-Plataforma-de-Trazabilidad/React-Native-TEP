import react, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Modal, TouchableHighlight, Image } from "react-native";
import { DataTable } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import logo from '../../assets/marcador.png';


Amocali = require('../../assets/AMOCALI.png');
Apeajal = require('../../assets/APEAJAL2.jpg');
ASICA = require('../../assets/ASICA.jpg');


export default DConsultaG = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    
    const data = [
        { id: 1, tipoCont: "Botes", origen: "Amocali", responsable: "Ever", maxCap: 200, capActual: 100, descripcion: "nose no creo", ultRec: "2023-05-16", latitud: 19.947533, longitud: -103.677979 },
        { id: 2, tipoCont: "Bolsas", origen: "Distribuidores", responsable: "Sergio", maxCap: 100, capActual: 0, descripcion: "Un constal grande", ultRec: "2023-05-01", latitud: 19.633066, longitud: -103.439819 },
        { id: 3, tipoCont: "Plásticos", origen: "Distribuidores", responsable: "Julio", maxCap: 500, capActual: 200, descripcion: "contenedor de flexibles", ultRec: "2023-05-22", latitud: 19.735476, longitud: -103.613045 }
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (


        <View style={styles.container}>

            
            <View style={styles.header}>

                <Image source={Amocali} style={styles.image}></Image>
                <Image source={Apeajal} style={styles.image}></Image>
                <Image source={ASICA} style={styles.image}></Image>

            </View>
            <Text style={styles.slogan}>"Combatiendo la pirateria de agroquímicos"</Text>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Origen</DataTable.Title>
                    <DataTable.Title>Responsable</DataTable.Title>

                </DataTable.Header>

                {data.map((item) => (
                    <TouchableHighlight
                        key={item.id}
                        underlayColor="#f2f2f2"
                        onPress={() => handleItemClick(item)}
                    >
                        <DataTable.Row>
                            <DataTable.Cell>{item.origen}</DataTable.Cell>
                            <DataTable.Cell>{item.responsable}</DataTable.Cell>

                        </DataTable.Row>
                    </TouchableHighlight>
                ))}
            </DataTable>

            <Modal visible={selectedItem !== null} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Tipo Contenedor: {selectedItem?.tipoCont}</Text>
                        <Text style={styles.modalText}>Origen: {selectedItem?.origen}</Text>
                        <Text style={styles.modalText}>Responsable: {selectedItem?.responsable}</Text>
                        <Text style={styles.modalText}>Capacidad Máxima: {selectedItem?.maxCap}</Text>
                        <Text style={styles.modalText}>Capacidad Actual: {selectedItem?.capActual}</Text>
                        <Text style={styles.modalText}>Descripción: {selectedItem?.descripcion}</Text>
                        <Text style={styles.modalText}>Última recolección: {selectedItem?.ultRec}</Text>
                        <MapView
                            style={styles.map}
                            provider={PROVIDER_GOOGLE}
                            mapType="mutedStandard"
                            initialRegion={{
                                latitude: selectedItem?.latitud,
                                longitude: selectedItem?.longitud,
                                latitudeDelta: 0.003,
                                longitudeDelta: 0.003,
                            }}
                        >

                            <Marker
                                key={selectedItem?.id}
                                title={selectedItem?.nombre}

                                description={selectedItem?.representante}
                                coordinate={{
                                    latitude: selectedItem?.latitud,
                                    longitude: selectedItem?.longitud,
                                }}
                            >
                                <Image source={logo} style={styles.markerImage} />
                            </Marker>

                        </MapView>
                        <TouchableHighlight
                            style={styles.closeButton}
                            underlayColor="#f2f2f2"
                            onPress={closeModal}
                        >
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableHighlight>


                    </View>

                </View>
            </Modal>

            <MapView
                style={styles.mapa}
                provider={PROVIDER_GOOGLE}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: 19.704451,
                    longitude: -103.495972,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >


                {data.map((item) => {
                    // Realiza alguna operación con cada elemento de data
                    // o renderiza un componente personalizado para cada elemento
                    return (
                        <Marker
                            key={item.id}
                            title={item.origen}
                            description={item.tipoCont}
                            coordinate={{
                                latitude: item.latitud,
                                longitude: item.longitud,
                            }}
                        >
                            <Image source={logo} style={styles.markerImage} />
                        </Marker>
                    );
                })}



            </MapView>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    header: {
        flexDirection: "row"
    },
    image: {
        width: 70,
        height: 70,
        marginTop: 20,
        margin: "10%"
    },
    slogan: {
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        marginTop: -30,
        marginBottom: 2
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente para resaltar la ventana modal
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        width: "90%",
        maxHeight: "100%", // Controla la altura máxima de la ventana modal
        borderWidth: 2,
        borderColor: "green", // Color de borde verde
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: "#f2f2f2",
        padding: 5, // Ajusta el tamaño del botón
        alignSelf: "center", // Centra el botón horizontalmente
        borderRadius: 5,
        backgroundColor: "#285430"

    },
    closeButtonText: {
        fontSize: 16,
        color: "#fff",
    },
    map: {
        width: '100%',
        height: '50%',
    },

    markerImage: {
        width: 20, // Cambia el tamaño del marcador ajustando este valor
        height: 40, // Cambia el tamaño del marcador ajustando este valor
    },

    mapa: {
        marginTop: 1,
        width: '95%',
        height: '50%',


    },
});