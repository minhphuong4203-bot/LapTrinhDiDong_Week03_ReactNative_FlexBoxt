import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D8EFDF',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -20,
        }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>LOGIN</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          width: 305,
          height: 55,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          margin: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
   
          marginLeft: 38,
        }}>
        <TextInput
          style={{ flex: 1, paddingLeft: 10, height: 40, fontSize: 20 }}
          placeholder="Email"
          placeholderTextColor="#000"
          keyboardType="email-address"
          autoCapitalize="none"
          required
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          width: 305,
          height: 55,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          margin: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          marginLeft: 38,
          marginBottom: 100
        }}>
        <Icon
          style={{ position: 'absolute', right: 15 }}
          name="visibility"
          size={36}
          color="#000"
        />
        <TextInput
          style={{ flex: 1, paddingLeft: 10, height: 40, fontSize: 20 }}
          placeholder="Password"
          placeholderTextColor="#000"
          keyboardType="email-address"
          autoCapitalize="none"
          required
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: -80,
        }}>
        <TouchableOpacity
          style={{
            width: 305,
            height: 45,
            borderRadius: 5,
            backgroundColor: '#c34E3B',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center',marginTop:-20}}>
        <Text style={{marginBottom:20}}>When you agree to terms and conditions</Text>
        <Text style={{ color: '#5D25FA',marginBottom:20 }}>When For got your password?</Text>
        <Text>When Or login with</Text>
      </View>
      <View style={{ flex: 1, flexDirection:'row',borderColor:'#5aaed8', marginLeft:40 }}>
        <Image
          style={{ width: 100, height: 40 }}
          source={require('./fb.png')}
        />
        <Image
          style={{ width: 100, height: 40 }}
          source={require('./zl.png')}
        />
        <Image
          style={{ width: 100, height: 40 }}
          source={require('./gg.png')}
        />
      </View>
    </View>
  );
};

export default YourApp;
