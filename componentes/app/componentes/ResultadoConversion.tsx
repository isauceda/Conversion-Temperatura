'use client';

import React from 'react';

export type Unidad = 'C' | 'F' | 'K';

interface ResultadoConversionProps {
  valor: number;
  unidadOrigen: Unidad;
}

export const ResultadoConversion: React.FC<ResultadoConversionProps> = ({ valor, unidadOrigen }) => {
  
  const convertirDesdeCelsius = (c: number) => ({
    C: c,
    F: (c * 9) / 5 + 32,
    K: c + 273.15,
  });

  const convertirDesdeFahrenheit = (f: number) => ({
    C: ((f - 32) * 5) / 9,
    F: f,
    K: ((f - 32) * 5) / 9 + 273.15,
  });

  const convertirDesdeKelvin = (k: number) => ({
    C: k - 273.15,
    F: ((k - 273.15) * 9) / 5 + 32,
    K: k,
  });

  const calcularUnidades = () => {
    switch (unidadOrigen) {
      case 'C': return convertirDesdeCelsius(valor);
      case 'F': return convertirDesdeFahrenheit(valor);
      case 'K': return convertirDesdeKelvin(valor);
      default: return { C: 0, F: 0, K: 0 };
    }
  };

  const conversiones = calcularUnidades();

  const listaConversiones = [
    { etiqueta: 'Grados Celsius', valor: conversiones.C, simbolo: '°C' },
    { etiqueta: 'Grados Fahrenheit', valor: conversiones.F, simbolo: '°F' },
    { etiqueta: 'Kelvin', valor: conversiones.K, simbolo: 'K' }
  ];

  return (
    <div>
      <h3>Resultados de Conversión Automática</h3>
      <ul>
        {listaConversiones.map((item, index) => (
          <li key={index}>
            <span>{item.etiqueta}: </span>
            <span>
              {item.valor.toFixed(2)} {item.simbolo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
