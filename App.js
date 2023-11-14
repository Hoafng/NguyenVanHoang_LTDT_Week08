import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './component/Screen01'
import Screen02 from './component/Screen02'
import Screen03 from './component/Screen03'
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01"  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Screen01" component={Screen01}/>
        <Stack.Screen name="Screen02" component={Screen02}/>
        <Stack.Screen name="Screen03" component={Screen03}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();