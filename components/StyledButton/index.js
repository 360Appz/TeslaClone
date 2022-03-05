import React from "react";
import {Text, View, Pressable} from 'react-native';
import styles from "./styles";

//Pressable acts as button
const StyledButton = (props) =>
{

    const type = props.type;

    //Changes color based on value passes, dynamic styling
    const backgroundColor = type === "primary" ? "black" : "white";
    const textColor = type === "primary" ? "white" : "black";
    return (
        <View style={styles.container}>
            
            <Pressable style={[styles.button, {backgroundColor:backgroundColor}]} onPress={() => {
                console.warn("Hello there")
            }}>
                <Text style={[styles.text,{color:textColor}]}>Custom order</Text>

            </Pressable>
      
     </View>

    );
};

export default StyledButton