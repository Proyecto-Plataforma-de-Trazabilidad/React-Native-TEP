import { View, StyleSheet, Image, Text } from 'react-native';
import OpcCatalogIcons from '../ComponentesMenu/OpcCatalogIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


Amocali = require('../../assets/AMOCALI.png');
Apeajal = require('../../assets/APEAJAL2.jpg');
ASICA = require('../../assets/ASICA.jpg');



export default CatalogM = () => {
    const navigation = useNavigation();

    const handleDistGPress = () => {
        navigation.navigate('DConsultaG');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Image source={Amocali} style={styles.image}></Image>
                <Image source={Apeajal} style={styles.image}></Image>
                <Image source={ASICA} style={styles.image}></Image>

            </View>
            <Text style={styles.slogan}>"Combatiendo la pirateria de agroquímicos"</Text>
            <View style={{ borderBottomWidth: 10, borderBottomColor: 'red', marginBottom: 10 }}></View>

            <View styl={styles.menu}>
                <ScrollView>
                    <OpcCatalogIcons
                        text="Distribuidores"
                        onPress={handleDistGPress}
                        imageSource={require('../../assets/Distribuidores.png')}
                    />

                    <OpcCatalogIcons
                        text="Empresa Destino"
                        onPress={handleDistGPress}
                        imageSource={require('../../assets/EmpresaDestino.png')}
                    />

                    <OpcCatalogIcons
                        text="Contenedores"
                        onPress={handleDistGPress}
                        imageSource={require('../../assets/Contenedores.png')}
                    />

                    <OpcCatalogIcons
                        text="CAT"
                        onPress={handleDistGPress}
                        imageSource={require('../../assets/CAT.png')}
                    />

                    <OpcCatalogIcons
                        text="ERP"
                        onPress={handleDistGPress}
                        imageSource={require('../../assets/EP.png')}
                    />
                </ScrollView>
            </View>



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
        marginBottom: 2
    },
    menu: {

    }
})