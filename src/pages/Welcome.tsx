import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
export function Welcome(){
   return(
   <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            Gerencie sua platas de forma fácil
        </Text>

        <Image source={wateringImg}/>
        
        <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas.
            Nós cuidsamos de lembrar você sempre que precisar
        </Text>
        <TouchableOpacity style={styles.button}>
            <Text>
                >
            </Text>
        </TouchableOpacity>
    </SafeAreaView>

    )
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
       


    }
});
