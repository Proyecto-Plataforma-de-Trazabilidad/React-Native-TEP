import React from "react";
import { useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, StatusBar } from "react-native";
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import CustomAlert from "./ComponentesMenu/CustomAlert";


export default function Home() {

    //Hacer la peticion de la consulta
    

    //Agregar logos
    const fondo = require('../assets/pead.png');
    const logo = require('../assets/logotep2.png')

    //Variables del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //ALERTS
    const [showAlert, setShowAlert] = useState(true);
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    //Declarar la navegación
    const navigation = useNavigation();

    //Lógica de inicio de sesión
    const handleLogin = async (email, password) => {
        // //Realizar la solitiud POST al archivo loginreact.php
        // axios.post('http://localhost:8000/loginreact.php', { email: email, password: password })
        //     .then(response => {
        //         //Analizar la respuesta del servidor
        //         const { success, message } = response.data;

        //         if (success) {
        //             //Inicio de sesión exitoso, ir a la página principal
        //             alert(message);
                    
        //         } else {
        //             //Inicio de sesión fallido, mostrar mensaje de error
        //             alert(message);
        //         }
        //     }).catch(error => {
        //         //Error al realizar la solicitud
        //         console.log(error);
        //         alert("Intente más tarde")
        //     });
            navigation.navigate('Drawer');
        
    }

    return (
        <View style={styles.container}>
            <Image source={fondo} style={[styles.image, StyleSheet.absoluteFill]} />
            <ScrollView contentContainerStyle={{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <BlurView intensity={99}>
                    <View style={styles.login}>
                        <Image source={logo} style={styles.logotep} />
                        <Text style={styles.slogan}>"Combatiendo la piratería de Agroquímicos"</Text>


                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>Email</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                placeholder="example@example.com"
                                onChangeText={setEmail}
                                name="email" />
                        </View>

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                secureTextEntry={true}
                                placeholder="*********"
                                onChangeText={setPassword}
                                name="password" />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Ingresar</Text>

                        </TouchableOpacity>
                    </View>
                </BlurView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    slogan: {
        fontStyle: "italic",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
        textAlign: 'center'

    },
    login: {
        width: 350,
        height: 500,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    logotep: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 25,
        borderColor: '#fff',
        borderWidth: 1,
        marginVertical: 30
    },
    input: {
        width: 250,
        height: 40,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ffffff99',
        marginBottom: 20
    },
    button: {
        width: 250,
        height: 40,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: '#285430',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,

    },
});