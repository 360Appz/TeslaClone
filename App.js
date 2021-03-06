import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarsList from "./components/CarsList"
import Header  from './components/Header';


//Usage if components like CarItem, uses the DRY concept
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
   <CarsList/>
     <StatusBar style="auto" ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
