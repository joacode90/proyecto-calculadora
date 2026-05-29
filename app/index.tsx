import BotonCalculadora from '@/components/BotonCalculadora';
import Texto from '@/components/Texto';
import { estilosGlobales } from '@/styles/estilos-globales';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const CalculatorApp = () => {
    return (
        <View style={estilosGlobales.fondo}>
            <View style={estilosGlobales.fondoNumero}>
                <Pressable onPress={() => { Haptics.selectionAsync() }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Consultar</Text>
                </Pressable>
                <Texto variant='t1' fondo='blue'>
                    10x10
                </Texto>
                <Texto variant='t2' fondo='red'>
                    100
                </Texto>
                <BotonCalculadora texto='C' textoNegro={false} presionarBoton={() => console.log('C')} />
            </View>
        </View>
    )
}

export default CalculatorApp

//<Link href={'/explore'} style={{ color: 'white' }} >Ir a Explore...</Link>