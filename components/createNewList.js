import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createNewListStyles } from '../styles/components/createNewList'

const CreateNewList = (props) => {

    return (
        <>
            <TouchableOpacity 
                style={createNewListStyles.button}
                onPress={()=> props.navigation.navigate('listDetail')}>
                <Text style={createNewListStyles.text}>Nieuwe lijst aanmaken +</Text>
            </TouchableOpacity>
        </>
    )
   
}

export default CreateNewList;