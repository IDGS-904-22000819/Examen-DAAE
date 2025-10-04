import datosConversion from '../data/conversion.json';

export const obtenerTasasDeConversion = () => {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver(datosConversion);
    }, 500);
  });
};

export const obtenerConversion = async () => {
  try {
    const datos = await obtenerTasasDeConversion();
    const conversion = datos.conversion; 
    return conversion;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const convertirUnidad = (valor, desdeUnidad, hastaUnidad, tasas) => {
  const clave = `${desdeUnidad}-${hastaUnidad}`; 
  const tasa = tasas[clave];
  
  if (!tasa) {
    throw new Error(`Conversión no disponible: ${clave}`);
  }
  
  return valor * tasa;
};

export const obtenerUnidadesDisponibles = (tasas) => {
  const unidades = new Set();
  
  Object.keys(tasas).forEach(clave => {
    const [desde, hasta] = clave.split('-'); 
    unidades.add(desde);
    unidades.add(hasta);
  });
  
  return Array.from(unidades); 
};

