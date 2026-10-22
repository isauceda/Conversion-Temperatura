'use client';

import React from 'react';

// Declaración del tipo directamente en el archivo
export type Unidad = 'C' | 'F' | 'K';

interface ResultadoConversionProps {
  valor: number;
  unidadOrigen: Unidad;
}

export const ResultadoConversion: React.FC<ResultadoConversionProps> = ({ valor, unidadOrigen }) => {
  
  // Fórmulas aplicadas estrictamente
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
    <div style={styles.card}>
      <h3 style={styles.titulo}>Resultados de Conversión Automática</h3>
      <ul style={styles.lista}>
        {listaConversiones.map((item, index) => (
          <li key={index} style={styles.item}>
            <span style={styles.etiqueta}>{item.etiqueta}:</span>
            <span style={styles.valor}>
              {item.valor.toFixed(2)} {item.simbolo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  card: {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    maxWidth: '400px',
    width: '100%',
  },
  titulo: {
    margin: '0 0 15px 0',
    fontSize: '18px',
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '5px',
  },
  lista: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f1f1f1',
    fontSize: '16px',
  },
  etiqueta: {
    color: '#7f8c8d',
    fontWeight: '500' as const,
  },
  valor: {
    color: '#2c3e50',
    fontWeight: 'bold' as const,
  },
};
