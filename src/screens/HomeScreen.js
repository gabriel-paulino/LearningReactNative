import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";


const HomeScreen = ( {navigation, route} ) => {
    console.log(route);
    return(
        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Detais"
            onPress={ () => {navigation.navigate("HomeToDetails")}}/>
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