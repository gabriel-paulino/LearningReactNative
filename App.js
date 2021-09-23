import React from 'react';
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ImageScreen from './src/screens/ImageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="AppToHome">
        <Stack.Screen
        name="AppToHome"
        component={HomeScreen}
        />
        <Stack.Screen
        name="HomeToDetails"
        component={DetailsScreen}
        />
        <Stack.Screen
        name="DetailsToDetails"
        component={DetailsScreen}
        />
        <Stack.Screen
        name="DetailsToBigImageView"
        component={ImageScreen}
        />
        <Stack.Screen
        name="BigImageViewToHome"
        component={HomeScreen}
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