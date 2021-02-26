import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
           return  state.red + action.change > 255 || state.red + action.change < 0
                ? state
                : { ...state, red: state.red + action.amount }
        case 'green':
            return  state.green + action.change > 255 || state.green + action.change < 0
                ? state
                : { ...state, green: state.green + action.amount }
        case 'blue':
            return  state.blue + action.change > 255 || state.blue + action.change < 0
                ? state
                : { ...state, blue: state.blue + action.amount }
        default:
            return state
    }

}

const SquareScreen = () => {


    const [state, dispatch] = useReducer(reducer, { red:0, green: 0, blue: 0});
    const {red,green,blue} = state

    return (
        <View>
            <ColorCounter
                onDecrease={() =>  dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
                onIncrease={() =>  dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
                color="Red"
            />
            <ColorCounter
                onDecrease={() =>  dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})}
                color="Blue"
            />
            <ColorCounter
                onDecrease={() =>  dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}
                color="Green"
            />
            <View
            style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;


