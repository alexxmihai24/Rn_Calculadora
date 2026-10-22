import { useEffect, useRef, useState } from 'react';

const Operador = {
  sumar: '+',
  restar: '-',
  multiplicar: 'x',
  dividir: '÷',
};

export const useCalculadora = () => {
  const [formula, setFormula] = useState('0');
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef();

  useEffect(() => {
    if (ultimaOperacion.current) {
      const primeraParteFormula = formula.split(' ').at(0);
      setFormula(`${primeraParteFormula} ${ultimaOperacion.current} ${numero}`);
    } else {
      setFormula(numero);
    }
  }, [numero]);

  useEffect(() => {
    const subResultado = calcularSubResultado();
    setNumeroAnterior(`${subResultado}`);
  }, [formula]);

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
    setFormula('0');

    ultimaOperacion.current = undefined;
  };

  const cambiarSigno = () => {
    if (numero.includes('-')) {
      return setNumero(numero.replace('-', ''));
    }

    setNumero('-' + numero);
  };

  const borrarUltimo = () => {
    let signoActual = '';
    let numeroTemporal = numero;

    if (numero.includes('-')) {
      signoActual = '-';
      numeroTemporal = numero.substring(1);
    }

    if (numeroTemporal.length > 1) {
      return setNumero(signoActual + numeroTemporal.slice(0, -1));
    }

    setNumero('0');
  };

  const guardarUltimoNumero = () => {
    calcularResultado();

    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    }

    setNumeroAnterior(numero);
    setNumero('0');
  };

  const operacionDividir = () => {
    guardarUltimoNumero();
    ultimaOperacion.current = Operador.dividir;
  };

  const operacionMultiplicar = () => {
    guardarUltimoNumero();
    ultimaOperacion.current = Operador.multiplicar;
  };

  const operacionRestar = () => {
    guardarUltimoNumero();
    ultimaOperacion.current = Operador.restar;
  };

  const operacionSumar = () => {
    guardarUltimoNumero();
    ultimaOperacion.current = Operador.sumar;
  };

  const calcularSubResultado = () => {
    const [primerValor, operacion, segundoValor] = formula.split(' ');

    const num1 = Number(primerValor);
    const num2 = Number(segundoValor);

    if (isNaN(num2)) return num1;

    switch (operacion) {
      case Operador.sumar:
        return num1 + num2;

      case Operador.restar:
        return num1 - num2;

      case Operador.multiplicar:
        return num1 * num2;

      case Operador.dividir:
        return num1 / num2;

      default:
        throw new Error(`La operación ${operacion} no está implementada`);
    }
  };

  const calcularResultado = () => {
    const resultado = calcularSubResultado();
    setFormula(`${resultado}`);

    ultimaOperacion.current = undefined;
    setNumeroAnterior('0');
  };

  const construirNumero = (textoNumero) => {
    // Verificar si ya existe el punto decimal
    if (numero.includes('.') && textoNumero === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (textoNumero === '.') {
        return setNumero(numero + textoNumero);
      }

      // Evaluar si es otro cero y hay punto
      if (textoNumero === '0' && numero.includes('.')) {
        return setNumero(numero + textoNumero);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer número
      if (textoNumero !== '0' && !numero.includes('.')) {
        return setNumero(textoNumero);
      }

      // Evitar el 0000000.00
      if (textoNumero === '0' && !numero.includes('.')) {
        return;
      }
    }

    setNumero(numero + textoNumero);
  };

  return {
    // Propiedades
    formula,
    numero,
    numeroAnterior,

    // Métodos
    construirNumero,
    limpiar,
    cambiarSigno,
    borrarUltimo,

    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar,
    calcularSubResultado,
    calcularResultado,
  };
};
