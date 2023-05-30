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
    const [datos, setDatos] = useState([]);


    const obtenerDatos = async () => {  //Se inicia una peticion asincrona 
        //se guarda la respuesfa cuando la peticion fetch se resuleve 
        const respuestaPOST = await fetch('https://nodejs-api-tep-production.up.railway.app/consultasGenerales/distribuidores', {
            method: 'GET',      //Es un metodo get por lo que no necesita parametros
            headers: { //Las canbeseras entan en JSON
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        const respuestaJSON = await respuestaPOST.json(); //Se decodifca la respuesta

        if (!(respuestaJSON.error)) {
            //console.log(respuestaJSON);
            setDatos(respuestaJSON); //Se actualiza el hook con la respuesta JSON
        } else {
            //Mostrar mensaje de error 
        }
    }

    obtenerDatos();


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
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Representante</DataTable.Title>

                </DataTable.Header>

                {datos.map((item) => (

                    <TouchableHighlight
                        key={item.IdDistribuidor}
                        underlayColor="#f2f2f2"
                        onPress={() => handleItemClick(item)}
                    >
                        <DataTable.Row>
                            <DataTable.Cell>{item.Nombre}</DataTable.Cell>
                            <DataTable.Cell>{item.Representante}</DataTable.Cell>

                        </DataTable.Row>
                    </TouchableHighlight>
                ))}
            </DataTable>

            <Modal visible={selectedItem !== null} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Distribuidor: {selectedItem?.Nombre}</Text>
                        <Text style={styles.modalText}>Representante: {selectedItem?.Representante}</Text>
                        <Text style={styles.modalText}>Domicilio: {selectedItem?.Domicilio}</Text>
                        <Text style={styles.modalText}>Ciudad: {selectedItem?.Ciudad}</Text>
                        <Text style={styles.modalText}>Estado: {selectedItem?.Edo}</Text>
                        <Text style={styles.modalText}>Teléfono: {selectedItem?.Telefono}</Text>
                        <Text style={styles.modalText}>Email: {selectedItem?.Correo}</Text>
                        <MapView
                            style={styles.map}
                            provider={PROVIDER_GOOGLE}
                            mapType="mutedStandard"
                            initialRegion={{
                                latitude: selectedItem?.Latitud,
                                longitude: selectedItem?.Longitud,
                                latitudeDelta: 0.003,
                                longitudeDelta: 0.003,
                            }}
                        >

                            <Marker
                                key={selectedItem?.IdDistribuidor}
                                title={selectedItem?.Nombre}

                                description={selectedItem?.Representante}
                                coordinate={{
                                    latitude: selectedItem?.Latitud,
                                    longitude: selectedItem?.Longitud,
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


                {datos.map((item) => {
                    // Realiza alguna operación con cada elemento de data
                    // o renderiza un componente personalizado para cada elemento
                    return (
                        <Marker
                            key={item.IdDistribuidor}
                            title={item.Nombre}
                            description={item.Representante}
                            coordinate={{
                                latitude: item.Latitud,
                                longitude: item.Longitud,
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