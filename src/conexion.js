import React, { useState } from "react";
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, StatusBar } from "react-native";
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import MySQLConnection from 'react-native-mysql-connection';

// Crea una instancia de MySQLConnection
const connection = new MySQLConnection({
  host: 'tu_host', // Cambia esto con la dirección del servidor MySQL en Hostinger
  port: 3306, // Cambia esto si el puerto es diferente
  user: 'tu_usuario', // Cambia esto con el nombre de usuario de la base de datos
  password: 'tu_contraseña', // Cambia esto con la contraseña de la base de datos
  database: 'tu_base_de_datos' // Cambia esto con el nombre de tu base de datos
});

// Conecta a la base de datos
connection.connect();

export default function Home() {
    // ...
  
    const handleLogin = () => {
      // Obtiene el email y la contraseña ingresados por el usuario
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
  
      // Ejecuta una consulta SQL para verificar las credenciales
      connection.query(`SELECT * FROM usuarios WHERE email = ? AND contraseña = ?`, [email, password], (error, results) => {
        if (error) {
          console.error('Error al ejecutar la consulta:', error);
          return;
        }
  
        if (results.length > 0) {
          // Las credenciales son válidas, redirige a la pantalla de inicio de sesión exitosa
          navigation.navigate('Drawer');
        } else {
          // Las credenciales son incorrectas, muestra un mensaje de error
          console.log('Credenciales incorrectas');
        }
      });
    }
  
    // ...
  }
  
  
  
  
  
  
  
  