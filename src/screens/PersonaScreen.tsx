import React, { useEffect } from 'react';
import { Text, View} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Persona'>{};
// interface RouteParams {
//     id:string;
//     name:string;
// }

export const PersonaScreen = ({route, navigation}:Props) => {
    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.id
        });
    },);
    
    return (
        <View>
            <Text>PersonaScreen</Text>
            <Text style={{ fontSize:15, color:"white" }}>
                {
                    JSON.stringify(route, null, 3)
                }
            </Text>
        </View>
    );
};

