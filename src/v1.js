import  { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export default function Login(){
    const logo = require('../assets/Logo.png');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        //Realizar la solicitud POST al archivo loginreact.php
        axios.post('http://localhost:8000/loginreact.php', {email: email, password: password})
        .then(response =>{
            //Analizar la respuesta del servidor
            const {success, message} = response.data;

            if(success){
                //Inicio de sesión exitoso, ir a la página principal
                alert(message);
                navigation.navigate('Drawer');
            } else {
                //Inicio de sesión fallido, mostrar mensaje de error
                alert(message);
            }
        }).catch(error =>{
            //Error al realizar la solicitud
            console.log(error);
            alert('Error al iniciar sesión. Intentar más tarde')
        });
        
      };
    

    return (
        <View style={styles.container}>

            <View style={styles.cont}>

                <View style={styles.circulo}>
                    <Image source={logo} style={styles.image} resizeMode="contain"></Image>
                </View>

                <Text style={styles.slogan}>"Combatiendo la piratería de Agroquímicos"</Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#FFF"
                        onChangeText={setEmail}
                        name= "email"
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#FFF"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        name="password"
                    />
                </View>


            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleLogin}
            >
                <Text style={styles.login_button}>Ingresar</Text>
                <MaterialIcons style={styles.icon} size={50} name='login' />
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#285430',
    },
    cont: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        width: "90%",
        height: 350,
        borderRadius: 40,
    },
    circulo: {
        backgroundColor: "#fff",
        borderRadius: 50,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        marginTop: -90,


    },
    image:
    {

        height: 150,

    },
    slogan: {
        fontStyle: "italic",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#285430",
        marginTop: -40
    },
    inputView: {
        backgroundColor: "#5F8D4E",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: 'white',
        fontSize: 20
    },
    forgot_button: {
        height: 30,
        color: '#5F8D4E',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 15,

    },
    loginBtn:
    {
        width: "50%",
        borderRadius: 25,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#5F8D4E",

    },
    login_button:
    {
        color: 'white',

    },
    icon:
    {
        color: 'white',
    }


});