import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const estilosGlobales = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: Colors.fondo,
        justifyContent: 'flex-end',
    },
    cuenta: {
        fontSize: 80,
        fontFamily: 'SpaceMono',
        textAlign: 'right',
        color: Colors.textoPrimario,
    },
    resultado: {
        fontSize: 40,
        fontFamily: 'SpaceMono',
        textAlign: 'right',
        color: Colors.textoSecundario,
    },
    fondoNumero: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    textoBoton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textoPrimario,
        fontWeight: 300,
        fontFamily: 'SpaceMono',
    },
    boton: {
        width: 80,
        height: 80,
        backgroundColor: Colors.grisOscuro,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
})