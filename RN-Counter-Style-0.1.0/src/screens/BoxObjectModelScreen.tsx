import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 *
 * @returns
 * Margin
 * Border
 * Padding
 */
export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //Abarca todo lo que ocupe su padre
    backgroundColor: 'red',
  },
  title: {
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 10,
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
  },
});
