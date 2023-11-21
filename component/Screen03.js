import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';
import { TextInput } from "react-native-paper";
export default function Screen03({navigation,route}) {
    const [name,setName] = useState("")
    const [job, setJob] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(()=>{
        setName(route.params.name)
    }, [route.params.name])
    useEffect(() => {
        setJob(route.params.job)
        setIsUpdate(route.params.isUpdate)
    }, [JSON.stringify(route.params)])

    return (
        <View style={styles.container}>           
            <View style={styles.header}>
                <View style={{flex:1,flexDirection : 'row'}}>
                    <TouchableOpacity style={styles.back}
                        onPress={()=> navigation.navigate('Screen02',{name})} > 
                    <Image style={{width:'40px',height:'40px',marginLeft:10, justifyContent:'center'}} source={require("../assets/Icon Button 11.png")}/>
                    </TouchableOpacity>
                    <Image style={styles.avt} source={require('../assets/Rectangle.png')}/>
                    <View>
                        <Text style={{fontSize : 17, fontWeight : 750, paddingLeft : 10}}>Hi {name}</Text>
                        <Text style={{fontSize : 15, fontWeight : 600}}>Have agreate day a head</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.txtManage}>ADD YOUR JOB</Text>
            <SafeAreaView>
                <TextInput
                    placeholder='input your job'
                    style={styles.txtJob}
                    onChangeText={setJob}
                    value={job}
                    left={<TextInput.Icon icon="clipboard-list-outline" />}
                    keyboardType='default'
                />
            </SafeAreaView>
            <TouchableOpacity style={styles.buttonStart} 
                onPress={() =>{
                    navigation.navigate("Screen02", {job : {job : job, value : true}})
                }}
                >
                <Text style={styles.txtButton} >Finish &rarr;</Text>
                
            </TouchableOpacity>
            <View style={styles.containerImgBike}>
                <Image style={{ width: '300px',height: '250px',}}
                    source={require('../assets/Image 95.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },   
    header:{
        width:'100%',
        height:'20%',
    },
    avt:{
        width: 60,
        height: 60,
        borderRadius : 50,
        marginLeft:90
      },
    txtManage:{
        fontSize:30,
        width:'220px',
        textAlign:'center',
        color:'purple',
        
    },txtJob:{
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