const SelectorUnidad = ({ etiqueta, valor, alCambiar, unidades = [], id }) => {
  
    // valor: recibe un nuevo valor (viene del padre)
    // alCambiar: cómo notificar cambios al padre
  
    const textoEtiqueta = `Unidad ${etiqueta}:`;

  const manejarCambio = (e) => {
    // 3. Usuario cambió el select
    // 4. Notifica al padre llamando la función que recibió
    alCambiar(e.target.value); // Llama a setFromUnit del padre
  }; 

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-bold">
        {textoEtiqueta}
      </label>

      <select
        id={id}
        className="form-select"
        value={valor}  // 5. Muestra el valor que viene del padre
        onChange={manejarCambio}  // 6. Escucha cambios del usuario
      >
        <option value="">Seleccionar unidad...</option>

        {unidades?.map((unidad) => (
          <option key={unidad} value={unidad}>
            {unidad.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorUnidad;
