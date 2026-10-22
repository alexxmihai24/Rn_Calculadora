import { Pressable, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

import { Colores } from '../constants/Colores';
import { estilosGlobales } from '../styles/estilos-globales';

const BotonCalculadora = ({
  etiqueta,
  color = Colores.grisOscuro,
  textoNegro = false,
  dobleTamano = false,
  alPresionar,
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...estilosGlobales.boton,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: dobleTamano ? 180 : 80,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        alPresionar();
      }}
    >
      <Text
        style={{
          ...estilosGlobales.textoBoton,
          color: textoNegro ? 'black' : 'white',
        }}
      >
        {etiqueta}
      </Text>
    </Pressable>
  );
};

export default BotonCalculadora;
