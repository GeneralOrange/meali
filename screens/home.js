import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CreateNewList from '../components/createNewList'
import Lists from '../components/Lists'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    const DATA = [];

    const [lists, setLists] = useState(DATA);

    const updateLists = (newTitle) => {
        let newLists = [];
        newLists.push({
            id: newTitle,
            title: newTitle
        });

        setLists([
            ...lists,
            ...newLists
        ]);
    }
    
    return (
        <View style={globalStyles.container}>
            {
                lists.length < 1 && <Text style={globalStyles.titleText}>Er is nog geen lijst aangemaakt</Text>                
            }
            <Lists data={lists} navigation={navigation}/>
            <CreateNewList navigation={navigation} updateLists={updateLists} lists={lists}/>
        </View>
    )
}

export default Home;