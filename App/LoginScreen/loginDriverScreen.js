import * as React from 'react';
import { Alert, TouchableHighlight, View } from 'react-native';
import { Button, Card, Colors, TextInput,ToggleButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from './loginScreenStyle';
import { MaterialIcons } from '@expo/vector-icons';

export const LoginDriverScreen = ({navigation}) => {

  return(
      <SafeAreaView style={loginStyle.style1}>
        <View style={loginStyle.View}>
          <Card>
            <Card.Title style={loginStyle.titleText} title="DRIVER" uppercase={true}/>

            <Card.Content>
              <TextInput label = "Driver-ID"></TextInput>
              <TextInput label =  'Password' secureTextEntry={true}></TextInput>
                <View style ={loginStyle.cardButton}>
                <Button style ={loginStyle.cardButton} uppercase={false}>
                  extra button
                </Button>
              
                <Button style ={loginStyle.cardButton} onPress={()=> (Alert.alert('Meow'))} mode="contained" uppercase={false}>
                  Login
                
                </Button>
                
                <Button style ={loginStyle.cardButton} onPress={()=>navigation.navigate('Register')} uppercase={false}> 
                Register
                </Button>
                </View>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
  )
}