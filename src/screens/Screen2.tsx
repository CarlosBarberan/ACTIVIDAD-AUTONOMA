import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export interface Division {
    num1: number;
    num2: number;
}



export const Screen2 = () => {
    const [division, setDivision] = useState<Division>({
        num1: 2,
        num2:2
    });

    const [resultado, setResultado] = useState<string | number>('');

    const handleSetValues = (fieldKey: keyof Division, value: string) => {
        console.log(fieldKey)
        console.log(value)
        setDivision(prevState => ({
            ...prevState,
            [fieldKey]: Number(value)
        })
        );
    };

    const handleDivision = () =>{
        const { num1, num2 } = division;

        if (num1 === 0 && num2 === 0) {
            setResultado('INDETERMINACIÓN');
        } else if (num2 === 0) {
            setResultado('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            setResultado(num1 / num2);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>Division</Text>
            <InputComponent
                placeholder="Ingrese Numero 1"
                handleSetValues={handleSetValues}
                fieldKey="num1"
            />

            <InputComponent
                placeholder="Ingrese Numero 2"
                handleSetValues={handleSetValues}
                fieldKey="num2"
            />

            <ButtonComponent textButton='Dividir' onPress={handleDivision} />
            <Text style={{
                paddingTop:20
            }}>Resultado: {resultado}</Text>

        </View>
    )
}
