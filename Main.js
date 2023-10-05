import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Main({navigation}) {

    const [drink, setDrink] = useState([
        {Drinks: 'Orange Jucie'},
        {Drinks: 'Bnanan Smoothie'},
        {Drinks: 'Cider'},
    ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={drink}
        renderItem= {({item}) => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Page2');
            }}>
                <Text>{item.Drinks}</Text>
            </TouchableOpacity>
        )}/>
        <StatusBar style= 'auto'/>
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
