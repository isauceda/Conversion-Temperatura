// componentes/ConversorTemperatura.tsx
import type { Unidad } from './ResultadoConversion';

interface ConversorTemperaturaProps {
  temperatura: number;
  unidad: Unidad;
  onTemperaturaChange: (valor: number) => void;
  onUnidadChange: (unidad: Unidad) => void;
}

export function ConversorTemperatura({
  temperatura,
  unidad,
  onTemperaturaChange,
  onUnidadChange,
}: ConversorTemperaturaProps) {
  return (
    <div>
      <label>
        Temperatura:
        <input
          type="number"
          value={temperatura}
          onChange={(event) =>
            onTemperaturaChange(event.currentTarget.valueAsNumber)
          }
        />
      </label>

      <label>
        Unidad:
        <select
          value={unidad}
          onChange={(event) =>
            onUnidadChange(event.currentTarget.value as Unidad)
          }
        >
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
      </label>
    </div>
  );
}


