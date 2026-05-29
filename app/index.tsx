import BotonCalculadora from '@/components/BotonCalculadora';
import Texto from '@/components/Texto';
import { Colors } from '@/constants/theme';
import { useCalculator } from '@/hooks/useCalculator';
import { estilosGlobales } from '@/styles/estilos-globales';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {
    const { formula, buildNumber, clean, cambioSigno } = useCalculator();

    return (
        <View style={estilosGlobales.contenedorCalculadora}>

            {/* Resultados */}

            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>

                <Texto variant='t1'>{formula}</Texto>

                <Texto variant='t2'>250</Texto>

            </View>

            {/* Filas de botones 1 */}

            <View style={estilosGlobales.fila}>

                <BotonCalculadora
                    texto='C'
                    textoNegro
                    color={Colors.grisClaro}
                    presionarBoton={clean} />
                <BotonCalculadora
                    texto='+/-'
                    textoNegro
                    color={Colors.grisClaro}
                    presionarBoton={cambioSigno} />
                <BotonCalculadora
                    texto='del'
                    textoNegro
                    color={Colors.grisClaro}
                    presionarBoton={() => console.log('del')} />
                <BotonCalculadora
                    texto='%'
                    color={Colors.naranja}
                    presionarBoton={() => console.log('%')} />

            </View>

            {/* Filas de botones 2 */}

            <View style={estilosGlobales.fila}>

                <BotonCalculadora
                    texto='7'
                    presionarBoton={() => buildNumber('7')} />
                <BotonCalculadora
                    texto='8'
                    presionarBoton={() => buildNumber('8')} />
                <BotonCalculadora
                    texto='9'
                    presionarBoton={() => buildNumber('9')} />
                <BotonCalculadora
                    texto='X'
                    color={Colors.naranja}
                    presionarBoton={() => console.log('X')} />

            </View>

            {/* Filas de botones 3 */}

            <View style={estilosGlobales.fila}>

                <BotonCalculadora
                    texto='4'
                    presionarBoton={() => buildNumber('4')} />
                <BotonCalculadora
                    texto='5'
                    presionarBoton={() => buildNumber('5')} />
                <BotonCalculadora
                    texto='6'
                    presionarBoton={() => buildNumber('6')} />
                <BotonCalculadora
                    texto='-'
                    color={Colors.naranja}
                    presionarBoton={() => console.log('-')} />

            </View>

            {/* Filas de botones 4 */}

            <View style={estilosGlobales.fila}>

                <BotonCalculadora
                    texto='1'
                    presionarBoton={() => buildNumber('1')} />
                <BotonCalculadora
                    texto='2'
                    presionarBoton={() => buildNumber('2')} />
                <BotonCalculadora
                    texto='3'
                    presionarBoton={() => buildNumber('3')} />
                <BotonCalculadora
                    texto='+'
                    color={Colors.naranja}
                    presionarBoton={() => console.log('+')} />

            </View>

            {/* Filas de botones 2 */}

            <View style={estilosGlobales.fila}>

                <BotonCalculadora
                    texto='0'
                    dobleTamaño
                    presionarBoton={() => buildNumber('0')} />
                <BotonCalculadora
                    texto='.'
                    presionarBoton={() => buildNumber('.')} />
                <BotonCalculadora
                    texto='='
                    color={Colors.naranja}
                    presionarBoton={() => console.log('=')} />

            </View>



            {/* <ThemeText>Hola Mundo</ThemeText> */}
        </View>
    )
}

export default CalculatorApp

//<Link href={'/explore'} style={{ color: 'white' }} >Ir a Explore...</Link>