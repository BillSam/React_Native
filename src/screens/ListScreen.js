import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name : 'Friend #1', age: '86'},
        { name : 'Friend #2', age: '58'},
        { name : 'Friend #3', age: '56'},
        { name : 'Friend #4', age: '57'},
        { name : 'Friend #5', age: '56'},
        { name : 'Friend #6', age: '86'},
        { name : 'Friend #7', age: '76'},
        { name : 'Friend #8', age: '56'},
        { name : 'Friend #9', age: '56'},
    ]
  return (<FlatList
      keyExtractor = { (friend) => friends.name }
      data={friends}
      renderItem={({item}) => {
          return (
              <Text style={styles.textStyle}>
                  {item.name} - Age {item.age}
              </Text>
          );
      }}
  />
  );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen