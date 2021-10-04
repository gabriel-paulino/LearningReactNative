import React from 'react';
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ImageScreen from './src/screens/ImageScreen';

import GestureResponderScreen from './src/screens/GestureResponderScreen';
import GestureHandlerScreen from './src/screens/GestureHandlerScreen';

import AddressScreen from './src/screens/AddressScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="AppToHome"
      screenOptions={
        {
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'orange'}
        }
      }>
        <Stack.Screen
        name="AppToHome"
        component={HomeScreen}
        options={{
          title: 'Movie Time',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }          
        }}
        />
        <Stack.Screen
        name="HomeToDetails"
        component={DetailsScreen}
        options={ ({route}) => ({title: route.params.movie.title})}
        />
        <Stack.Screen
        name="DetailsToDetails"
        component={DetailsScreen}
        options={ ({route}) => ({title: route.params.movie.title})}
        />
        <Stack.Screen
        name="DetailsToBigImageView"
        component={ImageScreen}
        />
        <Stack.Screen
        name="BigImageViewToHome"
        component={HomeScreen}
        />
        <Stack.Screen
        name="HomeToGestureResponder"
        component={GestureResponderScreen}
        />
        <Stack.Screen
        name="HomeToGestureHandler"
        component={GestureHandlerScreen}
        />
        <Stack.Screen
        name="HomeToAddress"
        component={AddressScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
});