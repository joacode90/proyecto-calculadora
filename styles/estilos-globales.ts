import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const estilosGlobales = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: Colors.fondo,
    },
    cuenta: {
        color: Colors.textoPrimario,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: 400,
    },
    resultado: {
        color: Colors.textoSecundario,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300,
    },
    textoBoton: {
        textAlign: 'center',
        //padding: 10,
        //fontSize: 30,
        color: Colors.textoPrimario,
        fontWeight: 300,
        fontFamily: 'SpaceMono',
    },
    boton: {
        //width: 80,
        //height: 80,
        backgroundColor: Colors.grisOscuro,
        //borderRadius: 100,
        justifyContent: 'center',
        //marginHorizontal: 10,
        alignItems: 'center',
    },
    contenedorCalculadora: {
        flex: 1,
        justifyContent: 'flex-end',
        //paddingBottom: 20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
})