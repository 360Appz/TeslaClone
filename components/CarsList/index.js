import React from "react";
import {Text, View, FlatList, Dimensions} from 'react-native';
import styles from "./styles";
import cars from "./cars.js";
import CarItem from "../CarItem";

const CarsList = (props) =>
{

   //const {name,tagline, taglineCTA, image} = props; 
    //Takes objects from cars.js, stores in array, and render it into FlatList
    console.log(cars);
    return (
        <View style={styles.container}>
           <FlatList
           data={cars}
           renderItem={({item}) => <CarItem car={item}/>}
           showsVerticalScrollIndicator={false}
           snapToAlignment={'start'}
           decelerationRate={'fast'}
           snapToInterval={Dimensions.get('window').height}/>
          
      
     </View>
 
    );
};

export default CarsList