import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text>Dit is de home screen</Text>
            <Button onPress={()=> navigation.navigate('listDetail')} title='Naar listDetail'/>
        </View>
    )
}

export default Home;