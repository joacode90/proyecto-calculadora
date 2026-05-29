import { Colors } from '@/constants/theme';
import { estilosGlobales } from '@/styles/estilos-globales';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface Props {
    texto: string;
    textoNegro?: boolean;
    color?: string;
    dobleTamaño?: boolean;
    presionarBoton: () => void;
}

export default function BotonCalculadora({ texto, textoNegro = false, color = Colors.grisOscuro, dobleTamaño = false, presionarBoton }: Props) {
    return (
        <View>
            <Pressable style={({ pressed }) => ({ ...estilosGlobales.boton, backgroundColor: color, opacity: pressed ? 0.8 : 1, width: dobleTamaño ? 180 : 80 })} onPress={() => { Haptics.selectionAsync(); presionarBoton }}>
                <Text style={{
                    ...estilosGlobales.textoBoton,
                    color: textoNegro ? 'black' : 'white'
                }}>{texto}</Text>
            </Pressable>
        </View>
    )
}