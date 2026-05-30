import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '%',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');

    const [numeroActual, setNumeroActual] = useState('0');

    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const lastOperation = useRef<Operator | null>(null);

    useEffect(() => {
        // Todo: calcular subResultado
        setFormula(numeroActual);
    }, [numeroActual]);

    const clean = () => {
        setNumeroActual('0');
        setNumeroAnterior('0');
        setFormula('0');
        lastOperation.current = null;
    }

    const cambioSigno = () => {
        if (numeroActual.includes('-')) {
            return setNumeroActual(numeroActual.replace('-', ''));
        }
        setNumeroActual('-' + numeroActual);
    }

    const buildNumber = (numberString: string) => {
        //console.log({numberString});
        //verificar si ya existe el punto decimal
        if (numeroActual.includes('.') && numberString == '.') return;

        if (numeroActual.startsWith('0') || numeroActual.startsWith('-0')) {

            if (numberString == '.') {
                return setNumeroActual(numeroActual + numberString);
            }

            //evaluar si es otro cero y no hay puntos

            if (numberString == '0' && numeroActual.includes('.')) {
                return setNumeroActual(numeroActual + numberString);
            }

            //evaluar si es diferente de cero, no hay punto decimal y es el primer número

            if (numberString != '0' && !numeroActual.includes('.')) {
                return setNumeroActual(numberString);
            }

            //evitar el 0000000.00

            if (numberString == '0' && !numeroActual.includes('.')) {
                return;
            }

            //return setNumber(number + numberString);

        }

        setNumeroActual(numeroActual + numberString);
    };



    return {
        // props
        formula,
        numeroActual,
        numeroAnterior,

        //methods
        buildNumber,
        clean,
        cambioSigno,
    };
};