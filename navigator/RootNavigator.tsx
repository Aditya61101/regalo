import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';


const RootStack = createNativeStackNavigator();
export const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name='Main' component={TabNavigator} />
            </RootStack.Group>
        </RootStack.Navigator>
    )
}