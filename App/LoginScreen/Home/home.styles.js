import React from "react";
import { StyleSheet, Text, View, Dimensions, Alert,SafeAreaView } from 'react-native';
import MapView, { Callout, MAP_TYPES, Marker } from 'react-native-maps';
const mapStyle=StyleSheet.create({


    mapScreenStyle:{

        flex:0,
        position:"absolute",
        width:"100%",
        zIndex:1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        
      },
    
    }

);
export default mapStyle;