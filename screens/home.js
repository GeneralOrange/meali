import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CreateNewList from '../components/createNewList'
import Lists from '../components/Lists'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    const DATA = [
        {
            id: 'test',
            title: 'test',
            subItems: [
                {
                    id: 'testsub',
                    title: 'testsub'
                }
            ]
        },
        {
            id: 'test2',
            title: 'test2',
            subItems: [
                {
                    id: 'testsub2',
                    title: 'testsub2'
                }
            ]
        },
    ];

    const [lists, setLists] = useState(DATA);

    const updateLists = (newTitle) => {
        let newLists = [];
        newLists.push({
            id: newTitle,
            title: newTitle,
            subItems: []
        });

        setLists([
            ...lists,
            ...newLists
        ]);
    }

    const updateSubItems = (list, newSubItem) => {
        let listCopyWithNewSub = [];
        let subItemsCopy = [];

        if(list.subItems && list.subItems.length >= 1){
            subItemsCopy = list.subItems
        }

        listCopyWithNewSub = listCopyWithNewSub.filter(item => item !== list);

        listCopyWithNewSub.push({
            id: list,
            title: list,
            subItems: [
                ...subItemsCopy,
                [newSubItem]
            ]
        })

        setLists([
            ...lists,
            ...listCopyWithNewSub
        ])
    }
    
    return (
        <View style={globalStyles.container}>
            {
                lists.length < 1 && <Text style={globalStyles.titleText}>Er is nog geen lijst aangemaakt</Text>                
            }
            <Lists data={lists} navigation={navigation} updateSubItems={updateSubItems} />
            <CreateNewList navigation={navigation} updateLists={updateLists} lists={lists}/>
        </View>
    )
}

export default Home;