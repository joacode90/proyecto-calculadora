import { Colors } from '@/constants/theme';
import { estilosGlobales } from '@/styles/estilos-globales';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text, useWindowDimensions } from 'react-native';

interface Props {
    texto: string;
    textoNegro?: boolean;
    color?: string;
    dobleTamaño?: boolean;
    presionarBoton: () => void;
}

export default function BotonCalculadora({ texto, textoNegro = false, color = Colors.grisOscuro, dobleTamaño = false, presionarBoton }: Props) {
    // Dentro de tu componente BotonCalculadora:
    const { width } = useWindowDimensions();

    // 1. Espacio total de la pantalla menos los márgenes externos (20 de cada lado = 40)
    const ESPACIO_DISPONIBLE = width - 40;

    // 2. Tamaño base de un botón (reducimos la holgura de seguridad dividiendo directamente por 4)
    const tamañoBoton = (ESPACIO_DISPONIBLE - 20) / 4;

    // 3. MATEMÁTICA PURA: Calculamos exactamente cuántos píxeles mide cada uno de los 3 huecos intermedios
    const espacioIntermedio = (ESPACIO_DISPONIBLE - (tamañoBoton * 4)) / 3;
    return (
        <Pressable style={({ pressed }) =>
        ({
            ...estilosGlobales.boton,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            // Si es doble tamaño, ocupa 2 botones más un margen intermedio. Si no, su tamaño base.
            //width: dobleTamaño ? 180 : 80
            width: dobleTamaño ? (tamañoBoton * 2) + espacioIntermedio : tamañoBoton,
            height: tamañoBoton,
            borderRadius: tamañoBoton, // Lo mantiene perfectamente circular
        })}
            onPress={() => { Haptics.selectionAsync(); presionarBoton() }}>
            <Text style={{
                ...estilosGlobales.textoBoton,
                color: textoNegro ? 'black' : 'white',
                // Escalamos la tipografía un poco si la pantalla es muy pequeña para que no se desborde
                fontSize: tamañoBoton * 0.38
            }}>{texto}</Text>
        </Pressable>
    )
}

