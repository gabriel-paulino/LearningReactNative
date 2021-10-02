import React from "react";
import { onStartShouldSetResponder, View, Text, StyleSheet } from "react-native";


const GestureResponderScreen = () => {
    return(
        <View style={styles.Root_View}
            onStartShouldSetResponder={() => {
                console.log('1st view should set?');
                return false;
            }}
        >
            <Text style={styles.RootText}>1st (Root) View</Text>

            <View style={styles.Second_View}
                onStartShouldSetResponder={() => {
                    console.log('2nd view should set?');
                    return true;
                }}
                onResponderGrant={() => {
                    console.log('2nd view granted response');
                }}
                onResponderRelease={() => {
                    console.log('2nd view released');
                }}
                onMoveShouldSetResponder={() => {
                    console.log("2nd view should set move");
                }}
                onResponderMove={() => {
                    console.log("2nd view responder move");
                }}
            >
                <Text style={styles.SecondText}>2nd View</Text>

                <View style={styles.Third_View}
                    onStartShouldSetResponder={() => {
                        console.log('3rd view should set?');
                        return false;
                    }}
                >
                    <Text style={styles.ThirdText}>3rd View</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Root_View: {
      flex: 1,
      backgroundColor: 'aliceblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
  
    },
    RootText: {fontSize: 20, fontWeight: "bold"},
    Second_View: {
      flex: .7,
      marginTop: 50,
      marginLeft: 70,
      backgroundColor: 'burlywood',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: 'white',
    },
    SecondText: {fontSize: 20, color: 'white', fontWeight: "bold"},
    Third_View: {
      marginTop: 50,
      marginLeft: 70,
      width: 300,
      height: 300,
      backgroundColor: 'chocolate',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: 'white'
    },
    ThirdText: {fontSize: 20, color: 'white', fontWeight: "bold"},
  });

export default GestureResponderScreen;