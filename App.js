import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Main';
import SecondView from './SecondView';
import ThirdView from './thirdView';

export default function App() {

  const Stack= createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Page2' component={SecondView}/>
        <Stack.Screen name='Page3' component={ThirdView}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


