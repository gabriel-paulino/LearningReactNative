import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";


const ImageScreen = ({ navigation, route }) => {
    console.log(route);
    return(
        <View style={styles.mainView}>
            <Text>Big Image View</Text>
            <Button
            title="Go Home"
            onPress={ () => {navigation.navigate("BigImageViewToHome")}}/>
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

export default ImageScreen;