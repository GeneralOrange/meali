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
                        options={{
                            title: ''
                        }}
                    />
                    <Stack.Screen
                        name="listDetail"
                        component={ listDetail }
                        options={({ route }) => ({ title: route.params.title })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator;