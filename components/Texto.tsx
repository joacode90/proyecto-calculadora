import { estilosGlobales } from '@/styles/estilos-globales';
import React from 'react';
import { Text, TextProps, View } from 'react-native';

interface Props extends TextProps {
    variant?: 't1' | 't2';
    fondo?: string;
}

const Texto = ({ children, variant = 't1', fondo, ...rest }: Props) => {
    return (
        <View>
            <Text style={[{ color: 'white', fontFamily: 'SpaceMono', backgroundColor: fondo },
            variant === 't1' && estilosGlobales.cuenta,
            variant === 't2' && estilosGlobales.resultado]}
                numberOfLines={1}
                adjustsFontSizeToFit
                {...rest}>
                {children}
            </Text>
        </View>
    )
}

export default Texto