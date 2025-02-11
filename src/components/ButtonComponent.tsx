import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
    textButton: string;
    onPress:()=>void;
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
    return (
        <TouchableOpacity style={{
            paddingVertical:10,
            paddingHorizontal:50,
            borderRadius: 15,
            backgroundColor:'#e89c18'
        }} onPress={onPress}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center'
            }}>{textButton}</Text>
        </TouchableOpacity>
    )
}