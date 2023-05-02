import { View, Text, StyleSheet, Image } from 'react-native'
Amocali = require('../../assets/AMOCALI.png');
Apeajal = require('../../assets/APEAJAL2.jpg');
ASICA = require('../../assets/ASICA.jpg');
import { FontAwesome } from '@expo/vector-icons';
import OpcionesCatalogos from '../ComponentesMenu/OpcionesCatalogos';


export default Catalogos = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={Amocali} style={styles.image}></Image>
                <Image source={Apeajal} style={styles.image}></Image>
                <Image source={ASICA} style={styles.image}></Image>

            </View>
            <Text style={styles.slogan}>"Combatiendo la pirateria de agroquímicos"</Text>
            <View style={{ borderBottomWidth: 10, borderBottomColor: 'red', marginBottom: 10 }}></View>

            <OpcionesCatalogos
                text="Generales"
                icon="globe"
            />

            <OpcionesCatalogos
                text="Municipales"
                icon="building"
            />
        </View>
    )
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
        marginBottom: 30
    }
})