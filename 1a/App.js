import React from 'react';
import {Text,View,Image,Button,TouchableOpacity} from 'react-native';
const YourApp = ()=>{
  return (
    <View style={
      {
      flex: 1,
      flexDirection:"column",
      backgroundColor:'#00CCF9',
    }
    }> 
    
    <View style={{flex: 1,flexDirection:"column",alignItems:'center', justifyContent:'center',marginTop: 67}}> 
      <Image style={{width: 140, height: 140}} source={require('./Logo.png')} />
    </View>

    <View style={{flex: 1,flexDirection:"column",justifyContent:'center', alignItems: 'center', marginTop:58}}> 
     <Text style={{fontSize: 25,fontWeight:'bold'}}>Grow</Text>
      <Text style={{fontSize: 25,fontWeight:'bold'}}>Your Bussiness</Text>
    </View>

    <View style={{flex: 1,flexDirection:"column",justifyContent:'center', alignItems: 'center', marginTop: -30}}> 
    <Text style={{fontSize: 15, fontWeight:'bold'}}> We will help you to grow your business using</Text>
    <Text style={{fontSize: 15,fontWeight:'bold'}}>online server</Text>
    </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: 120, height: 48, borderRadius: 5, backgroundColor: '#E3C000', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 120, height: 48, borderRadius: 5, backgroundColor: '#E3C000', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1, alignItems: 'center'}}>
      <Text style={{ fontWeight: 700, fontSize: 18,alignContent: 'center' }}>HOW WE WORK?</Text>
      </View>

    </View>
  );
};

export default YourApp;