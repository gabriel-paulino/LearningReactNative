import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";


const HomeScreen = ( {navigation, route} ) => {

    const [cep, setCep] = useState('');

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
            <TouchableOpacity
            style={styles.touchableView}
            onPress={ () => {
                navigation.navigate("HomeToGestureHandler")}}>
                    <View>
                        <Text style={styles.touchableText}>Gesture Handler</Text>
                    </View>
            </TouchableOpacity>
            <TextInput 
                value={cep}
                style={{borderColor: 'black', borderWidth: 1, width: 110}}
                placeholder= {"Digite seu CEP"}
                onChangeText={text => setCep(text)}
            />  
            <TouchableOpacity
            style={styles.touchableView}
            onPress={ () => {
                if(cep != '')
                    navigation.navigate("HomeToAddress", {zipCode: cep})}}>
                    <View>                       
                        <Text style={styles.touchableText}>Get Your Address</Text>
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