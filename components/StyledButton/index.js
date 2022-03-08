import React from "react";
import {Text, View, Pressable} from 'react-native';
import styles from "./styles";

//Pressable acts as button
const StyledButton = (props) =>
{


     //Allows element to use properties instead of hardcoding into individual UI elements.
     //Syntax is based on ES6 to make succint code
    const {type, content, onPress} = props;


    //Changes color based on value passes, dynamic styling
    const backgroundColor = type === "primary" ? "black" : "white";
    const textColor = type === "primary" ? "white" : "black";
    return (
        <View style={styles.container}>
            
            <Pressable style={[styles.button, {backgroundColor:backgroundColor}]} onPress={() => {
                onPress()
            }}>
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>

            </Pressable>
      
     </View>

    );
};

export default StyledButton