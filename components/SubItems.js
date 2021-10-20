import React from "react";
import SubItem from "./SubItem";
import { FlatList } from "react-native-gesture-handler";

const SubItems = (props) => {

    const renderItem = ({ item }) => (
        <SubItem item={item}/>
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

export default SubItems;