import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const AddressScreen = ({route}) => {
    
    const { zipCode } = route?.params;

    const [addressDetails, setAddressDetails] = useState(null);

    useEffect(() => {

        var url = `https://viacep.com.br/ws/${zipCode}/json/`;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {

            let address = JSON.parse(xhr.response);
            setAddressDetails(address);

            if(xhr.status != 200)
                console.log(`HTTP Request Failed ${xhr.status}`)
        } 
     
    }, []);
    
    return(
        <View style={styles.mainView}>

            <Text style={styles.detailText}>Cep: {zipCode}</Text>
            <Text style={styles.detailText}>Logradouro: {addressDetails?.logradouro}</Text>
            <Text style={styles.detailText}>Complemento: {addressDetails?.complemento}</Text>
            <Text style={styles.detailText}>Bairro: {addressDetails?.bairro}</Text>
            <Text style={styles.detailText}>Cidade: {addressDetails?.localidade}</Text>
            <Text style={styles.detailText}>Estado: {addressDetails?.uf}</Text>
            <Text style={styles.detailText}>DDD: {addressDetails?.ddd}</Text>
            <Text style={styles.detailText}>Código Ibge: {addressDetails?.ibge}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    detailText: {fontSize: 15, fontWeight: "bold"}
})

export default AddressScreen;