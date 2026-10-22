import { Text } from 'react-native';
import { estilosGlobales } from '../styles/estilos-globales';

const TextoTema = ({ children, variante = 'h1', ...resto }) => {
  return (
    <Text
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variante === 'h1' && estilosGlobales.resultadoPrincipal,
        variante === 'h2' && estilosGlobales.subResultado,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...resto}
    >
      {children}
    </Text>
  );
};

export default TextoTema;
