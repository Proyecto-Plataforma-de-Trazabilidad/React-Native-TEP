import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";

export default function CustomAlert({ visible, title, message, onClose }) {
    return (
        <Modal isVisible={visible}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <Button title="OK" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        marginBottom: 16,
    },
};