
import * as React from 'react';
import MapView, { Callout, MAP_TYPES, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert,SafeAreaView } from 'react-native';
import { GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Permission } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { Button,Appbar, TextInput,List} from 'react-native-paper';

import MapViewDirections from 'react-native-maps-directions';
import mapStyle from './home.styles';

//import {REACT_APP_GOOGLE_MAPS_APIKEY} from '@env';



const origin = {latitude: 1.5593872708842145, longitude: 103.63751926907231,longitudeDelta:0.05,latitudeDelta:0.05};
const destination = {latitude: 1.559999394946269,  longitude: 103.63473243955012,};




export const HomeScreen =({navigation}) => {
 
  return (
    
<PaperProvider>
    <SafeAreaView>
   
       <GooglePlacesAutocomplete
       
       styles={
         {container:{flex:0,position:"absolute",width:"100%",zIndex: 1,marginTop: 20,} ,
         listView:{backgroundColor:'white'}}
        }
        
        placeholder='Search'
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
        GooglePlacesSearchQuery={{
          rankby:'distance'
        }}
        
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        
        query={{
          key:'AIzaSyD4D2jbJ_zn0twOEeLwpayyPu82ngg_kD0',
          language: 'en',
          radius: 3000,
          
        }}
        
        />
      <View> 
      <MapView style={mapStyle.map}
        initialRegion={{
          latitude:1.5593872708842145,
          longitude: 103.63751926907231 ,
          latitudeDelta:0.05,
          longitudeDelta:0.05,
        }}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={'AIzaSyD4D2jbJ_zn0twOEeLwpayyPu82ngg_kD0'}/>
          
        
         
          
      
        </MapView>
        </View>
      </SafeAreaView>
</PaperProvider>

    
  );
}

