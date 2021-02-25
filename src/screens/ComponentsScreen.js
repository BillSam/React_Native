import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const name = "Sam";
    return (
      <View>
          <Text style={styles.textStyle}>Getting started with react Native</Text>
          <Text style={styles.subHeaderStyle}>My name is: {name}</Text>
      </View>
    );

};

const styles = StyleSheet.create({
   textStyle: {
       fontSize: 30
   },
    subHeaderStyle: {
       fontSize: 20
    }
});

export default ComponentsScreen;