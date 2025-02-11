import React from 'react';
import { TextInput, View } from 'react-native';
import { Division } from '../screens/Screen2';


interface Props {
    placeholder: string;
    handleSetValues: (key: keyof Division, value: string) => void;
    fieldKey: keyof Division;
    isPassword?: boolean;
    hasIcon?: boolean;
    accionIcon?: ()=>void;
}

export const InputComponent = ({ placeholder, handleSetValues, fieldKey }: Props) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                keyboardType="default"
                onChangeText={(value) => handleSetValues(fieldKey, value)}
                style={{
                    padding:15
                }}
            />         
        </View>
    );
};