
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,FlexAlignType,SafeAreaView, Image, Alert,ImageBackground} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { mainTheme } from './App/appStyle';
import AppNavigator from './Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNav from './App/navigator';
import { HomeScreen } from './App/LoginScreen/Home/home.screen';
import WelcomeScreen from './App/WelcomeScreen/Choose.screen';

const Stack = createNativeStackNavigator();


const App=()=> {
  return(
    <PaperProvider>
      <AppNav/>
      
    </PaperProvider>
  )

}

export default App;