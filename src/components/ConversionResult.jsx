const ResultadoConversion = ({ resultado, error }) => {

  // Obtener el mensaje a mostrar
  const obtenerMensaje = () => {
    if (error) return `Error: ${error}`;
    if (resultado) return `Resultado: ${resultado}`;
    return null;
  };

  return (
    <div className="mt-4">
      <div>
        <strong>{obtenerMensaje()}</strong>
      </div>
    </div>
  );
};

export default ResultadoConversion;
