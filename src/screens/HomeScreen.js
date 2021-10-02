import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const HomeScreen = ( {navigation, route} ) => {
    console.log(route);
    return(
        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            <TouchableOpacity
            style={styles.touchableView}
            onPress={ () => {
                navigation.navigate("HomeToDetails", {movie: {
                    title: "Star Wars",
                    release: 1997,
                    screenNumber: 1
                }} )}}>
                    <View>
                        <Text style={styles.touchableText}>Star Wars</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableView}            
            onPress={ () => {
                navigation.navigate("HomeToDetails", {movie: {
                    title: "Black Phanter",
                    release: 2018,
                    screenNumber: 1
                }} )}}>
                    <View>
                        <Text style={styles.touchableText}>Black Phanter</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableView}
            onPress={ () => {
                navigation.navigate("HomeToDetails", {movie: {
                    title: "The Matrix",
                    release: 1999,
                    screenNumber: 1
                }} )}}>
                    <View>
                        <Text style={styles.touchableText}>The Matrix</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableView}
            onPress={ () => {
                navigation.navigate("HomeToGestureResponder")}}>
                    <View>
                        <Text style={styles.touchableText}>Gesture Responder</Text>
                    </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    touchableView: {
        marginBottom: 30,
        width: 180,
        height: 60,
        alignItems: 'center',
        backgroundColor: 'orange',
        borderWidth: 5,
        borderRadius: 10,
    },
    touchableText: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default HomeScreen;