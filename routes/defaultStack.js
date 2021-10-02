import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import listDetail from '../screens/listDetail' 

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={ Home }
                    />
                    <Stack.Screen
                        name="listDetail"
                        component={ listDetail }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator;