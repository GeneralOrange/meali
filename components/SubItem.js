import React from 'react'
import { View, Text } from 'react-native'
import { ListItemStyles } from '../styles/components/ListItem'

const SubItem = (props) => {

    return (
        <>
            <View style={ ListItemStyles.wrapper }>
                <Text style={ ListItemStyles.text }>{ props.item.title }</Text>
            </View>
        </>
    )
}

export default SubItem;