import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import {Text} from "react-native-web";

const ColorScreen = () => {
    const  [colors, setColors] = useState([])
  return (
   <View>
       <Button
           title="Add Color" onPress = {() => {
               setColors([...colors, randomRgb()])
       }}

       />
       <View
           style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
       />
       <FlatList
       keyExtractor={(item) => item}
       data={colors}
       renderItem={({item}) => {
           return <View
               style={{ height: 100, width: 100, backgroundColor: item }}
           />
       }}
       />
   </View>
  );
};


const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
const styles = StyleSheet.create({});

export default ColorScreen