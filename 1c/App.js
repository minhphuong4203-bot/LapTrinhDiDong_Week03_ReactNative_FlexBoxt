import React from 'react';
import { Text, View, Image, Button, TouchableOpacity,StyleSheet } from 'react-native';
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
          marginTop: 67,
        }}>
        <Text style={{ fontSize: 60, fontWeight: 700 }}>CODE</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 58,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>VERIFICATION</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -30,
        }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {' '}
          Enter ontime password sent on
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>++849092605798</Text>
      </View>


      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 339,
            height: 50,

            borderRadius: 5,
            backgroundColor: '#E3C000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 18,
            alignContent: 'center',
          }}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: '',
    padding: 20,
    position: 'relative',
    marginLeft:45
    // backgroundColor: '#C7F4F6', // Màu nền
  },
  box: {
    width: 50, // Chiều rộng của ô
    height: 50, // Chiều cao của ô
    borderWidth: 1,
    borderColor: '#000', // Màu viền
    backgroundColor: '#FFF', // Màu nền của ô
    // position: 'absolute',
  },
});

export default YourApp;
