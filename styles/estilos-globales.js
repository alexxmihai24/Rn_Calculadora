import { StyleSheet } from 'react-native';
import { Colores } from '../constants/Colores';

export const estilosGlobales = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: Colores.fondo,
  },

  contenedorCalculadora: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  resultadoPrincipal: {
    color: Colores.textoPrimario,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400',
  },

  subResultado: {
    color: Colores.textoSecundario,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  boton: {
    height: 80,
    width: 80,
    backgroundColor: Colores.grisOscuro,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  textoBoton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: Colores.textoPrimario,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },
});
