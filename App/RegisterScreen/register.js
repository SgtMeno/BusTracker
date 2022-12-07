import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button,Appbar, TextInput} from 'react-native-paper';
import { registerStyle } from './register.style';


export const Register = ({navigation})=> {
  return (
    <View>
      
        <ScrollView>
          <Appbar style={{justifyContent:'center',alignContent:'center'}} >
    
            <Appbar.Content title = 'Register as Student'/> 
          </Appbar>
          <View style={registerStyle.content}>
            <TextInput label="name"/>
            <TextInput label="valid email"/>
            <TextInput label="Password " secureTextEntry={true} right={<TextInput.Icon onPress={() => {Alert.alert('BOOM')}}/>}/>
            <TextInput label="Re-enter Password " secureTextEntry={true}/>
          </View>
          <Button mode='contained' onPress={()=>navigation.navigate('Map')}>
            Register
          </Button>

        </ScrollView>

      
    </View>
  );
};

