import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {  FontAwesome5  } from '@expo/vector-icons';


const MenuBottonItem = ({ text, onPress, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <FontAwesome5 size={40} name={icon} color={'white'} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        marginBottom: 30,
        padding: 10
    },

    text:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        flex: 1,
        justifyContent: "center"
    }
});

export default MenuBottonItem