import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Varios = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
      <View style={styles.content}>
        <View style={styles.icon} />
        <View style={styles.form}>
          <Text style={styles.title}>Usuario</Text>
          <View>
            <TextInput
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputField}
            />
          </View>

          <Text style={styles.title}>Password</Text>
          <View>
            <TextInput
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputField}
            />
          </View>

          <View
            style={{
              ...styles.buttonContainer,
              marginBottom: 30,
            }}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    width: '80%',
    height: '70%',
  },
  icon: {
    flex: 1,
    backgroundColor: 'gray',
  },
  form: {
    flex: 4,
    backgroundColor: 'white',
  },
  cajaMorada: {
    width: 1200,
    height: 1000,
    right: -150,
    top: 0,
    backgroundColor: 'red',
    borderWidth: 20,
    borderColor: 'white',
    transform: [{rotate: '-35deg'}],
  },
  cajaNaranja: {
    width: 1000,
    height: 500,
    top: 100,
    right: -150,
    backgroundColor: 'blue',
    borderWidth: 20,
    borderColor: 'white',
    transform: [{rotate: '-35deg'}],
  },
  cajaAzul: {
    width: 400,
    height: 800,
    bottom: 500,
    left: -140,
    borderWidth: 20,
    borderColor: 'white',
    backgroundColor: 'gray',
    transform: [{rotate: '-35deg'}],
  },
  inputField: {
    color: '#7F7F7F',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#575756',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 5,
    // top: 2
  },
  title: {
    color: '#575756',
    fontSize: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: '#0377B3',
    backgroundColor: '#0377B3',
    paddingHorizontal: 65,
    paddingVertical: 7,
    borderRadius: 5,
  },
});
