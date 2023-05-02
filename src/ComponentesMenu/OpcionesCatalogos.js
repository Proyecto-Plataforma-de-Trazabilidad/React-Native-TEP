import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {  FontAwesome5  } from '@expo/vector-icons';


const OpcionesCatalogos = ({ text, onPress, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <FontAwesome5 style={styles.icon} size={90} name={icon} color={'green'} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E6E6E6",
        width: "70%",
        marginBottom: "30%",
        padding: 10
        
    },
    text:{
        fontSize: 40,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        flex: 1,
        justifyContent: "center"
    }
});

export default OpcionesCatalogos