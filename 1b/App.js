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
        backgroundColor: '#C7F4F6',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 48,
        }}>
        <Image
          style={{ width: 104.94, height: 116.95 }}
          source={require('./Password.png')}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -120,
        }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>FORGET</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>PASSWORD</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -150,
        }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {' '}
          Provide your account's email for which you{' '}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          want to reset your password
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          width:305,
          height:45,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          margin: 20,
          backgroundColor: '#C4C4C4',
          marginTop: -90
          ,marginLeft:38
        }}>
        <Icon
          style={{ position: 'absolute', left: 15 }}
          name="email"
          size={24}
          color="#000"
        />
        <TextInput
          style={{ flex: 1, paddingLeft: 40, height: 40}}
          placeholder="Email"
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
          marginTop:-80
        }}>
        <TouchableOpacity
          style={{
            width: 305,
            height: 45,
            borderRadius: 5,
            backgroundColor: '#E3C000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>NEXT</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default YourApp;
