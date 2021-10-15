import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import SubItems from '../components/SubItems'
import { globalStyles } from '../styles/global'

const listDetail = ({ route }) => {
    const [input, setInput] = useState('');

    return (
        <View style={globalStyles.container}>
            <Text>Dit is de {route.params.item.title} screen</Text>
            <SubItems data={route.params.item }/>
            {/* <TextInput onChangeText={text => setInput(text)} value={input}/>
            <Button onPress={route.params.updateSubItems(route.params.item, input)} title='Toevoegen'/> */}
        </View>
    )
}

export default listDetail;