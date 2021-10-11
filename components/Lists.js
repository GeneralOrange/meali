import React from "react";
import ListItem from '../components/ListItem'
import { FlatList } from "react-native-gesture-handler";

const Lists = (props) => {

    const renderItem = ({ item }) => (
        <ListItem title={item.title} navigation={props.navigation}/>
      );

    return (
        <>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default Lists;