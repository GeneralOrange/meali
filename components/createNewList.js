import React, { useState } from 'react'
import {Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createNewListStyles } from '../styles/components/createNewList'

const CreateNewList = (props) => {

    const [input, setInput ] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={createNewListStyles.wrapper}>
            <TextInput onChangeText={input => setInput(input)} value={input} style={createNewListStyles.input}/>
            <TouchableOpacity 
                style={createNewListStyles.button}
                onPress={()=> {
                    if(input == ''){
                        return;
                    }
                    props.updateLists(input)
                    setInput('')
                }}>
                <Text style={createNewListStyles.text}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
   
}

export default CreateNewList;