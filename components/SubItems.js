import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const SubItems = (props) => {

    const renderItem = ({ item }) => (
        <View>
            <Text>{ item.title }</Text>
        </View>
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