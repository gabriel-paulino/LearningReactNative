import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";


const HomeScreen = () => {
    return(

        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Detais"
            onPress={ () => {console.log("Go to Detais")}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default HomeScreen;