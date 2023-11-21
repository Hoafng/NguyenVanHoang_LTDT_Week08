import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView,CheckBox  } from 'react-native';
import React, { useEffect, useState } from 'react';
import {TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore } from 'redux';
const Screen02= ({navigation,route}) =>{
   
    const [name, setName] = useState("")
    const [search,setSearch] = useState('');
    const [checkboxes, setCheckboxes] = useState([
        { job: 'To check email', value: false },
        { job: 'UI task web page', value: false },
        { job: 'Learn javascript basic', value: false },
        { job: 'Learn HTML Advance', value: false },
        { job: 'Medical App UI', value: false },
        { job: 'Learn Java', value: false },
     
      ]);
      useEffect(() => {
        setName(route.params.name)
    }, [route.params.name])
      useEffect(() => {
        if (route.params.job.job == '') {
            store.dispatch({type : 'INSERT', job : route.params.job.job})
        }
    }, [JSON.stringify(route.params.job)])
      function jobReducer(state = checkboxes, action) {
        switch (action.type) {
            case 'INSERT':
                return [{ job: action.job, value: true }, ...state]
            case 'UPDATE' :
                navigation.navigate("Screen03", { job: action.job, isUpdate: true })
                return state.filter(o => o.job !== action.job)
            default:
                return state
        }
    }
    
      let store = createStore(jobReducer)

      store.subscribe(() => setCheckboxes(store.getState()))
    function handleCheckboxChange(index) {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].value = !updatedCheckboxes[index].value;
        setCheckboxes(updatedCheckboxes);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flex:1,flexDirection : 'row'}}>
                    <TouchableOpacity style={styles.back}
                        onPress={()=> navigation.navigate('Screen01')} > 
                    <Image style={{width:'40px',height:'40px',marginLeft:10, justifyContent:'center'}} source={require("../assets/Icon Button 11.png")}/>
                    </TouchableOpacity>
                    <Image style={styles.avt} source={require('../assets/Rectangle.png')}/>
                    <View>
                        <Text style={{fontSize : 17, fontWeight : 750, paddingLeft : 10}}>Hi {name}</Text>
                        <Text style={{fontSize : 15, fontWeight : 600}}>Have agreate day a head</Text>
                    </View>
                </View>
            </View>
            <SafeAreaView>
                <TextInput
                    placeholder='Search'
                    style={styles.txtEmail}
                    value={search}
                    onChangeText={text=> setSearch(text)}
                    left={<TextInput.Icon icon="magnify" />}
                    keyboardType='default'
                />
            </SafeAreaView>
            <SafeAreaView style={styles.txtTitle}>
                <View style={{ flex: 2}}>
                    {checkboxes.map((checkbox, index) => (
                    <View key={index} style={{flexDirection: 'row',width:'300px',padding: 10,backgroundColor:'silver',borderRadius:10,margin:5,position:'relative'}}>
                        <CheckBox
                            value={checkbox.value}
                            onValueChange={() => handleCheckboxChange(index)}
                        />
                        <Text style={{fontSize:15,left:30,width:150}}>{checkbox.job}</Text>
                        <TouchableOpacity onPress={() =>{
                           store.dispatch({type: 'UPDATE',job: job.job})
                        }}>
                        <Icon style={{position:'absolute',left:100}} name="edit" size={15} color="#900" />
                        </TouchableOpacity>
                    </View>
                    
                    ))}
                </View>
            </SafeAreaView> 
            <TouchableOpacity style={styles.buttonStart} 
                onPress={() =>{
                    navigation.navigate('Screen03',{name:name,job:checkboxes.value==true?checkboxes.job:'',isUpdate:true});
                }}
                >
                <Text style={styles.txtButton}>+</Text>
            </TouchableOpacity>
           
        </View>
    );
}
export default Screen02
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
    txtTitle: {
        top:10,  
    },txtEmail:{
        borderColor:'black',
        borderWidth:'1px',
        width:'300px',
        backgroundColor:'white',
        height:40,
        top:0,
    },
    buttonStart: {
        width: '80px',
        height: '80px',
        backgroundColor: '#00BDD6',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtButton: {
        fontSize: 50,
        fontFamily: 'Ubuntu',
        color: '#fff',
    },
   
});