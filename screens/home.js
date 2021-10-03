import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CreateNewList from '../components/createNewList'
import Lists from '../components/Lists'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    const DATA =
        [
            {
                id: 'dsa',
                title: 'Spareribs',
            },
            {
                id: 'ccc',
                title: 'Cheeseburger',
            },
            {
                id: '123ssdsda',
                title: 'Pannekoek'
            }
        ];

    const [lists, setLists] = useState([]);
    
    setLists(DATA);
    return (
        <View style={globalStyles.container}>
            {
                lists.length < 1 && <Text style={globalStyles.titleText}>Er is nog geen lijst aangemaakt</Text>                
            }
            <Lists data={lists} navigation={navigation}/>
            <CreateNewList navigation={navigation}/>
        </View>
    )
}

export default Home;