import { DrawerScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({ navigation }:Props ) => {

    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerLeft: () => <Button title='Menú' onPress={() => navigation.toggleDrawer()} />,
      })
    },)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button 
                title='pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            
            <Button 
                title='Persona'
                onPress={() => navigation.navigate('Persona', {
                    id:'IHU175',
                    name:'Edwin Caicedo'
                })}
            />

            <View style={{ flexDirection:'row' }}>
                <TouchableOpacity
                    style={ styles.customBtn }
                    onPress={() => navigation.navigate('Persona', {
                        id:'IHU175',
                        name:'Julian Marin'
                    })}
                >
                    <Text style={{color:'black'}}>Edwin Caicedo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.customBtn }
                    onPress={() => navigation.navigate('Persona', {
                        id:'IYZ422',
                        name:'Ana Maria Ocampo'
                    })}
                >
                    <Text style={{color:'black'}}>Ana Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

