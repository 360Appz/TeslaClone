import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';
import StyledButton from './components/StyledButton';


//Usage if components like CarItem, uses the DRY concept
export default function App() {
  return (
    <View style={styles.container}>
     <CarItem/>
    

     <StatusBar style="auto"></StatusBar>
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
