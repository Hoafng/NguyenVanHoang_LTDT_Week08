import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';
import { TextInput } from "react-native-paper";
export default function Screen01({navigation}) {
    const [name,setName] = useState('');
    return (
        <View style={styles.container}>           
            <View style={styles.containerImgBike}>
                <Image style={{ width: '300px',height: '250px',}}
                    source={require('../assets/Image 95.png')} />
            </View>
            <Text style={styles.txtManage}>MANAGE YOUR TASK</Text>
            <SafeAreaView>
                <TextInput
                    placeholder='Enter your name'
                    style={styles.txtEmail}
                    onChangeText={setName}
                    value={name}
                    left={<TextInput.Icon icon="email" />}
                />
            </SafeAreaView>
            <TouchableOpacity style={styles.buttonStart} 
                onPress={() =>{
                    navigation.navigate('Screen02',{name:name,job:''});
                }}
                >
                <Text style={styles.txtButton} >Get Started &rarr;</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },txtManage:{
        fontSize:30,
        width:'220px',
        textAlign:'center',
        color:'purple',
        
    },txtEmail:{
        borderColor:'black',
        borderWidth:'1px',
        width:'300px',
        backgroundColor:'white'
    }
    ,buttonStart: {
        width: '200px',
        backgroundColor: '#00BDD6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtButton:{
        fontSize:15,
        padding: 15,
        borderRadius:30,
        backgroundColor:'#00BDD6',
        color:'white',
    },
});