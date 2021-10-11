import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListItemStyles } from '../styles/components/ListItem'

const ListItem = (props) => {

    return (
        <>
            <TouchableOpacity onPress={()=> props.navigation.navigate('listDetail', { title: props.title })}>
                <View style={ ListItemStyles.wrapper }>
                    <Text style={ ListItemStyles.text }>{ props.title }</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default ListItem;