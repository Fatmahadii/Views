import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SecondView({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.frukt} onPress={() => {
        navigation.navigate('Page3')
      }}>Cider</Text>
      <Button title='Main' onPress={() => {
        navigation.navigate('Main');
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frukt: {
    fontSize: 20,
    color: '#ffffff',
  }
});
