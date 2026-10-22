'use client'; 

import React, { useState } from 'react';
// Importamos el componente con su nuevo nombre de archivo asignado
import { ConversorTemperatura } from './componentes/ConversorTemperatura';
import { ResultadoConversion, Unidad } from './componentes/ResultadoConversion'; 

export default function Page() {
  // Variables de configuración inicializadas
  const valorInicial: number = 25;
  const unidadInicial: Unidad = 'C';

  // Estados fuente de verdad compartidos por los componentes
  const [temperatura, setTemperatura] = useState<number>(valorInicial);
  const [unidad, setUnidad] = useState<Unidad>(unidadInicial);

  return (
    <div>
      <h2>Conversor Automático de Temperatura</h2>      

      {/* Inclusión del componente de captura con el nuevo nombre */}
      <ConversorTemperatura 
        temperatura={temperatura} 
        unidad={unidad} 
        onTemperaturaChange={setTemperatura} 
        onUnidadChange={setUnidad} 
      />

      {/* Componente independiente de presentación que calcula automáticamente */}
      <ResultadoConversion 
        valor={temperatura} 
        unidadOrigen={unidad} 
      />
    </div>
  );
}
