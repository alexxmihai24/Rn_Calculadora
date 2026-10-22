import { View } from 'react-native';

import BotonCalculadora from '../components/BotonCalculadora';
import TextoTema from '../components/TextoTema';
import { Colores } from '../constants/Colores';
import { useCalculadora } from '../hooks/useCalculadora';
import { estilosGlobales } from '../styles/estilos-globales';

const CalculadoraApp = () => {
  const {
    formula,
    numeroAnterior,
    construirNumero,
    limpiar,
    cambiarSigno,
    borrarUltimo,
    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar,
    calcularResultado,
  } = useCalculadora();

  return (
    <View style={estilosGlobales.contenedorCalculadora}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <TextoTema variante="h1">{formula}</TextoTema>

        {formula === numeroAnterior ? (
          <TextoTema variante="h2"> </TextoTema>
        ) : (
          <TextoTema variante="h2">{numeroAnterior}</TextoTema>
        )}
      </View>

      {/* Filas de botones */}
      <View style={estilosGlobales.fila}>
        <BotonCalculadora
          etiqueta="C"
          textoNegro
          color={Colores.grisClaro}
          alPresionar={limpiar}
        />
        <BotonCalculadora
          etiqueta="+/-"
          textoNegro
          color={Colores.grisClaro}
          alPresionar={cambiarSigno}
        />
        <BotonCalculadora
          etiqueta="del"
          textoNegro
          color={Colores.grisClaro}
          alPresionar={borrarUltimo}
        />
        <BotonCalculadora
          etiqueta="÷"
          color={Colores.naranja}
          alPresionar={operacionDividir}
        />
      </View>

      <View style={estilosGlobales.fila}>
        <BotonCalculadora
          etiqueta="7"
          alPresionar={() => construirNumero('7')}
        />
        <BotonCalculadora
          etiqueta="8"
          alPresionar={() => construirNumero('8')}
        />
        <BotonCalculadora
          etiqueta="9"
          alPresionar={() => construirNumero('9')}
        />
        <BotonCalculadora
          etiqueta="X"
          color={Colores.naranja}
          alPresionar={operacionMultiplicar}
        />
      </View>

      <View style={estilosGlobales.fila}>
        <BotonCalculadora
          etiqueta="4"
          alPresionar={() => construirNumero('4')}
        />
        <BotonCalculadora
          etiqueta="5"
          alPresionar={() => construirNumero('5')}
        />
        <BotonCalculadora
          etiqueta="6"
          alPresionar={() => construirNumero('6')}
        />
        <BotonCalculadora
          etiqueta="-"
          color={Colores.naranja}
          alPresionar={operacionRestar}
        />
      </View>

      <View style={estilosGlobales.fila}>
        <BotonCalculadora
          etiqueta="1"
          alPresionar={() => construirNumero('1')}
        />
        <BotonCalculadora
          etiqueta="2"
          alPresionar={() => construirNumero('2')}
        />
        <BotonCalculadora
          etiqueta="3"
          alPresionar={() => construirNumero('3')}
        />
        <BotonCalculadora
          etiqueta="+"
          color={Colores.naranja}
          alPresionar={operacionSumar}
        />
      </View>

      <View style={estilosGlobales.fila}>
        <BotonCalculadora
          etiqueta="0"
          dobleTamano
          alPresionar={() => construirNumero('0')}
        />
        <BotonCalculadora
          etiqueta="."
          alPresionar={() => construirNumero('.')}
        />
        <BotonCalculadora
          etiqueta="="
          color={Colores.naranja}
          alPresionar={calcularResultado}
        />
      </View>
    </View>
  );
};

export default CalculadoraApp;

