import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Index from './screens/Index';
import GMap from './screens/GMap';
import Catalogos from './screens/Catalogos';
import Catalog from './screens/Catalog';
import CatalogM from './screens/CatalogM';
import DConsultaG from './Distribuidores/DConsultaG';
import DConsultaM from './Distribuidores/DConsultaM';
import ERPConsultaG from './ERP/ERPConsultaG';
import ERPConsultaM from './ERP/ERPConsultaM';
import ERPMap from './ERP/ERPMap';
import MenuBottonItem from './ComponentesMenu/MenuBottonItem';



import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();


export default Menu = ({ navigation, route }) => {
    //console.log(route.params.Nombre);
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuItems {...props} usuario={route.params.Nombre} />
            }>


            <Drawer.Screen
                name="Inicio"
                component={Index}
                options={{
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }
                }
            />


            <Drawer.Screen
                name="GMap"
                component={GMap}
                options={{
                    title: "Consulta Google Maps",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />

            <Drawer.Screen
                name="Catalogos"
                component={Catalogos}
                options={{
                    title: "Menú Catálogos",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />


            <Drawer.Screen
                name="Catalog"
                component={Catalog}
                options={{
                    title: "Menu Catálogos Generales",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />

            <Drawer.Screen
                name="CatalogM"
                component={CatalogM}
                options={{
                    title: "Menu Catálogos Municipales",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />

            <Drawer.Screen
                name="DConsultaG"
                component={DConsultaG}
                options={{
                    title: "Distribuidores Generales",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />

            <Drawer.Screen
                name="DConsultaM"
                component={DConsultaM}
                options={{
                    title: "Distribuidores Municipales",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />

            <Drawer.Screen
                name="ERPConsultaG"
                component={ERPConsultaG}
                options={{
                    title: "Empresa Recolectora Privada Generales",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />

            <Drawer.Screen
                name="ERPConsultaM"
                component={ERPConsultaM}
                options={{
                    title: "Empresa Recolectora Privada Municipales",
                    headerStyle: {
                        backgroundColor: '#285430'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }

                }
                }
            />




        </Drawer.Navigator>
    );
}

const MenuItems = ({ navigation, usuario }) => {
    //console.log("Nombre ususrio " + usuario);

    return (
        <DrawerContentScrollView style={styles.container}>

            <View style={styles.head}>
                <AntDesign style={styles.icon} size={50} name='user' color={'white'} />
                <Text style={styles.user}>{usuario}</Text>
            </View>


            <MenuBottonItem
                text="Home"
                onPress={() => navigation.navigate('Inicio')}
                icon="home"
            />

            <MenuBottonItem
                text="Catálogos"
                onPress={() => navigation.navigate('Catalogos')}
                icon="book"
            />

            <MenuBottonItem
                text="Movimientos"
                onPress={() => navigation.navigate('GMap')}
                icon="telegram-plane"
            />

            <MenuBottonItem
                text="Reportes"
                onPress={() => navigation.navigate('GMap')}
                icon="file-contract"
            />

            <MenuBottonItem
                text="Ayuda"
                onPress={() => navigation.navigate('Inicio')}
                icon="info-circle"
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#285430',
    },

    head: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50

    },

    user: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        flex: 1,
        justifyContent: 'center',
    },



});