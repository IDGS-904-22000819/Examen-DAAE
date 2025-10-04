import { useState, useEffect } from 'react';
import SelectorUnidad from './UnitSelector';
import EntradaConversion from './ConversionInput';
import ResultadoConversion from './ConversionResult';
import { obtenerConversion, convertirUnidad, obtenerUnidadesDisponibles } from '../services/conversion';

const UnitConverter = () => {

  const [inputValue, setInputValue] = useState('');  
  const [fromUnit, setFromUnit] = useState('');       
  const [toUnit, setToUnit] = useState('');         
  const [result, setResult] = useState(null);      
  const [error, setError] = useState(null);       
  const [availableUnits, setAvailableUnits] = useState([]);  
  const [conversionRates, setConversionRates] = useState(null); 


  const loadData = async () => {
    const rates = await obtenerConversion(); 
    if (rates) {
      setConversionRates(rates);  // Guarda las tasas obtenidas del JSON
      const units = obtenerUnidadesDisponibles(rates);  // Extrae qué unidades existen
      setAvailableUnits(units);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  
  const handleConvert = () => {
    const value = parseFloat(inputValue);
    const convertedValue = convertirUnidad(value, fromUnit, toUnit, conversionRates);
    setResult(`${value} ${fromUnit} = ${convertedValue} ${toUnit}`);
    setError(null);
  };

  return (
    <div className="card">
      <div className="card-body">

          <div>
            <EntradaConversion
              valor={inputValue}
              alCambiar={setInputValue}
              placeholder="Ej: 100"
            />

            <SelectorUnidad
              etiqueta="origen"
              valor={fromUnit}  // 1. Pasa el valor ACTUAL (comunicación PADRE → HIJO)
              alCambiar={setFromUnit} // 2. Pasa la función (comunicación HIJO → PADRE)
              unidades={availableUnits}
              id="convertir"
            />

            <SelectorUnidad
              etiqueta="destino"
              valor={toUnit}
              alCambiar={setToUnit}
              unidades={availableUnits}
              id="destino"
            />

            <div className="d-flex gap-2 justify-content-center mb-3">
              <button className="btn btn-primary" onClick={handleConvert}>
                Convertir
              </button>
            </div>

            <ResultadoConversion resultado={result} error={error} />
          </div>
      </div>
    </div>
  );
};

export default UnitConverter;
