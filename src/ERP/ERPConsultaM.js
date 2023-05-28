import react, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Modal, TouchableHighlight, Image } from "react-native";
import { DataTable } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import logo from '../../assets/marcador.png';
import { SelectList } from 'react-native-dropdown-select-list';


Amocali = require('../../assets/AMOCALI.png');
Apeajal = require('../../assets/APEAJAL2.jpg');
ASICA = require('../../assets/ASICA.jpg');


export default DConsultaM = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [combo, setCombo] = useState('');
    



    const data = [
        { id: 1, nombre: "Recolector S.A", Responsable: "Jose",  domicilio: "domicilio cualquiera ", Municipio: "Zapotlán el Grande", estado: "Jalisco", CP:"49650", telefono: "3411234567", email: "sergiojosepina@outlook.com", latitud: 19.701864, longitud: -103.470566 },
        { id: 2, nombre: "ERP2", Responsable: "Julio", domicilio: "Ocampo #30", Municipio: "Acatlán de Juárez", estado: "Jalisco", CP:"49650", telefono: "3411349165", email: "ERP2@gmail.com", latitud: 19.714470, longitud: -103.463356 },
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

            <SelectList
            setCombo = {(value) => setCombo(value)}
            data={data}
            save="value"
            placeholder="Selecciona Municipio"
            searchPlaceholder="buscar"
            
            />
                
            

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Representante</DataTable.Title>

                </DataTable.Header>

                {data.map((item) => (
                    <TouchableHighlight
                        key={item.id}
                        underlayColor="#f2f2f2"
                        onPress={() => handleItemClick(item)}
                    >
                        <DataTable.Row>
                            <DataTable.Cell>{item.nombre}</DataTable.Cell>
                            <DataTable.Cell>{item.representante}</DataTable.Cell>

                        </DataTable.Row>
                    </TouchableHighlight>
                ))}
            </DataTable>

            <Modal visible={selectedItem !== null} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Distribuidor: {selectedItem?.nombre}</Text>
                        <Text style={styles.modalText}>Representante: {selectedItem?.representante}</Text>
                        <Text style={styles.modalText}>Domicilio: {selectedItem?.domicilio}</Text>
                        <Text style={styles.modalText}>Ciudad: {selectedItem?.ciudad}</Text>
                        <Text style={styles.modalText}>Estado: {selectedItem?.estado}</Text>
                        <Text style={styles.modalText}>Teléfono: {selectedItem?.telefono}</Text>
                        <Text style={styles.modalText}>Email: {selectedItem?.email}</Text>
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
                            title={item.nombre}
                            description={item.representante}
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