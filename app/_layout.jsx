import { Platform, View } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';

import { estilosGlobales } from '../styles/estilos-globales';

const esAndroid = Platform.OS === 'android';

if (esAndroid) {
  NavigationBar.setBackgroundColorAsync('black');
}

const DisenoRaiz = () => {
  const [fuentesCargadas] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fuentesCargadas) {
    return null;
  }

  return (
    <View style={estilosGlobales.fondo}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default DisenoRaiz;

