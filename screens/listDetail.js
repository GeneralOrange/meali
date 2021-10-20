import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import SubItems from '../components/SubItems'
import CreateNewSubItem from '../components/createNewSubItem'
import { globalStyles } from '../styles/global'

const listDetail = ({ route }) => {
    const parentItem = route.params.item;
    const subItems = route.params.item.subItems;
    
    return (
        <View style={globalStyles.container}>
            <SubItems data={subItems }/>
            <CreateNewSubItem subItems={subItems} parentItem={parentItem} updateSubItems={route.params.updateSubItems}/>
        </View>
    )
}

export default listDetail;