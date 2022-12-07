import React from "react";
import { Appbar, Provider as PaperProvider} from "react-native-paper";
import { Alert, StyleProp } from "react-native";
import { View ,Text} from "react-native";
import { Button, Card, Colors, TextInput,ToggleButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { FlexAlignType } from "react-native";

const WelcomeScreen = (navigation) => {
return(
    <View style={[styles.container ,{marginTop:13,marginRight:0,marginLeft:0,}]}>
        
        <Appbar.Header style={{marginTop:0}}>
            <Appbar.Content title='Selection Menu'/>
                
        </Appbar.Header>

        <View style={{margin:200,marginRight:0,marginLeft:0}}> 

                <Button mode="contained" onPress={()=>navigation.navigate('Login')}>
                    STUDENT
                </Button>

         </View>
         <View style={{margin:-160,marginRight:0,marginLeft:0,borderColor:''}}> 

                <Button mode="contained" onPress={()=>navigation.navigate('LoginDriver')}>
                    DRIVER
                </Button>

         </View>
   </View>
);


};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      backgroundColor:'powderblue'
    }
  });
  