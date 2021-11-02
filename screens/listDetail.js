import React, { useState, useEffect } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import SubItems from '../components/SubItems'
import CreateNewSubItem from '../components/createNewSubItem'
import { globalStyles } from '../styles/global'

const listDetail = ({ route, navigation }) => {
    const [parentItem, setParentItem] = useState(route.params.item);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    onPress={()=> navigation.navigate('Home', { item: parentItem })}
                    title='Ga terug'
                />
            )
        })
    }, [parentItem]);

    const updateSubItems = (newTitle) => {
        let newLists = [];
        let subItemsCopy = parentItem.subItems;
        newLists.push({
            id: newTitle,
            title: newTitle,
        });

        setParentItem((prev) => (
            {
                ...prev,
                subItems: [
                    ...subItemsCopy,
                    ...newLists
                ]
            }
        ));
    }
    
    
    return (
        <View style={globalStyles.container}>
            <SubItems data={parentItem.subItems }/>
            <CreateNewSubItem subItems={parentItem.subItems} parentItem={parentItem} updateSubItems={updateSubItems}/>
        </View>
    )
}

export default listDetail;