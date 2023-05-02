import { View, Text, StyleSheet, Image } from 'react-native'
Amocali = require('../../assets/AMOCALI.png');
Apeajal = require('../../assets/APEAJAL2.jpg');
ASICA = require('../../assets/ASICA.jpg');


export default Index = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.slogan}>"Combatiendo la pirateria de agroquímicos"</Text>

            <Image source={Amocali} style={styles.image}></Image>
            <Image source={Apeajal} style={styles.image}></Image>
            <Image source={ASICA} style={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
        
    },
    slogan:{
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: 30
    },

    image:{
        width: 150,
        height:150,
        marginTop: 20,
        
    }
})