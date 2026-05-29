import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '%',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');

    const [PrevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        // Todo: calcular subResultado
        setFormula(number);
    }, [number]);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }

    const cambioSigno = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }
        setNumber('-' + number);
    }

    const buildNumber = (numberString: string) => {
        //console.log({numberString});
        //verificar si ya existe el punto decimal
        if (number.includes('.') && numberString == '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString == '.') {
                return setNumber(number + numberString);
            }

            //evaluar si es otro cero y no hay puntos

            if (numberString == '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //evaluar si es diferente de cero, no hay punto decimal y es el primer número

            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //evitar el 0000000.00

            if (numberString == '0' && !number.includes('.')) {
                return;
            }

            //return setNumber(number + numberString);

        }

        setNumber(number + numberString);
    };



    return {
        // props
        formula,
        number,
        PrevNumber,

        //methods
        buildNumber,
        clean,
        cambioSigno,
    };
};