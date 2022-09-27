import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row', // 4 diferentes tipos de direction
    justifyContent: 'flex-end', //flex-start by default
    alignItems: 'flex-end', //stretch by default
    //flexWrap: 'wrap', //salta los elementos como texto de word
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'center', // Se sobrepone al justifyContent
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
