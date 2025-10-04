const EntradaConversion = ({ valor, alCambiar, placeholder }) => {

  const manejarCambio = (e) => {
    const nuevoValor = e.target.value;

    if (nuevoValor === '' || !isNaN(nuevoValor)) {
      alCambiar(nuevoValor);
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="valorEntrada" className="form-label fw-bold">
        Valor a convertir
      </label>

      <input
        id="valorEntrada"
        type="number"
        className="form-control"
        value={valor}
        onChange={manejarCambio}
        placeholder={placeholder}
        step="any"
      />
    </div>
  );
};

export default EntradaConversion;
