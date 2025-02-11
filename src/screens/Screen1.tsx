import React from 'react';
import { Text, View, Image } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/StackNavigator'
import { StackNavigationProp } from '@react-navigation/stack';

export const Screen1 = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
                Bienvenido
            </Text>

            <Image
                source={{ uri: 'https://images.vexels.com/media/users/3/141723/isolated/preview/e2a2d9ed16eb3b345ad42c6fbf072668-buscar-aplicaciones-para-telefonos-inteligentes.png' }} // Imagen desde la web
                style={{ width: 200, height: 200, marginBottom: 20 }}
                resizeMode="contain"
            />


            <ButtonComponent 
                textButton="ACCEDER" 
                onPress={() => navigation.navigate('Screen2')} 
            />
        </View>
    );
};
