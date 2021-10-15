import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListItemStyles } from '../styles/components/ListItem'

const ListItem = (props) => {

    return (
        <>
            <TouchableOpacity
                onPress={
                    () => props.navigation.navigate('listDetail', { 
                        item: props.item,
                        updateSubItems: props.updateSubItems
                    })}>
                <View style={ ListItemStyles.wrapper }>
                    <Text style={ ListItemStyles.text }>{ props.item.title }</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default ListItem;