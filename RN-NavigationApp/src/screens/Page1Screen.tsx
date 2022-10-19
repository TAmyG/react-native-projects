import React, {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import {} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  //Para configurar menu en el header del stack y abrir el Drawer
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Tamy',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Tamy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
