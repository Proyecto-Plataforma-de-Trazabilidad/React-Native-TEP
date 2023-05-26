import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'



const OpcCatalogIcons = ({text,onPress, imageSource}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Image source={imageSource}style={styles.image}/>
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
        width: "100%",
        padding: 10,
        flexDirection: "row",
        marginBottom: 2
    },
    image:{
        width: 100, 
        height: 100
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        flex: 1,
        justifyContent: "center"
    }
});

export default OpcCatalogIcons