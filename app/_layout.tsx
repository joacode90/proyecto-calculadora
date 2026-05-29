import { estilosGlobales } from '@/styles/estilos-globales';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const RoorLayout = () => {

  const [cargada, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!cargada && !error) {
    // return null;
    return (
      <View style={styles.contenedorCarga}>
        <ActivityIndicator size='large' color="#007AFF" />
        <Text style={styles.textoCarga}>Cargando fuentes...</Text>
      </View>
    );
  }

  return (
    <View style={estilosGlobales.fondo}>
      {/* <Text>RoorLayout</Text> */}
      <Slot />
      <StatusBar style='light' />
    </View>
  )
}

export default RoorLayout

const styles = StyleSheet.create({
  contenedorCarga: {
    flex: 1,
    justifyContent: 'center', // Centra el loader verticalmente
    alignItems: 'center',     // Centra el loader horizontalmente
    backgroundColor: '#fff',  // Fondo de la pantalla de carga
  },
  textoCarga: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
});