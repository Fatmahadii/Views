import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ThirdView() {
  return (
    <View style={styles.container}>
      <Text style={styles.frukt}>cider</Text>
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
      fontSize: 40,
      color: '#ffffff',
    }
  });
  
