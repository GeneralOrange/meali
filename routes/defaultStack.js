import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AppLoading } from 'expo'
import Home from '../screens/home'
import listDetail from '../screens/listDetail' 

const Stack = createNativeStackNavigator();

const Navigator = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'regular',
                            fontSize: 24
                        },
                        headerStyle: {
                            backgroundColor: '#F07F19'
                        }
                    }}
                    >
                    <Stack.Screen
                        name="Home"
                        component={ Home }
                        options={{
                            title: 'Hi, meali-gebruiker!'
                        }}
                    />
                    <Stack.Screen
                        name="listDetail"
                        component={ listDetail }
                        options={({ route }) => ({ title: route.params.item.title })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator;