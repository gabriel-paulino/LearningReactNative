import React from "react";
import { View, StyleSheet } from "react-native";

import {PanGestureHandler} from 'react-native-gesture-handler';


const GestureHandlerScreen = () => {
    return(
        <PanGestureHandler onGestureEvent= { (gestureEvent) => {
            
            let tranX = gestureEvent.nativeEvent.translationX;
            let tranY = gestureEvent.nativeEvent.translationY;
    
            console.log(`TranslateX: ${tranX} TranslateY: ${tranY}` +"\n");
        }}>
            <View style={styles.container}>
            </View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GestureHandlerScreen;