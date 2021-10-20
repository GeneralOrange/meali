import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import SubItems from '../components/SubItems'
import CreateNewSubItem from '../components/createNewSubItem'
import { globalStyles } from '../styles/global'

const listDetail = ({ route }) => {
    const [subItems, setSubItems] = useState(route.params.item.subItems);

    const updateSubItems = (newSubItem) => {
        let newSubItems = [];
        newSubItems.push({
            id: newSubItem,
            title: newSubItem
        });
        
        setSubItems([
            ...subItems,
            ...newSubItems
        ]);
    }

    return (
        <View style={globalStyles.container}>
            <SubItems data={subItems }/>
            <CreateNewSubItem subItems={subItems} updateSubItems={updateSubItems}/>
        </View>
    )
}

export default listDetail;