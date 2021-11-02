import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import CreateNewList from '../components/createNewList'
import Lists from '../components/Lists'
import { globalStyles } from '../styles/global'

const Home = ({ navigation, route }) => {
    const DATA = [
        {
            id: 'test',
            title: 'test',
            subItems: [
                {
                    id: 'testsub',
                    title: 'testsub'
                },
                {
                    id: 'das',
                    title: 'das'
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

    useEffect(() => {
        if(route.params && route.params.item){
            let updatedList = route.params.item;

            //This check needs to be different because we won't find the correct object if the subItems have been changed.
            //Because it won't be the same obviously
            //let updatedListPosition = parseInt(lists.indexOf(updatedList));
            //let listCopy = lists;

            // if(updatedListPosition !== -1){
            //     listCopy.splice(updatedListPosition, 1, updatedList);
            //     setLists(listCopy);
            // }
            //filter lists so old one gets deleted
            setLists(lists.filter(list => list.id !== updatedList.id));

            //add new updated list
            setLists((prev) => [
                ...prev,
                updatedList
            ]);
        }
    },[route.params]);

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

    //console.log(route.params);
    
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